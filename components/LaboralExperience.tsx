import Image from "next/image";
import { FunctionComponent } from "react";
import { useLanguage } from "../utils/hooks/useLanguage";
import { laboralExpList } from "../data/laboral";

const LaboralExperienceComponent: FunctionComponent = () => {
  const { language } = useLanguage();
  const laboralExps = laboralExpList()

  return (
    <div className="flex flex-row w-full h-auto min-h-screen sm:flex-col-reverse">
      <div
        data-aos="fade-left"
        data-aos-duration="700"
        className="relative sm:w-full sm:h-50% w-1/3 "
      >
        <Image
          alt=""
          src={"/img/misc/img1.jpg"}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </div>
      <div
        data-aos="fade-top"
        data-aos-duration="700"
        className="flex flex-col justify-between w-2/3 h-full gap-16 px-20 py-16 sm:w-full bg-dark text-light font-Fira-Code sm:px-8 sm:py-16 sm:gap-12 "
      >
        <h3 className="text-5xl leading-tight sm:text-3xl font-Fira-Code ">
          {language === "es" ? "{Experiencia Laboral}" : "{Laboral Experience}"}
        </h3>
        <div className="flex flex-col gap-12 text-lg leading-7">
          {
            laboralExps.map(({ enterprise, en, es }) => (
              <>
                <ul className="flex flex-col gap-3 px-5 sm:px-0 font-Inter">
                  <li className="text-3xl sm:text-2xl font-extralight">
                    {enterprise}
                  </li>
                  <li className="font-bold">{language === 'es' ? es.title : en.title} </li>
                  <li>{language === 'es' ? es.period : en.period} </li>
                  <li className="text-xl font-light sm:text-base">
                    {
                      language === 'es' ? es.description : en.description
                    }
                  </li>
                </ul>
              </>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default LaboralExperienceComponent;
