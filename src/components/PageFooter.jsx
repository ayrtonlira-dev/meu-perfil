import { useLanguage } from "../LanguageContext";
export default function PageFooter() {
  const { t } = useLanguage();
  return (
    <footer className="page-footer">
      <div className="page-footer-info">
        <span>Ayrton Lira · {t("Recife, Brasil")}</span>
        <span className="page-footer-tech">{t("React e Vite.")}</span>
      </div>
    </footer>
  );
}
