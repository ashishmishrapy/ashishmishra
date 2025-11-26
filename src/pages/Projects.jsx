import React from 'react'
import ProjectCard from '../components/ProjectCard'

const Projects = () => {
  let projectArray = [
    {img : "img/reelify.webp", title : "Reelify - Instagram Video Downloader", link : "https://reelify-frontend-ptcj.onrender.com/"},
    {img : "img/dbuuconnect.webp", title : "DbuuConnect", link : "https://dbuuconnect.vercel.app/"},
  ]
  return (
    <div className="min-h-screen pt-[75px] p-1 md:px-5">
      <div className='grid grid-cols-1 md:grid-cols-2 gap-5 lg:grid-cols-4'>
        {
          projectArray.map((project, index)=>(
            <ProjectCard key={index} img ={project.img} title={project.title} link={project.link} />
          ))
        }
      </div>
    </div>
  )
}

export default Projects