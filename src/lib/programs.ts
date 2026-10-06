// Marni's four talks, from her "Speaking Topics - Short Descriptions" doc
// (Oct 2026). Copy is hers; keep it verbatim apart from formatting.
// NO EM DASHES anywhere in site copy (Marni: "AI dead giveaway").
export type Program = {
  title: string;
  /** stable anchor on /speaking (#id) */
  id: string;
  subtitle?: string;
  signature?: boolean;
  /** one-line hook for compact home-page cards */
  hook: string;
  description: string[];
  objectives: string[];
  problem: string;
  audience: string;
  outcomes: string;
  formats: string;
};

export const signatureKeynote: Program = {
  title: "Human Intelligence in an AI World",
  id: "human-intelligence",
  subtitle:
    "Unlocking the Internal Operating System That Technology Can Never Replace",
  signature: true,
  hook: "The future doesn't belong to those with the most AI. It belongs to those with the highest Human Intelligence.",
  description: [
    "Artificial intelligence is transforming the way we work, communicate, and make decisions, but the greatest competitive advantage has never been technology. It has always been the human operating system behind it.",
    "As AI becomes increasingly capable of performing technical tasks, the skills that create exceptional leaders, high-performing teams, and unforgettable customer experiences become even more valuable. Presence. Awareness. Emotional regulation. Beliefs. Vulnerability. Discernment. These are the human capabilities that no algorithm can replicate.",
    "In this engaging and thought-provoking program, leadership expert and bestselling author Marni Blythe introduces her Human Intelligence Framework, a practical Internal Operating System designed to help professionals lead themselves before leading others. Through compelling stories, neuroscience, psychology, mindfulness research, and immediately applicable tools, participants will discover how to strengthen the very skills that separate extraordinary leaders from average ones in an AI-powered world.",
    "Attendees will leave with a practical blueprint to reduce stress, improve decision-making, build stronger relationships, increase resilience, and create cultures where both people and technology can thrive together.",
  ],
  objectives: [
    "Recognize how presence, awareness, and emotional regulation influence leadership effectiveness, communication, and team performance.",
    "Apply practical Human Intelligence strategies to manage stress, respond thoughtfully under pressure, and reduce reactive decision making.",
    "Develop greater self-awareness by identifying personal thought patterns, beliefs, and behaviors that influence leadership and workplace interactions.",
    "Utilize practical tools to foster psychological safety, strengthen relationships, and create a more engaged and resilient team culture.",
  ],
  problem:
    "As AI takes on more technical work, human skills like presence, judgment, emotional regulation, and relationships become the real competitive advantage, yet most organizations don't develop them, leading to stressed leaders, reactive decisions, and weaker team cultures.",
  audience:
    "Leaders and professionals at all levels, especially in organizations adopting AI that want their people to stay valuable and their teams resilient.",
  outcomes:
    "Manage stress and respond thoughtfully under pressure, make better decisions, recognize the thought patterns and beliefs that shape how they lead, and use practical tools to build psychological safety and stronger, more resilient teams.",
  formats:
    "Keynote · half-day or full-day workshop · in-person, virtual, or hybrid",
};

export const programs: Program[] = [
  {
    title: "The Formula for Predictable Growth",
    id: "predictable-growth",
    subtitle:
      "Building High-Performing Organizations Through Clarity, Alignment, Accountability, and Focus",
    hook: "Growth is rarely limited by talent. Predictable growth is never an accident.",
    description: [
      "Growth is rarely limited by talent. More often, it is limited by a lack of clarity, inconsistent accountability, misaligned teams, and leaders who spend their time solving the same problems over and over again.",
      "In this highly practical and interactive program, leadership expert, Fractional COO, and bestselling author Marni Blythe shares the proven operating system she has used to help healthcare organizations create sustainable growth through organizational clarity and disciplined execution.",
      "Participants will learn how high-performing organizations establish a shared vision, define meaningful core values, create true accountability, measure what matters, and focus on the priorities that drive long-term success. Using real-world examples, interactive exercises, and immediately applicable tools, attendees will leave with a practical framework to strengthen leadership, improve communication, increase team engagement, and create predictable organizational growth.",
      "Whether leading a private practice, healthcare organization, or growing business, participants will gain the systems and leadership strategies needed to move from reacting to daily challenges toward intentionally building a culture that consistently performs at a higher level.",
      "Because predictable growth is never an accident. It is the result of intentional leadership and organizational alignment.",
    ],
    objectives: [
      "Create organizational clarity by defining and aligning the team around a shared vision, mission, and core values.",
      "Differentiate responsibility from accountability and establish clear ownership so expectations do not fall through the cracks.",
      "Use scorecards and key performance indicators (KPIs) to objectively evaluate performance, identify trends, and make more informed decisions.",
      "Prioritize the right strategic initiatives and translate long-term goals into focused, actionable priorities.",
      "Implement leadership systems and rhythms that strengthen accountability, communication, execution, and sustainable growth.",
      "Evaluate whether the right people are in the right roles by assessing core-values alignment and whether team members understand, want, and have the capacity to succeed in their positions.",
    ],
    problem:
      "Growth stalls not because of talent, but because of unclear vision, inconsistent accountability, misaligned teams, and leaders stuck solving the same problems over and over.",
    audience:
      "Owners, executives, and leadership teams in private practices, healthcare organizations, and growing businesses who are stuck reacting to daily challenges.",
    outcomes:
      "Align their team around a shared vision, mission, and values; establish clear ownership and true accountability; run the business with scorecards and KPIs; focus on the right priorities; implement leadership rhythms; and evaluate whether the right people are in the right seats.",
    formats: "Keynote · interactive workshop · in-person, virtual, or hybrid",
  },
  {
    title: "Culture By Design, Not Default",
    id: "culture-by-design",
    hook: "Every organization has a culture. The only question is whether it was designed intentionally or developed by default.",
    description: [
      "Culture isn't created by chance. It is shaped by the conversations leaders have, the behaviors they model, the standards they reinforce, and the systems they intentionally build.",
      "Every organization has a culture. The only question is whether it was designed intentionally or developed by default.",
      "In this engaging and practical program, leadership expert, Fractional COO, and bestselling author Marni Blythe shares the proven framework she has used to help healthcare organizations transform workplace culture into a strategic advantage. Participants will learn how leadership behaviors influence organizational performance, how trust and accountability create psychological safety, and how intentional systems foster engagement, retention, innovation, and exceptional patient experiences.",
      "Using practical tools, real-world case studies, interactive exercises, and immediately applicable strategies, attendees will leave with a clear roadmap for strengthening leadership, creating organizational alignment, and intentionally building the kind of culture where both people and performance thrive.",
      "Because culture isn't your greatest competitive advantage until you begin leading it intentionally.",
    ],
    objectives: [
      "Identify the leadership behaviors, conversations, and standards that shape organizational culture, whether it was designed intentionally or developed by default.",
      "Assess the current state of their organization's culture and identify gaps between the culture they want and the one they actually have.",
      "Explain how trust and accountability work together to create psychological safety and drive team performance.",
      "Apply practical tools to reinforce core values and expectations through daily leadership behavior and communication.",
      "Design intentional systems and rhythms that improve engagement, retention, innovation, and the patient experience.",
      "Develop an actionable roadmap for strengthening leadership alignment and building a culture where both people and performance thrive.",
    ],
    problem:
      "When leaders don't design culture intentionally, it develops by default, costing organizations in engagement, retention, innovation, and patient experience.",
    audience:
      "Healthcare leaders and leadership teams who want culture to become a strategic advantage rather than something that happens to them.",
    outcomes:
      "Recognize how their own behaviors shape performance, use trust and accountability to build psychological safety, put systems in place that drive engagement and retention, and follow a clear roadmap for aligning the organization around the culture they want.",
    formats: "Keynote · interactive workshop · in-person, virtual, or hybrid",
  },
  {
    title: "Navigating High-Stakes Conversations",
    id: "high-stakes-conversations",
    hook: "Leadership isn't measured by the easy conversations. It's revealed by the difficult ones.",
    description: [
      "Every leader eventually faces conversations they'd rather avoid: performance issues, accountability, conflict, difficult feedback, emotional employees, misalignment, resistance to change. The quality of these conversations often determines the quality of the culture.",
      "Great leaders don't avoid difficult conversations. They know how to navigate them with confidence, emotional intelligence, and clarity. In this highly interactive session, leadership expert, bestselling author, and Fractional COO Marni Blythe teaches leaders how to approach high-stakes conversations in a way that strengthens trust rather than damages it.",
      "Participants will learn how to regulate their own emotions before entering difficult discussions, communicate with clarity instead of emotion, reduce defensiveness, ask better questions, and create accountability without sacrificing relationships. Using Marni's practical CORE Conversation Framework, attendees will leave with a repeatable process they can immediately use to navigate feedback conversations, performance discussions, conflict resolution, coaching moments, and other high-pressure leadership situations.",
      "Because leadership isn't measured by the easy conversations. It's revealed by the difficult ones.",
    ],
    objectives: [
      "Identify the characteristics of high-stakes conversations and their impact on workplace culture and organizational performance.",
      "Assess personal communication habits, emotional triggers, and conflict management tendencies that influence leadership effectiveness.",
      "Apply the CORE Conversation Framework to structure difficult conversations involving performance, accountability, and workplace conflict.",
      "Demonstrate communication techniques that reduce defensiveness, increase active listening, and foster psychological safety.",
      "Develop actionable strategies for conducting high-stakes conversations that strengthen trust, improve accountability, and enhance team performance.",
    ],
    problem:
      "Leaders avoid or mishandle difficult conversations about performance, accountability, conflict, and change, which erodes trust, weakens accountability, and damages culture.",
    audience:
      "Leaders and managers at every level who give feedback, coach, hold people accountable, or resolve conflict.",
    outcomes:
      "Regulate their own emotions before difficult discussions, communicate with clarity, reduce defensiveness, ask better questions, and hold people accountable without sacrificing relationships, using the ACT & CORE Conversation Framework as a repeatable process.",
    formats: "Keynote · interactive workshop · in-person, virtual, or hybrid",
  },
];

export const allTalks: Program[] = [signatureKeynote, ...programs];

export const reasonsToBook = [
  {
    title: "She's an operator, not just a speaker",
    body: "Years inside organizations as a fractional executive, including surgical practices and growing businesses. The frameworks come from real P&Ls and real teams, not a book tour.",
  },
  {
    title: "One brand, one big idea",
    body: "Human Intelligence isn't a grab bag of leadership topics. It's a signature lens your audience will remember, and quote, long after the event.",
  },
  {
    title: "Warmth that works a room",
    body: "Marni reads a room fast and gets the quiet ones talking, because the person who says the least often needs the shift the most. Your attendees won't just be impressed; they'll feel seen.",
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
    body: "Healthcare, corporate, education, real estate: the tech changes, the humans don't. HI translates everywhere.",
  },
];
