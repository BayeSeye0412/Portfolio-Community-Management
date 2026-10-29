// Donnees non traduites. Les textes sont dans src/i18n/fr.ts et en.ts.
export const site = {
  name: "Abdou SEYE",
  email: "bayeseyedarou@gmail.com",
  phone: "+221 77 865 46 20",
  whatsapp: "https://wa.me/221778654620",
  safar: "https://youtu.be/Vpn_uTWGV9s?list=PLC7wqsJoIXnPWawBtdnuzfs28MFbcr1rs",
  safarPreview: "https://img.youtube.com/vi/Vpn_uTWGV9s/maxresdefault.jpg",
};

// Pour ajouter une organisation : une ligne ici + son texte dans fr.ts et en.ts (exp.items).
export const experiences = [
  { id: "fdmn3", name: "Fondation Dialibatoul Marakhibi de Mbour (FDMN3)", logo: "/images/logos/fdmn3.png", logoAlt: "Logo FDMN3", handle: "fdmn3_mbour" },
  { id: "hblk", name: "Jamahatou Hizbullahi li khidmatil Khadim", logo: "/images/logos/hblk.png", logoAlt: "Logo Hizbul Lahi Li Khidmatil Khadim", handle: "hblkkhadim" },
  { id: "dahira", name: "Dahira Nourou Daareyni, Université Alioune Diop de Bambey", logo: "/images/logos/dahira.png", logoAlt: "Logo Daara Nourou Daarayni UADB", handle: "nourou_darayni_uadb_officiel" },
  { id: "aerm", name: "Amical des étudiants ressortissants de Mbour (AERM)", logo: "/images/logos/aerm.jpg", logoAlt: "Logo AERM", handle: "aerm_uad" },
] as const;

export const projects = [
  { id: "vote", stack: "Next.js · React · SQLite · Tailwind CSS" },
  { id: "tontine", stack: "Laravel · MySQL · Tailwind CSS" },
  { id: "notes", stack: "JavaFX · MySQL · Scene Builder" },
  { id: "asi", stack: "Photoshop · Illustrator · Joomla 5" },
] as const;
