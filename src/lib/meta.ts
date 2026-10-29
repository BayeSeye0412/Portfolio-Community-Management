import type { Metadata } from "next";
import { dict, type Lang } from "@/i18n";

const base = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export function metaFor(lang: Lang): Metadata {
  const m = dict[lang].meta;
  return {
    metadataBase: new URL(base),
    title: m.title,
    description: m.description,
    alternates: { canonical: lang === "fr" ? "/" : "/en", languages: { fr: "/", en: "/en" } },
    openGraph: { title: m.title, description: m.description, type: "website", locale: lang === "fr" ? "fr_SN" : "en_US" },
  };
}
