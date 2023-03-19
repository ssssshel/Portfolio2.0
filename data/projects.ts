import { IProjectItemProps } from "../utils/interfaces/global";

export function projectsList() {
  const projects: Array<IProjectItemProps> = [
    {
      name: "Restponses",
      esDescription: "Libreria para NodeJS que permite generar respuestas estandarizadas para APIs REST",
      enDescription: "NodeJS library that allows you to generate standardized responses for REST APIs",
      tools: ["NodeJS"],
      esDetails: "",
      enDetails: "",
      img: "restponses.png",
      url: "https://www.npmjs.com/package/restponses",
      repo: "https://github.com/ssssshel/restponses",
      hasWebView: true,
    },
    {
      name: "Restponses-Go",
      esDescription: "Libreria para Go que permite generar respuestas estandarizadas para APIs REST",
      enDescription: "Go library that allows you to generate standardized responses for REST APIs",
      tools: ["Go"],
      esDetails: "",
      enDetails: "",
      img: "restponses-go.png",
      url: "https://pkg.go.dev/github.com/ssssshel/restponses-go",
      repo: "https://github.com/ssssshel/restponses-go",
      hasWebView: true,
    },
    {
      name: "Asterisks",
      esDescription: "Versión mejorada de Glorious, cuenta con microservicios y typescript :)",
      enDescription: "Improved version of Glorious, has microservices and typescript :)",
      tools: ["NextJS", "TailwindCSS", "Typescript", "React"],
      esDetails: "No responsivo",
      enDetails: "No responsive",
      img: "asterisks.png",
      url: "https://asterisks-client-front.vercel.app/",
      repo: "https://github.com/ssssshel/asterisks_client_front",
      hasWebView: true,
    },
    {
      name: "Asterisks Microservices",
      esDescription: "Microservicios de Asterisks, incluyen: Autenticación, Registros administrativos, Catalogo de productos, Carrito de compras, Gestion de ordenes, usuarios y más",
      enDescription: "Asterisks microservices, includes: Authentication, Admin Records, Products index, Shopping cart, Orders Management, users and more",
      tools: ["Node", "Express", "Typescript", "Go", "Docker", "Railway", "Amazon RDS", "MongoDB"],
      esDetails: "",
      enDetails: "",
      img: "asterisks_services.png",
      url: "https://railway.app/project/95e20952-0200-441b-b1c1-d2337818267b",
      repo: "https://github.com/orgs/T3-Certus/repositories",
      hasWebView: true,
    },
    {
      name: "Glorious",
      esDescription:
        "Tienda virtual de prendas creadas por diseñadores peruanos, cuenta con panel de administración.",
      enDescription: "Virtual store of garments created by peruvian designers, has a management panel",
      tools: ["NextJS", "TailwindCSS", "MongoDB", "Firebase"],
      esDetails: "No responsivo",
      enDetails: "No responsive",
      img: "glorious.png",
      url: "https://glorious-vs.vercel.app/",
      repo: "https://github.com/ssssshel/GloriousVS",
      hasWebView: true
    },
    {
      name: "BalatPeruApp",
      esDescription: "Aplicación móvil para la gestión de viajes y pasajeros",
      enDescription: "Mobile application for travel and passengers management",
      tools: ["Ionic", "React", "Capacitor", "Firebase", "PostgreSQL"],
      esDetails: "",
      enDetails: "",
      img: "balatperu.jpeg",
      url: "",
      repo: "https://github.com/ssssshel/balatPeruApp",
      hasWebView: false
    },
    {
      name: "Dione",
      esDescription:
        "Sitio web donde se puede obtener información e imágenes del sistema solar, cuenta con un panel de administración para gestionar la información.",
      enDescription: "Web application where you can get solar system pictures and information, has a management panel",
      tools: ["NextJS", "TailwindCSS", "MongoDB", "Firebase"],
      esDetails: "",
      enDetails: "",
      img: "dione.png",
      url: "https://dione.vercel.app/",
      repo: "https://github.com/ssssshel/Dione",
      hasWebView: true
    },
    {
      name: "MediplantsApp",
      esDescription:
        "Aplicación móvil para la venta de plantas medicinales peruanas",
      enDescription: "Mobile application for the sale of peruvian medicinal plants",
      tools: ["Flutter", "Firebase", "PostgreSQL"],
      esDetails: "",
      enDetails: "",
      img: "mediplants.jpeg",
      url: "",
      repo: "https://github.com/ssssshel/MediPlants_App",
      hasWebView: false
    },
    {
      name: "MediplantsAPI",
      esDescription: "API web para la aplicación móvil de Mediplants",
      enDescription: "Web service for Mediplants APP",
      tools: ["NodeJS", "Express"],
      esDetails: "",
      enDetails: "",
      img: "mediplantsAPI.png",
      url: "https://mediplants-api.herokuapp.com/",
      repo: "https://github.com/ssssshel/Mediplants_BackendAPI",
      hasWebView: true,
    },
    {
      name: "Xeon",
      esDescription: "Tienda virtual de celulares y dispositivos electrónicos",
      enDescription: "Virtual store of cellphones and electronic devices",
      tools: ["NodeJS", "Express", "MongoDB", "Sass"],
      esDetails: "No reponsivo",
      enDetails: "No responsive",
      img: "xeon.png",
      url: "https://xeon11.herokuapp.com/",
      repo: "https://github.com/ssssshel/xeonProject",
      hasWebView: true,
    },
  ];

  return {
    projects,
  };
}
