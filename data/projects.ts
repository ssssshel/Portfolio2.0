export function projectsList() {
  const project = [
    {
      name: "Glorious",
      description: "Tienda virtual de prendas creadas por diseñadores peruanos, cuenta con panel de administración.",
      tools: [
        "NextJS", "TailwindCSS", "MongoDB", "Firebase"
      ],
      details: "*Solo Vista Web*",
      img: "glorious.png",
      url: "https://glorious-vs.vercel.app/",
      repo: ""
    },
    {
      name: "BalatPeru App",
      description: "Aplicación móvil para la gestión de viajes y pasajeros",
      tools: [
        "Ionic", "React", "Capacitor", "Firebase", "PostgreSQL"
      ],
      details: "",
      img: "",
      url: "",
      repo: ""
    },
    {
      name: "Dione",
      description: "Sitio web donde se puede obtener información e imágenes del sistema solar, cuenta con un panel de administración para gestionar la información.",
      tools: [
        "NextJS", "TailwindCSS", "MongoDB", "Firebase"
      ],
      details: "",
      img: "dione.png",
      url: "https://dione.vercel.app/",
      repo: ""

    },
    {
      name: "Mediplants App",
      description: "Aplicación móvil para la venta de plantas medicinales peruanas",
      tools: [
        "Flutter", "Firebase", "PostgreSQL"
      ],
      details: "",
      img: "",
      url: "",
      repo: ""
    },
    {
      name: "Xeon",
      description: "Tienda virtual de celulares y dispositivos electrónicos",
      tools: [
        "NodeJS", "Express", "MongoDB", "Sass"
      ],
      details: "*Solo Vista Web*",
      img: "xeon.png",
      url: "https://xeon11.herokuapp.com/",
      repo: ""
    },
  ]

  return {
    project
  }
}

export interface ProjectData {
  name: string,
  description: string,
  tools: string[],
  details: string,
  img: string,
  url: string,
  repo: string
}

export type Project = ProjectData