// Real, attributed speaking testimonials. Per the planner research: named
// buyer + title + organization, 2-3 sentences. When two more arrive, the home
// section can switch from the single featured quote back to a 3-up grid.
// (Quote supplied by Marni from her own materials — confirm she has
// permission to feature it before launch.)
export type Testimonial = {
  quote: string;
  attribution: string;
  role: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Marni was such an incredible speaker for our group. She's relatable, and she brings energy that lights up any room. She gave us actionable steps to walk away with, and our team really resonated with the idea of soul care — focusing on yourself so you can lead with human intelligence. I know she'd be an incredible speaker for any group.",
    attribution: "Christina Helwig",
    role: "CEO, Advocare",
  },
];
