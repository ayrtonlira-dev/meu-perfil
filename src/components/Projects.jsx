import { useLanguage } from "../LanguageContext";
import { ChevronRightIcon, ExternalArrowIcon } from "./Icons";

function ProjectStatus({ status }) {
  return (
    <span className={`status status--${status.tone}`}>
      <span className="status-dot" aria-hidden="true" />
      {status.label}
    </span>
  );
}

export default function Projects({ onOpenProject }) {
  const { t, projects } = useLanguage();
  return (
    <section className="projects" id="projetos" aria-labelledby="projects-title" tabIndex="-1">
      <div className="section-heading">
        <h2 id="projects-title">{t("Projetos")}</h2>
      </div>
      <ol className="project-grid">
        {projects.map((project) => {
          const liveLink = project.featured ? project.links[0] : null;

          return (
            <li key={project.id} className={project.featured ? "project-featured" : ""}>
              <article className={`project-card${project.featured ? " project-card--featured" : ""}`}>
                <div className="project-cover">
                  <img
                    src={project.thumbnail}
                    alt=""
                    width="720"
                    height="405"
                    loading={project.featured ? "eager" : "lazy"}
                    decoding="async"
                  />
                </div>
                <div className="project-card-body">
                  <div className="project-card-heading">
                    <h3 className="project-card-title">{project.title}</h3>
                    <ProjectStatus status={project.status} />
                  </div>
                  <p className="project-card-description">{project.cardDescription}</p>
                  <div className="project-stack">
                    {project.cardTechnologies.map((technology) => (
                      <span key={technology}>{technology}</span>
                    ))}
                  </div>
                  <div className="project-card-actions">
                    <button
                      className="project-card-action"
                      type="button"
                      aria-haspopup="dialog"
                      aria-label={`${project.cardAction}: ${project.title}`}
                      onClick={() => onOpenProject(project.id)}
                    >
                      {project.cardAction}<ChevronRightIcon />
                    </button>
                    {liveLink && (
                      <a
                        className="project-live-link"
                        href={liveLink.href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={t("Visitar {title}", { title: project.title })}
                      >
                        {liveLink.label}<ExternalArrowIcon />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
