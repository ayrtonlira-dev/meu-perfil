import { useLanguage } from "../LanguageContext";
import { MobileTechList } from "./TechLists";

export default function MobileTech() {
  const { t } = useLanguage();
  return (
    <section
      className="mobile-tech mobile-only"
      aria-labelledby="mobile-tech-title"
    >
      <div className="section-heading">
        <div>
          <span className="mono-label">{t("Ferramentas")}</span>
          <h2 id="mobile-tech-title">{t("Tecnologias")}</h2>
        </div>
      </div>
      <MobileTechList />
    </section>
  );
}
