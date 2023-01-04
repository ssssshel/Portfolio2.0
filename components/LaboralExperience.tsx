import Image from "next/image";
import { FunctionComponent } from "react";
import { useLanguage } from "../utils/hooks/useLanguage";

const LaboralExperienceComponent: FunctionComponent = () => {
  const { language } = useLanguage();

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
          {language === "es" ? (
            <>
              <ul className="flex flex-col gap-3 px-5 sm:px-0 font-Inter">
                <li className="text-3xl sm:text-2xl font-extralight">
                  NTT DATA
                </li>
                <li className="font-bold">Junior Engineer</li>
                <li>Ago 2022 - Actualmente</li>
                <li className="text-xl font-light sm:text-base">
                  Desarrollo y mantenimiento de funcionalidades a nivel Frontend
                  del aplicativo móvil &quot;Mi movistar&quot; del cliente
                  Telefónica, integración con microservicios, soporte a
                  incidencias y errores en el desarrollo.
                </li>
              </ul>
              <ul className="flex flex-col gap-3 px-5 sm:px-0 font-Inter">
                <li className="text-3xl sm:text-2xl font-extralight">
                  Mantra Consultores
                </li>
                <li className="font-bold">Desarrollador Full-Stack</li>
                <li>Jun 2022 - Jul 2022</li>
                <li className="text-xl font-light sm:text-base">
                  Desarrollé aplicaciones móviles y web, implementé servicios
                  cloud, analicé y documenté requerimientos, diseñé y maqueté
                  interfaces de usuario.
                </li>
              </ul>
            </>
          ) : (
            <>
              <ul className="flex flex-col gap-3 px-5 sm:px-0 font-Inter">
                <li className="text-3xl sm:text-2xl font-extralight">
                  NTT DATA
                </li>
                <li className="font-bold">Junior Engineer</li>
                <li>Ago 2022 - Currently</li>
                <li className="text-xl font-light sm:text-base">
                  Development and maintenance of functionalities at frontend
                  level of the mobile application &quot;Mi movistar&quot; for
                  Telefónica client, microservices and
                  API&apos;s integration, support for incidents and errors in development.
                </li>
              </ul>
              <ul className="flex flex-col gap-3 px-5 sm:px-0 font-Inter">
                <li className="text-3xl sm:text-2xl font-extralight">
                  Mantra Consultores
                </li>
                <li className="font-bold">Full-stack developer</li>
                <li>Jun 2022 - Jul 2022</li>
                <li className="text-xl font-light sm:text-base">
                  Hybrid applications development with Ionic/Angular, cloud
                  services implementation, requirements analysis and
                  documentation, UI design and layout.
                </li>
              </ul>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default LaboralExperienceComponent;
