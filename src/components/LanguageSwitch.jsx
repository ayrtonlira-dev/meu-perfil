import { useLanguage } from "../LanguageContext";

function FlagIcon({ locale }) {
  if (locale === "pt") {
    return (
      <svg className="language-flag" viewBox="0 0 20 14" aria-hidden="true" focusable="false">
        <rect x="0.75" y="0.75" width="18.5" height="12.5" rx="0.4" />
        <path d="M10 2.4 17.2 7 10 11.6 2.8 7Z" />
        <circle cx="10" cy="7" r="2.1" />
        <path d="M8 6.6c1.4-.2 2.8.1 4 .8" />
      </svg>
    );
  }

  return (
    <svg className="language-flag" viewBox="0 0 20 14" aria-hidden="true" focusable="false">
      <rect x="0.75" y="0.75" width="18.5" height="12.5" rx="0.4" />
      <path d="M9 3.2h10M9 5.4h10M1 7.6h18M1 9.8h18M1 12h18" />
      <rect x="1" y="1" width="8" height="6" fill="currentColor" stroke="none" />
      <circle cx="3" cy="2.5" r="0.4" fill="var(--flag-canton-bg)" stroke="none" />
      <circle cx="5" cy="2.5" r="0.4" fill="var(--flag-canton-bg)" stroke="none" />
      <circle cx="7" cy="2.5" r="0.4" fill="var(--flag-canton-bg)" stroke="none" />
      <circle cx="4" cy="4.5" r="0.4" fill="var(--flag-canton-bg)" stroke="none" />
      <circle cx="6" cy="4.5" r="0.4" fill="var(--flag-canton-bg)" stroke="none" />
    </svg>
  );
}

export default function LanguageSwitch() {
  const { language, changeLanguage } = useLanguage();
  return (
    <div className="language-switch" role="group" aria-label={language === "en" ? "Language" : "Idioma"}>
      {["pt", "en"].map((locale) => (
        <button key={locale} type="button" lang={locale === "pt" ? "pt-BR" : "en"}
          aria-label={locale === "pt" ? "Português" : "English"}
          aria-pressed={language === locale} onClick={() => changeLanguage(locale)}>
          <FlagIcon locale={locale} />
          {locale.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
