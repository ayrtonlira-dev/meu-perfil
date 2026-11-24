import { useLanguage } from "../LanguageContext";

export default function About() {
  const { t, profile, recentActivity } = useLanguage();
  return (
    <section className="about-section" id="sobre" aria-labelledby="about-title">
      <div className="section-heading">
        <div>
          <span className="mono-label">{t("Informações")}</span>
          <h2 id="about-title">{t("Sobre")}</h2>
        </div>
      </div>

      <div className="about-content">
        <p className="about-lead">{profile.aboutLead}</p>

        <dl className="about-facts">
          <div>
            <dt>{t("Formação")}</dt>
            <dd>
              {profile.education}
              {profile.educationInstitution
                ? ` · ${profile.educationInstitution}`
                : ""}{" "}
              <span>({profile.educationStatus})</span>
            </dd>
          </div>
          <div>
            <dt>{t("Interesse profissional")}</dt>
            <dd>{profile.interests}</dd>
          </div>
          <div>
            <dt>{t("Onde estou")}</dt>
            <dd>{profile.locationNote}</dd>
          </div>
        </dl>

        {profile.workingStyle ? (
          <div className="about-note">
            <span className="mono-label">{t("Como eu trabalho")}</span>
            {profile.workingStyle.split("\n\n").map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        ) : null}

        {recentActivity.length > 0 ? (
          <div className="recent-activity">
            <h3>{t("Atividade recente")}</h3>
            <ul>
              {recentActivity.map((activity, index) => (
                <li key={`${activity.date}-${index}`}>
                  <time dateTime={activity.date}>{activity.date}</time>
                  <span>
                    <strong>{activity.title}</strong>
                    {activity.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </section>
  );
}
