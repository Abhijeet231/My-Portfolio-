import { ExternalLink } from "lucide-react";




export const Story = () => {
  return (
    <div className="flex-1 flex flex-col justify-center">
      {/* Section label */}
      <div className="flex items-center gap-3 mb-6">
        <span
          className="text-xs font-bold tracking-[0.2em] uppercase"
          style={{ color: "#c2410c" }}
        >
          About Me
        </span>
        <div className="h-px flex-1 max-w-15" style={{ background: "rgba(194,65,12,0.4)" }} />
      </div>

      {/* Headline */}
      <h2
        className="text-4xl sm:text-5xl font-black text-white leading-[1.1] tracking-tight mb-6"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        I turn complex{" "}
        <span style={{ color: "#c2410c" }}>ideas</span>
        {" "}into{" "}
        <br className="hidden sm:block" />
        working products.
      </h2>

      {/* Story paragraphs */}
      <div className="space-y-4 text-[15px] leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
        <p>
          Hey — I'm Abhijeet, a full-stack developer based in India. I started writing
          code because I wanted to build things that actually worked, and that obsession
          never really stopped.
        </p>
        <p>
          Over the years I've helped early-stage startups go from whiteboard sketches to
          shipped MVPs — handling everything from backend architecture to polished
          front-ends. I work fast, communicate clearly, and I care about the craft.
        </p>
        <p>
          When I'm not building, I'm writing about what I learn, exploring open-source,
          or helping other developers navigate the chaos of modern web dev.
        </p>
      </div>

      {/* Stats row */}
      <div className="mt-8 grid grid-cols-3 gap-4">
        {[
          { num: "3+", label: "Years building" },
          { num: "20+", label: "Projects shipped" },
          { num: "10+", label: "Happy clients" },
        ].map(({ num, label }) => (
          <div
            key={label}
            className="rounded-xl p-4 text-center"
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <div
              className="text-2xl font-black"
              style={{ color: "#c2410c", fontFamily: "'DM Sans', sans-serif" }}
            >
              {num}
            </div>
            <div className="text-[11px] text-gray-500 mt-1 tracking-wide uppercase">{label}</div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-8 flex items-center gap-4 flex-wrap">
        <a
          href="/resume.pdf"
          download
          className="inline-flex items-center gap-2 text-sm font-bold px-5 py-2.5 rounded-full transition-all duration-200"
          style={{
            background: "#c2410c",
            color: "#fff",
            boxShadow: "0 4px 16px rgba(194,65,12,0.3)",
          }}
          onMouseEnter={e => e.currentTarget.style.background = "#b53d0c"}
          onMouseLeave={e => e.currentTarget.style.background = "#c2410c"}
        >
          <ExternalLink size={14} />
          Download Resume
        </a>
        <a
          href="#contact"
          className="text-sm font-semibold transition-colors"
          style={{ color: "rgba(255,255,255,0.4)" }}
          onMouseEnter={e => e.currentTarget.style.color = "#fff"}
          onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.4)"}
        >
          Get in touch →
        </a>
      </div>
    </div>
  );
}
