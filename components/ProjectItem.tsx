import Image from "next/image";
import { FunctionComponent, useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { IProjectItemProps } from "../utils/interfaces/global";
import { useLanguage } from "../utils/hooks/useLanguage";

const ProjectItem: FunctionComponent<IProjectItemProps> = (project) => {
  const { language } = useLanguage()

  const ref = useRef<HTMLDivElement>(null);

  const [showItem, setShowItem] = useState(false);

  useEffect(() => {
    if (showItem) {
      ref.current!.style.display = "flex";
    } else {
      ref.current!.style.display = "none";
    }
  }, [showItem]);

  return (
    <div
      onMouseOver={() => setShowItem(true)}
      onMouseLeave={() => setShowItem(false)}
      className="relative  sm:h-40% h-60% w-full drop-shadow-lg"
    >
      <Image
        alt={project.img}
        src={`/img/projects/${project.img}`}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        className="rounded-md"
      />
      <div
        ref={ref}
        className="absolute flex-col justify-center hidden w-full h-full gap-4 p-10 rounded-md bg-dark/70"
      >
        <p className="text-3xl text-light">{project.name}</p>
        <p className="text-light">{project.tools.join(" | ")}</p>
        {
          language === "es" ? (
            <>
              <p className="text-sm text-light">{project.esDescription}</p>
              {
                project.esDetails ?
                  <p className="text-sm text-light">*{project.esDetails}</p> : <></>
              }
            </>
          ) : (
            <>
              <p className="text-sm text-light">{project.enDescription}</p>
              {
                project.enDetails ?
                  <p className="text-sm text-light">*{project.enDetails}</p>
                  : <></>
              }
            </>
          )
        }
        <div className="flex justify-between gap-2">
          {project.url ? (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full "
            >
              <button className="w-full py-1 rounded-md bg-medium hover:bg-light">
                <p>{language === "es" ? "Ver sitio" : "Go to site"}</p>
              </button>
            </a>
          ) : (
            <></>
          )}

          {
            project.repo ? (
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full "
              >
                <button className="flex items-center justify-center w-full gap-2 py-1 rounded-md bg-medium hover:bg-light">
                  <FontAwesomeIcon icon={faGithub} />
                  <p>Repo</p>
                </button>
              </a>

            ) : <></>
          }
        </div>
      </div>
    </div>
  );
}

export default ProjectItem