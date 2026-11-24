import LanguageSwitch from "./LanguageSwitch";
import { useLanguage } from "../LanguageContext";
import { DownloadIcon, GalleryIcon, PinIcon } from "./Icons";

function HeaderActions({ onOpenFeaturedProject }) {
  const { t, profile } = useLanguage();
  return (
    <div className="header-actions">
      <button
        className="button button--primary"
        type="button"
        onClick={onOpenFeaturedProject}
        aria-label={t("Ver case do myratedgames")}
        aria-haspopup="dialog"
      >
        <GalleryIcon />{t("Ver case")}
      </button>
      <a
        className="button button--quiet"
        href={profile.resume}
        download={profile.resumeFileName}
        aria-label={t("Baixar currículo em PDF")}
      >
        <DownloadIcon />{t("Currículo")}</a>
    </div>
  );
}

export default function ProfileHeader({ onOpenFeaturedProject }) {
  const { t, profile } = useLanguage();
  return (
    <header className="identity-bar" id="perfil">
      <div className="avatar-wrap">
        <span className="avatar-corner avatar-corner--tl" aria-hidden="true" />
        <span className="avatar-corner avatar-corner--br" aria-hidden="true" />
        <div className="avatar">
          <img
            src={profile.photo}
            alt={t("Foto de {name}", { name: profile.name })}
            width="612"
            height="622"
            decoding="async"
            fetchPriority="high"
          />
        </div>
      </div>

      <div className="identity">
        <div className="name-row">
          <h1>{profile.name}</h1>
          <span className="handle">{profile.handle}</span>
        </div>
        <h2 className="role">{profile.role}</h2>
        <p className="identity-meta">
          <span className="icon-label">
            <PinIcon />
            {profile.location}
          </span>
          <span className="dot-separator" aria-hidden="true">
            ·
          </span>
          <span>{t("Estudante de ADS")}</span>
        </p>
        <p className="availability-inline">
          <span className="live-dot" aria-hidden="true" />
          {profile.availability}
        </p>
      </div>

      <div className="summary">
        <HeaderActions onOpenFeaturedProject={onOpenFeaturedProject} />
        <LanguageSwitch />
      </div>

      <p className="bio">{profile.bio}</p>
    </header>
  );
}
