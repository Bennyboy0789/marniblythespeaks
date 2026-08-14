import { NextResponse } from "next/server";

// Booking-inquiry endpoint. Sends the inquiry to Marni's inbox and an
// auto-acknowledgment to the planner via Resend (https://resend.com — free
// tier covers this volume). Until RESEND_API_KEY is configured, returns 503
// and the client falls back to the mailto flow.
//
// Env vars (set locally in .env.local and in Vercel project settings):
//   RESEND_API_KEY  — required to activate
//   INQUIRY_TO      — destination inbox (default hello@marniblythespeaks.com)
//   INQUIRY_FROM    — verified sender (default onboarding@resend.dev, which
//                     works out of the box; swap for hello@marniblythespeaks.com
//                     once the domain is verified in Resend — the auto-ack to
//                     the planner requires the verified domain)

const TO = process.env.INQUIRY_TO ?? "hello@marniblythespeaks.com";
const FROM = process.env.INQUIRY_FROM ?? "onboarding@resend.dev";

type Inquiry = {
  name: string;
  email: string;
  organization?: string;
  eventType: string;
  eventDate?: string;
  message: string;
};

function isValid(d: unknown): d is Inquiry {
  if (typeof d !== "object" || d === null) return false;
  const o = d as Record<string, unknown>;
  return (
    typeof o.name === "string" &&
    o.name.trim().length > 0 &&
    typeof o.email === "string" &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(o.email) &&
    typeof o.eventType === "string" &&
    o.eventType.trim().length > 0 &&
    typeof o.message === "string" &&
    o.message.trim().length > 0
  );
}

async function sendEmail(key: string, payload: object) {
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error(`Resend ${res.status}: ${await res.text()}`);
}

export async function POST(req: Request) {
  const data = await req.json().catch(() => null);
  if (!isValid(data)) {
    return NextResponse.json({ ok: false, reason: "invalid" }, { status: 400 });
  }

  const key = process.env.RESEND_API_KEY;
  if (!key) {
    return NextResponse.json(
      { ok: false, reason: "not-configured" },
      { status: 503 }
    );
  }

  const lines = [
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    `Organization: ${data.organization || "—"}`,
    `Event type: ${data.eventType}`,
    `Event date: ${data.eventDate || "TBD"}`,
    "",
    data.message,
  ].join("\n");

  try {
    await sendEmail(key, {
      from: FROM,
      to: [TO],
      reply_to: data.email,
      subject: `Speaking inquiry — ${data.eventType} — ${data.organization || data.name}`,
      text: lines,
    });
  } catch {
    return NextResponse.json({ ok: false, reason: "send-failed" }, { status: 502 });
  }

  // Auto-acknowledgment to the planner. Best-effort: fails silently until the
  // sending domain is verified in Resend.
  try {
    await sendEmail(key, {
      from: FROM,
      to: [data.email],
      subject: "Got it — your inquiry reached Marni Blythe Speaks",
      text: [
        `Hi ${data.name.split(" ")[0]},`,
        "",
        "Thanks for reaching out about your event — your inquiry is in.",
        "You'll hear back from us within 24 hours (usually faster) with clear",
        "next steps and answers to anything you asked.",
        "",
        "Talk soon,",
        "Marni Blythe Speaks",
        "hello@marniblythespeaks.com",
      ].join("\n"),
    });
  } catch {
    // non-fatal
  }

  return NextResponse.json({ ok: true });
}
