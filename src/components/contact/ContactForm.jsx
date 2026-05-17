import { Send, Loader2, CheckCircle2 } from "lucide-react";

// ─── Reusable field wrapper ───────────────────────────────────────────────────
function Field({ label, error, touched, children }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        className="text-[11px] font-bold tracking-[0.18em] uppercase"
        style={{ color: error && touched ? "#f87171" : "rgba(255,255,255,0.35)" }}
      >
        {label} <span style={{ color: "#c2410c" }}>*</span>
      </label>
      {children}
      <div
        className="overflow-hidden transition-all duration-200"
        style={{ maxHeight: error && touched ? "20px" : "0px", opacity: error && touched ? 1 : 0 }}
      >
        <p className="text-[11px]" style={{ color: "#f87171" }}>{error}</p>
      </div>
    </div>
  );
}

// ─── Input styles ─────────────────────────────────────────────────────────────
const inputBase = {
  background: "rgba(255,255,255,0.03)",
  border: "1px solid rgba(255,255,255,0.08)",
  color: "#fff",
  borderRadius: "12px",
  fontSize: "14px",
  outline: "none",
  transition: "border-color 0.2s, box-shadow 0.2s, background 0.2s",
  width: "100%",
};

function StyledInput({ error, touched, ...props }) {
  const hasError = error && touched;
  return (
    <input
      {...props}
      style={{
        ...inputBase,
        padding: "12px 16px",
        borderColor: hasError ? "rgba(248,113,113,0.4)" : "rgba(255,255,255,0.08)",
      }}
      onFocus={e => {
        e.target.style.borderColor = hasError ? "rgba(248,113,113,0.6)" : "rgba(194,65,12,0.5)";
        e.target.style.background  = "rgba(255,255,255,0.05)";
        e.target.style.boxShadow   = hasError
          ? "0 0 0 3px rgba(248,113,113,0.08)"
          : "0 0 0 3px rgba(194,65,12,0.08)";
      }}
      onBlur={e => {
        e.target.style.borderColor = hasError ? "rgba(248,113,113,0.4)" : "rgba(255,255,255,0.08)";
        e.target.style.background  = "rgba(255,255,255,0.03)";
        e.target.style.boxShadow   = "none";
        props.onBlur && props.onBlur(e);
      }}
    />
  );
}

function StyledTextarea({ error, touched, ...props }) {
  const hasError = error && touched;
  return (
    <textarea
      {...props}
      style={{
        ...inputBase,
        padding: "14px 16px",
        resize: "none",
        minHeight: "150px",
        borderColor: hasError ? "rgba(248,113,113,0.4)" : "rgba(255,255,255,0.08)",
        fontFamily: "inherit",
        lineHeight: "1.6",
      }}
      onFocus={e => {
        e.target.style.borderColor = hasError ? "rgba(248,113,113,0.6)" : "rgba(194,65,12,0.5)";
        e.target.style.background  = "rgba(255,255,255,0.05)";
        e.target.style.boxShadow   = hasError
          ? "0 0 0 3px rgba(248,113,113,0.08)"
          : "0 0 0 3px rgba(194,65,12,0.08)";
      }}
      onBlur={e => {
        e.target.style.borderColor = hasError ? "rgba(248,113,113,0.4)" : "rgba(255,255,255,0.08)";
        e.target.style.background  = "rgba(255,255,255,0.03)";
        e.target.style.boxShadow   = "none";
        props.onBlur && props.onBlur(e);
      }}
    />
  );
}

// ─── Character counter ────────────────────────────────────────────────────────
function CharCount({ value, min = 10, max = 1000 }) {
  const len = value.length;
  const color = len < min ? "rgba(255,255,255,0.2)" : len > max ? "#f87171" : "#4ade80";
  return (
    <span className="text-[10px] tabular-nums" style={{ color }}>
      {len}/{max}
    </span>
  );
}

// ─── ContactForm ──────────────────────────────────────────────────────────────
export default function ContactForm({
  formData, errors, touched, loading, sent,
  handleChange, handleBlur, handleSubmit,
}) {
  return (
    <div
      className="relative rounded-2xl p-8 flex flex-col gap-6"
      style={{
        background: "rgba(255,255,255,0.02)",
        border: "1px solid rgba(255,255,255,0.06)",
        boxShadow: "0 24px 48px rgba(0,0,0,0.3)",
      }}
    >
      {/* Top orange accent line */}
      <div
        className="absolute top-0 left-8 right-8 h-px"
        style={{ background: "linear-gradient(to right, transparent, rgba(194,65,12,0.6), transparent)" }}
      />

      {/* Header */}
      <div>
        <p className="text-[11px] font-bold tracking-[0.2em] uppercase mb-1" style={{ color: "#c2410c" }}>
          Send a Message
        </p>
        <h2
          className="text-2xl font-black text-white"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          Let's start a conversation
        </h2>
      </div>

      {/* Name + Email row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field label="Name" error={errors.name} touched={touched.name}>
          <StyledInput
            type="text"
            name="name"
            placeholder="Abhijeet Ghosh"
            value={formData.name}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.name}
            touched={touched.name}
            autoComplete="name"
          />
        </Field>
        <Field label="Email" error={errors.email} touched={touched.email}>
          <StyledInput
            type="email"
            name="email"
            placeholder="you@example.com"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.email}
            touched={touched.email}
            autoComplete="email"
          />
        </Field>
      </div>

      {/* Subject */}
      <Field label="Subject" error={errors.subject} touched={touched.subject}>
        <StyledInput
          type="text"
          name="subject"
          placeholder="Project Discussion"
          value={formData.subject}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.subject}
          touched={touched.subject}
        />
      </Field>

      {/* Message */}
      <Field label="Message" error={errors.message} touched={touched.message}>
        <div className="relative">
          <StyledTextarea
            name="message"
            placeholder="Tell me about your project — what you're building, the problem you're solving, and how I can help…"
            value={formData.message}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.message}
            touched={touched.message}
            maxLength={1000}
          />
          <div className="absolute bottom-3 right-3">
            <CharCount value={formData.message} />
          </div>
        </div>
      </Field>

      {/* Submit */}
      <button
        onClick={handleSubmit}
        disabled={loading || sent}
        className="relative flex items-center justify-center gap-2.5 w-full py-4 rounded-xl font-bold text-sm tracking-wide transition-all duration-200 overflow-hidden"
        style={{
          background: sent
            ? "rgba(74,222,128,0.15)"
            : loading
            ? "rgba(194,65,12,0.6)"
            : "linear-gradient(135deg, #c2410c 0%, #9a3412 100%)",
          color: sent ? "#4ade80" : "#fff",
          border: sent ? "1px solid rgba(74,222,128,0.3)" : "1px solid transparent",
          boxShadow: sent ? "none" : "0 8px 24px rgba(194,65,12,0.3)",
          cursor: loading || sent ? "not-allowed" : "pointer",
          letterSpacing: "0.04em",
        }}
        onMouseEnter={e => {
          if (!loading && !sent) {
            e.currentTarget.style.boxShadow = "0 12px 32px rgba(194,65,12,0.5)";
            e.currentTarget.style.transform = "translateY(-1px)";
          }
        }}
        onMouseLeave={e => {
          e.currentTarget.style.boxShadow = sent ? "none" : "0 8px 24px rgba(194,65,12,0.3)";
          e.currentTarget.style.transform = "translateY(0)";
        }}
      >
        {loading ? (
          <>
            <Loader2 size={16} className="animate-spin" />
            Sending…
          </>
        ) : sent ? (
          <>
            <CheckCircle2 size={16} />
            Message Sent!
          </>
        ) : (
          <>
            <Send size={16} />
            Send Message
          </>
        )}
      </button>

      {sent && (
        <p className="text-center text-[12px]" style={{ color: "rgba(255,255,255,0.3)" }}>
          I typically reply within 24 hours.{" "}
          <button
            onClick={() => window.location.reload()}
            className="underline"
            style={{ color: "#c2410c" }}
          >
            Send another?
          </button>
        </p>
      )}
    </div>
  );
}