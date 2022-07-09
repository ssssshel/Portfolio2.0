import Image from "next/image"
import { useRouter } from "next/router"
import { useEffect, useRef, useState } from "react"

export default function ProjectItem({ name, description, tools, details, img, url, repo }: { name: string, description: string, tools: Array<string>, details: string, img: string, url: string, repo: string }): JSX.Element {

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
        <button className='bg-medium hover:bg-light' onClick={() => router.push(`/project/${name}`)} ><p>Ver más</p></button>
      </div>
    </div>
  )
}