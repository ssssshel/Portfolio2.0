import Image from "next/image";


export default function ProjectPopup({ name, description, tools, details, img, url, repo }: { name: string | undefined, description: string | undefined, tools: Array<string> | undefined, details: string | undefined, img: string | undefined, url: string | undefined, repo: string | undefined }): JSX.Element {
  return (
    <div id="popup" className="fixed hidden grid-cols-5 grid-rows-5 top-0 left-0 w-screen h-screen z-100 bg-dark/80 backdrop-blur-lg">
      <div className=" col-start-2 col-span-3 flex flex-row bg-white row-start-2 row-span-3">
        <div className="relative w-1/2 h-full">
          <Image src={`/img/projects/${img}`} alt={name} layout='fill' objectFit="cover" objectPosition="center" />
        </div>
        <div className="w-1/2 h-full bg">
          <p className="text-dark">{name} </p>
        </div>
      </div>
    </div>
  )
}