import { useEffect, useState } from "react";

function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  const handleScrollDown = () => {
    const next = document.querySelector("#about");
    if (next) next.scrollIntoView({ behavior: "smooth" });
    else window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
  };

  return (
    <>
      <section className="relative min-h-screen bg-[#0a0a0a] flex flex-col items-center justify-center px-6 overflow-hidden">
        {/* Subtle radial glow behind the heading */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 45% at 50% 40%, rgba(194,65,12,0.13) 0%, transparent 70%)",
            //             background: `
            //   radial-gradient(circle at 50% 40%, rgba(148,163,184,0.10) 0%, transparent 35%),
            //   radial-gradient(circle at 50% 40%, rgba(255,255,255,0.04) 0%, transparent 60%)
            // `,
          }}
        />

        {/* Grain texture overlay */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E\")",
            backgroundSize: "200px 200px",
          }}
        />

        {/* Glassmorphism depth card */}
        <div
          className={`relative z-10 w-full max-w-3xl text-center transition-all duration-1000 ease-out ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{
            background:
              "radial-gradient(ellipse 100% 80% at 50% 50%, rgba(255,255,255,0.03) 0%, transparent 70%)",
            borderRadius: "2rem",
          }}
        >
          {/* Name */}
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-medium text-white leading-tight tracking-tight mb-5">
            Abhijeet Ghosh
          </h1>

          {/* Title */}
          <div
            className={`transition-all duration-1000 delay-200 ease-out ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <p
              className="text-lg sm:text-xl text-gray-400 font-medium tracking-wide mb-1"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Full-Stack Software Developer
            </p>
            <p
              className="text-base sm:text-lg font-semibold"
              style={{ color: "#c2410c", fontFamily: "'DM Sans', sans-serif" }}
            >
            Open to impactful work
            </p>
          </div>

          {/* Tagline */}
          <p
            className={`mt-6 text-gray-400 text-sm sm:text-base leading-relaxed max-w-xl mx-auto px-2 transition-all duration-1000 delay-300 ease-out ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
           Passionate about building products that solve real problems
          </p>

          {/* Buttons */}
          <div
            className={`mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-1000 delay-500 ease-out ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <a
              href="#work"
              className="bg-orange-700 hover:bg-orange-600 active:scale-95 text-white font-bold text-sm px-7 py-3.5 rounded-full transition-all duration-200 shadow-lg shadow-orange-900/30 hover:shadow-orange-700/40 w-full sm:w-auto text-center"
            >
              View My Work
            </a>
            <a
              href="https://drive.google.com/file/d/1E83v2s3RzFkOa_JbCHwPq47tuaD1VwNC/view"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 active:scale-95 text-white font-bold text-sm px-7 py-3.5 rounded-full transition-all duration-200 w-full sm:w-auto text-center"
            >
              Download Resume
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={handleScrollDown}
          className={`absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 hover:text-gray-300 transition-all duration-300 group z-10 ${
            visible ? "opacity-100" : "opacity-0"
          }`}
          style={{ transitionDelay: "900ms" }}
          aria-label="Scroll down"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="animate-bounce"
          >
            <line x1="12" y1="5" x2="12" y2="19" />
            <polyline points="19 12 12 19 5 12" />
          </svg>
          <span
            className="text-xs tracking-widest uppercase"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              letterSpacing: "0.15em",
            }}
          >
            Scroll to explore
          </span>
        </button>
      </section>
    </>
  );
}

export default Hero;
