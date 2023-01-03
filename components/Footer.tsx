import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStackOverflow, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import Link from "next/link"

export default function Footer() {
  return (
    <footer id="contact" className="absolute z-50 flex flex-col justify-between w-full h-screen bg-dark text-light font-Fira-Code ">
      <div>
      </div>
      <div data-aos="fade-down" data-aos-duration="700" className="flex flex-col justify-around h-full p-20 sm:px-8 sm:items-center sm:text-center sm:py-20">
        <p className="text-5xl sm:text-4xl ">¿Deseas contactarme?</p>
        <p className="text-lg  font-Inter">Puedes encontrarme en Github, LinkedIn y StackOverflow:</p>
        <div >
          <ul className="flex gap-20 text-4xl">
            <li>
              <a href="https://github.com/ssssshel" rel="noopener noreferrer" target="_blank "><FontAwesomeIcon icon={faGithub} /></a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/angelart179/" rel="noopener noreferrer" target="_blank "><FontAwesomeIcon icon={faLinkedin} /></a>
            </li>
            <li >
              <a href="https://es.stackoverflow.com/users/256796/angel-arteaga" rel="noopener noreferrer" target="_blank "><FontAwesomeIcon icon={faStackOverflow} /></a>
            </li>
          </ul>
        </div>
        <div><p className="font-Inter">O enviar un correo a:</p> <p className="text-lg font-semibold text-medium">angelarteaga989@gmail.com</p></div>
      </div>
      <div className="flex items-center justify-end h-10 px-20 font-medium bg-medium sm:justify-center sm:text-sm text-dark"><p>{'</> with ❤️ by ssssshel'}</p></div>

    </footer>
  )
}