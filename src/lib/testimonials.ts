// Real, attributed testimonials supplied by Marni (Oct 2026). Quotes are
// verbatim apart from spelling/typo fixes in transcribed video quotes. Never
// paraphrase, merge, or invent. `excerpt` is the short card version: the
// home-page excerpts are the exact wording from Marni's Oct 2026 homepage
// brief; the full quote always renders on /reviews.
// (Confirm permission before launch.)
export type Testimonial = {
  quote: string;
  excerpt?: string;
  attribution: string;
  role?: string;
  /** organizer = booked/hosted her; audience = in the seats; worked-with =
   *  colleagues, clients, and industry leaders who know her work */
  kind: "organizer" | "audience" | "worked-with";
};

export const testimonials: Testimonial[] = [
  // ---- Organizers ----
  {
    kind: "organizer",
    attribution: "Christina Helwig",
    role: "CEO, Advocare",
    quote:
      "Marni was an incredible speaker for our group today. She is relatable, and her energy truly lights up the room. What I appreciated most was that she gave us actionable steps we could take with us to become stronger leaders.\n\nOur team especially connected with the idea of ‘soul care’ and the importance of caring for yourself so you can lead others with greater human intelligence. At the end of the day, genuine human connection matters above all else. I’m so grateful Marni joined us, and I know she would be an incredible speaker for any group.",
    excerpt:
      "Marni was an incredible speaker for our group today. She is relatable, and her energy truly lights up the room. What I appreciated most was that she gave us actionable steps we could take with us to become stronger leaders.",
  },
  {
    kind: "organizer",
    attribution: "Whitney Durley",
    role: "Advocare",
    quote:
      "Marni was an incredible keynote speaker for our retreat. She brought energy, human insight, and genuine authenticity to the room. Everyone walked away with fresh perspectives, renewed motivation, and practical tools to make our everyday work better. Her broad business knowledge allowed her to connect with our group on multiple levels and make the presentation highly relevant to us. We were thrilled to have her.",
  },
  {
    kind: "organizer",
    attribution: "Dr. Ryan Holmes",
    role: "Chief Clinical Officer, Bright Direction Dental",
    quote:
      "I’m the Chief Clinical Officer, and was luckily one of the ones who was involved in selecting Marni Blythe to come and do our keynote address for our annual doctors’ meeting. We just wrapped up. You can probably hear the buzz in the room. It was an astounding success. I think our doctors and hygienists and leaders, all are going home with some great insights that they could put into practice on Monday morning. Couldn’t recommend her higher. Have her in, you won’t regret it.",
  },
  {
    kind: "organizer",
    attribution: "Steve Wright",
    role: "CEO, Bright Direction Dental",
    quote:
      "We just had Marni speak at our annual event here in New Buffalo, Michigan. She did a fantastic job. We had our hygienists, office managers, dentists, teams all together, and I think she just did a tremendous job connecting all the dots for the team members. And I think everyone left feeling good with clear action items. So definitely great having her here.",
    excerpt:
      "She did a tremendous job connecting all the dots for the team members. Everyone left feeling good with clear action items.",
  },
  {
    kind: "organizer",
    attribution: "Amanda Stawychey",
    role: "Vice President of Operations, Bright Direction Dental",
    quote:
      "The customized session for our group was exactly what we needed to LEVEL UP! She understood what we were looking for, tailored the content perfectly to our team, and delivered it in a way that was engaging, relevant, and impactful. It was a perfect fit for our group! I would highly recommend Marni.",
  },
  {
    kind: "organizer",
    attribution: "Gary Dickenson",
    role: "CEO, Seattle Study Club",
    quote:
      "We’re here tonight at the Piedmont Comprehensive Study Club in Shelby, North Carolina. I have the privilege of visiting different study clubs every week, but tonight, we’re in an incredible venue with an amazing group of people who are learning and sharing together.\n\nThat’s the true strength of a study club: collaboration. One plus one makes eleven, not two. That’s the value of bringing people together.\n\nMarni’s presentation tonight was brilliant. I first saw her speak at our symposium, and she brings incredible energy into a room. She gets people talking, sharing ideas, laughing, and connecting.\n\nMarni has the emotional intelligence to connect with anyone and bring out the best in everyone. There are often quiet people in the audience, but she has a remarkable ability to get the entire room interacting, working together, and growing together.",
    excerpt:
      "Marni brings incredible energy into a room. She gets people talking, sharing ideas, laughing, and connecting. She has a remarkable ability to get the entire room interacting, working together, and growing together.",
  },
  {
    kind: "organizer",
    attribution: "Nina McKim",
    quote:
      "The purpose of today’s study club was to bring in Marni as a consultant and share her perspective from overseeing dental practices across multiple specialties. It was a valuable opportunity for our dentists to learn from the skills and strategies she has developed and consider how to implement them in their own practices. Everyone was highly engaged, took a lot of notes, and walked away with practical ideas they can put into action. Marni’s extensive experience in the dental industry makes her a trusted resource, and it was truly an honor to have her with us today.",
  },

  // ---- Audience ----
  {
    kind: "audience",
    attribution: "Ren Shore",
    role: "University Program Specialist, Bezos Center for Sustainable Protein, NC State University",
    quote:
      "Marni is an informative, authoritative, and dynamic speaker. She recently addressed attendees from the Holly Springs Chamber of Commerce at a breakfast event on the topic of marketing. Attendees were engrossed and engaged and learned many new things from Marni that they can implement in their own businesses.\n\nShe knows her stuff but manages to come across as open, friendly, and approachable.",
  },
  {
    kind: "audience",
    attribution: "Michelle Santos",
    role: "Customer Success Onboarding Specialist, Genesys",
    quote:
      "This morning I had the privilege of attending a local Holly Springs Chamber of Commerce event with a spot-on presentation from Marni Blythe, Business Coach & Owner of Full Pocket Coaching. I was particularly impressed with the very relevant tool-kit of information she presented for business owners. She discussed, in detail, tips on lead generation, including trends and benchmarks, understanding the buying process, as well as lead nurturing and marketing automation. Her goal is to help businesses “explode ROI.” Adding humor and relatable themes to her presentation really kept everyone engaged. Marni earns my thumbs up, and I would not hesitate to recommend her to any business owner to help them work smarter, not harder and to increase their ROI.",
  },
  {
    kind: "audience",
    attribution: "Frieda Lin",
    quote:
      "I attended the “Lead Generation, Nurturing and Marketing Automation” seminar by Marni. A complex and complicated topic and Marni walked us through the process with 30 slides and with clarity. She clearly demonstrated her ability in helping you find the right strategy to design systems to grow your business! I would recommend you check her out when it comes to marketing! Her high energy is contagious, too!",
  },
  {
    kind: "audience",
    attribution: "Linda Nguyen",
    role: "Food & Travel Content Creator and Portrait Photographer",
    quote:
      "I attended an early morning marketing seminar by Marni and was very impressed by her knowledge and ability to present an information dense and cohesive presentation! I learned a lot and cannot wait to brainstorm ways to implement the personalized marketing approaches she taught us!",
  },
  {
    kind: "audience",
    attribution: "Dr. Alessandra Ritter",
    role: "Ritter Endodontics",
    quote:
      "I really enjoyed Marni’s presentation. She is incredibly inspiring, and her message is both uplifting and practical. I left feeling more confident in my leadership skills and believing that I can begin creating positive change in my practice tomorrow. Marni showed me how to lead in a way that is not only more productive, but also more human.",
  },
  {
    kind: "audience",
    attribution: "Dr. David Lee Hill",
    role: "Chapel Hill Oral Surgery",
    quote:
      "Marni Blythe is impactful, insightful, and inspirational. She is an extremely talented speaker whose vulnerability and emotional intelligence speak volumes, allowing her to connect deeply with the entire audience. It was an absolutely amazing evening.",
    excerpt:
      "Marni Blythe is impactful, insightful, and inspirational. She is an extremely talented speaker whose vulnerability and emotional intelligence speak volumes, allowing her to connect deeply with the entire audience.",
  },
  {
    kind: "audience",
    attribution: "Dr. Riddhi Patel",
    role: "Harmony Oral Surgery",
    quote:
      "There is always a need to step outside clinical dentistry and talk about what else matters in the life of a practice. Marni’s presentation really hit home. She helped us explore why we do what we do, where we want to go in the future, and how to put the right people in the right seats to get there.\n\nThis easily could have been an all-day workshop, or even an entire weekend, because there is so much value in learning how to implement the EOS framework within a practice. Marni is an engaging and interactive speaker who kept the entire audience involved and elevated the conversation. I highly recommend her.",
  },
  {
    kind: "audience",
    attribution: "Dr. Angie Averill",
    quote:
      "Marni Blythe led a great practice management workshop for the Carolina Collaborative Study Club. I came hoping to connect with other practice owners and gain practical techniques and strategies, and the session absolutely delivered. The interactive discussions and Q&A helped us identify actionable ideas we could bring back to our practices. Marni is highly engaging and presents concepts in a clear, approachable way. I especially appreciated how she ended by asking us what we would start implementing the following week. It gave us a clear first step and helped us work backward from there.",
  },
  {
    kind: "audience",
    attribution: "Dr. Kendalyn Lutz-Craver",
    quote:
      "Marni was amazing. She was engaging, interesting, and thought-provoking. I’ve been a dentist for 23 years, and she got me thinking differently about my practice, what I could improve, and what I need to do to take it to the next level.\n\nI would recommend her to anyone. As dentists, we’re good at dentistry, and some of us understand certain aspects of running a business. But when you start thinking about everything a CEO, CFO, and COO must manage, it becomes too much for one person.\n\nI practice in a small town. I want to take care of my community and deliver exceptional service, but I can’t expect myself to also be the Chief Operating Officer. I need someone who can bring that knowledge and business expertise into my practice.\n\nThat’s what Marni offers. She brings a higher level of business acumen while allowing independent practices like mine to maintain the values and exceptional care that matter to us.\n\nThe two can come together. I don’t have to do it all.",
  },
  {
    kind: "audience",
    attribution: "Drs. William Linder and Kyle Murdock",
    quote:
      "This was a great presentation, especially as I’m starting my own practice. Marni broke everything down in a way that was digestible, easy to understand, and practical to implement as I get the ball rolling. She made the session lively and encouraged me to think about things I don’t normally consider because I’m so focused on doing the dentistry. It’s easy to get bogged down in the day-to-day details, but this presentation helped me step back and think about the bigger picture: how I want my practice to operate, what my goals are, and how I’m going to achieve them.",
  },
  {
    kind: "audience",
    attribution: "Christina Peters",
    role: "Bright Direction Dental",
    quote:
      "She is very motivational and engaging. She is inspirational and shares a lot of personal experiences you can relate to. I haven’t heard from a great motivational speaker in quite a while so I’m glad I got to be a part of Brighter Together and experience what she is about. She was great. I recommend having her speak at events as I feel she can relate to the crowd and she shares amazing experiences and valuable information.",
  },
  {
    kind: "audience",
    attribution: "Jamie Fanning, RDH",
    role: "Bright Direction Dental",
    quote:
      "I just got through with Marni’s conference, her seminar. It is amazing. It is not only going to give you information and life lessons to put in practice at your job, but it is also going to give you stuff to do to implement in your own life at home to make you successful all the way around.",
  },
  {
    kind: "audience",
    attribution: "Enjoli",
    role: "Director of Hygiene, Imagen Dental Partners",
    quote:
      "Engaging and easy to follow. Marni’s content was relatable and immediately able to apply to personally and professionally!",
  },

  // ---- Worked with ----
  {
    kind: "worked-with",
    attribution: "Phil Mims",
    role: "CEO, Nussentials",
    quote:
      "It is with great pleasure and complete confidence that I write these positive words about Marni Blythe. I worked alongside her for several years as our firm benefited from her immense talent of training, public speaking and coaching of others. She inspired many to perform at high levels, while fueling our corporate growth tremendously. Her business acumen and grasp of C-suite demands is totally over the top, and when the opportunity and need arises once more, I will most certainly contract her to assist and guide my executive team and fellow employees. She is entertaining, speaks from the heart on stage, and is quite easy to follow and understand.\n\nShould you and your business need assistance, Marni is the one to bring aboard. You won’t be sorry.",
    excerpt:
      "She inspired many to perform at high levels, while fueling our corporate growth tremendously. … She is entertaining, speaks from the heart on stage, and is quite easy to follow and understand.",
  },
  {
    kind: "worked-with",
    attribution: "Anne Duffy",
    role: "CEO, DEW",
    quote:
      "Marni Blythe is the epitome of leadership and emotional intelligence. Her compelling blend of heart and logic is a catalyst for genuine change, paving the way for exponential growth and unparalleled financial success. When Marni speaks, transformation happens. A true powerhouse in the world of leadership expertise.",
    excerpt:
      "Marni Blythe is the epitome of leadership and emotional intelligence. Her compelling blend of heart and logic is a catalyst for genuine change. When Marni speaks, transformation happens.",
  },
  {
    kind: "worked-with",
    attribution: "Dr. Brent Delong",
    role: "Gaston Oral & Maxillofacial Surgery",
    quote:
      "Marni brought a level of strategic insight, operational discipline, and leadership that has elevated every aspect of our business.",
  },
  {
    kind: "worked-with",
    attribution: "Dr. Leigh Miller",
    role: "Owner, Miller Concierge TMJ Physical Therapy",
    quote:
      "I’m Dr. Leigh Miller, owner of Miller Concierge TMJ Physical Therapy. We currently have three practices in the Triangle, with another opening soon in Greenville, North Carolina.\n\nI first met Marni Blythe through the Seattle Study Club and was immediately impressed by her understanding of people and her ability to educate and inspire those around her. I later hired her to work with my own practice, and she has been instrumental in our growth. She meets with me and my office manager monthly, has helped us systematize our operations, and has made us far more organized than we have ever been. Today, we are considering a level of expansion I never thought was possible.\n\nMarni has also helped me grow personally as a leader. I have struggled with self-doubt and the belief that I’m never doing enough. She continually reminds me that our beliefs are not necessarily reality. She has taught me to pause between what happens and how I respond, which has been invaluable because I tend to be reactive and impulsive. Those lessons, combined with everything she has done for our business, have helped us thrive.\n\nMarni teaches you how to separate your thoughts and fears from what is actually true and beneficial for you and your business. If I could summarize her message in one sentence, it would be: Be your authentic self. That is easy to say and hard to do, but Marni breaks it down and shows you how authenticity can become something you truly live, not just a hashtag.",
  },
  {
    kind: "worked-with",
    attribution: "Dr. Patel",
    quote:
      "I would definitely recommend Marni to other doctors and dentists. I think it’s really valuable. These are aspects that we learn and are taught or come natural to us. And so understanding team culture and innovation and how to grow as a business is really valuable. And I really think other doctors will really benefit from this service.",
  },
];

const byName = (name: string) => {
  const t = testimonials.find((x) => x.attribution === name);
  if (!t) throw new Error(`Unknown testimonial: ${name}`);
  return t;
};

/** Home proof trio (Marni's brief: three different orgs, CEOs prominent). */
export const homeTestimonials = [
  byName("Christina Helwig"),
  byName("Steve Wright"),
  byName("Anne Duffy"),
];

/** Sits beside the speaker reel: validates what the buyer is watching. */
export const reelTestimonial = byName("Gary Dickenson");

/** Executive / operator credibility section on home. */
export const operatorTestimonials = [
  byName("Dr. David Lee Hill"),
  byName("Dr. Brent Delong"),
];

/** /speaking: emphasizes customization. */
export const speakingTestimonial = byName("Amanda Stawychey");

export { byName as testimonialBy };
