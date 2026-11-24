import { useLanguage } from "../LanguageContext";
import {
  DownloadIcon,
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
} from "./Icons";

export default function Contact() {
  const { t, profile } = useLanguage();
  return (
    <section
      className="contact-section"
      id="contato"
      aria-labelledby="contact-title"
    >
      <div className="contact-intro">
        <span className="mono-label">{t("Contato")}</span>
        <h2 id="contact-title">{t("Vamos conversar")}</h2>
        <p>{profile.contactIntro}</p>
      </div>

      <div className="contact-links">
        <a href={`mailto:${profile.email}`}>
          <MailIcon />
          <span>
            <small>{t("E-mail")}</small>
            {profile.email}
          </span>
        </a>
        <a href={profile.github} target="_blank" rel="noreferrer">
          <GitHubIcon />
          <span>
            <small>GitHub</small>
            {profile.githubLabel}
          </span>
        </a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer">
          <LinkedInIcon />
          <span>
            <small>LinkedIn</small>
            {profile.linkedinLabel}
          </span>
        </a>
        <a href={profile.resume} download={profile.resumeFileName}>
          <DownloadIcon />
          <span>
            <small>{t("Currículo")}</small>{t("Baixar PDF")}</span>
        </a>
      </div>
    </section>
  );
}
