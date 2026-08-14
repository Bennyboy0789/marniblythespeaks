import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy",
  description:
    "How Marni Blythe Speaks collects, uses, and protects the information you share through this site's booking and contact forms.",
  path: "/privacy",
});

// NOTE: standard-practice scaffold — have Marni (or her counsel) review and
// approve this copy before launch, and update the effective date on changes.
export default function Privacy() {
  return (
    <section className="section-dark">
      <div className="mx-auto max-w-3xl px-5 py-16 md:py-24">
        <h1 className="text-3xl font-bold uppercase tracking-tight text-white md:text-4xl">
          Privacy <span className="gradient-text">Policy</span>
        </h1>
        <p className="mt-3 text-sm text-white/50">Effective August 13, 2026</p>

        <div className="mt-8 space-y-8 leading-relaxed text-white/80">
          <div>
            <h2 className="font-bold uppercase tracking-wide text-gold">
              What we collect
            </h2>
            <p className="mt-2">
              When you submit the booking inquiry form, request the speaker
              packet, or email us, we collect the information you provide:
              your name, email address, organization, event details, and your
              message. This site also uses privacy-friendly, cookieless
              analytics (Vercel Analytics) that collect aggregate page-view and
              interaction data — not your identity.
            </p>
          </div>
          <div>
            <h2 className="font-bold uppercase tracking-wide text-gold">
              How we use it
            </h2>
            <p className="mt-2">
              Only to respond to your inquiry, plan your event, and send you
              the materials you asked for. We don&apos;t sell your information,
              rent it, or add you to marketing lists you didn&apos;t ask to
              join.
            </p>
          </div>
          <div>
            <h2 className="font-bold uppercase tracking-wide text-gold">
              Who we share it with
            </h2>
            <p className="mt-2">
              Service providers who make this site work — form and email
              delivery (Resend), hosting and analytics (Vercel), and scheduling
              tools — receive only what they need to perform those services.
            </p>
          </div>
          <div>
            <h2 className="font-bold uppercase tracking-wide text-gold">
              Your choices
            </h2>
            <p className="mt-2">
              Want your information corrected or deleted? Email{" "}
              <a
                href="mailto:hello@marniblythespeaks.com"
                className="font-bold text-gold underline underline-offset-4 hover:text-white"
              >
                hello@marniblythespeaks.com
              </a>{" "}
              and we&apos;ll take care of it.
            </p>
          </div>
          <div>
            <h2 className="font-bold uppercase tracking-wide text-gold">
              Questions
            </h2>
            <p className="mt-2">
              This policy may be updated as the site evolves; changes will be
              posted here with a new effective date. Questions are always
              welcome at the email above.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
