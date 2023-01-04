import { FunctionComponent } from "react";
import { useLanguage } from "../utils/hooks/useLanguage";

const AboutContextComponent: FunctionComponent = () => {
  const { language } = useLanguage();
  return (
    <div
      id="about"
      className="flex flex-col justify-around w-full h-screen p-20 sm:px-8 bg-light"
    >
      <h2
        data-aos="fade-down"
        data-aos-duration="700"
        className="text-5xl font-medium sm:text-4xl sm:text-center font-Fira-Code text-dark drop-shadow-lg"
      >
        {language === "es" ? "{Sobre mí} " : "{About}"}
      </h2>

      <div
        data-aos="fade-right"
        data-aos-duration="700"
        className="flex flex-col gap-5 pr-40 text-lg font-light leading-8 sm:text-base sm:leading-8 sm:px-0 text-dark"
      >
        {language === "es" ? (
          <>
            <p>
              Hola! Soy Angel Arteaga, desarrollador Full-Stack, chef por hobbie y
              un apasionado por la biología y los gatos.
            </p>
            <p>
              Actualmente estudio la carrera de Diseño y Desarrollo de Software,
              paralelo a ello, desarrollo proyectos basados en tecnologías
              multiplataforma y disfruto de aprender nuevos temas por mi cuenta.
            </p>
            <p>
              Cuento con experiencia trabajando con clientes de rubros como
              Telecomunicaciones y Aduanas, adicionalmente, me considero una
              persona proactiva y analítica, siempre dispuesto a aportar valor a
              mi equipo para conseguir los objetivos planteados.
            </p>
          </>
        ) : language === "en" ? (
          <>
            <p>
              Hi! I&apos;m Angel Arteaga, Full-Stack Developer, chef as a hobbie
              and a passionate about biology and cats.
            </p>
            <p>
              Currently, I&apos;m studying Software Design and Development career,
              in addition, I develop projects based on multi plattform
              technologies, and enjoy learning new topics on my own.
            </p>
            <p>
              I have experience working and developing solutions for customers in
              industries as Telecommunications and Customs, aditionally, I
              consider myself as a proactive and analytic person, always disposed
              to add value to my team for the success of our projects.
            </p>
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default AboutContextComponent;
