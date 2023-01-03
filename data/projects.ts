import { IProjectItemProps } from "../utils/interfaces/global"

export function projectsList() {
  const projects: Array<IProjectItemProps> = [
    {
      name: "Glorious",
      description: "Tienda virtual de prendas creadas por diseñadores peruanos, cuenta con panel de administración.",
      tools: [
        "NextJS", "TailwindCSS", "MongoDB", "Firebase"
      ],
      details: "*Solo Vista Web*",
      img: "glorious.png",
      url: "https://glorious-vs.vercel.app/",
      repo: "https://github.com/ssssshel/GloriousVS",
      type: "web"
    },
    {
      name: "BalatPeruApp",
      description: "Aplicación móvil para la gestión de viajes y pasajeros",
      tools: [
        "Ionic", "React", "Capacitor", "Firebase", "PostgreSQL"
      ],
      details: "",
      img: "balatperu.jpeg",
      url: "",
      repo: "https://github.com/ssssshel/balatPeruApp",
      type: "mobile"
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
      repo: "https://github.com/ssssshel/Dione",
      type: "web"
    },
    {
      name: "MediplantsApp",
      description: "Aplicación móvil para la venta de plantas medicinales peruanas",
      tools: [
        "Flutter", "Firebase", "PostgreSQL"
      ],
      details: "",
      img: "mediplants.jpeg",
      url: "",
      repo: "https://github.com/ssssshel/MediPlants_App",
      type: "mobile"
    },
    {
      name: "MediplantsAPI",
      description: "API web para la aplicación móvil de Mediplants",
      tools: [
        "NodeJS", "Express"
      ],
      details: "",
      img: "mediplantsAPI.png",
      url: "https://mediplants-api.herokuapp.com/",
      repo: "https://github.com/ssssshel/Mediplants_BackendAPI",
      type: "web"
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
      repo: "https://github.com/ssssshel/xeonProject",
      type: "web"
    },
  ]

  return {
    projects
  }
}
