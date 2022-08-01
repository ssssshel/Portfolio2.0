import HeadLayout from '../components/HeadLayout'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SkillItem from '../components/SkillItem'
import skills from '../data/skills'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect, useState } from 'react'
import ProjectItem from '../components/ProjectItem'
import { projectsList } from '../data/projects'
import Image from 'next/image'


const Home = () => {

  useEffect(() => {
    Aos.init()
    Aos.refresh()
  }, [])


  const { backend, database, frontend, mobile, testing, tools } = skills()
  const { project } = projectsList()


  return (
    <div className=' bg-dark' >
      <HeadLayout title="Index" description='Portafolio Desarrollador Angel Arteaga | Portfolio Angel Arteaga Developer' />
      {/* HEADER */}
      <Navbar />
      <div data-aos="fade-down" data-aos-duration="700" className='flex flex-col justify-between w-full h-screen bg-dark '>
        <div className='h-20'></div>
        <div data-aos="fade-up" className='flex flex-col items-center justify-center w-full px-20 sm:px-10 '>
          <h1 className='text-6xl font-medium sm:text-5xl font-Fira-Code text-light drop-shadow-md'>{'<ANGEL id="ARTEAGA"'}</h1>
          <h2 className='text-3xl font-Fira-Code text-medium drop-shadow-md'>{'type="Full-Stack Developer"/>'}</h2>
        </div>

        <div className='flex items-center justify-center w-full h-12 font-medium bg-medium'>
          <p className='text-lg font-normal font-Fira-Code text-dark'>{'onClick={() => DescubreMás()}'}</p>
        </div>
      </div>
      {/* ABOUT */}
      <div id='about' className='flex flex-col justify-around w-full h-screen p-20 sm:px-10 bg-light'>

        <h2 data-aos="fade-down" data-aos-duration="700" className='text-5xl font-medium sm:text-4xl sm:text-center font-Fira-Code text-dark drop-shadow-lg'>{'{Sobre mí} '}</h2>
        <div data-aos="fade-right" data-aos-duration="700" className='flex flex-col gap-5 pr-40 text-lg font-light leading-8 sm:leading-9 sm:px-0 text-dark' >
          <p>
            Hola! Soy Angel Arteaga, desarrollador Full-Stack, chef por hobbie y un apasionado por la biología y los gatos.
          </p>
          <p>Actualmente estudio la carrera de Diseño y Desarrollo de Software, paralelo a ello, desarrollo proyectos basados en tecnologías multiplataforma y disfruto de aprender nuevos temas por mi cuenta.</p>
          <p>Cuento con experiencia trabajando con todo tipo de clientes y requerimientos, adicionalmente, me considero una persona proactiva y analítica, siempre dispuesto a aportar valor a mi equipo para lograr los objetivos planteados.</p>
        </div>
        {/* <p className='text-xl font-medium font-Fira-Code drop-shadow-md text-dark'>Leer más</p> */}
      </div>
      {/* ABOUT SEE MORE */}
      <div >
        <div className='flex flex-row w-full h-screen sm:flex-col-reverse'>
          <div data-aos="fade-left" data-aos-duration="700" className='relative sm:w-full sm:h-50% w-1/2 h-full' >
            <Image alt='' src={'/img/misc/img1.jpg'} layout='fill' objectFit="cover" objectPosition="center" />

          </div>
          <div data-aos="fade-top" data-aos-duration="700" className='flex flex-col justify-around w-1/2 h-full p-20 sm:w-full sm:h-50% bg-dark text-light font-Fira-Code sm:p-10 '>
            <h3 className='text-5xl sm:text-3xl leading-tight font-Fira-Code '>{'{Experiencia Laboral}'}</h3>
            <ul className='flex flex-col text-lg leading-7'>
              <li><ul className='flex flex-col gap-3 px-5 sm:px-0 font-Inter'>

                <li className='text-3xl font-extralight' >Mantra Consultores</li>
                <li className='font-bold'>Desarrollador Full-Stack</li>
                <li>Jun 2022 - Actualmente</li>
                <li className='text-xl font-light sm:text-lg'>Desarrollé aplicaciones móviles y web, implementé servicios cloud, analicé y documenté requerimientos, diseñé y maqueté interfaces de usuario.</li>
              </ul>
              </li>

            </ul>
          </div>
        </div>
        {/* <div data-aos="fade-right" data-aos-duration="700" className='flex flex-row w-full h-screen'>
          <div className='w-1/2 h-full px-20 py-32 bg-medium'>
            
          </div>
          <div className='relative w-1/2 h-full'>
          </div>
        </div> */}
      </div>
      {/* SKILLS */}
      <div id='skills' className='flex flex-col h-auto gap-24 px-20 sm:gap-16 sm:items-center py-32 sm:px-10 sm:py-28 bg-dark'>
        <h2 data-aos="fade-right" data-aos-duration="700" className='text-5xl sm:text-4xl font-Fira-Code text-medium drop-shadow-lg'>{'{Habilidades}'}</h2>
        <div className='flex flex-col pl-8 gap-36 sm:gap-24 sm:pl-0 font-Fira-Code text-light '>

          <div data-aos="fade-down" data-aos-duration="700" className='flex flex-col gap-16'>

            <h3 className='text-3xl sm:text-2xl text-center drop-shadow-lg'> {'0: "Tecnologías Frontend"'}</h3>
            <div className='flex flex-wrap justify-around gap-y-14 gap-x-20 sm:gap-x-10'>
              {
                frontend.map(({ src, alt }) => (
                  <SkillItem key={src} src={src} alt={alt} />
                ))
              }
            </div>
          </div>
          <div data-aos="fade-down" data-aos-duration="700" className='flex flex-col gap-16'>
            <h3 className='text-3xl sm:text-2xl text-center drop-shadow-lg '>{'1: "Tecnologías Backend"'}</h3>
            <div className='flex flex-wrap justify-around gap-y-14 gap-x-20'>
              {
                backend.map(({ src, alt }) => (
                  <SkillItem key={src} src={src} alt={alt} />
                ))
              }
            </div>
          </div>
          <div data-aos="fade-down" data-aos-duration="700" className='flex flex-col gap-16'>
            <h3 className='text-3xl sm:text-2xl text-center drop-shadow-lg'>{'2: "Tecnologías Mobile"'}</h3>
            <div className='flex flex-wrap justify-around gap-y-14 gap-x-20'>
              {
                mobile.map(({ src, alt }) => (
                  <SkillItem key={src} src={src} alt={alt} />
                ))
              }
            </div>
          </div>
          <div data-aos="fade-down" data-aos-duration="700" className='flex flex-col gap-16'>
            <h3 className='text-3xl sm:text-2xl text-center drop-shadow-lg '>{'3: "Bases de Datos"'}</h3>
            <div className='flex flex-wrap justify-around gap-y-14 gap-x-20'>
              {
                database.map(({ src, alt }) => (
                  <SkillItem key={src} src={src} alt={alt} />
                ))
              }
            </div>
          </div>
          <div data-aos="fade-down" data-aos-duration="700" className='flex flex-col gap-16'>
            <h3 className='text-3xl sm:text-2xl text-center drop-shadow-lg '>{'4: "Testing"'}</h3>
            <div className='flex flex-wrap justify-around gap-y-14 gap-x-20'>
              {
                testing.map(({ src, alt }) => (
                  <SkillItem key={src} src={src} alt={alt} />
                ))
              }
            </div>
          </div>
          <div data-aos="fade-down" data-aos-duration="700" className='flex flex-col gap-16'>
            <h3 className='text-3xl sm:text-2xl text-center drop-shadow-lg'>{'5: "Herramientas"'}</h3>
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
      <div id='projects' className='flex flex-col gap-16 px-20 py-32 bg-independence sm:px-10 sm:py-20'>
        <h2 data-aos="fade-right" data-aos-duration="700" className='text-5xl sm:text-4xl sm:text-center font-Fira-Code text-light drop-shadow-lg'>{'<Proyectos/>'}</h2>
        <div data-aos="fade-down" data-aos-duration="700" className='grid sm:flex sm:flex-col sm:gap-6 grid-cols-3 gap-3'>
          {
            project.map(({ description, details, img, name, repo, tools, url, type }) => (
              <ProjectItem key={name} description={description} details={details} img={img} name={name} repo={repo} tools={tools} url={url} type={type} />
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
