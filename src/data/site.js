// All placeholder content lives here. Replace it whenever you're ready.

export const profile = {
  name: "Joel Tochi",
  greeting: "Hello There!",
  title: "Your Headline Title Here",
  intro:
    "A short intro about who you are and what you do will go here. Placeholder text for now.",
  primaryButton: { label: "View My Journey", href: "#journey" },
  secondaryButton: { label: "Download CV", href: "#" },
  floatingTags: ["Tag One", "Tag Two"],
  skills: [
    "Skill One",
    "Skill Two",
    "Skill Three",
    "Skill Four",
    "Skill Five",
    "Skill Six",
  ],
};

// The full map of the portfolio. We'll build each one properly later.
export const sections = [
  {
    id: "about",
    label: "About Me",
    title: "Who is Joel Tochi?",
    note: "Your story, background and personal side.",
  },
  {
    id: "journey",
    label: "My Journey",
    title: "Education, Experience & Certifications",
    note: "A timeline of school, work, training and certificates.",
  },
  {
    id: "achievements",
    label: "Achievements",
    title: "Milestones & Evidence",
    note: "Wins, growth moments, with proof attached.",
  },
  {
    id: "projects",
    label: "Projects",
    title: "Things I've Built",
    note: "Project cards with screenshots and links.",
  },
  {
    id: "blog",
    label: "Reflections",
    title: "Notes & Lessons",
    note: "Writing about what you're learning.",
  },
  {
    id: "contact",
    label: "Contact",
    title: "Let's Connect",
    note: "A contact form and your links.",
  },
];

export const journeyCategories = [
  "All",
  "Education",
  "Experience",
  "Certification",
  "Training",
];

// Each entry is one moment on your timeline. Add, remove or edit freely.
export const journey = [
  {
    id: 1,
    category: "Education",
    title: "B.Sc. Computer Science",
    place: "Your University Name",
    period: "20XX – 20XX",
    summary: "A short line about your degree. Placeholder text.",
    details: [
      "Key area of study or final project goes here",
      "A lesson or skill you carried out of school",
    ],
    evidence: ["Certificate or transcript", "Graduation photo"],
  },
  {
    id: 2,
    category: "Training",
    title: "SIWES / Industrial Training",
    place: "Organisation Name",
    period: "20XX",
    summary: "What you did and learned during your industrial training.",
    details: [
      "A responsibility you handled",
      "Something you learned or improved",
    ],
    evidence: ["Training letter", "Logbook page"],
  },
  {
    id: 3,
    category: "Certification",
    title: "Cybersecurity Course",
    place: "Platform or Provider",
    period: "20XX",
    summary: "What the course covered and why you took it.",
    details: ["Topics covered", "What you can now do because of it"],
    evidence: ["Certificate", "Course progress screenshot"],
  },
  {
    id: 4,
    category: "Experience",
    title: "IT Support",
    place: "Company Name",
    period: "20XX – Present",
    summary: "Your role, in one or two sentences.",
    details: [
      "A problem you solved",
      "A measurable result, if you have one",
    ],
    evidence: ["Reference letter", "Work photo"],
  },
  {
    id: 5,
    category: "Experience",
    title: "Project Management",
    place: "Company Name",
    period: "20XX – 20XX",
    summary: "The projects you managed and your part in them.",
    details: ["A project you delivered", "Tools or methods you used"],
    evidence: ["Project report", "Team photo"],
  },
];