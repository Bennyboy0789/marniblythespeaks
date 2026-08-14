export type Industry = {
  slug: string;
  name: string;
  shortName: string;
  headline: string;
  intro: string;
  painPoints: { title: string; body: string }[];
  fit: string;
  /** SERP title — winning competitors all use "[Industry] Keynote Speaker" */
  seoTitle: string;
  /** Hand-written ~150-char meta description (never auto-sliced) */
  seoDescription: string;
};

// Order matters: healthcare is intentionally last (de-emphasized in the new brand).
export const industries: Industry[] = [
  {
    slug: "education",
    name: "Education",
    shortName: "Education",
    headline: "Your teachers are exhausted. Your leaders are stretched. HI is the reset.",
    intro:
      "Marni Blythe is a keynote speaker for education conferences, district convenings, and school leadership retreats. Schools and districts don't have a talent problem — they have a capacity problem. Educators give everything to their students and run out of anything left for each other. Human Intelligence gives administrators, principals, and teacher-leaders a shared language for trust, honest conversations, and cultures where people stay.",
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
        body: "Another framework won't fix it. A shift in how leaders think — from 'How do I fix this?' to 'What needs to change so this stops happening?' — will.",
      },
    ],
    fit: "In-service days, leadership retreats, administrator conferences, and district all-staff convenings.",
    seoTitle: "Education Keynote Speaker",
    seoDescription:
      "Education keynote speaker Marni Blythe brings Human Intelligence to conferences, in-service days, and district leadership retreats across the country.",
  },
  {
    slug: "insurance",
    name: "Insurance",
    shortName: "Insurance",
    headline: "Relationships close deals. Culture keeps producers. HI drives both.",
    intro:
      "Marni Blythe is a keynote speaker for insurance conferences, agency summits, and producer development events. Insurance is a people business wearing a numbers costume. Agencies that win aren't the ones with the best rates — they're the ones where producers trust leadership, service teams feel ownership, and clients feel like humans instead of policy numbers. That's Human Intelligence at work.",
    painPoints: [
      {
        title: "Producer turnover is expensive",
        body: "Replacing a producer costs far more than developing one. HI equips agency leaders to build loyalty that compensation plans alone can't buy.",
      },
      {
        title: "Service and sales talk past each other",
        body: "When departments protect turf instead of solving problems, clients feel it. Marni teaches communication that dissolves the silos.",
      },
      {
        title: "AI is changing the game — but not the relationship",
        body: "Quoting, underwriting, and servicing are automating fast. The agencies that thrive will be the ones whose people do what AI can't: read the room and build trust.",
      },
    ],
    fit: "Agency leadership summits, carrier conferences, producer development programs, and association events.",
    seoTitle: "Insurance Keynote Speaker",
    seoDescription:
      "Insurance keynote speaker Marni Blythe helps agencies and carriers build the trust, retention, and communication that AI can't automate. Book her next.",
  },
  {
    slug: "financial-services",
    name: "Financial Services",
    shortName: "Financial",
    headline: "Your clients can get a robo-advisor anywhere. They chose you for the human.",
    intro:
      "Marni Blythe is a keynote speaker for financial services conferences, advisor summits, and bank leadership retreats. In financial services, trust is the product. Advisors, lenders, and bankers who lead with Human Intelligence build books of business that survive market swings — because clients stay where they feel understood. Marni shows leaders how to build that same trust inside their teams first.",
    painPoints: [
      {
        title: "Trust is won in conversations, not spreadsheets",
        body: "The numbers get you in the door. Empathy, presence, and honest communication keep clients for decades. HI makes those skills teachable.",
      },
      {
        title: "Compliance culture can become silence culture",
        body: "When people are afraid to speak up, small problems become expensive ones. Marni helps leaders build psychological safety without lowering the bar.",
      },
      {
        title: "The next generation leads differently",
        body: "Emerging advisors and analysts want purpose and mentorship, not just production goals. HI gives senior leaders the tools to develop them instead of losing them.",
      },
    ],
    fit: "Advisor conferences, bank and credit union leadership retreats, wholesaler events, and team development days.",
    seoTitle: "Financial Services Keynote Speaker",
    seoDescription:
      "Financial services keynote speaker Marni Blythe shows advisors and bank leaders how Human Intelligence builds client trust no robo-advisor can match.",
  },
  {
    slug: "tech",
    name: "Technology",
    shortName: "Tech",
    headline: "You're building the AI. Who's building your people?",
    intro:
      "Marni Blythe is a keynote speaker for tech conferences, engineering leadership offsites, and company all-hands. Tech teams are drowning in intelligence and starving for connection. Brilliant engineers get promoted into leadership with zero training in the human side of the job — then burn out themselves and everyone around them. Human Intelligence is the operating system upgrade your leaders actually need.",
    painPoints: [
      {
        title: "Great engineers, untrained leaders",
        body: "Promoting your best builder doesn't make them a leader. HI gives new and seasoned managers the skills nobody put in the onboarding doc: trust, feedback, and real accountability.",
      },
      {
        title: "Remote and hybrid strain the culture",
        body: "You can't hallway-conversation your way to connection anymore. Marni teaches leaders to build trust deliberately, not accidentally.",
      },
      {
        title: "Speed without ownership burns people out",
        body: "Shipping fast with fuzzy ownership creates hero culture and quiet quitting in the same sprint. HI turns vision into execution people actually own.",
      },
    ],
    fit: "Engineering leadership offsites, company all-hands, manager training cohorts, and tech conferences.",
    seoTitle: "Tech Conference Keynote Speaker",
    seoDescription:
      "Tech keynote speaker Marni Blythe equips engineering leaders with the human skills no AI replicates — trust, feedback, and cultures that actually ship.",
  },
  {
    slug: "corporate",
    name: "Corporate",
    shortName: "Corporate",
    headline: "Your strategy is fine. Your execution is where the money leaks.",
    intro:
      "Marni Blythe is a corporate keynote speaker for leadership summits, company retreats, and all-staff meetings. Organizations don't fail because leaders lack talent. They struggle because leaders lack the tools, mindset, and systems to translate vision into execution. Marni brings nearly a decade of operating experience — not just stage time — to leadership teams ready to close the gap between what they say and what actually happens.",
    painPoints: [
      {
        title: "Vision dies in the middle",
        body: "The executive team is aligned. The front line is confused. HI equips managers in the middle to carry clarity instead of noise.",
      },
      {
        title: "Meetings full of nodding, hallways full of doubt",
        body: "If the real conversation happens after the meeting, you don't have alignment — you have theater. Marni teaches honest conversations that don't turn defensive.",
      },
      {
        title: "Accountability without fear",
        body: "Clear ownership shouldn't require a culture of blame. HI shows leaders how to hold the line and hold the relationship at the same time.",
      },
    ],
    fit: "Leadership summits, corporate retreats, all-staff meetings, and executive team workshops.",
    seoTitle: "Corporate Keynote Speaker",
    seoDescription:
      "Corporate keynote speaker Marni Blythe helps leadership teams close the gap between vision and execution with Human Intelligence in the Age of AI.",
  },
  {
    slug: "healthcare",
    name: "Healthcare",
    shortName: "Healthcare",
    headline: "Healing others shouldn't cost your team their humanity.",
    intro:
      "Marni Blythe is a keynote speaker for healthcare leadership conferences, hospital system retreats, and practice owner events. Marni spent years working alongside practice owners and healthcare leaders, and the lesson translates everywhere: clinical excellence can't outrun a broken culture. For healthcare organizations, Human Intelligence means teams that communicate under pressure, leaders who prevent burnout instead of managing it, and patients who feel the difference.",
    painPoints: [
      {
        title: "Burnout is a leadership problem",
        body: "You can't yoga your way out of a culture issue. HI addresses the root: how leaders communicate, delegate, and build trust under pressure.",
      },
      {
        title: "Turnover disrupts care",
        body: "Every departure costs money and momentum — and patients notice. Cultures built on trust and ownership keep good people longer.",
      },
      {
        title: "From 'fix it' to 'change it'",
        body: "Putting out the same fire every week isn't leadership. Marni teaches teams to ask what needs to change so this stops happening.",
      },
    ],
    fit: "Practice owner masterminds, healthcare leadership conferences, hospital system retreats, and staff development days.",
    seoTitle: "Healthcare Keynote Speaker",
    seoDescription:
      "Healthcare keynote speaker Marni Blythe helps clinical and practice leaders fight burnout with culture, trust, and communication that hold under pressure.",
  },
];

export function getIndustry(slug: string): Industry | undefined {
  return industries.find((i) => i.slug === slug);
}
