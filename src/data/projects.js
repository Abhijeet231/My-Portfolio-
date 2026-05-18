import tokenmitraImg from "../assets/projects/tokenmitra.png";
import quickserveImg from "../assets/projects/quick-serve.png";

export const projects = [
  {
    title: "Restaurant Management System",
    subtitle: "@ Food Junction",
    description:
      "A restaurant management system built to streamline daily operations - including client management, employee payroll, order tracking, and overall business workflow through a centralized dashboard.",
    image: null, // replace with screenshot path e.g. "/projects/robogpt.png"
    gradient: "linear-gradient(135deg, #0a0a1a 0%, #1a1a3d 40%, #0d0d1a 100%)",
    tech: ["React", "Node.js", "OpenAI", "WebSockets", "Express.js", "MongoDB"],
    github: null,
    live: null,
    type: "professional",
    status: "nda",
    featured: true,
  },
  {
    title: "Quick Serve",
    subtitle: "Client project",
    description:
      "A local service provider platform that helps users to book services.",
    image: quickserveImg, // replace with "/projects/quick-serve.png"
    gradient: "linear-gradient(135deg, #071a0f 0%, #0f3320 40%, #071a0f 100%)",
    tech: ["Next.js", "Node.js", "PostgreSQL", "Tailwind CSS", "Cloudinary"],
    github: "https://github.com/Abhijeet231/QuickServe",
    live: "https://quickserve.tokenmitra.online/",
    type: "freelance",
    status: "live",
    featured: true,
  },
  {
    title: "TokenMitra",
    subtitle: "Personal project",
    description:
      "A Queue Managment & appointment automation system for medical clinics. Build to reduce long waiting queues and improve patient experience. Features real-time updates, doctor dashboards, and In-Mail notifications.",
    image: tokenmitraImg, // replace with "/projects/tokenmitra.png"
    gradient: "linear-gradient(135deg, #1a0a00 0%, #3d1a00 40%, #1a0800 100%)",
    tech: ["React", "Express.js", "MongoDB", "Tailwind CSS", "JWT"],
    github: "https://github.com/Abhijeet231/Token_Mitra", // replace with real URL
    live: "https://www.tokenmitra.online/", // replace with real URL
    type: "personal",
    status: "live",
    featured: false,
  },
];
