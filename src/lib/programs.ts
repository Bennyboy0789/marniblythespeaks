export type Program = {
  title: string;
  signature?: boolean;
  description: string;
  audience: string;
  formats: string;
};

export const signatureKeynote: Program = {
  title: "Human Intelligence in the Age of AI",
  signature: true,
  description:
    "AI can draft the email, crunch the numbers, and summarize the meeting. It can't read the room. It can't rebuild trust after a hard quarter. It can't get your people to care. This keynote makes the case that the highest-leverage skill in your organization isn't artificial — it's human. Audiences leave with a practical framework for leading with emotional intelligence, communicating honestly, and building cultures where people think instead of just execute. Delivered as a mainstage keynote or a hands-on workshop, it's built for organizations rolling out AI while trying to keep their culture human — and every delivery is customized through a discovery call with your leadership before Marni ever walks on stage.",
  audience:
    "Leadership teams, conference mainstages, and any organization navigating AI change while trying to keep its culture human.",
  formats:
    "45–60 minute keynote · half-day or full-day workshop · in-person, virtual, or hybrid",
};

export const programs: Program[] = [
  {
    title: "The Shift: From Fixing to Changing",
    description:
      "Most leaders are professional firefighters — the same fires, every week. This program rewires the core question from 'How do I fix this?' to 'What needs to change so this stops happening?' It's the difference between managing problems and eliminating them, and it changes how teams operate within days, not quarters.",
    audience: "Executives, managers, and team leads stuck in reactive mode.",
    formats: "Keynote · workshop · leadership retreat session",
  },
  {
    title: "Honest Conversations That Don't Turn Defensive",
    description:
      "The conversation you're avoiding is the one costing you the most. This program gives leaders a practical playbook for feedback, conflict, and truth-telling — how to say the hard thing clearly, keep the relationship intact, and build a team where candor is normal instead of dangerous.",
    audience: "Leadership teams, new managers, and cultures where the real meeting happens after the meeting.",
    formats: "Keynote · interactive workshop",
  },
  {
    title: "Culture Is What You Tolerate",
    description:
      "Your culture isn't your values poster — it's the worst behavior you allow and the best behavior you ignore. Built on the L.I.V.E.S. framework, this program shows leaders how servant heart, integrity, vulnerability, and empathy translate into daily operating decisions that people actually feel.",
    audience: "Organizations rebuilding trust, merging teams, or scaling fast enough to lose themselves.",
    formats: "Keynote · half-day culture workshop",
  },
  {
    title: "Vision to Execution",
    description:
      "Organizations don't fail because leaders lack talent. They struggle because leaders lack the tools, mindset, and systems to translate vision into execution. Drawing on nearly a decade of fractional COO work, Marni gets tactical: clear ownership, real accountability, and the communication rhythms that keep strategy alive past the kickoff meeting.",
    audience: "Executive teams and operators tired of strategies that die in implementation.",
    formats: "Keynote · working session · multi-session program",
  },
];

export const reasonsToBook = [
  {
    title: "She's an operator, not just a speaker",
    body: "Nearly a decade running Full Pocket Coaching and serving as a fractional COO/CMO. The frameworks come from real businesses, not a book tour.",
  },
  {
    title: "One brand, one big idea",
    body: "Human Intelligence isn't a grab bag of leadership topics. It's a signature lens your audience will remember — and quote — long after the event.",
  },
  {
    title: "Warmth that works a room",
    body: "Marni reads a room fast and gets the quiet ones talking — because the person who says the least often needs the shift the most. Your attendees won't just be impressed; they'll feel seen.",
  },
  {
    title: "Practical over preachy",
    body: "Every talk lands with tools people use Monday morning. No buzzword stacking, no theory without a next step.",
  },
  {
    title: "Easy to work with",
    body: "Responsive, prepared, customized to your audience. Marni does the homework on your organization before she walks in.",
  },
  {
    title: "Every industry, one truth",
    body: "Education, insurance, finance, tech, corporate — the tech changes, the humans don't. HI translates everywhere.",
  },
];
