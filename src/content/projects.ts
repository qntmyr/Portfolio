// Texts in [brackets] are placeholders waiting for Quentin's own words.

import lsdtScreens from "@/assets/screens/lsdt-dashboard-app.jpg";
import type { Photo } from "./photos";

export type CaseStudy = {
  intro: string;
  facts: { label: string; value: string; href?: string }[];
  heroImage: string;
  productsTitle: string;
  products: { title: string; text: string; image: string }[];
  timelineTitle: string;
  timeline: { dates: string; title: string; bullets: string[]; current?: boolean }[];
  decisionsTitle: string;
  decisionsIntro: string;
  decisions: { title: string; text: string }[];
};

export type Project = {
  slug: string;
  name: string;
  eyebrow: string;
  summary: string;
  bullets?: string[];
  tags?: string[];
  /** Label of the placeholder shown until the screenshot exists. */
  image?: string;
  /** Real screenshot, names blurred. */
  screenshot?: Photo;
  link?: { label: string; href: string };
  featured?: boolean;
  caseStudy?: CaseStudy;
};

export const projects: Project[] = [
  {
    slug: "la-salle-du-temps",
    name: "La Salle du Temps",
    eyebrow: "Flagship · 2025 → now",
    summary:
      "A coaching studio's whole ecosystem: back-office dashboard, mobile booking app, REST API and showcase website.",
    bullets: [
      "Redesigned and rebuilt the back-office dashboard, from Figma to database rework.",
      "Built the mobile booking app, front end and back end.",
      "Now working remotely: deployments, environments and the production database.",
    ],
    // TODO(Quentin): confirm the stack.
    tags: ["React", "React Native", "Express", "PostgreSQL", "Vercel"],
    image: "Screenshots · LSDT dashboard + booking app",
    screenshot: {
      src: lsdtScreens,
      alt: "The La Salle du Temps planning dashboard, with the member app in front of it",
      focus: "0% 50%",
    },
    featured: true,
    caseStudy: {
      intro:
        "A coaching studio that runs on four products I've designed, built or maintained: a back-office dashboard, a mobile booking app, a REST API and a showcase website.",
      facts: [
        { label: "Role", value: "Full-stack, DevOps and database" },
        { label: "Company", value: "Family Innovation" },
        { label: "Stack", value: "React, React Native, Express, PostgreSQL, Vercel" },
        { label: "Period", value: "Apr 2025 → Feb 2027" },
      ],
      heroImage: "Hero screenshot · dashboard on a laptop, booking app on a phone",
      productsTitle: "Four products, one studio",
      products: [
        {
          title: "Back-office dashboard",
          text: "Where the studio manages its day. Rebuilt from scratch: UX/UI design, database rework and the full front end.",
          image: "Screenshot · dashboard",
        },
        {
          title: "Mobile booking app",
          text: "Clients book their coaching sessions from their phone. I built it front end and back end.",
          image: "Screenshots · 3 app screens",
        },
        {
          title: "REST API and database",
          text: "The layer every product talks to. I administer the production database and fix user issues directly in it.",
          image: "Diagram · API and database",
        },
        {
          title: "Showcase website",
          text: "The public face of the studio, maintained and deployed alongside the rest.",
          image: "Screenshot · showcase website",
        },
      ],
      timelineTitle: "Three missions, two years",
      timeline: [
        {
          dates: "Apr → Jul 2025",
          title: "Front-end developer intern",
          bullets: [
            "Rebuilt the back-office dashboard from scratch.",
            "Made the key architecture and stack decisions on my own.",
            "Wrote full documentation for the back-end handover.",
          ],
        },
        {
          dates: "Mar → Jun 2026 · from Seoul",
          title: "Freelance back-end and mobile",
          bullets: ["Built the mobile booking app, front end and back end.", "My first freelance job."],
        },
        {
          dates: "Sep 2026 → Feb 2027 · remote",
          title: "Full-stack intern, DevOps and database",
          bullets: [
            "Maintain and extend the whole ecosystem.",
            "Own deployments and environments for every part.",
            "Administer the production database.",
          ],
          current: true,
        },
      ],
      decisionsTitle: "Decisions I made",
      decisionsIntro:
        "Working mostly on my own meant choosing the architecture, and pushing back on features when a simpler rule would serve the studio better.",
      decisions: [
        {
          title: "[Decision 1 · e.g. why this stack for the dashboard]",
          text: "[What you chose, what you compared it with, what it changed.]",
        },
        {
          title: "[Decision 2 · e.g. how you reworked the database]",
          text: "[The problem with the old schema and what the new one fixed.]",
        },
        {
          title: "[Decision 3 · a business rule you challenged]",
          text: "[What the studio asked for, what you recommended, the outcome.]",
        },
      ],
    },
  },
  {
    slug: "iziclub",
    name: "iziClub",
    eyebrow: "Co-founder · 2026 → 2027",
    summary:
      "An admin dashboard for local sports clubs and a public app to find clubs and events. I lead a team of four, plan the sprints and run the beta with real users.",
    image: "Screenshot · iziClub app",
    link: { label: "iziclub.fr", href: "https://iziclub.fr" },
    caseStudy: {
      intro:
        "An Epitech Innovative Project I co-founded: a web dashboard that helps local sports clubs run themselves, and a public mobile app to discover clubs and events nearby.",
      facts: [
        { label: "Role", value: "Co-founder and project lead" },
        { label: "Team", value: "4 people" },
        { label: "Period", value: "2026 → 2027" },
        { label: "Live", value: "iziclub.fr ↗", href: "https://iziclub.fr" },
      ],
      heroImage: "Hero screenshot · dashboard and mobile app",
      productsTitle: "Two products, one community",
      products: [
        {
          title: "Admin dashboard for clubs",
          text: "Where club managers handle their members, activities and events.",
          image: "Screenshot · club dashboard",
        },
        {
          title: "Public mobile app",
          text: "Anyone can discover local clubs and upcoming events, then get in touch.",
          image: "Screenshots · app screens",
        },
      ],
      timelineTitle: "What I own",
      timeline: [
        {
          dates: "Product",
          title: "Positioning and marketing",
          bullets: ["Product positioning and communication.", "Social media and community growth."],
        },
        {
          dates: "Users",
          title: "Beta and usability testing",
          bullets: ["Recruited beta testers.", "Ran usability tests with real users."],
        },
        {
          dates: "Team",
          title: "Agile workflow",
          bullets: [
            "Create and plan the sprints.",
            "Write user stories and prioritise the backlog.",
            "Track delivery for a team of four.",
          ],
          current: true,
        },
      ],
      decisionsTitle: "What I learned",
      decisionsIntro: "Leading a product with real users changes how you write code.",
      decisions: [
        { title: "[Lesson 1 · from user testing]", text: "[What users did that you didn't expect, and what you changed.]" },
        { title: "[Lesson 2 · from leading the team]", text: "[How you organise four people across sprints.]" },
        { title: "[Lesson 3 · a product choice]", text: "[A feature you cut or added, and why.]" },
      ],
    },
  },
  {
    slug: "pwc",
    name: "Metadata management tool",
    eyebrow: "PwC Luxembourg · 2023",
    summary:
      "Front-end and back-end features for an internal tool, inside the Data Architecture team's Scrum workflow.",
  },
  {
    slug: "senator",
    name: "A senator's website",
    eyebrow: "Front-end · 2025",
    summary: "The UI of a French senator's official site, built from scratch in PHP and WordPress with a designer.",
  },
];

export const caseStudies = projects.filter(
  (p): p is Project & { caseStudy: CaseStudy } => Boolean(p.caseStudy),
);
