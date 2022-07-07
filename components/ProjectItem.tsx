import Image from "next/image"
import { useRef } from "react"

export default function ProjectItem({ name, description, tools, details, img, url, repo }: { name: string, description: string, tools: Array<string>, details: string, img: string, url: string, repo: string }): JSX.Element {

  const ref = useRef()


  function showDetails() {
    ref.current!.
  }

  return (
    <div onMouseOver={ } className='relative h-60% w-full drop-shadow-lg'>
      <Image alt='' src={`/img/projects/${img}`} layout='fill' objectFit="cover" objectPosition="center" />
      <div ref={ref} className='absolute flex flex-col justify-center w-full h-full gap-4 p-10 bg-dark/70'>
        <p className='text-3xl text-light'>{name}</p>
        <p className='text-light'>{description}</p>
        <button className='bg-medium hover:bg-light' onClick={() => { }} ><p>Ver más</p></button>
      </div>
    </div>
  )
}