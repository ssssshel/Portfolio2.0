import HeadLayout from '../components/HeadLayout'
import Navbar from '../components/Navbar'
import Navbar2 from '../components/Navbar2x'
import Footer from '../components/Footer'
import SkillItem from '../components/SkillItem'
import skills from '../data/skills'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect, useState } from 'react'
import ProjectItem from '../components/ProjectItem'
import { projectsList } from '../data/projects'


const Home = () => {

  useEffect(() => {
    Aos.init()
    Aos.refresh()
  }, [])


  const { backend, database, frontend, mobile, testing, tools } = skills()
  const { project } = projectsList()

  const [showPopup, setShowPopup] = useState(false)
  const [selectedItem, setSelectedItem] = useState(null)

  const handleShowPopup = () => {
    setShowPopup(true)
  }

  return (
    <div className='bg-dark' >
      <HeadLayout title="Index" description='Portafolio Desarrollador Angel Arteaga | Portfolio Angel Arteaga Developer' />
      {/* HEADER */}
      <Navbar />
      <div data-aos="fade-down" data-aos-duration="700" className='flex flex-col justify-between w-full h-screen bg-dark '>
        <div className=''></div>
        <div data-aos="fade-up" className='flex flex-col items-center justify-center w-full pl-20 pr-20 '>
          <h1 className='text-6xl font-medium font-Fira-Code text-light drop-shadow-md'>{'<ANGEL id="ARTEAGA"'}</h1>
          <h2 className='text-3xl font-Fira-Code text-medium drop-shadow-md'>{'type="Full-Stack Developer"/>'}</h2>
        </div>

        <div className='flex items-center justify-center w-full h-20 font-medium bg-medium'>
          <p className='text-lg font-normal font-Fira-Code text-dark'>{'onClick={() => DescubreMás()}'}</p>
        </div>
      </div>
      {/* ABOUT */}
      <div className='flex flex-col justify-around w-full h-screen p-20 bg-light'>

        <h2 data-aos="fade-down" data-aos-duration="700" className='text-5xl font-medium font-Fira-Code text-dark drop-shadow-lg'>{'{Sobre mí} '}</h2>
        <div data-aos="fade-right" data-aos-duration="700" className='flex flex-col gap-5 pr-40 text-lg font-light leading-8 text-dark' >
          <p>
            Hola! Soy Angel Arteaga, desarrollador Full-Stack, chef por hobbie y un apasionado por la biología y los gatos.
          </p>
          <p>Actualmente estudio la carrera de Diseño y Desarrollo de Software, paralelo a ello, desarrollo proyectos basados en tecnologías multiplataforma y disfruto de aprender nuevos temas por mi cuenta.</p>
          <p>Cuento con experiencia trabajando con todo tipo de clientes y requerimientos, adicionalmente, me considero una persona proactiva y analítica, siempre dispuesto a aportar valor a mi equipo para lograr los objetivos planteados.</p>
        </div>
        <p className='text-xl font-medium font-Fira-Code drop-shadow-md text-dark'>Leer más</p>
      </div>
      {/* ABOUT SEE MORE */}
      <div className=''>
        <div data-aos="fade-left" data-aos-duration="700" className='flex flex-row w-full h-screen'>
          <div className='w-1/2 h-full ' >

          </div>
          <div className='flex flex-col justify-around w-1/2 h-full p-20 bg-dark text-light font-Fira-Code'>
            <h3 className='text-5xl font-Fira-Code '>{'Experiencia Laboral={'}</h3>
            <ul className='flex flex-col gap-5 leading-7'>
              <li><ul>
                <li>{'{Empresa: "Certus",'}</li>
                <li>{'Cargo: "Estudiante de Investigación",'}</li>
                <li>{'Descripción: ["Planeamiento de proyectos con metodologías ágiles", "desarrollo de APIs, aplicaciones web y móviles", "administración de servicios cloud"]},'}</li>
              </ul>
              </li>
              <li><ul>
                <li>{'{Empresa: "Mantra Consultores",'}</li>
                <li>{'Cargo: "Desarrollador y Asistente HelpDesk",'}</li>
                <li>{'Descripción: ["Desarrollo de Apps móviles y web", "implementación de servicios cloud y APIs", "Análisis de requerimientos", "Elaboración de documentación"]}}'}</li>
              </ul>
              </li>

            </ul>
          </div>
        </div>
        <div data-aos="fade-right" data-aos-duration="700" className='flex flex-row w-full h-screen'>
          <div className='w-1/2 h-full px-20 py-32 bg-medium'>
            <h3 className='text-5xl font-Fira-Code text-dark drop-shadow-lg'>¿Ideas?</h3>
          </div>
          <div className='w-1/2 h-full'>

          </div>
        </div>
      </div>
      {/* SKILLS */}
      <div className='flex flex-col h-auto gap-24 px-20 py-32 bg-dark'>
        <h2 data-aos="fade-right" data-aos-duration="700" className='text-5xl font-Fira-Code text-medium drop-shadow-lg'>{'{Habilidades}'}</h2>
        <div className='flex flex-col pl-8 gap-36 font-Fira-Code text-light '>

          <div data-aos="fade-down" data-aos-duration="700" className='flex flex-col gap-16'>

            <h3 className='text-3xl drop-shadow-lg text-center'> {'0: "Tecnologías Frontend"'}</h3>
            <div className='flex flex-wrap justify-around gap-y-14 gap-x-20'>
              {
                frontend.map(({ src, alt }) => (
                  <SkillItem key={src} src={src} alt={alt} />
                ))
              }
            </div>
          </div>
          <div data-aos="fade-down" data-aos-duration="700" className='flex flex-col gap-16'>
            <h3 className='text-3xl drop-shadow-lg text-center '>{'1: "Tecnologías Backend"'}</h3>
            <div className='flex flex-wrap justify-around gap-y-14 gap-x-20'>
              {
                backend.map(({ src, alt }) => (
                  <SkillItem key={src} src={src} alt={alt} />
                ))
              }
            </div>
          </div>
          <div data-aos="fade-down" data-aos-duration="700" className='flex flex-col gap-16'>
            <h3 className='text-3xl drop-shadow-lg text-center'>{'2: "Tecnologías Mobile"'}</h3>
            <div className='flex flex-wrap justify-around gap-y-14 gap-x-20'>
              {
                mobile.map(({ src, alt }) => (
                  <SkillItem key={src} src={src} alt={alt} />
                ))
              }
            </div>
          </div>
          <div data-aos="fade-down" data-aos-duration="700" className='flex flex-col gap-16'>
            <h3 className='text-3xl drop-shadow-lg text-center '>{'3: "Bases de Datos"'}</h3>
            <div className='flex flex-wrap justify-around gap-y-14 gap-x-20'>
              {
                database.map(({ src, alt }) => (
                  <SkillItem key={src} src={src} alt={alt} />
                ))
              }
            </div>
          </div>
          <div data-aos="fade-down" data-aos-duration="700" className='flex flex-col gap-16'>
            <h3 className='text-3xl drop-shadow-lg text-center '>{'4: "Testing"'}</h3>
            <div className='flex flex-wrap justify-around gap-y-14 gap-x-20'>
              {
                testing.map(({ src, alt }) => (
                  <SkillItem key={src} src={src} alt={alt} />
                ))
              }
            </div>
          </div>
          <div data-aos="fade-down" data-aos-duration="700" className='flex flex-col gap-16'>
            <h3 className='text-3xl drop-shadow-lg text-center'>{'5: "Herramientas"'}</h3>
            <div className='flex flex-wrap justify-around gap-y-14 gap-x-20'>
              {
                tools.map(({ src, alt }) => (
                  <SkillItem key={src} src={src} alt={alt} />
                ))
              }
            </div>
          </div>

        </div>
      </div>
      {/* PROJECTS */}
      <div className='flex flex-col gap-16 px-20 py-32 bg-dark'>
        <h2 data-aos="fade-right" data-aos-duration="700" className='text-5xl font-Fira-Code text-medium drop-shadow-lg'>{'{Proyectos}'}</h2>
        <div className='grid grid-cols-3 gap-3'>
          {
            project.map(({ description, details, img, name, repo, tools, url }) => (
              <ProjectItem key={name} description={description} details={details} img={img} name={name} repo={repo} tools={tools} url={url} />
            ))
          }

        </div>
      </div>
      {/* FOOTER */}
      <Footer />
    </div>
  )
}

export default Home
