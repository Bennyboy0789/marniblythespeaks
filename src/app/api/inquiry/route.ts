import { NextResponse } from "next/server";

// Booking-inquiry endpoint. Sends the inquiry to Marni's inbox and an
// auto-acknowledgment to the planner via the SMTP2GO HTTP API
// (https://www.smtp2go.com). Until SMTP2GO_API_KEY is configured, returns 503
// and the client falls back to the mailto flow.
//
// Env vars (set locally in .env.local and in Vercel project settings):
//   SMTP2GO_API_KEY — required to activate (needs the "Emails" send permission)
//   INQUIRY_TO      — destination inbox (default marni@marniblythespeaks.com)
//   INQUIRY_FROM    — sender; its domain must be a verified sender domain in
//                     SMTP2GO (default marniblythespeaks.com)

const TO = process.env.INQUIRY_TO ?? "marni@marniblythespeaks.com";
const FROM =
  process.env.INQUIRY_FROM ??
  "Marni Blythe Speaks <marni@marniblythespeaks.com>";

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

type Email = { to: string; subject: string; text: string; replyTo?: string };

async function sendEmail(key: string, { to, subject, text, replyTo }: Email) {
  const res = await fetch("https://api.smtp2go.com/v3/email/send", {
    method: "POST",
    headers: {
      "X-Smtp2go-Api-Key": key,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      sender: FROM,
      to: [to],
      subject,
      text_body: text,
      ...(replyTo && {
        custom_headers: [{ header: "Reply-To", value: replyTo }],
      }),
    }),
  });
  const body = await res.json().catch(() => null);
  if (!res.ok || !body?.data?.succeeded) {
    throw new Error(`SMTP2GO ${res.status}: ${JSON.stringify(body)}`);
  }
}

export async function POST(req: Request) {
  const data = await req.json().catch(() => null);
  if (!isValid(data)) {
    return NextResponse.json({ ok: false, reason: "invalid" }, { status: 400 });
  }

  const key = process.env.SMTP2GO_API_KEY;
  if (!key) {
    return NextResponse.json(
      { ok: false, reason: "not-configured" },
      { status: 503 }
    );
  }

  const lines = [
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    `Organization: ${data.organization || "(not given)"}`,
    `Event type: ${data.eventType}`,
    `Event date: ${data.eventDate || "TBD"}`,
    "",
    data.message,
  ].join("\n");

  try {
    await sendEmail(key, {
      to: TO,
      replyTo: data.email,
      subject: `Speaking inquiry: ${data.eventType} | ${data.organization || data.name}`,
      text: lines,
    });
  } catch (err) {
    console.error("[inquiry] send failed", err);
    return NextResponse.json({ ok: false, reason: "send-failed" }, { status: 502 });
  }

  // Auto-acknowledgment to the planner. Best-effort.
  try {
    await sendEmail(key, {
      to: data.email,
      subject: "Got it! Your inquiry reached Marni Blythe Speaks",
      text: [
        `Hi ${data.name.split(" ")[0]},`,
        "",
        "Thanks for reaching out about your event. Your inquiry is in.",
        "You'll hear back from us within 24 hours (usually faster) with clear",
        "next steps and answers to anything you asked.",
        "",
        "Talk soon,",
        "Marni Blythe Speaks",
        "marni@marniblythespeaks.com",
      ].join("\n"),
    });
  } catch (err) {
    console.error("[inquiry] auto-ack failed", err);
  }

  return NextResponse.json({ ok: true });
}
