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

export const about = {
  label: "About Me",
  title: "Who is",
  bio: [
    "First paragraph of your story goes here. Where you come from and what shaped you. Placeholder text.",
    "Second paragraph: what you do now, what drives you, and where you are heading.",
  ],
  stats: [
    { value: 5, suffix: "+", label: "Projects Completed" },
    { value: 3, suffix: "+", label: "Certifications" },
    { value: 4, suffix: "+", label: "Years of Experience" },
  ],
  beyondWork: ["Interest One", "Interest Two", "Interest Three", "Value One"],
  cv: { label: "Download CV", href: "#" },
};

export const achievementCategories = [
  "All",
  "Academic",
  "Professional",
  "Personal",
];

// src: null shows a placeholder. When you have a real file, put it in
// public/evidence/ and set src: "/evidence/your-file.jpg"
export const achievements = [
  {
    id: 1,
    category: "Academic",
    title: "Achievement Title One",
    date: "Month 20XX",
    description:
      "What you achieved and why it mattered. Placeholder text for now.",
    evidence: [
      { label: "Certificate", src: null },
      { label: "Photo", src: null },
    ],
  },
  {
    id: 2,
    category: "Professional",
    title: "Achievement Title Two",
    date: "Month 20XX",
    description: "A win at work, a problem you solved, or a result you delivered.",
    evidence: [{ label: "Screenshot", src: null }],
  },
  {
    id: 3,
    category: "Personal",
    title: "Achievement Title Three",
    date: "Month 20XX",
    description: "A personal milestone or a moment of growth you're proud of.",
    evidence: [
      { label: "Photo", src: null },
      { label: "Letter", src: null },
      { label: "Document", src: null },
    ],
  },
];

// image: null shows a placeholder. Later, put a screenshot in public/projects/
// and set image: "/projects/your-screenshot.jpg"
// A link with href: null is hidden, so only add links you actually have.
export const projects = [
  {
    id: 1,
    title: "Project Title One",
    type: "Web App",
    description:
      "What the project does, the problem it solves and your part in it. Placeholder text.",
    tags: ["Tag", "Tag", "Tag"],
    image: null,
    links: [
      { label: "Live Demo", href: null },
      { label: "Source Code", href: null },
    ],
  },
  {
    id: 2,
    title: "Project Title Two",
    type: "IT Support",
    description:
      "A support or infrastructure project: what was broken, what you did, what improved.",
    tags: ["Tag", "Tag"],
    image: null,
    links: [{ label: "Case Study", href: null }],
  },
  {
    id: 3,
    title: "Project Title Three",
    type: "Project Management",
    description:
      "A project you managed: scope, team, timeline and the outcome you delivered.",
    tags: ["Tag", "Tag", "Tag"],
    image: null,
    links: [{ label: "Project Report", href: null }],
  },
];

export const reflections = [
  {
    id: 1,
    tag: "Lesson",
    title: "Reflection Title One",
    date: "Month 20XX",
    readTime: "3 min read",
    excerpt: "A one or two line teaser of what this note is about.",
    body: [
      "First paragraph of the note. Placeholder text for now.",
      "Second paragraph: what you learned and how it changed the way you work.",
    ],
  },
  {
    id: 2,
    tag: "Career",
    title: "Reflection Title Two",
    date: "Month 20XX",
    readTime: "4 min read",
    excerpt: "Something from your IT support or project management journey.",
    body: [
      "First paragraph of the note. Placeholder text for now.",
      "Second paragraph with the takeaway.",
    ],
  },
  {
    id: 3,
    tag: "Learning",
    title: "Reflection Title Three",
    date: "Month 20XX",
    readTime: "2 min read",
    excerpt: "Something you are studying, such as cybersecurity.",
    body: ["Placeholder text for now.", "What you want to explore next."],
  },
];

// A link with href: null is hidden. Add only the ones you have.
export const contact = {
  intro:
    "Have an opportunity, a question, or just want to say hello? Send a message and I'll get back to you.",
  email: "joeltochi.dev@gmail.com",
  socials: [
    { icon: "linkedin", label: "LinkedIn", handle: "@your-handle", href: null },
    { icon: "github", label: "GitHub", handle: "@your-handle", href: null },
    { icon: "x", label: "X (Twitter)", handle: "@your-handle", href: null },
    { icon: "instagram", label: "Instagram", handle: "@your-handle", href: null },
    { icon: "whatsapp", label: "WhatsApp", handle: "+234 000 000 0000", href: null },
  ],
};
