import HeadLayout from "../components/HeadLayout";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SkillItem from "../components/SkillItem";
import skills from "../data/skills";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
// import ProjectItem from "../components/ProjectItem";
import { projectsList } from "../data/projects";
import Image from "next/image";
import ProjectItem from "../components/ProjectItem";

const Home = () => {
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);

  const { projects } = projectsList();

  return (
    <div className=" bg-dark">
      <HeadLayout
        title="Index"
        description="Portafolio Desarrollador Angel Arteaga | Portfolio Angel Arteaga Developer"
      />
      {/* HEADER */}
      <Navbar />
      <div
        data-aos="fade-down"
        data-aos-duration="700"
        className="flex flex-col justify-between w-full h-screen bg-dark "
      >
        <div className="h-20 sm:h-10"></div>
        <div
          data-aos="fade-up"
          className="flex flex-col items-center justify-center w-full px-20 sm:gap-6 sm:text-center sm:px-8 "
        >
          <h1 className="text-6xl font-medium sm:text-5xl font-Fira-Code text-light drop-shadow-md">
            {'<ANGEL id="ARTEAGA"'}
          </h1>
          <h2 className="text-3xl font-Fira-Code text-medium drop-shadow-md">
            {'type="Full-Stack Developer"/>'}
          </h2>
        </div>

        <div className="flex items-center justify-center w-full h-12 font-medium bg-medium">
          <p className="text-lg font-normal font-Fira-Code sm:text-base text-dark">
            {"onClick={() => DescubreMás()}"}
          </p>
        </div>
      </div>
      {/* ABOUT */}
      <div
        id="about"
        className="flex flex-col justify-around w-full h-screen p-20 sm:px-8 bg-light"
      >
        <h2
          data-aos="fade-down"
          data-aos-duration="700"
          className="text-5xl font-medium sm:text-4xl sm:text-center font-Fira-Code text-dark drop-shadow-lg"
        >
          {"{Sobre mí} "}
        </h2>
        <div
          data-aos="fade-right"
          data-aos-duration="700"
          className="flex flex-col gap-5 pr-40 text-lg font-light leading-8 sm:text-base sm:leading-8 sm:px-0 text-dark"
        >
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
            Cuento con experiencia trabajando con clientes del rubro de
            Telecomunicaciones y Aduanas, adicionalmente, me considero una
            persona proactiva y analítica, siempre dispuesto a aportar valor a
            mi equipo para conseguir los objetivos planteados.
          </p>
        </div>
        {/* <p className='text-xl font-medium font-Fira-Code drop-shadow-md text-dark'>Leer más</p> */}
      </div>
      {/* EXP */}
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
            {"{Experiencia Laboral}"}
          </h3>
          <div className="flex flex-col gap-12 text-lg leading-7">
            <ul className="flex flex-col gap-3 px-5 sm:px-0 font-Inter">
              <li className="text-3xl sm:text-2xl font-extralight">
                NTT DATA
              </li>
              <li className="font-bold">Junior Engineer</li>
              <li>Ago 2022 - Actualmente</li>
              <li className="text-xl font-light sm:text-base">
                Desarrollo y mantenimiento de funcionalidades a nivel Frontend del aplicativo móvil &quot;Mi movistar&quot; del cliente Telefónica, integración con microservicios, soporte a incidencias y errores en el desarrollo.
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
          </div>
        </div>
      </div>
      {/* SKILLS */}
      <div
        id="skills"
        className="flex flex-col h-auto gap-24 p-20 sm:items-center sm:px-8 sm:py-16 sm:gap-12 bg-dark"
      >
        <h2
          data-aos="fade-right"
          data-aos-duration="700"
          className="text-5xl sm:text-4xl font-Fira-Code text-medium drop-shadow-lg"
        >
          {"{Habilidades}"}
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
                <h3 className="text-3xl text-center sm:text-xl sm:font-bold drop-shadow-lg">
                  {"'" + s.index + "' : '" + s.esName + "'"}
                </h3>
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
      {/* PROJECTS */}
      <div
        id="projects"
        className="flex flex-col gap-16 p-20 bg-independence sm:py-16 sm:px-8 sm:gap-12"
      >
        <h2
          data-aos="fade-right"
          data-aos-duration="700"
          className="text-5xl sm:text-4xl sm:text-center font-Fira-Code text-light drop-shadow-lg"
        >
          {"<Proyectos/>"}
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
      {/* FOOTER */}
      <Footer />
    </div>
  );
};

export default Home;
