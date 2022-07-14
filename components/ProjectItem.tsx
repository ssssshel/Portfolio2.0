import Image from "next/image"
import { useRouter } from "next/router"
import { useEffect, useRef, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"

export default function ProjectItem({ name, description, tools, details, img, url, repo, type }: { name: string, description: string, tools: Array<string>, details: string, img: string, url: string, repo: string, type: string }): JSX.Element {

  const router = useRouter()

  const ref = useRef<HTMLDivElement>(null)

  const [showItem, setShowItem] = useState(false)


  useEffect(() => {
    if (showItem) {
      ref.current!.style.display = "flex"
    } else {
      ref.current!.style.display = "none"
    }
  }, [showItem])

  return (
    <div onMouseOver={() => setShowItem(true)} onMouseLeave={() => setShowItem(false)} className='relative h-60% w-full drop-shadow-lg'>
      <Image alt='' src={`/img/projects/${img}`} layout='fill' objectFit="cover" objectPosition="center" />
      <div ref={ref} className='absolute hidden flex-col justify-center w-full h-full gap-4 p-10 bg-dark/70'>
        <p className='text-3xl text-light'>{name}</p>
        <p className='text-light'>{tools.join(" | ")}</p>
        <p className='text-light text-sm'>{description}</p>
        {
          type == "web" ? (
            <div className="flex justify-between gap-2">
              <a href={url} target="_blank" rel="noopener noreferrer" className=" w-full">
                <button className='bg-medium hover:bg-light py-1 w-full' ><p>Ver sitio</p></button>
              </a>
              <a href={repo} target="_blank" rel="noopener noreferrer" className=" w-full">
                <button className='bg-medium hover:bg-light py-1 flex items-center justify-center gap-2 w-full' ><FontAwesomeIcon icon={faGithub} /><p>Repositorio</p></button>
              </a>
            </div>

          ) : (
            <div className="flex justify-between gap-2">
              <a href={repo} target="_blank" rel="noopener noreferrer" className=" w-full">
                <button className='bg-medium hover:bg-light py-1 flex items-center justify-center gap-2 w-full'  ><FontAwesomeIcon icon={faGithub} /><p>Ver repositorio</p></button>

              </a>

            </div>

          )
        }
      </div>
    </div>
  )
}