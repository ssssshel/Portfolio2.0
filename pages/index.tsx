import type { NextPage } from 'next'
import HeadLayout from '../components/HeadLayout'
import Navbar from '../components/Navbar'
import Navbar2 from '../components/Navbar2x'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className='bg-white' >
      <HeadLayout title="Index" description='Portafolio Desarrollador Angel Arteaga | Portfolio Angel Arteaga Developer' />
      {/* HEADER */}
      <div className='bg-medium w-full h-screen flex flex-col justify-between '>
        <Navbar />

        <div className='w-full  pl-20 pr-20 flex flex-col justify-center items-center '>
          <h1 className='font-Fira-Code text-6xl font-medium text-dark drop-shadow-md'>{'<ANGEL id="ARTEAGA"'}</h1>
          <h2 className='font-Fira-Code text-3xl text-dark drop-shadow-md'>{'type="Full-Stack Developer"/>'}</h2>
        </div>

        <div className=' bg-dark w-full h-20 font-medium flex justify-center items-center '>
          <p className='font-Fira-Code text-lg font-normal text-light'>{'onClick={() => DescubreMás()}'}</p>
        </div>
      </div>
      {/* ABOUT */}
      <div className='bg-light w-full h-screen p-20 flex flex-col justify-around'>

        <h2 className='font-Fira-Code text-5xl font-medium text-dark drop-shadow-lg'>Sobre mí</h2>
        <div className='flex flex-col gap-5 leading-8 text-lg font-light pr-40 text-dark' >
          <p>
            Hola! Soy Angel Arteaga, desarrollador Full-Stack, chef por hobbie y un apasionado por la biología y los gatos.
          </p>
          <p>Actualmente estudio la carrera de Diseño y Desarrollo de Software, paralelo a ello, desarrollo proyectos basados en tecnologías multiplataforma y disfruto de aprender nuevos temas por mi cuenta.</p>
          <p>Cuento con experiencia trabajando con todo tipo de clientes y requerimientos, adicionalmente, me considero una persona proactiva y analítica, siempre dispuesto a aportar valor a mi equipo para lograr los objetivos planteados.</p>
        </div>
        <p className='font-Fira-Code font-medium text-xl drop-shadow-md text-dark'>Leer más</p>
      </div>
      {/* ABOUT SEE MORE */}
      <div className=''>
        <div className='w-full h-screen flex flex-row'>
          <div className='w-1/2 h-full ' >

          </div>
          <div className='w-1/2 h-full bg-dark p-20 text-light font-Fira-Code flex flex-col justify-around'>
            <h3 className='font-Fira-Code text-5xl '>{'Experiencia Laboral={'}</h3>
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
        <div className='w-full h-screen flex flex-row'>
          <div className='w-1/2 h-full bg-medium px-20 py-32'>
            <h3 className='font-Fira-Code text-5xl text-dark'>¿Ideas?</h3>
          </div>
          <div className='w-1/2 h-full'>

          </div>
        </div>
      </div>
      {/* SKILLS */}
      <div className='bg-light p-20 h-auto'>
        <h2 className='font-Fira-Code text-5xl text-dark'>Habilidades</h2>
        <div>
          <h3>Desarrollo Web Frontend</h3>
          <div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
