import { FunctionComponent } from "react";
import { projectsList } from "../data/projects";
import ProjectItem from "./ProjectItem";
import { useLanguage } from "../utils/hooks/useLanguage";

const ProjectsSectionComponent: FunctionComponent = () => {
  const { projects } = projectsList()
  const { language } = useLanguage()

  return (
    <div
      id="projects"
      className="flex flex-col gap-16 p-20 bg-independence sm:py-16 sm:px-8 sm:gap-12"
    >
      <h2
        data-aos="fade-right"
        data-aos-duration="700"
        className="text-5xl sm:text-4xl sm:text-center font-Fira-Code text-light drop-shadow-lg"
      >
        {language === "es" ? "{Proyectos}" : "{Projects}"}
      </h2>
      <div
        data-aos="fade-down"
        data-aos-duration="700"
        className="grid grid-cols-3 gap-5 sm:flex sm:flex-col sm:gap-6"
      >
        {projects.map(
          (project) => (
            <ProjectItem
              key={project.name} {...project}
            />
          )
        )}
      </div>
    </div>
  )
}

export default ProjectsSectionComponent