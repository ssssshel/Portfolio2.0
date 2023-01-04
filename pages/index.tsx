import skills from "../data/skills";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useLanguage } from "../utils/hooks/useLanguage";
import { HeadLayout, Navbar, AboutContext, LaboralExperience, SkillsSection, ProjectsSection, Footer } from "../components"
// import ProjectItem from "../components/ProjectItem";
import { projectsList } from "../data/projects";
import Image from "next/image";

const Home = () => {
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);

  const { projects } = projectsList();
  const { language, setEnglish, setSpanish } = useLanguage()

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
            {language == "es" ? "onClick={() => DescubreMás()}" : "onClick={() => DiscoverMore()}"}
          </p>
        </div>
      </div>
      {/* ABOUT */}

      <AboutContext />
      {/* EXP */}
      <LaboralExperience />
      {/* SKILLS */}
      <SkillsSection />
      {/* PROJECTS */}
      <ProjectsSection />
      {/* FOOTER */}
      <Footer />
    </div>
  );
};

export default Home;
