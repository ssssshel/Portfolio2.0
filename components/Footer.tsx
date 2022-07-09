import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStackOverflow, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-dark w-full h-screen text-light font-Fira-Code z-50 flex flex-col justify-between absolute ">
      <div>
      </div>
      <div className="p-20 flex flex-col justify-around h-full">
        <p className="text-5xl">¿Deseas contactarme?</p>
        <p className="text-lg">Puedes encontrarme en mis distintas redes sociales</p>
        <div >
          <ul className="flex">
            <li>
              <Link href=""><a ><FontAwesomeIcon icon={faGithub} /></a></Link>
            </li>
            <li>
              <Link href=""><a ><FontAwesomeIcon icon={faLinkedin} /></a></Link>
            </li>
            <li>
              <Link href=""><a ><FontAwesomeIcon icon={faStackOverflow} /></a></Link>
            </li>
          </ul>
        </div>
        <div><p>O enviar un correo a:</p> <p>angelarteaga989@gmail.com</p></div>
      </div>
      <div><p>{'</> with ❤️ by ssssshel'}</p></div>

    </footer>
  )
}