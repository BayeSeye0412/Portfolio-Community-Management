"use client";

import { useState, type FormEvent } from "react";
import { FaPaperPlane } from "react-icons/fa6";
import type { Dict } from "@/i18n/fr";

type Status = "idle" | "sending" | "ok" | "error" | "invalid";

export default function ContactForm({ t, email }: { t: Dict["contact"]; email: string }) {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const body = {
      name: String(fd.get("name") ?? "").trim(),
      email: String(fd.get("email") ?? "").trim(),
      message: String(fd.get("message") ?? "").trim(),
      website: String(fd.get("website") ?? ""),
    };
    if (!body.name || !/^\S+@\S+\.\S+$/.test(body.email) || !body.message) {
      setStatus("invalid");
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) });
      if (!res.ok) throw new Error("send failed");
      setStatus("ok");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  const message = status === "ok" ? t.ok : status === "error" ? t.error : status === "invalid" ? t.invalid : "";

  return (
    <form className="form" onSubmit={onSubmit} noValidate>
      <label>{t.name}<input name="name" required autoComplete="name" maxLength={100} /></label>
      <label>{t.email}<input name="email" type="email" required autoComplete="email" maxLength={200} /></label>
      <label className="full">{t.message}<textarea name="message" rows={5} required maxLength={4000} /></label>
      <input className="hp" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <button className="btn" type="submit" disabled={status === "sending"}>
        <FaPaperPlane aria-hidden="true" />{status === "sending" ? t.sending : t.send}
      </button>
      <p className="note" role="status">
        {message} {status === "error" && <a href={`mailto:${email}`}>{email}</a>}
      </p>
    </form>
  );
}
