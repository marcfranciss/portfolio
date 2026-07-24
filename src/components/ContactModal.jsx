import React, { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { X, Send, User, Mail, MessageSquare, Loader2 } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const initialForm = { name: "", email: "", message: "" };

// Set these in a .env file at your project root (see README) — Vite only
// exposes env vars prefixed with VITE_ to client-side code.
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export default function ContactModal({ isOpen, onClose }) {
  const { dark } = useTheme();
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState("");

  // Close on Escape key
  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  // Reset internal state whenever the modal is reopened
  useEffect(() => {
    if (isOpen) {
      setForm(initialForm);
      setErrors({});
      setSubmitted(false);
      setSending(false);
      setSendError("");
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleChange = (field) => (e) =>
    setForm((f) => ({ ...f, [field]: e.target.value }));

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = "Please enter your name.";
    if (!form.email.trim()) {
      next.email = "Please enter your email.";
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      next.email = "Please enter a valid email.";
    }
    if (!form.message.trim()) next.message = "Please enter a message.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setSendError(
        "Email isn't configured yet — add your EmailJS keys to .env (see README)."
      );
      return;
    }

    setSending(true);
    setSendError("");

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          user_name: form.name,
          user_email: form.email,
          message: form.message,
        },
        { publicKey: PUBLIC_KEY }
      );
      setSubmitted(true);
    } catch (err) {
      setSendError("Something went wrong sending your message. Please try again.");
    } finally {
      setSending(false);
    }
  };

  const inputClasses = (hasError) =>
    `w-full text-sm px-3 py-2.5 rounded-lg border outline-none transition-colors focus:ring-2 ${
      hasError
        ? "focus:ring-red-500 border-red-500"
        : dark
        ? "focus:ring-blue-500 border-white/10"
        : "focus:ring-blue-500 border-slate-200"
    } ${
      dark
        ? "bg-white/5 text-white placeholder:text-slate-500"
        : "bg-slate-50 text-slate-800 placeholder:text-slate-400"
    }`;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal panel */}
      <div
        className={`relative w-full max-w-md rounded-2xl border shadow-2xl p-6 sm:p-8 ${
          dark
            ? "bg-[#0d1220] border-white/10"
            : "bg-white border-slate-200"
        }`}
      >
        <button
          onClick={onClose}
          aria-label="Close contact form"
          className={`absolute top-4 right-4 w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${
            dark
              ? "text-slate-400 hover:bg-white/5 hover:text-white"
              : "text-slate-500 hover:bg-slate-100 hover:text-slate-900"
          }`}
        >
          <X className="w-4 h-4" />
        </button>

        {submitted ? (
          <div className="py-6 text-center">
            <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-emerald-500/15 text-emerald-500 flex items-center justify-center">
              <Send className="w-6 h-6" />
            </div>
            <h3
              id="contact-modal-title"
              className={`text-lg font-bold mb-2 ${dark ? "text-white" : "text-slate-900"}`}
            >
              Message sent!
            </h3>
            <p className={`text-sm mb-6 ${dark ? "text-slate-400" : "text-slate-500"}`}>
              Thanks for reaching out — I'll get back to you soon.
            </p>
            <button
              onClick={onClose}
              className="bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-colors"
            >
              Close
            </button>
          </div>
        ) : (
          <>
            <h3
              id="contact-modal-title"
              className={`text-xl font-bold mb-1 ${dark ? "text-white" : "text-slate-900"}`}
            >
              Get In Touch
            </h3>
            <p className={`text-sm mb-6 ${dark ? "text-slate-400" : "text-slate-500"}`}>
              Have a project in mind or just want to say hi? Send me a message.
            </p>

            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              <div>
                <label
                  htmlFor="contact-name"
                  className={`flex items-center gap-1.5 text-xs font-medium mb-1.5 ${
                    dark ? "text-slate-300" : "text-slate-600"
                  }`}
                >
                  <User className="w-3.5 h-3.5" />
                  Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  value={form.name}
                  onChange={handleChange("name")}
                  placeholder="Your name"
                  className={inputClasses(!!errors.name)}
                />
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className={`flex items-center gap-1.5 text-xs font-medium mb-1.5 ${
                    dark ? "text-slate-300" : "text-slate-600"
                  }`}
                >
                  <Mail className="w-3.5 h-3.5" />
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  value={form.email}
                  onChange={handleChange("email")}
                  placeholder="you@example.com"
                  className={inputClasses(!!errors.email)}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className={`flex items-center gap-1.5 text-xs font-medium mb-1.5 ${
                    dark ? "text-slate-300" : "text-slate-600"
                  }`}
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  Message
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  value={form.message}
                  onChange={handleChange("message")}
                  placeholder="What would you like to talk about?"
                  className={`${inputClasses(!!errors.message)} resize-none`}
                />
                {errors.message && (
                  <p className="text-red-500 text-xs mt-1">{errors.message}</p>
                )}
              </div>

              {sendError && (
                <p className="text-red-500 text-xs -mt-1">{sendError}</p>
              )}

              <button
                type="submit"
                disabled={sending}
                className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 disabled:opacity-60 disabled:cursor-not-allowed text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-colors mt-2"
              >
                {sending ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
