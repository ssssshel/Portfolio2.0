import { ILaboral } from "../utils/interfaces/global";

export const laboralExpList = (): Array<ILaboral> => {
  return [
    {
      enterprise: "Avatar Global",
      en: {
        title: "Full-Stack Developer",
        period: "May 2023 - Currently",
        description: "Development of multiplatform applications, meeting various requirements of international clients."
      },
      es: {
        title: "Desarrollador Full-Stack",
        period: "May 2023 - Actualmente",
        description: "Desarrollo de aplicaciones multiplataforma, atendiendo requerimientos variados de clientes internacionales."
      }
    },
    {
      enterprise: "NTT DATA",
      en: {
        title: "Frontend Mobile Developer",
        period: "Aug 2022 - May 2023",
        description: 'Development and maintenance of functionalities at frontend level of the mobile application "Mi movistar" for Telefónica client, microservices and APIs integration, support for incidents and errors in development.'
      },
      es: {
        title: "Desarrollador Frontend Mobile",
        period: "Ago 2022 - May 2023",
        description: 'Desarrollo y mantenimiento de funcionalidades a nivel Frontend del aplicativo móvil "Mi movistar" del cliente Telefónica, integración con microservicios, soporte a incidencias y errores en el desarrollo.'
      }
    },
    {
      enterprise: "Mantra Consultores",
      en: {
        title: "Software Developer Intern",
        period: "Jun 2022 - Jul 2022",
        description: "Hybrid applications development with Ionic/Angular, cloud services implementation, requirements analysis and documentation, UI design and layout."
      },
      es: {
        title: "Practicante Desarrollador de Software",
        period: "Jun 2022 - Jul 2022",
        description: "Desarrollé aplicaciones móviles y web, implementé servicios cloud, analicé y documenté requerimientos, diseñé y maqueté interfaces de usuario."
      }
    },
  ]
}