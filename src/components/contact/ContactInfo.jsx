import { Mail, Phone, MapPin, Clock, ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { X, BookOpen } from "lucide-react";

// ─── Peerlist icon ─────────────────────────────────────────────────────────────
function PeerlistIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 1.5a8.5 8.5 0 1 1 0 17 8.5 8.5 0 0 1 0-17zm-1.25 4v9h1.5v-3.25H13a3.375 3.375 0 0 0 0-6.75h-2.25zm1.5 1.5H13a1.875 1.875 0 0 1 0 3.75h-.75V9z" />
    </svg>
  );
}

const socials = [
  { icon: FaGithub,   label: "GitHub",   href: "https://github.com/Abhijeet231" },
  { icon: FaLinkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/abhijit-ghosh-63b624235/" },
  { icon: X,          label: "Twitter",  href: "https://x.com/Abhijit_091" },
  { icon: BookOpen,   label: "Medium",   href: "https://medium.com/@Abhi_23" },
  { icon: null,       label: "Peerlist", href: "https://peerlist.io/abhijeet_23/resume" },
];

const contactDetails = [
  {
    icon: Mail,
    label: "Email",
    value: "abhijeetghosh@example.com", // replace with your real email
    href: "mailto:abhijeetghosh@example.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 00000 00000", // replace with your real number
    href: "tel:+910000000000",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "India · Remote",
    href: null,
  },
];

// ─── Contact detail row ───────────────────────────────────────────────────────
function DetailRow({ icon: Icon, label, value, href }) {
  const inner = (
    <div
      className="group flex items-center gap-4 p-4 rounded-xl transition-all duration-200"
      style={{
        background: "rgba(255,255,255,0.02)",
        border: "1px solid rgba(255,255,255,0.05)",
      }}
      onMouseEnter={e => {
        if (href) {
          e.currentTarget.style.background = "rgba(194,65,12,0.07)";
          e.currentTarget.style.borderColor = "rgba(194,65,12,0.2)";
        }
      }}
      onMouseLeave={e => {
        e.currentTarget.style.background = "rgba(255,255,255,0.02)";
        e.currentTarget.style.borderColor = "rgba(255,255,255,0.05)";
      }}
    >
      {/* Icon box */}
      <div
        className="flex items-center justify-center w-10 h-10 rounded-xl shrink-0"
        style={{
          background: "rgba(194,65,12,0.12)",
          border: "1px solid rgba(194,65,12,0.2)",
          color: "#c2410c",
        }}
      >
        <Icon size={16} />
      </div>

      <div className="flex-1 min-w-0">
        <p className="text-[10px] font-bold tracking-[0.18em] uppercase mb-0.5" style={{ color: "rgba(255,255,255,0.28)" }}>
          {label}
        </p>
        <p className="text-sm font-medium text-white truncate">{value}</p>
      </div>

      {href && (
        <ArrowUpRight
          size={14}
          className="shrink-0 opacity-0 group-hover:opacity-100 transition-opacity"
          style={{ color: "#c2410c" }}
        />
      )}
    </div>
  );

  return href ? (
    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
      {inner}
    </a>
  ) : (
    inner
  );
}

// ─── ContactInfo ──────────────────────────────────────────────────────────────
export default function ContactInfo() {
  return (
    <div className="flex flex-col gap-6">

      {/* Heading block */}
      <div>
        <p className="text-[11px] font-bold tracking-[0.2em] uppercase mb-1" style={{ color: "#c2410c" }}>
          Get in Touch
        </p>
        <h3
          className="text-2xl font-black text-white mb-3"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          Always open to<br />new opportunities
        </h3>
        <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.38)" }}>
          Whether you have a project in mind, want to collaborate, or just want to say hi — I'd love to hear from you. Let's build something great together.
        </p>
      </div>

      {/* Contact details */}
      <div className="flex flex-col gap-2.5">
        {contactDetails.map(item => (
          <DetailRow key={item.label} {...item} />
        ))}
      </div>

      {/* Divider */}
      <div className="h-px" style={{ background: "rgba(255,255,255,0.06)" }} />

      {/* Socials */}
      <div>
        <p className="text-[11px] font-bold tracking-[0.18em] uppercase mb-3" style={{ color: "rgba(255,255,255,0.28)" }}>
          Follow my work
        </p>
        <div className="flex items-center gap-2.5">
          {socials.map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="group relative flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-200"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.07)",
                color: "rgba(255,255,255,0.4)",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = "rgba(194,65,12,0.18)";
                e.currentTarget.style.borderColor = "rgba(194,65,12,0.4)";
                e.currentTarget.style.color = "#fb923c";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
                e.currentTarget.style.color = "rgba(255,255,255,0.4)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              {Icon ? <Icon size={16} /> : <PeerlistIcon size={16} />}

              {/* Tooltip */}
              <span
                className="absolute -top-8 left-1/2 -translate-x-1/2 text-[10px] font-medium px-2 py-0.5 rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                style={{ background: "#1a1a1a", border: "1px solid rgba(255,255,255,0.1)", color: "#ccc" }}
              >
                {label}
              </span>
            </a>
          ))}
        </div>
      </div>

      {/* Quick response badge */}
      <div
        className="flex items-start gap-3 p-4 rounded-xl"
        style={{
          background: "rgba(194,65,12,0.06)",
          border: "1px solid rgba(194,65,12,0.15)",
        }}
      >
        <div
          className="flex items-center justify-center w-8 h-8 rounded-lg shrink-0 mt-0.5"
          style={{ background: "rgba(194,65,12,0.15)", color: "#c2410c" }}
        >
          <Clock size={14} />
        </div>
        <div>
          <p className="text-sm font-bold text-white mb-0.5">Quick Response</p>
          <p className="text-[12px] leading-relaxed" style={{ color: "rgba(255,255,255,0.35)" }}>
            I typically reply within 24 hours. For urgent work, reach out via LinkedIn or email directly.
          </p>
        </div>
      </div>

      {/* Availability indicator */}
      <div className="flex items-center gap-2.5">
        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
        <span className="text-[12px] font-medium" style={{ color: "rgba(255,255,255,0.35)" }}>
          Currently available for freelance projects
        </span>
      </div>
    </div>
  );
}