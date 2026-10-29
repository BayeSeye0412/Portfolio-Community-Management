import Image from "next/image";
import Link from "next/link";
import {
  FaArrowUpRightFromSquare, FaBullhorn, FaChartLine, FaCheck, FaClock, FaCode, FaEnvelope, FaInstagram,
  FaListCheck, FaLocationDot, FaPalette, FaPenRuler, FaPhone, FaRobot, FaVideo, FaWhatsapp,
} from "react-icons/fa6";
import { dict, type Lang } from "@/i18n";
import { experiences, projects, site } from "@/data/site";
import ContactForm from "./ContactForm";

const serviceIcons = [FaVideo, FaBullhorn, FaRobot, FaPenRuler, FaClock, FaChartLine];
const skillIcons = [FaPalette, FaListCheck, FaPenRuler];

export default function Home({ lang }: { lang: Lang }) {
  const t = dict[lang];
  const other = lang === "fr" ? "/en" : "/";

  return (
    <div className="page">
      <header className="top">
        <nav>
          <b>{site.name}</b>
          <div>
            <a href="#services">{t.nav.services}</a>
            <a href="#experience">{t.nav.experience}</a>
            <a href="#realisations">{t.nav.works}</a>
            <a href="#competences">{t.nav.skills}</a>
            <Link className="lang" href={other} hrefLang={lang === "fr" ? "en" : "fr"}>{t.nav.switch}</Link>
            <a className="cta" href="#contact">{t.nav.contact}</a>
          </div>
        </nav>
      </header>

      <div className="hero">
        <div>
          <h1>{t.hero.h1}</h1>
          <p>{t.hero.p}</p>
          <div className="btns">
            <a className="btn" href="#realisations">{t.hero.cta1}</a>
            <a className="btn alt" href="#contact">{t.hero.cta2}</a>
          </div>
        </div>
        <figure className="portrait">
          <Image src="/images/portrait.jpg" alt={t.hero.portraitAlt} width={520} height={650} priority sizes="(max-width: 820px) 320px, 380px" />
          <figcaption>{site.name}<span>{t.hero.location}</span></figcaption>
        </figure>
      </div>

      <section id="services">
        <h2>{t.services.title}</h2>
        <p className="lead">{t.services.lead}</p>
        <div className="pills sect">{t.services.sectors.map((s) => <span key={s}>{s}</span>)}</div>
        <div className="svc">
          {t.services.items.map((it, i) => {
            const Icon = serviceIcons[i];
            return (
              <div key={it.title}>
                <span className="ico"><Icon aria-hidden="true" /></span>
                <h3>{it.title}</h3>
                <p>{it.text}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section id="experience">
        <h2>{t.exp.title}</h2>
        <p className="lead">{t.exp.lead}</p>
        <div className="xp">
          {experiences.map((e) => {
            const x = t.exp.items[e.id];
            return (
              <div className="row" key={e.id}>
                <div className="when">{x.period}</div>
                <div className="org">
                  <Image className="lg" src={e.logo} alt={e.logoAlt} width={180} height={180} />
                  <div>
                    <h3>{e.name}</h3>
                    <div className="role">{x.role}</div>
                    <p>{x.text}</p>
                    <a className="chip" href={`https://www.instagram.com/${e.handle}/`} target="_blank" rel="noopener noreferrer">
                      <FaInstagram aria-hidden="true" />@{e.handle}<FaArrowUpRightFromSquare aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section id="realisations">
        <h2>{t.works.title}</h2>
        <p className="lead">{t.works.lead}</p>
        <div className="video">
          <a className="screen" href={site.safar} target="_blank" rel="noopener noreferrer" aria-label={t.works.safar.cta}>
            <img src={site.safarPreview} alt="" />
            <div className="play" role="img" aria-label="Play" />
          </a>
          <div>
            <h3>{t.works.safar.title}</h3>
            <p>{t.works.safar.text}</p>
            <a className="go" href={site.safar} target="_blank" rel="noopener noreferrer">{t.works.safar.cta}</a>
          </div>
        </div>
        <div className="gal2">
          <figure>
            <Image src="/images/poster-ramadan.jpg" alt={t.works.poster.alt} width={490} height={490} sizes="(max-width: 820px) 100vw, 420px" />
            <figcaption><b>{t.works.poster.title}</b>{t.works.poster.text}</figcaption>
          </figure>
          <figure>
            <video controls preload="metadata" playsInline poster="/images/poster-ramadan.jpg" src="/videos/promo-cafe-touba.mp4" />
            <figcaption><b>{t.works.video.title}</b>{t.works.video.text}</figcaption>
          </figure>
          <figure>
            <Image className="logo" src="/images/murid-voice.png" alt={t.works.murid.alt} width={715} height={536} sizes="(max-width: 820px) 100vw, 520px" />
            <figcaption><b>{t.works.murid.title}</b>{t.works.murid.text}</figcaption>
          </figure>
          <figure>
            <Image className="m" src="/images/mosque.jpg" alt={t.works.mosque.alt} width={715} height={536} sizes="(max-width: 820px) 100vw, 520px" />
            <figcaption><b>{t.works.mosque.title}</b>{t.works.mosque.text}</figcaption>
          </figure>
          <figure className="wide">
            <Image src="/images/asi-telecom.jpg" alt={t.works.asi.alt} width={1200} height={250} sizes="(max-width: 1120px) 100vw, 1000px" />
            <figcaption><b>{t.works.asi.title}</b>{t.works.asi.text}</figcaption>
          </figure>
          <div className="more">{t.works.more}</div>
        </div>
      </section>

      <section id="competences">
        <h2>{t.skills.title}</h2>
        <p className="lead">{t.skills.lead}</p>
        <div className="skills">
          {t.skills.groups.map((g, i) => {
            const Icon = skillIcons[i];
            return (
              <div className="card" key={g.title}>
                <h3><Icon aria-hidden="true" />{g.title}</h3>
                <div className="pills">{g.pills.map((p) => <span key={p}>{p}</span>)}</div>
              </div>
            );
          })}
        </div>
      </section>

      <section>
        <h2>{t.method.title}</h2>
        <p className="lead">{t.method.lead}</p>
        <ol className="steps">
          {t.method.steps.map((s) => <li key={s.t}><b>{s.t}</b><small>{s.d}</small></li>)}
        </ol>
      </section>

      <section id="equipe">
        <h2>{t.team.title}</h2>
        <p className="lead">{t.team.lead}</p>
        <div className="match">
          {t.team.items.map((it) => (
            <div key={it.t}><b><FaCheck aria-hidden="true" />{it.t}</b><p>{it.d}</p></div>
          ))}
        </div>
      </section>

      <section id="dev">
        <h2>{t.dev.title}</h2>
        <p className="lead">{t.dev.lead}</p>
        <div className="dev">
          {projects.map((p) => (
            <div className="card" key={p.id}>
              <span className="tag"><FaCode aria-hidden="true" />{p.stack}</span>
              <h3>{t.dev.items[p.id].title}</h3>
              <p>{t.dev.items[p.id].text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact">
        <div className="contact">
          <h2>{t.contact.title}</h2>
          <p>{t.contact.text}</p>
          <div className="btns" style={{ justifyContent: "center" }}>
            <a className="btn" href={site.whatsapp} target="_blank" rel="noopener noreferrer"><FaWhatsapp aria-hidden="true" />{t.contact.whatsapp}</a>
          </div>
          <ContactForm t={t.contact} email={site.email} />
          <div className="links">
            <span><FaPhone aria-hidden="true" />{site.phone}</span>
            <span><FaEnvelope aria-hidden="true" />{site.email}</span>
            <span><FaLocationDot aria-hidden="true" />{t.hero.location}</span>
          </div>
        </div>
      </section>

      <footer>© {new Date().getFullYear()} {site.name}</footer>
    </div>
  );
}
