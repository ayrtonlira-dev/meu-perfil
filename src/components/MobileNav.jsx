import { useLanguage } from "../LanguageContext";

export default function MobileNav({ activeSection }) {
  const { t, navigationItems } = useLanguage();
  return (
    <nav className="mobile-nav mobile-only" aria-label={t("Seções do perfil")}>
      {navigationItems.map((item) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          aria-current={activeSection === item.id ? "location" : undefined}
        >
          {item.mobileLabel}
        </a>
      ))}
    </nav>
  );
}
