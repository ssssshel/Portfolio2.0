import Image from "next/image"

export default function SkillItem({ src, alt }: { src: string, alt: string }): JSX.Element {
  return (
    <div className='flex flex-col items-center gap-3'>
      <Image alt={alt} src={`/img/${src}`} width={70} height={70} />
      <p className="text-lg font-medium">{alt}</p>
    </div>
  )
}