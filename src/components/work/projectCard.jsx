import { ExternalLink, Lock } from "lucide-react";
import { FaGithub } from "react-icons/fa";

// Fallback thumbnail when no image is provided
function ProjectThumbnail({ image, title, gradient }) {
  if (image) {
    return (
      <img
        src={image}
        alt={`${title} screenshot`}
        className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
        onError={e => {
          e.currentTarget.style.display = "none";
          e.currentTarget.nextSibling.style.display = "flex";
        }}
      />
    );
  }
  return null;
}

function FallbackThumbnail({ title, gradient }) {
  const initials = title
    .split(/\s+/)
    .map(w => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div
      className="w-full h-full flex flex-col items-center justify-center gap-3"
      style={{ background: gradient }}
    >
      <div
        className="w-16 h-16 rounded-2xl flex items-center justify-center text-xl font-black text-white/90"
        style={{ background: "rgba(0,0,0,0.3)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.1)" }}
      >
        {initials}
      </div>
      <span className="text-xs text-white/30 tracking-widest uppercase">Preview unavailable</span>
    </div>
  );
}

// Status badge config
const statusConfig = {
  live:          { label: "Live",           color: "#4ade80", bg: "rgba(74,222,128,0.1)",  border: "rgba(74,222,128,0.25)" },
  development:   { label: "In Development", color: "#fb923c", bg: "rgba(251,146,60,0.1)",  border: "rgba(251,146,60,0.25)" },
  nda:           { label: "Under NDA",      color: "#94a3b8", bg: "rgba(148,163,184,0.1)", border: "rgba(148,163,184,0.2)" },
  archived:      { label: "Archived",       color: "#6b7280", bg: "rgba(107,114,128,0.1)", border: "rgba(107,114,128,0.2)" },
};

// Type badge config
const typeConfig = {
  personal:     { label: "Personal",     color: "#4ade80", bg: "rgba(74,222,128,0.08)",  border: "rgba(74,222,128,0.2)"  },
  freelance:    { label: "Freelance",    color: "#818cf8", bg: "rgba(129,140,248,0.08)", border: "rgba(129,140,248,0.2)" },
  professional: { label: "Professional", color: "#38bdf8", bg: "rgba(56,189,248,0.08)",  border: "rgba(56,189,248,0.2)"  },
};

export default function ProjectCard({ project, index }) {
  const {
    title,
    subtitle,
    description,
    image,
    gradient = "linear-gradient(135deg, #1a0a05 0%, #3d1505 50%, #1a0a05 100%)",
    tech = [],
    github,
    live,
    type = "personal",
    status = "live",
    featured = false,
  } = project;

  const statusCfg = statusConfig[status] || statusConfig.live;
  const typeCfg   = typeConfig[type]     || typeConfig.personal;
  const hasGithub = github && status !== "nda";

  return (
    <div
      className="group relative flex flex-col rounded-2xl overflow-hidden transition-all duration-500"
      style={{
        background: "rgba(255,255,255,0.02)",
        border: "1px solid rgba(255,255,255,0.07)",
        boxShadow: "0 0 0 0 rgba(194,65,12,0)",
        animationDelay: `${index * 100}ms`,
      }}
      onMouseEnter={e => {
        e.currentTarget.style.border = "1px solid rgba(194,65,12,0.22)";
        e.currentTarget.style.boxShadow = "0 20px 60px rgba(0,0,0,0.4), 0 0 0 1px rgba(194,65,12,0.1)";
        e.currentTarget.style.transform = "translateY(-4px)";
      }}
      onMouseLeave={e => {
        e.currentTarget.style.border = "1px solid rgba(255,255,255,0.07)";
        e.currentTarget.style.boxShadow = "0 0 0 0 rgba(194,65,12,0)";
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      {/* Top accent line on hover */}
      <div
        className="absolute top-0 left-0 right-0 h-px z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: "linear-gradient(to right, transparent, rgba(194,65,12,0.8), transparent)" }}
      />

      {/* Thumbnail */}
      <div className="relative w-full h-48 overflow-hidden bg-[#111] shrink-0">
        {image ? (
          <>
            <ProjectThumbnail image={image} title={title} gradient={gradient} />
            <div
              id={`fallback-${title}`}
              className="w-full h-full hidden flex-col items-center justify-center gap-3 absolute inset-0"
              style={{ background: gradient }}
            >
              <FallbackThumbnail title={title} gradient={gradient} />
            </div>
          </>
        ) : (
          <FallbackThumbnail title={title} gradient={gradient} />
        )}

        {/* Gradient overlay at bottom of image */}
        <div
          className="absolute inset-x-0 bottom-0 h-20 pointer-events-none"
          style={{ background: "linear-gradient(to top, rgba(10,10,10,0.9) 0%, transparent 100%)" }}
        />

        {/* Badges overlaid on image */}
        <div className="absolute top-3 left-3 flex gap-2 z-10">
          <span
            className="text-[11px] font-semibold px-2.5 py-1 rounded-full"
            style={{ color: typeCfg.color, background: typeCfg.bg, border: `1px solid ${typeCfg.border}` }}
          >
            {typeCfg.label}
          </span>
        </div>

        {status !== "live" && (
          <div className="absolute top-3 right-3 z-10">
            <span
              className="text-[11px] font-semibold px-2.5 py-1 rounded-full flex items-center gap-1.5"
              style={{ color: statusCfg.color, background: statusCfg.bg, border: `1px solid ${statusCfg.border}` }}
            >
              {status === "nda" && <Lock size={9} />}
              {statusCfg.label}
            </span>
          </div>
        )}

        {/* Featured star */}
        {featured && (
          <div
            className="absolute bottom-3 right-3 z-10 text-[10px] font-bold px-2 py-0.5 rounded-full"
            style={{ background: "rgba(194,65,12,0.2)", border: "1px solid rgba(194,65,12,0.4)", color: "#fb923c" }}
          >
            ★ Featured
          </div>
        )}
      </div>

      {/* Card body */}
      <div className="flex flex-col flex-1 p-5">
        {/* Title + subtitle */}
        <div className="mb-3">
          <h3
            className="text-white font-black text-lg leading-tight"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            {title}
          </h3>
          {subtitle && (
            <p className="text-xs mt-0.5 font-semibold" style={{ color: "#c2410c" }}>
              {subtitle}
            </p>
          )}
        </div>

        {/* Description */}
        <p
          className="text-[13px] leading-relaxed flex-1 mb-4"
          style={{ color: "rgba(255,255,255,0.4)" }}
        >
          {description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {tech.map(t => (
            <span
              key={t}
              className="text-[11px] font-medium px-2.5 py-1 rounded-md"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                color: "rgba(255,255,255,0.45)",
              }}
            >
              {t}
            </span>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px mb-4" style={{ background: "rgba(255,255,255,0.05)" }} />

        {/* Links */}
        <div className="flex items-center gap-3">
          {hasGithub && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-semibold transition-colors duration-200"
              style={{ color: "rgba(255,255,255,0.35)" }}
              onMouseEnter={e => e.currentTarget.style.color = "#fff"}
              onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.35)"}
            >
              <FaGithub size={14} />
              Source
            </a>
          )}

          {status === "nda" && (
            <span
              className="flex items-center gap-1.5 text-xs font-semibold"
              style={{ color: "rgba(255,255,255,0.2)" }}
            >
              <Lock size={13} />
              Private repo
            </span>
          )}

          {live && status !== "development" && (
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-auto flex items-center gap-1.5 text-xs font-bold px-4 py-2 rounded-full transition-all duration-200"
              style={{
                background: "rgba(194,65,12,0.15)",
                border: "1px solid rgba(194,65,12,0.3)",
                color: "#fb923c",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = "#c2410c";
                e.currentTarget.style.color = "#fff";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = "rgba(194,65,12,0.15)";
                e.currentTarget.style.color = "#fb923c";
              }}
            >
              <ExternalLink size={12} />
              Live Site
            </a>
          )}

          {status === "development" && (
            <span
              className="ml-auto text-xs font-semibold px-3 py-1.5 rounded-full"
              style={{ background: "rgba(251,146,60,0.08)", border: "1px solid rgba(251,146,60,0.2)", color: "rgba(251,146,60,0.6)" }}
            >
              Coming soon
            </span>
          )}
        </div>
      </div>
    </div>
  );
}