// All site content lives here. Sources: the 2026 CV and the previous portfolio.

export const profile = {
  name: "Muhammad Uzair Nisar",
  shortName: "Uzair Nisar",
  role: "Full Stack Developer",
  current: { title: "Next.js Developer", company: "31 Green" },
  location: "Islamabad / Faisalabad, PK",
  email: "uzair.nisar425@gmail.com",
  phone: "+92 303 6911226",
  phoneHref: "+923036911226",
  cv: "/UzairCV.pdf",
};

export const socials = [
  { label: "LinkedIn", handle: "muhammad-uzair-nisar428", url: "https://www.linkedin.com/in/muhammad-uzair-nisar428/" },
  { label: "GitHub", handle: "chuzairnisar425", url: "https://github.com/chuzairnisar425" },
  { label: "X", handle: "@ChUzair542", url: "https://twitter.com/ChUzair542" },
  { label: "Instagram", handle: "@uzair._.nisar", url: "https://www.instagram.com/uzair._.nisar/" },
];

export const nav = [
  { id: "profile", label: "Profile" },
  { id: "experience", label: "Experience" },
  { id: "work", label: "Work" },
  { id: "toolkit", label: "Toolkit" },
  { id: "contact", label: "Contact" },
];

// Things the hero cycles through, all taken from shipped work in the CV.
export const heroBuilds = [
  "patient portals",
  "appointment diaries",
  "CRM extensions",
  "payment flows",
  "admin dashboards",
];

export const marquee = [
  "Next.js", "React", "TypeScript", "Vue.js", "Nuxt.js", "Redux Toolkit",
  "RTK Query", "Pinia", "Tailwind CSS", "Vuetify", "REST APIs", "Stripe",
  "GoCardless", "MySQL", "Flask", "Figma",
];

export const facts = [
  { value: "2023", label: "First role, as a frontend intern at Bytewise" },
  { value: "06", label: "Teams shipped with, remote and onsite" },
  { value: "03", label: "Frameworks used in production: React, Next.js, Vue / Nuxt" },
];

export const experience = [
  {
    period: "Apr 2026 — Present",
    company: "31 Green",
    role: "Next.js Developer",
    mode: "Remote",
    summary:
      "Building EveryClinic, a healthcare SaaS platform, across its Admin, Practice and Patient portals.",
    points: [
      "Built reusable, responsive UI components following current React and Next.js practices.",
      "Integrated REST APIs, authentication flows and protected routes, with state managed in Redux Toolkit.",
      "Worked in Agile sprints with backend, QA, design and product, tracking work in Jira and reviewing code in Bitbucket.",
      "Tracked down complex frontend issues and improved performance across the portals.",
    ],
    stack: ["Next.js", "React", "TypeScript", "Redux Toolkit", "Tailwind CSS", "REST APIs"],
  },
  {
    period: "Feb 2026 — Apr 2026",
    company: "FlosslyOS",
    role: "Full Stack Developer",
    mode: "Remote",
    summary:
      "Worked on a dental practice management platform, on both frontend and backend features.",
    points: [
      "Built and extended the Appointment Diary: scheduling, rescheduling, drafts and real-time availability.",
      "Implemented an interactive calendar for daily, weekly and monthly appointment workflows.",
      "Integrated GoCardless to automate Direct Debit payments, with webhooks for reconciliation.",
      "Handled state with Pinia and business logic across the API layer, through code reviews and Scrum.",
    ],
    stack: ["Vue.js", "Nuxt.js", "TypeScript", "Vuetify", "Pinia", "GoCardless"],
  },
  {
    period: "Aug 2025 — Feb 2026",
    company: "Zenith Innovations",
    role: "Frontend Developer",
    mode: "Onsite",
    summary:
      "Built Lead Finder, a Zoho CRM Marketplace extension that brings business and LinkedIn data into the CRM.",
    points: [
      "Built and maintained the Zoho CRM extension's interface for business needs.",
      "Managed complex workflows with the Context API.",
      "Worked with cross-functional teams to cut load times and improve performance.",
      "Created custom themes that hold up across devices.",
    ],
    stack: ["React", "Context API", "Zoho CRM", "REST APIs"],
  },
  {
    period: "Mar 2025 — Aug 2025",
    company: "NERDFLOW",
    role: "React.js Developer",
    mode: "Onsite",
    summary:
      "Built dashboards and a restaurant product with order tracking for both customers and admins.",
    points: [
      "Built dynamic, responsive user dashboards.",
      "Worked on menu-item and order management, trackable from both the user and admin side.",
      "Managed state and API integration with Redux Toolkit and RTK Query.",
    ],
    stack: ["React", "Redux Toolkit", "RTK Query"],
  },
  {
    period: "Apr 2024 — Aug 2024",
    company: "Appium Logics Solution",
    role: "React.js Developer",
    mode: "Remote",
    summary:
      "Designed and built the company's website, which is still live, alongside client work.",
    points: [
      "Designed user interfaces and optimised web performance.",
      "Built fast, responsive applications with HTML, CSS, JavaScript and React.",
    ],
    stack: ["React", "JavaScript", "HTML", "CSS"],
  },
  {
    period: "May 2023 — Aug 2023",
    company: "Bytewise Limited",
    role: "Frontend Developer Intern",
    mode: "Remote",
    summary: "First professional role: responsive web applications built in a collaborative team.",
    points: [
      "Built user-friendly, responsive interfaces across several projects.",
      "Met every project deadline, including tight ones.",
    ],
    stack: ["JavaScript", "React", "CSS"],
  },
];

// Product work from the CV. No screenshots, since these are company products.
export const caseStudies = [
  {
    index: "A",
    title: "EveryClinic",
    kind: "Healthcare SaaS platform",
    context: "31 Green · Next.js Developer",
    intro:
      "A clinic platform split into Admin, Practice and Patient portals. I worked across all three, from booking to payouts.",
    modules: [
      ["Appointments", "Booking, scheduling, filtering, search and status workflows."],
      ["Dentist calendar", "Calendar-based scheduling and availability management."],
      ["Clinics & services", "Clinic, practitioner, featured service and service modules."],
      ["Vouchers", "Voucher creation, validation and discount rules."],
      ["Stripe", "Payment and payout workflows."],
      ["Access", "Authentication, protected routes and role-based access."],
    ],
    stack: ["Next.js", "TypeScript", "Redux Toolkit", "Stripe"],
  },
  {
    index: "B",
    title: "Lead Finder",
    kind: "Zoho Marketplace extension",
    context: "Zenith Innovations · Frontend Developer",
    intro:
      "A Zoho CRM extension for finding leads. I built the complete frontend, from search to LinkedIn activity views.",
    modules: [
      ["Complete UI", "The whole interface, designed to stay clean and quick to scan."],
      ["LinkedIn data", "Real-time profiles, posts and job information from LinkedIn data APIs."],
      ["Lead insights", "Layouts that make lead and activity data easy to read."],
      ["Performance", "Fast loading, smooth transitions and loading states."],
    ],
    stack: ["React", "Context API", "Zoho CRM"],
  },
  {
    index: "C",
    title: "Preplify",
    kind: "AI interview assistant",
    context: "Frontend UI",
    intro:
      "An AI-based interview preparation platform. I turned its interview-prep workflows into a clear, responsive interface.",
    modules: [
      ["Frontend UI", "Clean layout focused on the person preparing."],
      ["Components", "Scalable, maintainable components built with the product team."],
      ["Responsive", "Works the same on desktop and mobile."],
    ],
    stack: ["React", "Responsive UI"],
  },
];

// Personal and freelance builds with screenshots and links.
export const builds = [
  {
    title: "SmartCricket",
    note: "Final year project",
    desc: "Match analysis, player comparison and team rankings. Designed in Figma, built with React and Flask.",
    stack: "React · Flask · MySQL · Tailwind",
    image: "/images/work/smartcricket.jpg",
    url: "https://smartcricket.netlify.app/",
  },
  {
    title: "Appium Logics Solutions",
    note: "Company website · Live",
    desc: "Designed and built during my time at Appium. Still serving the company today.",
    stack: "React · CSS",
    image: "/images/work/appium.jpg",
    url: "https://appiumlogicssolutions.com/",
  },
  {
    title: "BookStore",
    note: "MERN app",
    desc: "Bookstore with backend data on the frontend and login / logout authentication.",
    stack: "MongoDB · Express · React · Node",
    image: "/images/work/bookstore.jpg",
    url: "https://bookstore-xi-gilt.vercel.app/",
  },
  {
    title: "The Chillis",
    note: "Food ordering",
    desc: "Food ordering frontend with Redux Toolkit, built to practise Stripe integration.",
    stack: "React · Redux Toolkit",
    image: "/images/work/chillis.jpg",
    url: "https://food-store-rust.vercel.app/",
  },
  {
    title: "Recipe Finder",
    note: "MERN app",
    desc: "Recipes from a food API with favourites, filters and protected routes.",
    stack: "MERN · Redux Toolkit",
    image: "/images/work/homechef.jpg",
    url: "https://github.com/chuzairnisar425/recipe-app",
  },
  {
    title: "Movie Finder",
    note: "API app",
    desc: "Search and filter movies through a public movie API.",
    stack: "React · REST API",
    image: "/images/work/moviefinder.jpg",
    url: "https://filmfinder12.netlify.app/",
  },
  {
    title: "Deliveroo Food",
    note: "Food sharing",
    desc: "Discover foods, share recipes and interact with other food lovers.",
    stack: "React",
    image: "/images/work/delievero.jpg",
    url: "https://deliveroofood.netlify.app/",
  },
  {
    title: "Weather Forecast",
    note: "API app",
    desc: "Real-time weather, forecasts and alerts for your location.",
    stack: "JavaScript · Weather API",
    image: "/images/work/weather.jpg",
    url: "https://github.com/chuzairnisar425/weatherApp",
  },
  {
    title: "Cricket Platform UI",
    note: "Figma design",
    desc: "The screen designs for the cricket platform, from teams to predictions.",
    stack: "Figma",
    image: "/images/work/cricket.jpg",
    url: "https://www.figma.com/design/mAXr4EixQ3cOatq4KAoqV9/Fyp-Screens?node-id=0-1&t=jncBMdq1Jo7SGvby-1",
  },
];

export const capabilities = [
  {
    title: "Frontend architecture",
    text: "Component systems that stay maintainable as a product grows, in React, Next.js or Vue.",
    proof: ["Reusable component libraries", "Redux Toolkit, RTK Query, Pinia, Context", "Performance and load-time work"],
  },
  {
    title: "Full-stack product features",
    text: "Features that cross the API boundary: auth, scheduling, payments and the logic around them.",
    proof: ["REST API integration", "Stripe and GoCardless webhooks", "Role-based access and protected routes"],
  },
  {
    title: "Design to code",
    text: "Interfaces designed in Figma and shipped as responsive, accessible UI.",
    proof: ["Figma to production", "Responsive across devices", "Motion that supports the content"],
  },
];

export const toolkit = [
  { group: "Languages", items: ["JavaScript", "TypeScript", "HTML5", "CSS3"] },
  { group: "Frameworks", items: ["React", "Next.js", "Vue.js", "Nuxt.js"] },
  { group: "State & data", items: ["Redux Toolkit", "RTK Query", "React Query", "Context API", "Pinia", "REST APIs"] },
  { group: "UI systems", items: ["Tailwind CSS", "Material UI", "Vuetify", "Bootstrap", "DaisyUI", "Aceternity UI", "Framer Motion"] },
  { group: "Backend & data", items: ["Node.js", "Express", "MongoDB", "Flask", "MySQL"] },
  { group: "Payments", items: ["Stripe", "GoCardless"] },
  { group: "Workflow", items: ["Git", "GitHub", "Bitbucket", "Jira", "Agile / Scrum", "Figma"] },
];

export const education = {
  degree: "BS Software Engineering",
  school: "NUML, Islamabad",
  years: "2021 — 2025",
};

export const milestones = [
  {
    title: "IBM Certified: Front-End Development with React",
    tag: "Certificate",
    image: "/images/work/ibm.jpg",
    url: "https://www.linkedin.com/posts/muhammad-uzair-nisar_front-end-development-with-react-was-issued-activity-7084489366198267905-Y9Gb",
  },
  {
    title: "Microsoft Learn Student Ambassador: Beta",
    tag: "Community",
    image: "/images/work/mlsa-beta.jpg",
    url: "https://www.linkedin.com/posts/muhammad-uzair-nisar_ascending-to-beta-level-activity-7191870403177234433-Z-zN",
  },
  {
    title: "Microsoft Learn Student Ambassador: Alpha",
    tag: "Community",
    image: "/images/work/mlsa-alpha.jpg",
    url: "https://www.linkedin.com/posts/muhammad-uzair-nisar_mlsa-alphamilestone-techjourney-activity-7142574768112803840-rHAL",
  },
  {
    title: "Joined Microsoft Learn Student Ambassadors",
    tag: "Community",
    image: "/images/work/mlsa.jpg",
    url: "https://www.linkedin.com/posts/muhammad-uzair-nisar_microsoftlearnstudentambassador-mlsa-techcommunity-activity-7136594516949544960-xr_C",
  },
  {
    title: "Frontend internship at Bytewise",
    tag: "Internship",
    image: "/images/work/bytewise.jpg",
    url: "https://www.linkedin.com/posts/muhammad-uzair-nisar_bytewise-frontenddevelopment-intenship-activity-7087008852897931264-kaE2",
  },
];
