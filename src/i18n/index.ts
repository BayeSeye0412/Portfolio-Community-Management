import { fr, type Dict } from "./fr";
import { en } from "./en";

export type Lang = "fr" | "en";
export const dict: Record<Lang, Dict> = { fr, en };
