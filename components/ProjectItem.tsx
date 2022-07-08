import Image from "next/image"
import { useEffect, useRef, useState } from "react"

export default function ProjectItem({ name, description, tools, details, img, url, repo }: { name: string, description: string, tools: Array<string>, details: string, img: string, url: string, repo: string }): JSX.Element {

  const ref = useRef<HTMLDivElement>(null)

  const [showItem, setShowItem] = useState(false)


  useEffect(() => {
    if (showItem) {
      ref.current!.style.display = "flex"
    } else {
      ref.current!.style.display = "none"
    }
  }, [showItem])

  function showPopup() {
    document.getElementById("popup")!.style.display = "grid"
  }

  // console.log(selectedItem)
  return (
    <div onMouseOver={() => setShowItem(true)} onMouseLeave={() => setShowItem(false)} className='relative h-60% w-full drop-shadow-lg'>
      <Image alt='' src={`/img/projects/${img}`} layout='fill' objectFit="cover" objectPosition="center" />
      <div ref={ref} className='absolute hidden flex-col justify-center w-full h-full gap-4 p-10 bg-dark/70'>
        <p className='text-3xl text-light'>{name}</p>
        <p className='text-light'>{tools.join(" | ")}</p>
        <p className='text-light text-sm'>{description}</p>
        <button className='bg-medium hover:bg-light' onClick={() => { showPopup() }} ><p>Ver más</p></button>
      </div>
      <div id="popup" className="fixed grid-cols-5 grid-rows-5 top-0 left-0 w-screen h-screen z-100 bg-dark/80 backdrop-blur-lg">
        <div className=" col-start-2 col-span-3 flex flex-row bg-white row-start-2 row-span-3">
          <div className="relative w-1/2 h-full">
            <Image src={`/img/projects/${img}`} alt={name} layout='fill' objectFit="cover" objectPosition="center" />
          </div>
          <div className="w-1/2 h-full bg">
            <p className="text-dark">{name} </p>
          </div>
        </div>
      </div>
    </div>
  )
}