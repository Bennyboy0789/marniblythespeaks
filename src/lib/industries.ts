export type Industry = {
  slug: string;
  name: string;
  shortName: string;
  /** Healthcare + Corporate get the big home-page lanes (Marni, Oct 2026) */
  featured?: boolean;
  /** one-paragraph message on the home-page lane card (featured only) */
  teaser?: string;
  headline: string;
  intro: string;
  painPoints: { title: string; body: string }[];
  fit: string;
  /** attribution of a testimonial in testimonials.ts to show on the page */
  testimonial?: string;
  /** SERP title: winning competitors all use "[Industry] Keynote Speaker" */
  seoTitle: string;
  /** Hand-written ~150-char meta description (never auto-sliced) */
  seoDescription: string;
};

// Order matters: Healthcare and Corporate lead (the home H1 names them).
// Insurance, Financial Services, and Tech were retired Oct 2026 and 301 to
// /speaking (see next.config.ts).
export const industries: Industry[] = [
  {
    slug: "healthcare",
    name: "Healthcare",
    shortName: "Healthcare",
    featured: true,
    teaser:
      "Your clinicians are burned out, AI is entering the exam room, and patients still need a human. HI is how your people stay human when the work speeds up.",
    headline: "AI is entering the exam room. Your patients still need a human.",
    intro:
      "Marni Blythe is a keynote speaker for healthcare leadership conferences, study clubs, health system retreats, and practice owner events. She doesn't study healthcare from the outside: she has served as a fractional executive inside surgical practices, working alongside doctors, owners, and leadership teams through operational challenges, culture change, and growth. Clinical excellence can't outrun a broken culture. Human Intelligence means teams that communicate under pressure, leaders who prevent burnout instead of managing it, and patients who feel the difference.",
    painPoints: [
      {
        title: "Burnout is a leadership problem",
        body: "You can't yoga your way out of a culture issue. HI addresses the root: how leaders communicate, delegate, and build trust under pressure.",
      },
      {
        title: "Turnover disrupts care",
        body: "Every departure costs money and momentum, and patients notice. Cultures built on trust and ownership keep good people longer.",
      },
      {
        title: "From 'fix it' to 'change it'",
        body: "Putting out the same fire every week isn't leadership. Marni teaches teams to ask what needs to change so this stops happening.",
      },
    ],
    fit: "Annual doctors' meetings, study clubs, practice owner masterminds, healthcare leadership conferences, health system retreats, and team development days.",
    testimonial: "Dr. Ryan Holmes",
    seoTitle: "Healthcare Keynote Speaker",
    seoDescription:
      "Healthcare keynote speaker Marni Blythe helps clinical and practice leaders fight burnout with culture, trust, and communication that hold under pressure.",
  },
  {
    slug: "corporate",
    name: "Corporate",
    shortName: "Corporate",
    featured: true,
    teaser:
      "Your strategy is fine. Your execution is where the money leaks. HI gives leaders the clarity, conversations, and accountability that turn vision into results.",
    headline: "Your strategy is fine. Your execution is where the money leaks.",
    intro:
      "Marni Blythe is a corporate keynote speaker for leadership summits, company retreats, and all-staff meetings. Organizations don't fail because leaders lack talent. They struggle because leaders lack the tools, mindset, and systems to translate vision into execution. Marni brings 25 years of operating experience, not just stage time, to leadership teams ready to close the gap between what they say and what actually happens.",
    painPoints: [
      {
        title: "Vision dies in the middle",
        body: "The executive team is aligned. The front line is confused. HI equips managers in the middle to carry clarity instead of noise.",
      },
      {
        title: "Meetings full of nodding, hallways full of doubt",
        body: "If the real conversation happens after the meeting, you don't have alignment. You have theater. Marni teaches honest conversations that don't turn defensive.",
      },
      {
        title: "Accountability without fear",
        body: "Clear ownership shouldn't require a culture of blame. HI shows leaders how to hold the line and hold the relationship at the same time.",
      },
    ],
    fit: "Leadership summits, corporate retreats, all-staff meetings, and executive team workshops.",
    testimonial: "Phil Mims",
    seoTitle: "Corporate Keynote Speaker",
    seoDescription:
      "Corporate keynote speaker Marni Blythe helps leadership teams close the gap between vision and execution with Human Intelligence in an AI world.",
  },
  {
    slug: "education",
    name: "Education",
    shortName: "Education",
    headline: "Your teachers are exhausted. Your leaders are stretched. HI is the reset.",
    intro:
      "Marni Blythe is a keynote speaker for education conferences, district convenings, and school leadership retreats. Schools and districts don't have a talent problem. They have a capacity problem. Educators give everything to their students and run out of anything left for each other. Human Intelligence gives administrators, principals, and teacher-leaders a shared language for trust, honest conversations, and cultures where people stay.",
    painPoints: [
      {
        title: "Retention is the real crisis",
        body: "People don't leave buildings. They leave cultures where they stopped feeling seen. HI teaches leaders to build the kind of trust that keeps great educators in the room.",
      },
      {
        title: "Hard conversations get avoided",
        body: "Feedback between administrators and staff too often turns defensive or just doesn't happen. Marni gives your leaders a way to say the true thing without breaking the relationship.",
      },
      {
        title: "Initiative fatigue is real",
        body: "Another framework won't fix it. A shift in how leaders think, from 'How do I fix this?' to 'What needs to change so this stops happening?', will.",
      },
    ],
    fit: "In-service days, leadership retreats, administrator conferences, and district all-staff convenings.",
    seoTitle: "Education Keynote Speaker",
    seoDescription:
      "Education keynote speaker Marni Blythe brings Human Intelligence to conferences, in-service days, and district leadership retreats across the country.",
  },
  {
    slug: "real-estate",
    name: "Real Estate",
    shortName: "Real Estate",
    headline: "AI can write the listing. It can't earn the client's trust.",
    intro:
      "Marni Blythe is a keynote speaker for real estate conferences, brokerage kickoffs, and team leadership retreats. Real estate has always been a relationship business, and the tools are changing faster than ever: AI writes the descriptions, sorts the leads, and drafts the follow-ups. What it can't do is sit across from a nervous buyer, lead a team of independent agents, or hold a deal together when emotions run high. That's Human Intelligence, and it's the edge that doesn't get automated.",
    painPoints: [
      {
        title: "Agents leave cultures, not brokerages",
        body: "Splits and tech stacks are easy to copy. A culture where agents feel led, supported, and connected isn't. HI shows leaders how to build the kind of loyalty a commission plan can't buy.",
      },
      {
        title: "Leading people who don't report to you",
        body: "Independent contractors don't respond to orders. Team leads and brokers need influence, trust, and clear expectations. Marni teaches leadership that works without a title doing the heavy lifting.",
      },
      {
        title: "High-stakes conversations, every day",
        body: "Price reductions, inspection fallout, deals on the edge: the agents who win are the ones who stay calm and clear when clients don't. Those are learnable skills.",
      },
    ],
    fit: "Brokerage kickoffs and rallies, association conventions, team leadership retreats, and agent development days.",
    seoTitle: "Real Estate Keynote Speaker",
    seoDescription:
      "Real estate keynote speaker Marni Blythe helps brokers, team leads, and agents build the trust, culture, and client conversations that AI can't automate.",
  },
];

export function getIndustry(slug: string): Industry | undefined {
  return industries.find((i) => i.slug === slug);
}
