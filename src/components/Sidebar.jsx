import { useLanguage } from "../LanguageContext";
import {
  DownloadIcon,
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
} from "./Icons";
import MotionToggle from "./MotionToggle";

export default function Sidebar({
  activeSection,
  motionsEnabled,
  onToggleMotion,
}) {
  const { t, profile, navigationItems } = useLanguage();
  return (
    <aside className="sidebar desktop-only" aria-label={t("Informações e atalhos")}>
      <nav className="local-nav" aria-label={t("Navegação do perfil")}>
        <span className="mono-label">{t("Neste perfil")}</span>
        <ul>
          {navigationItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                aria-current={
                  activeSection === item.id ? "location" : undefined
                }
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <section className="connections" aria-labelledby="connections-title">
        <span className="mono-label" id="connections-title">{t("Conectar")}</span>
        <div className="connection-grid">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label={t("GitHub de Ayrton Lira")}
          >
            <GitHubIcon />
            GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label={t("LinkedIn de Ayrton Lira")}
          >
            <LinkedInIcon />
            LinkedIn
          </a>
          <a href={`mailto:${profile.email}`} aria-label={t("Enviar e-mail")}>
            <MailIcon />{t("E-mail")}</a>
          <a
            href={profile.resume}
            download={profile.resumeFileName}
            aria-label={t("Baixar currículo em PDF")}
          >
            <DownloadIcon />{t("Currículo")}</a>
        </div>
      </section>
      <div className="sidebar-motion">
        <MotionToggle enabled={motionsEnabled} onToggle={onToggleMotion} />
      </div>
    </aside>
  );
}
