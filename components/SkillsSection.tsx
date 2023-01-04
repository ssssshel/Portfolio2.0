import { FunctionComponent } from "react";
import skills from "../data/skills";
import SkillItem from "./SkillItem";
import { useLanguage } from "../utils/hooks/useLanguage";

const SkillsSectionComponent: FunctionComponent = () => {
  const { language } = useLanguage()
  return (
    <div
      id="skills"
      className="flex flex-col h-auto gap-24 p-20 sm:items-center sm:px-8 sm:py-16 sm:gap-12 bg-dark"
    >
      <h2
        data-aos="fade-right"
        data-aos-duration="700"
        className="text-5xl sm:text-4xl font-Fira-Code text-medium drop-shadow-lg"
      >
        {language === "es" ? "{Habilidades}" : "{Skills}"}
      </h2>
      <div className="flex flex-col gap-36 sm:gap-16 sm:pl-0 font-Fira-Code text-light ">

        {
          skills.map((s) => (

            <div
              data-aos="fade-down"
              data-aos-duration="700"
              className="flex flex-col gap-16 sm:gap-10"
              key={s.esName}
            >
              {
                language === "es" ? (
                  <h3 className="text-3xl text-center sm:text-xl sm:font-bold drop-shadow-lg">
                    {"'" + s.index + "' : '" + s.esName + "'"}
                  </h3>

                ) : (
                  <h3 className="text-3xl text-center sm:text-xl sm:font-bold drop-shadow-lg">
                    {"'" + s.index + "' : '" + s.enName + "'"}
                  </h3>

                )
              }
              <div className="flex flex-wrap justify-around gap-y-14 gap-x-20 sm:gap-x-8">
                {s.content.map(({ src, alt }) => (
                  <SkillItem key={src} src={src} alt={alt} />
                ))}
              </div>
            </div>
          ))
        }

      </div>
    </div>
  )
}

export default SkillsSectionComponent