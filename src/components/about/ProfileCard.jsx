import { FaGithub, FaLinkedin } from "react-icons/fa";
import {  BookOpen, X } from "lucide-react";// ─── Social links ───────────────────────────────────────────────────────────
import profilePic from "../../assets/profilePic.jpg"

const socials = [
  { icon: FaGithub,    label: "GitHub",    href: "https://github.com/Abhijeet231" },
  { icon: FaLinkedin,  label: "LinkedIn",  href: "https://www.linkedin.com/in/abhijit-ghosh-63b624235/" },
  { icon: X,   label: "Twitter",   href: "https://x.com/Abhijit_091" },
  { icon: BookOpen,  label: "Medium",    href: "https://medium.com/@Abhi_23" },
  // Peerlist — custom SVG since lucide doesn't have it
  { icon: null,      label: "Peerlist",  href: "https://peerlist.io/abhijeet_23/resume" },
];



// ─── Peerlist icon SVG ────────────────────────────────────────────────────────
function PeerlistIcon({ size = 18 }) {
  return ( 
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 1.5a8.5 8.5 0 1 1 0 17 8.5 8.5 0 0 1 0-17zm-1.25 4v9h1.5v-3.25H13a3.375 3.375 0 0 0 0-6.75h-2.25zm1.5 1.5H13a1.875 1.875 0 0 1 0 3.75h-.75V9z"/>
    </svg>
  );
}

export const ProfileCard = () => {
  return (
    
        
    <div className="relative shrink-0 w-full max-w-75 mx-auto lg:mx-0">
      {/* Decorative corner accents */}
      <div className="absolute -top-3 -left-3 w-10 h-10 border-t-2 border-l-2 border-orange-700 rounded-tl-xl opacity-70" />
      <div className="absolute -bottom-3 -right-3 w-10 h-10 border-b-2 border-r-2 border-orange-700 rounded-br-xl opacity-70" />

      {/* Outer glow ring */}
      <div
        className="absolute inset-0 rounded-2xl opacity-30 blur-xl"
        style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(194,65,12,0.6) 0%, transparent 70%)" }}
      />

      {/* Card body */}
      <div
        className="relative rounded-2xl overflow-hidden"
        style={{
          background: "linear-gradient(145deg, #1a1a1a 0%, #111 60%, #0f0f0f 100%)",
          border: "1px solid rgba(255,255,255,0.08)",
          boxShadow: "0 0 0 1px rgba(194,65,12,0.15), 0 24px 48px rgba(0,0,0,0.5)",
        }}
      >
        {/* Image area */}
        <div className="relative w-full aspect-4/5 bg-[#1c1c1c] overflow-hidden">
          {/* Orange gradient bg behind placeholder */}
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(160deg, #c2410c 0%, #7c2d12 50%, #1a0a05 100%)",
            }}
          />

          {/* Placeholder silhouette */}
          <div className="absolute inset-0 flex items-end justify-center">
            <div
              className="w-44 h-52 rounded-t-full opacity-20"
              style={{ background: "rgba(0,0,0,0.7)" }}
            />
          </div>

          {/* Initials overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span
              className="text-7xl font-black text-white/10 select-none"
              style={{ fontFamily: "'DM Sans', sans-serif", letterSpacing: "-4px" }}
            >
              AG
            </span>
          </div>

          {/* "Replace with photo" hint */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center">
            <span className="text-[11px] text-white/30 tracking-widest uppercase">
              <img src= {profilePic} alt="Profile image"/>
            </span>
          </div>
        </div>

        {/* Card info */}
        <div className="px-5 pt-5 pb-6">
          {/* Name */}
          <h3
            className="text-white font-black text-xl leading-tight"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Abhijeet Ghosh
          </h3>

          {/* Role badge */}
          <div className="mt-2 inline-flex items-center gap-1.5">
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: "#c2410c" }}
            />
            <span
              className="text-xs font-semibold tracking-widest uppercase"
              style={{ color: "#c2410c" }}
            >
              Full-Stack Developer
            </span>
          </div>

          {/* Availability pill */}
          <div
            className="mt-3 inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium"
            style={{
              background: "rgba(194,65,12,0.12)",
              border: "1px solid rgba(194,65,12,0.25)",
              color: "#fb923c",
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            Available for projects
          </div>

          {/* Divider */}
          <div
            className="mt-4 mb-4 h-px"
            style={{ background: "linear-gradient(to right, rgba(194,65,12,0.4), transparent)" }}
          />

          {/* Social links */}
          <div className="flex items-center gap-3">
            {socials.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="group relative flex items-center justify-center w-8 h-8 rounded-lg transition-all duration-200"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = "rgba(194,65,12,0.18)";
                  e.currentTarget.style.borderColor = "rgba(194,65,12,0.4)";
                  e.currentTarget.style.color = "#fb923c";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                  e.currentTarget.style.color = "";
                }}
              >
                <span className="text-gray-500 group-hover:text-orange-400 transition-colors">
                  {Icon ? <Icon size={15} /> : <PeerlistIcon size={15} />}
                </span>
                {/* Tooltip */}
                <span
                  className="absolute -top-7 left-1/2 -translate-x-1/2 text-[10px] font-medium px-1.5 py-0.5 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                  style={{ background: "#1a1a1a", border: "1px solid rgba(255,255,255,0.1)", color: "#ccc" }}
                >
                  {label}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
