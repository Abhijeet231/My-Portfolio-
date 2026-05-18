// ─── Skills data ─────────────────────────────────────────────────────────────
const skills = [
  {
    category: "Frontend",
    accent: "#c2410c",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "HTML/CSS",
      "Zustand",
      "Redux Toolkit",
    ],
  },
  {
    category: "Backend",
    accent: "#9a3412",
    items: ["Node.js", "Express.js", "REST APIs", "JWT / OAuth", "Socket.io"],
  },
  {
    category: "Databases",
    accent: "#7c2d12",
    items: ["PostgreSQL", "MongoDB", "MySQL", "Mongoose"],
  },
  {
    category: "DevOps & Tools",
    accent: "#c2410c",
    items: [
      "Git",
      "GitHub",
      "Vercel",
      "Docker",
      "Render",
      "Railway",
      "Cloudflare",
    ],
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="bg-[#0a0a0a] px-6 sm:px-10 lg:px-16 py-24">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-14">
          <span
            className="text-xs font-bold tracking-[0.2em] uppercase mb-3 block"
            style={{ color: "#c2410c" }}
          >
            Skills
          </span>
          {/* <h2
            className="text-3xl sm:text-4xl font-black text-white"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Technologies I work with
          </h2> */}

     <h2
        className="text-4xl sm:text-5xl font-black text-white leading-[1.1] tracking-tight mb-6"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        <span style={{ color: "#c2410c" }}> Technologies </span>I Work With
        <br className="hidden sm:block" />
        
      </h2>

          <p
            className="mt-2 text-sm"
            style={{ color: "rgba(255,255,255,0.3)" }}
          >
            Tools and languages I reach for to get things built.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {skills.map(({ category, items }, idx) => (
            <div
              key={category}
              className="group relative rounded-2xl p-6 overflow-hidden transition-all duration-300"
              style={{
                background: "rgba(255,255,255,0.025)",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.border = "1px solid rgba(194,65,12,0.25)";
                e.currentTarget.style.background = "rgba(194,65,12,0.04)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.border =
                  "1px solid rgba(255,255,255,0.07)";
                e.currentTarget.style.background = "rgba(255,255,255,0.025)";
              }}
            >
              {/* Subtle top accent line */}
              <div
                className="absolute top-0 left-6 right-6 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background:
                    "linear-gradient(to right, transparent, rgba(194,65,12,0.7), transparent)",
                }}
              />

              {/* Corner number */}
              <span
                className="absolute top-5 right-5 text-5xl font-black select-none pointer-events-none"
                style={{
                  color: "rgba(194,65,12,0.06)",
                  fontFamily: "'DM Sans', sans-serif",
                  lineHeight: 1,
                }}
              >
                0{idx + 1}
              </span>

              {/* Category */}
              <h3
                className="text-base font-bold text-white mb-4"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                {category}
              </h3>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs font-medium px-3 py-1.5 rounded-full transition-all duration-200"
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.09)",
                      color: "rgba(255,255,255,0.55)",
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
