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
    repo: ""
  })

  console.log(currentProject)
  useEffect(() => {
    Aos.init()
    Aos.refresh()
  }, [])

  useEffect(() => {
    const prod = project.filter((p) => { return p.name == projectId })
    const fProd = prod.map((e) => { setCurrentProject({ description: e.description, details: e.details, img: e.img, name: e.name, repo: e.repo, tools: e.tools, url: e.url }) })
    fProd
  }, [projectId])


  return (
    <div>
      <HeadLayout description="" title="" />
      <div>
        <Navbar />
        <div className="flex flex-col h-screen w-full bg-dark">
          <div className="h-40% w-full relative bg-slate-300">
            <Image alt={currentProject.name} src={`/img/projects/${currentProject.img}`} layout='fill' objectFit="cover" objectPosition="center" />
          </div>
          <div className="h-1/2 w-full bg-slate-600">

          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

