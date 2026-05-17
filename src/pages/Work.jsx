import ProjectCard from "../components/work/ProjectCard.jsx";

// ─── Projects data ────────────────────────────────────────────────────────────
// Order: Professional (NDA) first to show credibility, then polished personal projects
const projects = [
  {
    title: "RoboGPT",
    subtitle: "@ Orangewood Labs",
    description:
      "AI-powered robot programming interface built at Orangewood Labs. Enables engineers to control and program robotic arms using natural language — eliminating low-level code for non-expert users.",
    image: null, // replace with screenshot path e.g. "/projects/robogpt.png"
    gradient: "linear-gradient(135deg, #0a0a1a 0%, #1a1a3d 40%, #0d0d1a 100%)",
    tech: ["React", "Python", "OpenAI", "WebSockets", "FastAPI", "ROS"],
    github: null,
    live: null,
    type: "professional",
    status: "nda",
    featured: true,
  },
  {
    title: "Housieco",
    subtitle: "Client project",
    description:
      "Full-stack real estate platform for property booking and listing. Features advanced search filters, agent dashboards, and a smooth booking flow — built end-to-end for a client.",
    image: null, // replace with "/projects/housieco.png"
    gradient: "linear-gradient(135deg, #071a0f 0%, #0f3320 40%, #071a0f 100%)",
    tech: ["Next.js", "Node.js", "PostgreSQL", "Tailwind CSS", "Stripe", "Cloudinary"],
    github: null,
    live: null,
    type: "freelance",
    status: "live",
    featured: true,
  },
  {
    title: "SneakersHub",
    subtitle: "Personal project",
    description:
      "E-commerce platform for sneakers with a seamless shopping experience — secure payment processing, dynamic cart management, real-time inventory, and a clean product discovery UI.",
    image: null, // replace with "/projects/sneakershub.png"
    gradient: "linear-gradient(135deg, #1a0a00 0%, #3d1a00 40%, #1a0800 100%)",
    tech: ["React", "Express.js", "MongoDB", "Tailwind CSS", "Stripe", "JWT"],
    github: "https://github.com/Abhijeet231/sneakershub", // replace with real URL
    live: "https://sneakershub.vercel.app", // replace with real URL
    type: "personal",
    status: "live",
    featured: false,
  },
];

// ─── Work Page ────────────────────────────────────────────────────────────────
export default function Work() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Page header */}
      <section className="pt-32 pb-16 px-6 sm:px-10 lg:px-16">
        <div className="max-w-6xl mx-auto">
          {/* Section label */}
          <div className="flex items-center gap-3 mb-6">
            <span
              className="text-xs font-bold tracking-[0.2em] uppercase"
              style={{ color: "#c2410c" }}
            >
              Work
            </span>
            <div
              className="h-px w-12"
              style={{ background: "rgba(194,65,12,0.4)" }}
            />
          </div>

          {/* Headline */}
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.05] tracking-tight mb-6"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Things I've
            <br />
            <span style={{ color: "#c2410c" }}>built.</span>
          </h1>

          <p
            className="text-[15px] leading-relaxed max-w-xl"
            style={{ color: "rgba(255,255,255,0.38)" }}
          >
            A selection of projects — professional work, client builds, and personal
            experiments. Each one shipped with care.
          </p>

          {/* Legend */}
          <div className="mt-8 flex flex-wrap gap-4 items-center">
            {[
              { label: "Personal",     color: "#4ade80" },
              { label: "Freelance",    color: "#818cf8" },
              { label: "Professional", color: "#38bdf8" },
            ].map(({ label, color }) => (
              <div key={label} className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full" style={{ background: color }} />
                <span className="text-xs font-medium" style={{ color: "rgba(255,255,255,0.35)" }}>
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Separator */}
      <div
        className="mx-6 sm:mx-10 lg:mx-16 h-px"
        style={{ background: "linear-gradient(to right, transparent, rgba(255,255,255,0.06), transparent)" }}
      />

      {/* Projects grid */}
      <section className="px-6 sm:px-10 lg:px-16 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.map((project, idx) => (
              <ProjectCard key={project.title} project={project} index={idx} />
            ))}
          </div>

          {/* More coming soon hint */}
          <div className="mt-14 flex flex-col items-center gap-3 text-center">
            <div
              className="w-px h-10"
              style={{ background: "linear-gradient(to bottom, rgba(194,65,12,0.5), transparent)" }}
            />
            <p className="text-xs font-medium tracking-widest uppercase" style={{ color: "rgba(255,255,255,0.2)" }}>
              More projects on the way
            </p>
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section className="px-6 sm:px-10 lg:px-16 pb-24">
        <div className="max-w-6xl mx-auto">
          <div
            className="rounded-2xl p-8 sm:p-12 flex flex-col sm:flex-row items-center justify-between gap-6"
            style={{
              background: "rgba(194,65,12,0.06)",
              border: "1px solid rgba(194,65,12,0.15)",
            }}
          >
            <div>
              <h2
                className="text-xl sm:text-2xl font-black text-white mb-2"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Have a project in mind?
              </h2>
              <p className="text-sm" style={{ color: "rgba(255,255,255,0.38)" }}>
                I'm available for freelance work. Let's build something together.
              </p>
            </div>
            <a
              href="/contact"
              className="shrink-0 text-sm font-bold px-7 py-3.5 rounded-full transition-all duration-200 whitespace-nowrap"
              style={{
                background: "#c2410c",
                color: "#fff",
                boxShadow: "0 4px 20px rgba(194,65,12,0.35)",
              }}
              onMouseEnter={e => e.currentTarget.style.background = "#b53d0c"}
              onMouseLeave={e => e.currentTarget.style.background = "#c2410c"}
            >
              Let's Talk →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}