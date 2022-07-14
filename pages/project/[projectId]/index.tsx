import { useEffect, useState } from "react"
import HeadLayout from "../../../components/HeadLayout"
import Navbar from "../../../components/Navbar"
import Navbar2 from "../../../components/Navbar2x"
import Footer from "../../../components/Footer"
import Aos from 'aos'
import 'aos/dist/aos.css'
import { ProjectData, projectsList, Project } from "../../../data/projects"
import { useRouter } from "next/router"
import Image from "next/image"

export default function ProjectMenu() {

  const router = useRouter()
  const { projectId } = router.query
  const { project } = projectsList()

  const [currentProject, setCurrentProject] = useState({
    name: "",
    description: "",
    tools: [""],
    details: "",
    img: "",
    url: "",
    repo: "",
    type: ""
  })

  console.log(currentProject)
  useEffect(() => {
    Aos.init()
    Aos.refresh()
  }, [])

  useEffect(() => {
    const prod = project.filter((p) => { return p.name == projectId })
    const fProd = prod.map((e) => { setCurrentProject({ description: e.description, details: e.details, img: e.img, name: e.name, repo: e.repo, tools: e.tools, url: e.url, type: e.type }) })
    fProd
  }, [projectId])


  return (
    <div>
      <HeadLayout description="" title={currentProject.name} />
      <Navbar />
      <div className="h-screen w-full ">
        <div className="flex bg-medium h-screen w-full px-20  pb-10">
          <div className="w-1/2 flex flex-col justify-center">
            {
              currentProject.type == "web" ? (
                <div className="w-full h-1/2 relative bg-dark">
                  <Image alt={currentProject.name} src={`/img/projects/${currentProject.img}`} layout='fill' objectFit="cover" objectPosition="center" />
                </div>

              ) : (
                <div className="w-1/2 h-4/5 relative bg-slate-300">
                  <Image alt={currentProject.name} src={`/img/projects/${currentProject.img}`} layout='fill' objectFit="cover" objectPosition="center" />
                </div>

              )
            }

          </div>
          <div className="">
            <div>
              <h1 className="text-4xl font-Fira-Code text-white">{currentProject.name}</h1>
              <p>{currentProject.tools.join(' | ')}</p>
              {/* <p>{currentProject}</p> */}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

