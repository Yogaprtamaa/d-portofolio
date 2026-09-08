"use client";
import { useState } from "react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});

  function validate(form: FormData) {
    const e: typeof errors = {};
    const name = String(form.get("name") || "").trim();
    const email = String(form.get("email") || "").trim();
    const message = String(form.get("message") || "").trim();
    if (name.length < 2) e.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = "Please enter a valid email.";
    if (message.length < 10) e.message = "Message should be at least 10 characters.";
    return e;
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const v = validate(data);
    if (Object.keys(v).length) {
      setErrors(v);
      return;
    }
    setErrors({});
    setStatus("loading");
    // Simulate async, replace with real handler
    await new Promise((r) => setTimeout(r, 1200));
    setStatus("success");
    form.reset();
    setTimeout(() => setStatus("idle"), 4000);
  }

  return (
    <form onSubmit={onSubmit} noValidate className="rounded-[24px] bg-white p-6 md:p-8 border border-black/[0.06]">
      <div className="grid gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-[#1D1D1F]">
            Name <span aria-hidden className="text-red-500">*</span>
          </label>
          <input
            id="name"
            name="name"
            autoComplete="name"
            required
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "err-name" : undefined}
            placeholder="Your name"
            className="mt-2 w-full rounded-full border border-black/10 bg-[#F5F5F7] px-4 py-3 text-[15px] text-[#1D1D1F] placeholder:text-[#6E6E73] focus:border-[#0071E3] focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#0071E3]/10"
          />
          {errors.name && <p id="err-name" className="mt-2 text-xs text-red-600">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-[#1D1D1F]">
            Email <span aria-hidden className="text-red-500">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "err-email" : undefined}
            placeholder="you@example.com"
            className="mt-2 w-full rounded-full border border-black/10 bg-[#F5F5F7] px-4 py-3 text-[15px] text-[#1D1D1F] placeholder:text-[#6E6E73] focus:border-[#0071E3] focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#0071E3]/10"
          />
          {errors.email && <p id="err-email" className="mt-2 text-xs text-red-600">{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-[#1D1D1F]">
            Message <span aria-hidden className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? "err-message" : undefined}
            placeholder="Tell me about your project..."
            className="mt-2 w-full resize-none rounded-[20px] border border-black/10 bg-[#F5F5F7] px-4 py-3 text-[15px] leading-6 text-[#1D1D1F] placeholder:text-[#6E6E73] focus:border-[#0071E3] focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#0071E3]/10"
          />
          {errors.message && <p id="err-message" className="mt-2 text-xs text-red-600">{errors.message}</p>}
        </div>

        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex h-12 items-center justify-center rounded-full bg-[#0071E3] px-6 text-[15px] font-medium text-white transition-colors hover:bg-[#0077ED] active:bg-[#006EDB] disabled:opacity-60"
        >
          {status === "loading" ? "Sending…" : status === "success" ? "Message sent ✓" : "Send Message"}
        </button>

        {status === "success" && (
          <p role="status" className="rounded-full bg-green-50 px-4 py-3 text-center text-sm text-green-700 border border-green-200">
            Thanks, I&apos;ll get back to you within 24 hours.
          </p>
        )}
        {status === "error" && (
          <p role="alert" className="rounded-full bg-red-50 px-4 py-3 text-center text-sm text-red-700 border border-red-200">
            Something went wrong. Please try again.
          </p>
        )}
        <p className="text-center text-xs text-[#6E6E73]">Or email directly at <a href="mailto:prtmyog17@gmail.com" className="text-[#0058B0] hover:underline">prtmyog17@gmail.com</a></p>
      </div>
    </form>
  );
}
