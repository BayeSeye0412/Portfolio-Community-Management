import { NextResponse } from "next/server";

const esc = (s: string) => s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c] as string);

export async function POST(req: Request) {
  let d: Record<string, unknown>;
  try {
    d = await req.json();
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }
  if (d.website) return NextResponse.json({ ok: true }); // champ piège : robot

  const name = String(d.name ?? "").trim().slice(0, 100);
  const email = String(d.email ?? "").trim().slice(0, 200);
  const message = String(d.message ?? "").trim().slice(0, 4000);
  if (!name || !/^\S+@\S+\.\S+$/.test(email) || !message) {
    return NextResponse.json({ error: "invalid_fields" }, { status: 400 });
  }

  const key = process.env.RESEND_API_KEY;
  if (!key) return NextResponse.json({ error: "missing_api_key" }, { status: 500 });

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM ?? "Portfolio <onboarding@resend.dev>",
      to: [process.env.CONTACT_TO ?? "bayeseyedarou@gmail.com"],
      reply_to: email,
      subject: `Portfolio – message de ${name}`,
      html: `<p><b>${esc(name)}</b> (${esc(email)})</p><p>${esc(message).replace(/\n/g, "<br>")}</p>`,
      text: `${name} <${email}>\n\n${message}`,
    }),
  });
  if (!res.ok) return NextResponse.json({ error: "send_failed" }, { status: 502 });
  return NextResponse.json({ ok: true });
}
