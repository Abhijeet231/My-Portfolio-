import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BookOpen, X } from "lucide-react";
import { Link } from "react-router-dom";
import profilePic from "../../assets/profilePic.jpg";

// ─── Social links ─────────────────────────────────────────────────────────────
const socials = [
  { icon: FaGithub,   label: "GitHub",   href: "https://github.com/Abhijeet231" },
  { icon: FaLinkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/abhijit-ghosh-63b624235/" },
  { icon: X,          label: "Twitter",  href: "https://x.com/Abhijit_091" },
  { icon: BookOpen,   label: "Medium",   href: "https://medium.com/@Abhi_23" },
  { icon: null,       label: "Peerlist", href: "https://peerlist.io/abhijeet_23/resume" },
];

// ─── Peerlist icon ────────────────────────────────────────────────────────────
function PeerlistIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 1.5a8.5 8.5 0 1 1 0 17 8.5 8.5 0 0 1 0-17zm-1.25 4v9h1.5v-3.25H13a3.375 3.375 0 0 0 0-6.75h-2.25zm1.5 1.5H13a1.875 1.875 0 0 1 0 3.75h-.75V9z"/>
    </svg>
  );
}

// ─── Profile Card ─────────────────────────────────────────────────────────────
export const ProfileCard = () => {
  return (
    <div className="relative shrink-0 w-full max-w-75 mx-auto lg:mx-0">

      {/* Outer ambient glow */}
      <div
        className="absolute -inset-4 rounded-3xl opacity-20 blur-2xl pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 50% 30%, rgba(194,65,12,0.9) 0%, transparent 70%)" }}
      />

      {/* Card */}
      <div
        className="relative rounded-3xl overflow-hidden"
        style={{
          background: "#141414",
          border: "1px solid rgba(255,255,255,0.07)",
          boxShadow: "0 32px 64px rgba(0,0,0,0.6), 0 0 0 1px rgba(194,65,12,0.1)",
        }}
      >

        {/* ── Photo area ── */}
        <div className="relative w-full" style={{ height: "320px" }}>
          {/* Fallback gradient bg */}
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(160deg, #3d1a05 0%, #1a0a02 100%)" }}
          />

          {/* Profile photo */}
          <img
            src={profilePic}
            alt="Abhijeet Ghosh"
            className="absolute inset-0 w-full h-full object-cover object-top"
            style={{ display: "block" }}
            onError={e => { e.currentTarget.style.display = "none"; }}
          />

          {/* Bottom fade — blends photo into card body */}
          <div
            className="absolute bottom-0 left-0 right-0 h-28 pointer-events-none"
            style={{
              background: "linear-gradient(to bottom, transparent 0%, #141414 100%)",
            }}
          />

          {/* Availability badge — floats on photo */}
          <div className="absolute top-4 right-4">
            <div
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-semibold"
              style={{
                background: "rgba(0,0,0,0.55)",
                border: "1px solid rgba(74,222,128,0.3)",
                color: "#4ade80",
                backdropFilter: "blur(8px)",
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              Available
            </div>
          </div>
        </div>

        {/* ── Card body ── */}
        <div className="px-6 pb-6 -mt-2">

          {/* Name + role */}
          <h3
            className="text-white text-2xl leading-tight font-semibold mt-4"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Abhijeet Ghosh
          </h3>

          <p
            className="mt-1 text-sm font-medium"
            style={{ color: "rgba(255,255,255,0.4)" }}
          >
            Full-Stack Developer
          </p>

          {/* Location pill */}
          <div
            className="mt-3 inline-flex items-center gap-1.5 text-[11px] font-medium"
            style={{ color: "rgba(255,255,255,0.3)" }}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
              <circle cx="12" cy="9" r="2.5"/>
            </svg>
            India · Remote
          </div>

          {/* Divider */}
          <div
            className="mt-5 mb-5 h-px"
            style={{ background: "rgba(255,255,255,0.06)" }}
          />

          {/* Social icons */}
          <div className="flex items-center gap-2.5 mb-6">
            {socials.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="group relative flex items-center justify-center w-9 h-9 rounded-xl transition-all duration-200"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  color: "rgba(255,255,255,0.4)",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = "rgba(194,65,12,0.2)";
                  e.currentTarget.style.borderColor = "rgba(194,65,12,0.5)";
                  e.currentTarget.style.color = "#fb923c";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
                  e.currentTarget.style.color = "rgba(255,255,255,0.4)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                {Icon ? <Icon size={15} /> : <PeerlistIcon size={15} />}

                {/* Tooltip */}
                <span
                  className="absolute -top-8 left-1/2 -translate-x-1/2 text-[10px] font-medium px-2 py-0.5 rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                  style={{ background: "#222", border: "1px solid rgba(255,255,255,0.08)", color: "#ccc" }}
                >
                  {label}
                </span>
              </a>
            ))}
          </div>

          {/* CTA button */}
          <Link
            to="/contact"
            className="block w-full text-center text-sm font-bold py-3.5 rounded-2xl transition-all duration-200"
            style={{
              background: "linear-gradient(135deg, #c2410c 0%, #9a3412 100%)",
              color: "#fff",
              boxShadow: "0 8px 24px rgba(194,65,12,0.35)",
              letterSpacing: "0.02em",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = "linear-gradient(135deg, #b53d0c 0%, #8a2e10 100%)";
              e.currentTarget.style.boxShadow = "0 12px 32px rgba(194,65,12,0.5)";
              e.currentTarget.style.transform = "translateY(-1px)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = "linear-gradient(135deg, #c2410c 0%, #9a3412 100%)";
              e.currentTarget.style.boxShadow = "0 8px 24px rgba(194,65,12,0.35)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            Let's Talk →
          </Link>
        </div>
      </div>
    </div>
  );
};