"use client"

import SyncUp from '../projects/SyncUp';
import SocialMedia from '../projects/SocialMedia';
import Chips from '../projects/Chips';
import Asteroids from '../projects/Asteroids';
import ColourWind from '../projects/ColourWind';
import Svgify from '../projects/Svgify';

export default function Projects() {
  const projects = [
    {
      name: "SyncUp",
      description: "Real-time synchronized media playback with friends.",
      technologies: ["JavaScript", "Node.js", "Socket.io"],
      link: "#SyncUp"
    },
    {
      name: "Social Site",
      description: "Design and Development of a Social Media Style Web Application.",
      technologies: ["Laravel", "PHP", "JavaScript"],
      link: "#SocialSite"
    },
    {
      name: "Chips-Challange",
      description: "Reimagining the 1989 Classic Chip’s Challenge: A Software Engineering Project at Swansea University.",
      technologies: ["Java"],
      link: "#chips"
    },
    {
      name: "Asteroids",
      description: "Asteroids Reimagined: A Unity-Based Introduction to Video Game Programming at Swansea University.",
      technologies: ["Unity", "C#"],
      link: "#Asteroids"
    },
    {
      name: "Colour Wind",
      description: "Generates complete Tailwind compatible colour themes.",
      technologies: ["Next.js", "React", "Tailwind"],
      link: "#Colour Wind"
    },
    {
      name: "Svgify",
      description: "A tool to convert raster images into SVG format.",
      technologies: ["Next.js", "React", "Tailwind"],
      link: "#Svgify"
    }
  ];

  return (
    <div>
      <div className="flex justify-center items-center p-2 md:pt-8 pt-2">
        <div className="h-full w-[700px] flex flex-col">
          <span className="font-bold text-[18px]">Featured Projects</span>
          <hr className="h-px mt-2 mb-4 bg-[#1b1b1d] border-0"></hr>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 select-none">
            {projects.map((project, index) => (
              <a key={index} href={project.link} className="w-full md:h-[160px] h-[150px] flex flex-col rounded-lg border-1 border-white/20 pl-3 pt-1 pr-2 
                  transition duration-200 ease-in-out hover:opacity-80 cursor-pointer hover:border-blue-500">
                <span className="mt-2 ml-1">{project.name}</span>
                <span className="text-[#9CAFA3] text-[15px] ml-1">{project.description}</span>
                <div className="flex flex-wrap mt-auto mb-3">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="bg-blue-500/10 text-blue-500 
                        rounded-full py-1 px-3 text-[13px] mr-2">
                      {tech}
                    </span>
                  ))}
                </div>
              </a>
            ))}

          </div>
        </div>
      </div>
      <div className='flex flex-col pt-6 pb-12 gap-6'>
        <SyncUp />
        <SocialMedia />
        <Chips />
        <Asteroids />
        <ColourWind />
        <Svgify />
      </div>
    </div>
  );
}
