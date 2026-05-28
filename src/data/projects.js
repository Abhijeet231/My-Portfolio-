import tokenmitraImg from "../assets/projects/tokenmitra.png";
import quickserveImg from "../assets/projects/quick-serve.png";

export const projects = [
{
  title: "TurboForm",
  subtitle: "Under Development",
  description:
    "A Typeform-style form builder SaaS where creators can build dynamic forms, configure field validations, choose themes, publish and share links. Respondents can fill and submit forms without logging in. Includes response analytics, an explore page for public forms, and API documentation.",
  image: null,
  gradient: "linear-gradient(135deg, #0a0a1a 0%, #1a0a2e 40%, #0d0d1a 100%)",
  tech: ["React", "Node.js", "Express.js", "PostgreSQL", "Drizzle ORM", "TypeScript", "Zod"],
  github: "https://github.com/Abhijeet231/Turbo-Forms-v2",
  live: null,
  type: "personal",
  status: "in-progress",
  featured: true,
},
  {
    title: "Quick Serve",
    subtitle: "Personal Project",
    description:
      " A full-stack local services marketplace inspired by Urban Company, designed to connect users with nearby service providers across categories like plumbing, teaching, healthcare, repairs, and more. Users can book trusted professionals, while customers can seamlessly upgrade to become service providers. The platform includes an admin verification system, provider onboarding workflow, booking management, and role-based dashboards for users, providers, and administrators.",
    image: quickserveImg, // replace with "/projects/quick-serve.png"
    gradient: "linear-gradient(135deg, #071a0f 0%, #0f3320 40%, #071a0f 100%)",
    tech: ["Next.js", "Node.js","Express.js", "MongoDB", "Tailwind CSS", "React", "JWT"],
    github: "https://github.com/Abhijeet231/QuickServe",
    live: "https://quickserve.tokenmitra.online/",
    type: "personal",
    status: "live",
    featured: true,
  },
  {
    title: "Token Mitra",
    subtitle: "Personal Project",
    description:
      "A full-stack queue management and appointment automation platform designed for medical clinics and healthcare professionals. Patients can search for doctors, book or cancel appointments, join virtual 1-on-1 consultations, and receive real-time updates and email notifications. Doctors get a dedicated dashboard to manage availability, appointments, patient queues, and overall scheduling efficiently.",
    image: tokenmitraImg, // replace with "/projects/tokenmitra.png"
    gradient: "linear-gradient(135deg, #1a0a00 0%, #3d1a00 40%, #1a0800 100%)",
    tech: ["React","Node.js", "Express.js", "MongoDB", "Tailwind CSS", "JWT", "WebSockets"],
    github: "https://github.com/Abhijeet231/Token_Mitra", // replace with real URL
    live: "https://www.tokenmitra.online/", // replace with real URL
    type: "personal",
    status: "live",
    featured: false,
  },
];
