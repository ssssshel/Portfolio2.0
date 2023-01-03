import Image from "next/image"

export default function SkillItem({ src, alt }: { src: string, alt: string }): JSX.Element {
  return (
    <div className='flex flex-col items-center gap-3'>
      <div className="relative w-16 h-16">
        <Image className="rounded-md" alt={alt} src={`/img/${src}`} layout="fill" objectFit="contain" />
      </div>
      <p className="text-lg font-medium">{alt}</p>
    </div>
  )
}