import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStackOverflow, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import Link from "next/link"

export default function Footer() {
  return (
    <footer id="contact" className="bg-dark w-full h-screen text-light font-Fira-Code z-50 flex flex-col justify-between absolute ">
      <div>
      </div>
      <div data-aos="fade-down" data-aos-duration="700" className="p-20 flex flex-col justify-around h-full">
        <p className="text-5xl">¿Deseas contactarme?</p>
        <p className=" font-Inter text-lg">Puedes encontrarme en Github, LinkedIn y StackOverflow:</p>
        <div >
          <ul className="flex text-4xl gap-20">
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
        <div><p className="font-Inter">O enviar un correo a:</p> <p className="font-semibold text-lg text-medium">angelarteaga989@gmail.com</p></div>
      </div>
      <div className="bg-medium h-10 flex justify-end px-20 items-center font-medium text-dark"><p>{'</> with ❤️ by ssssshel'}</p></div>

    </footer>
  )
}