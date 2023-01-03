import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons"
import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import Aos from 'aos'
import 'aos/dist/aos.css'

export default function Navbar(): JSX.Element {

  const router = useRouter()

  const { route } = router

  const [isVisible, setIsVisible] = useState(false)


  useEffect(() => {
    const openBtn = document.getElementById("openBtn")
    const closeBtn = document.getElementById("closeBtn")
    const mobileDrawer = document.getElementById("mobMenu")
    const mobileNavbar = document.getElementById("mobileNavbar")
    console.log(isVisible)
    if (isVisible) {
      openBtn!.style.display = "none"
      closeBtn!.style.display = "block"
      mobileDrawer!.style.display = "flex"
      mobileNavbar!.style.height = "100%"
    }
    if (!isVisible) {
      openBtn!.style.display = "block"
      closeBtn!.style.display = "none"
      mobileDrawer!.style.display = "none"
      mobileNavbar!.style.height = "5rem"
    }

  })



  return (
    <div>
      {/* MOBILE */}
      <nav id="mobileNavbar" className="fixed top-0 z-30 w-full h-20 px-20 lg:hidden sm:px-8 bg-dark/70 backdrop-blur-sm text-light ">
        <div className="flex flex-row items-baseline justify-between h-20 pt-5">
          <p className="text-3xl font-Inter sm:text-2xl font-extralight"> <Link href={'/'}><a>ssssshel</a></Link></p>
          <div>
            <FontAwesomeIcon onClick={() => setIsVisible(true)} id="openBtn" icon={faBars} className="text-xl" />
            <FontAwesomeIcon onClick={() => setIsVisible(false)} id="closeBtn" icon={faTimes} className="text-2xl" />
          </div>
        </div>
        {/* menu */}
        <div id="mobMenu" className="flex flex-col justify-center h-full ">
          {
            route == "/" ? (
              <ul className="flex flex-col items-center gap-16 pb-20 h-max ">
                <li onClick={() => setIsVisible(false)}>
                  <a href="#about">
                    Sobre mí
                  </a></li>
                <li onClick={() => setIsVisible(false)}>
                  <a href="#skills">
                    Habilidades
                  </a>
                </li>
                <li onClick={() => setIsVisible(false)}><a href="#projects">Proyectos</a></li>
                <li onClick={() => setIsVisible(false)}><a href="#contact">Contacto</a></li>
                <li className="flex flex-col items-center gap-2">Idioma <select className="text-dark"><option value="es" onClick={() => router.push('/')}>Español</option><option value="en" onClick={() => router.push('/en')}>English</option></select></li>
              </ul>
            ) : (
              // en
              <ul className="flex flex-col items-center gap-16 pb-20 h-max ">
                <li onClick={() => setIsVisible(false)}><a href="#about">About</a></li>
                <li onClick={() => setIsVisible(false)}><a href="#skills">Skills</a></li>
                <li onClick={() => setIsVisible(false)}><a href="#projects">Projects</a></li>
                <li onClick={() => setIsVisible(false)}><a href="#contact">Contact</a></li>
                <li className="flex flex-col items-center gap-2">Language<select className="text-dark"><option value="en" onClick={() => router.push('/en')}>English</option><option value="es" onClick={() => router.push('/')}>Spanish</option></select></li>
              </ul>
            )
          }
        </div>
      </nav>

      {/* WEB */}
      <nav className="fixed top-0 z-30 flex flex-row items-baseline justify-between w-full h-20 px-20 pt-4 sm:hidden md:hidden bg-dark/60 backdrop-blur-sm text-light ">
        <p className="text-3xl font-Inter font-extralight"> <Link href={'/'}><a>ssssshel</a></Link></p>
        {
          route == "/" ? (
            <ul className="flex flex-row gap-12 p-2 ">
              <li>
                <a href="#about">
                  Sobre mí
                </a></li>
              <li>
                <a href="#skills">
                  Habilidades
                </a>
              </li>
              <li><a href="#projects">Proyectos</a></li>
              <li><a href="#contact">Contacto</a></li>
              <li><select className="text-dark"><option value="es" onClick={() => router.push('/')}>Es</option><option value="en" onClick={() => router.push('/en')}>En</option></select></li>
            </ul>
          ) : (
            // en
            <ul className="flex flex-row gap-12 p-2 ">
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><select className="text-dark"><option value="en" onClick={() => router.push('/en')}>En</option><option value="es" onClick={() => router.push('/')}>Es</option></select></li>
            </ul>
          )
        }
      </nav>

      {/* OPTIONS */}
      {/* <div className="z-30 w-screen h-screen bg-slate-400">

      </div> */}
    </div>
  )
}