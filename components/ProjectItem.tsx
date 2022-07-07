import Image from "next/image"

export default function ProjectItem({ name, description, tools, details, img, url, repo }: { name: string, description: string, tools: Array<string>, details: string, img: string, url: string, repo: string }) {

  return (
    <div className='relative h-60% w-full drop-shadow-lg'>
      <Image alt='' src={'/img/projects/dione.png'} layout='fill' objectFit="cover" objectPosition="center" />
      <div className='absolute flex flex-col justify-center w-full h-full gap-4 p-10 bg-dark/70'>
        <p className='text-3xl text-light'>Dione</p>
        <p className='text-light'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit maxime itaque facilis perferendis. Deleniti necessitatibus ducimus placeat unde, eligendi perferendis earum, molestiae autem, debitis ratione veritatis quae? Ex, repellat magnam.</p>
        <button className='bg-medium hover:bg-light '><p>Ver más</p></button>
      </div>
    </div>
  )
}