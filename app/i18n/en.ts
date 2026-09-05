import type { Dict } from "./types";

/**
 * English copy. Written to carry the Arabic positioning, not to mirror its
 * grammar — the Arabic leans on verb-first parallelism that reads stilted in
 * English, so the same claims are made in plain B2B phrasing instead.
 *
 * No claim, client, number or outcome appears here that is not in `ar.ts`.
 * The testimonials are translations of real quotes, kept literal.
 */
const en: Dict = {
  // Search-engine copy only — never rendered on the page.
  meta: {
    title: "Rawasi AI | AI Solutions & Business Automation",
    description:
      "A Saudi AI company building intelligent agents and automation that run inside your operations — across support, sales and operations. From diagnosis to production, with a working prototype in two weeks.",
  },

  nav: {
    services: "Services",
    how: "How we work",
    work: "What we do",
    faq: "FAQ",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    switchLanguage: "Switch to Arabic",
    whatsapp: "WhatsApp",
    whatsappAria: "Message us on WhatsApp",
    email: "Email",
    emailAria: "Email us",
  },

  hero: {
    lead: "Agents that answer.",
    accent: "Automation that acts.",
    tail: "Both inside your systems.",
    lede: "We build the thing that takes over repetitive work across support, sales and operations — not slide decks.",
    primary: "Book a call",
    secondary: "What we do",
  },

  demo: {
    tabs: ["Agent replies", "Automation runs"],
    chat: [
      { text: "When will order 2481 arrive?", me: false },
      {
        text: "It's at the Riyadh warehouse. Delivery tomorrow, 2–5 PM ✓",
        me: true,
      },
      { text: "I've updated the order status and sent the tracking link.", me: true },
    ],
    flow: [
      "New order",
      "Check inventory",
      "Issue invoice",
      "WhatsApp notification",
      "Update records",
    ],
    digits: ["1", "2", "3", "4", "5"],
  },

  problem: {
    eyebrow: "The problem",
    lineA: "Your teams lose hours to work that repeats.",
    lineB: "Off-the-shelf tools don't know how your business runs — we build what does.",
  },

  services: {
    eyebrow: "Services",
    title: "Three things we do well",
    items: {
      agent: {
        t: "AI agents",
        d: "Agents that handle support, sales and service inside the channels you already use.",
      },
      flow: {
        t: "Process automation",
        d: "Your scattered systems joined into a single workflow that runs without supervision.",
      },
      system: {
        t: "Custom systems",
        d: "Dashboards and applications built on your data — not a generic template.",
      },
    },
  },

  how: {
    eyebrow: "How we work",
    title: "From diagnosis to production",
    lede: "Four clear steps. No surprises, no hidden phases.",
    steps: [
      {
        t: "Diagnosis",
        d: "We review your operations and tooling, and find where time and money are leaking.",
      },
      {
        t: "Analysis",
        d: "We decide what is worth automating and what is not, and size the return before anything is built.",
      },
      {
        t: "Build",
        d: "We build the agent or the workflow and wire it into the systems you already run.",
      },
      {
        t: "Launch and measure",
        d: "We roll it out, train your team, then measure the impact and keep improving it.",
      },
    ],
  },

  work: {
    eyebrow: "What we do",
    title: "We take on what eats your time",
    lede: "We don't sell tools. We take the repetitive work off your team.",
    filterAll: "All",
    tags: {
      agents: "Agents",
      automation: "Automation",
      integration: "Integration",
    },
    items: {
      alwaysOn: {
        t: "Your customers don't keep office hours",
        d: "An agent that answers WhatsApp, email and chat around the clock, and escalates to a person only when it should.",
      },
      followUp: {
        t: "No enquiry goes unanswered",
        d: "An agent that follows up with everyone who gets in touch, qualifies them with the right questions, and books the meeting into your calendar.",
      },
      hoursBack: {
        t: "Hours back for your team",
        d: "Invoicing, reporting and data entry move into a workflow that runs without daily intervention.",
      },
      content: {
        t: "Content that publishes itself",
        d: "Campaigns generated, published and tracked across your channels, with a human review before anything goes live.",
      },
      oneTrack: {
        t: "Your systems on one track",
        d: "Storefront, inventory, accounting and WhatsApp connected end to end, with no copying by hand.",
      },
      oneNumber: {
        t: "One number you can trust",
        d: "A dashboard that updates itself as things happen — no manual consolidation, no conflicting versions.",
      },
    },
  },

  testimonials: {
    eyebrow: "Client testimonials",
    title: "What they say about us",
    quotes: [
      {
        q: "He turned my complicated n8n ideas into a finished product with remarkable speed and professionalism. His communication was excellent and he kept me informed at every step. I strongly recommend him to anyone who needs automation done at a high level.",
        by: "Mohammed Al-Mutairi",
        role: "Business owner — e-commerce",
      },
      {
        q: "He turned my complex ideas into a high-performing n8n agent and noticeably cut our response time. Professional and fast — I recommend him strongly.",
        by: "Abdulaziz",
        role: "Director — education",
      },
      {
        q: "Consistency across branches was our biggest challenge. Now every branch delivers the same standard of experience.",
        by: "David Thompson",
        role: "VP of Operations — fitness",
      },
    ],
  },

  faq: {
    eyebrow: "Frequently asked",
    title: "Questions we hear often",
    items: [
      {
        q: "How do we start working with Rawasi?",
        a: "A one-hour diagnostic session where we go through your operations and pinpoint where you're losing time and money. You leave with a clear plan, whether or not we end up working together.",
      },
      {
        q: "How long does the first system take?",
        a: "A working prototype within two weeks. Not a document and not a deck — something you try yourself, on your own data.",
      },
      {
        q: "Do you work with our existing systems?",
        a: "Yes. We build on top of what you already have and connect it; we won't ask you to replace it. Integration is part of the work, not an add-on.",
      },
      {
        q: "Who owns the code and the data?",
        a: "You do. The code is handed over to you and your data stays in your systems. No lock-in and no permanent dependency on us.",
      },
      {
        q: "What happens after handover?",
        a: "We train your team, measure the impact and keep improving it. Follow-through is part of the engagement, not a separate contract.",
      },
    ],
  },

  booking: {
    eyebrow: "Book a slot",
    title: "Ready to start?",
    lede: "One hour. You leave with a clear plan — whether or not we work together.",
    placeholderLabel: "Calendly calendar goes here",
    placeholderBefore: "The calendar appears here once ",
    placeholderAfter: " is set.",
    note: "Calendly collects the name, email and your custom questions, and sends confirmations and reminders automatically.",
  },

  footer: {
    brand: "Rawasi",
    tagline:
      "A Saudi AI agency. We build agents and automation that run inside your operations — not slide decks.",
    navTitle: "Quick links",
    servicesTitle: "Services",
    rights: "All rights reserved.",
  },
};

export default en;
