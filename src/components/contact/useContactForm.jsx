import { useState, useCallback } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const COOLDOWN_MS = Number(import.meta.env.VITE_CONTACT_COOLDOWN_MS);
const COOLDOWN_KEY = "contact_last_sent";


const EMAILJS_SERVICE  = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_KEY      = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const INITIAL = { name: "", email: "", subject: "", message: "" };

function validate({ name, email, subject, message }) {
  const errors = {};
  if (!name.trim() || name.trim().length < 2)
    errors.name = "Name must be at least 2 characters.";
  if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    errors.email = "Enter a valid email address.";
  if (!subject.trim() || subject.trim().length < 3)
    errors.subject = "Subject must be at least 3 characters.";
  if (!message.trim() || message.trim().length < 10)
    errors.message = "Message must be at least 10 characters.";
  return errors;
}

export function useContactForm() {
  const [formData, setFormData]   = useState(INITIAL);
  const [errors,   setErrors]     = useState({});
  const [touched,  setTouched]    = useState({});
  const [loading,  setLoading]    = useState(false);
  const [sent,     setSent]       = useState(false);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error on change if field was touched
    if (touched[name]) {
      const next = { ...formData, [name]: value };
      const errs = validate(next);
      setErrors(prev => ({ ...prev, [name]: errs[name] }));
    }
  }, [formData, touched]);

  const handleBlur = useCallback((e) => {
    const { name } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    const errs = validate(formData);
    setErrors(prev => ({ ...prev, [name]: errs[name] }));
  }, [formData]);

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();

    // Mark all fields touched
    setTouched({ name: true, email: true, subject: true, message: true });
    const errs = validate(formData);
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    // Cooldown check
    const lastSent = localStorage.getItem(COOLDOWN_KEY);
    if (lastSent && Date.now() - parseInt(lastSent, 10) < COOLDOWN_MS) {
      const remaining = Math.ceil((COOLDOWN_MS - (Date.now() - parseInt(lastSent, 10))) / 1000);
      toast.error(`Please wait ${remaining}s before sending another message.`, {
        style: { background: "#1a1a1a", color: "#fff", border: "1px solid rgba(239,68,68,0.3)" },
      });
      return;
    }

    setLoading(true);
    try {
      await emailjs.send(
        EMAILJS_SERVICE,
        EMAILJS_TEMPLATE,
        {
          name:    formData.name,
          email:   formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        EMAILJS_KEY
      );

      localStorage.setItem(COOLDOWN_KEY, Date.now().toString());
      setSent(true);
      setFormData(INITIAL);
      setTouched({});
      setErrors({});
      toast.success("Message sent! I'll get back to you within 24h.", {
        style: { background: "#1a1a1a", color: "#fff", border: "1px solid rgba(74,222,128,0.3)" },
      });
    } catch (err) {
      console.error(err);
      toast.error("Failed to send. Please try again or email me directly.", {
        style: { background: "#1a1a1a", color: "#fff", border: "1px solid rgba(239,68,68,0.3)" },
      });
    } finally {
      setLoading(false);
    }
  }, [formData]);

  return { formData, errors, touched, loading, sent, handleChange, handleBlur, handleSubmit };
}