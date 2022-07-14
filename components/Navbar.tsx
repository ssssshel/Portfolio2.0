import Link from "next/link"
import { useRouter } from "next/router"

export default function Navbar() {

  const router = useRouter()

  const { route } = router

  return (
    <nav className="w-full h-20 pl-20 pr-20 pt-4 bg-dark/70 backdrop-blur-sm sticky top-0 z-30 text-light flex flex-row justify-between items-baseline ">
      <p className="font-Inter font-extralight text-3xl"> <Link href={'/'}><a>ssssshel</a></Link></p>
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
            <li>About</li>
            <li>Skills</li>
            <li>Projects</li>
            <li>Contact</li>
            <li><select className="text-dark"><option value="en" onClick={() => router.push('/en')}>En</option><option value="es" onClick={() => router.push('/')}>Es</option></select></li>
          </ul>
        )
      }

    </nav>
  )
}