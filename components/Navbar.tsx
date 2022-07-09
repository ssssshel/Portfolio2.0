

export default function Navbar() {
  return (
    <nav className="w-full h-20 pl-20 pr-20 pt-4 bg-dark/70 backdrop-blur-sm sticky top-0 z-30 text-light flex flex-row justify-between items-baseline ">
      <p className="font-Inter font-extralight text-3xl">ssssshel</p>
      <ul className="flex flex-row gap-12 p-2 ">
        <li>Sobre mí</li>
        <li>Habilidades</li>
        <li>Proyectos</li>
        <li>Contacto</li>
      </ul>
    </nav>
  )
}