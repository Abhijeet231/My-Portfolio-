import ContactForm from "../components/contact/ContactForm.jsx";
import ContactInfo from "../components/contact/ContactInfo.jsx";
import { useContactForm } from "../components/contact/useContactForm.jsx";

export default function Contact() {
  const formProps = useContactForm();

  return (
    <div className="min-h-screen bg-[#0a0a0a] relative overflow-hidden">

      {/* Ambient glow orbs */}
      <div
        className="absolute top-0 left-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(194,65,12,0.12) 0%, transparent 70%)",
          filter: "blur(60px)",
          transform: "translate(-50%, -30%)",
        }}
      />
      <div
        className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(194,65,12,0.07) 0%, transparent 70%)",
          filter: "blur(80px)",
          transform: "translate(50%, 30%)",
        }}
      />

      {/* Page header */}
      <section className="pt-32 pb-14 px-6 sm:px-10 lg:px-16 text-center relative z-10">
        <div className="max-w-2xl mx-auto">
          {/* Label */}
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-10" style={{ background: "rgba(194,65,12,0.4)" }} />
            <span className="text-xs font-bold tracking-[0.2em] uppercase" style={{ color: "#c2410c" }}>
              Contact
            </span>
            <div className="h-px w-10" style={{ background: "rgba(194,65,12,0.4)" }} />
          </div>

          {/* Headline */}
          <h1
            className="text-4xl sm:text-5xl lg:text-[56px] font-black text-white leading-[1.05] tracking-tight mb-5"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Let's Work
            <br />
            <span style={{ color: "#c2410c" }}>Together.</span>
          </h1>

          <p className="text-[15px] leading-relaxed" style={{ color: "rgba(255,255,255,0.38)" }}>
            Have a project in mind or want to discuss opportunities?<br />
            I'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Separator */}
      <div
        className="mx-6 sm:mx-10 lg:mx-16 h-px"
        style={{ background: "linear-gradient(to right, transparent, rgba(255,255,255,0.06), transparent)" }}
      />

      {/* Main content — form left, info right */}
      <section className="relative z-10 px-6 sm:px-10 lg:px-16 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8 lg:gap-12 items-start">

            {/* Left — Form */}
            <ContactForm {...formProps} />

            {/* Right — Info */}
            <ContactInfo />
          </div>
        </div>
      </section>
    </div>
  );
}