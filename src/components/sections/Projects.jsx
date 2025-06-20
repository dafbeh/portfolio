import SyncUp from '../projects/SyncUp.jsx';
import SocialMedia from '../projects/SocialMedia.jsx';
import Chips from '../projects/Chips.jsx';
import Asteroids from '../projects/Asteroids.jsx';

export default function Projects() {
  return (
    <div>
      <div className="flex justify-center items-center p-2">
        <div className="h-full w-[600px] flex flex-col">
          <span className="font-bold text-[18px] mt-2">Featured Projects</span>
          <hr className="h-px mt-2 mb-4 bg-[#1b1b1d] border-0"></hr>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 select-none">

            <a href="#SyncUp" className="w-full h-[150px] flex flex-col rounded-lg border-2 pl-2 pr-1 
                transition duration-200 ease-in-out hover:opacity-80 cursor-pointer"> 
              <span className="mt-2 ml-1">SyncUp</span>
              <span className="text-[#9CAFA3] text-[15px] ml-1">Real-time synchronized media playback with friends.</span>
              <div className="flex flex-wrap mt-auto mb-3">
                {["JavaScript", "Node.js", "Socket.io"].map((tech, index) => (
                  <span key={index} className="text-[#9CAFA3] bg-blue-500/10 text-blue-500 
                      rounded-full py-1 px-3 text-[13px] mr-2">
                    {tech}
                    {index < 2 && ','}
                  </span>
                ))}
              </div>
            </a>
              
            <a href="#SocialSite" className="w-full h-[150px] flex flex-col rounded-lg border-2 pl-2 pr-1 
                transition duration-200 ease-in-out hover:opacity-80 cursor-pointer"> 
              <span className="mt-2 ml-1">Social Site</span>
              <span className="text-[#9CAFA3] text-[15px] ml-1">Design and Development of a Social Media Style Web Application.</span>
              <div className="flex flex-wrap mt-auto mb-3">
                {["Laravel", "PHP", "JavaScript"].map((tech, index) => (
                  <span key={index} className="text-[#9CAFA3] bg-blue-500/10 text-blue-500 
                      rounded-full py-1 px-3 text-[13px] mr-2 ml-1">
                    {tech}
                    {index < 2 && ','}
                  </span>
                ))}
              </div>
            </a>
              
            <a href="#chips" className="w-full h-[150px] flex flex-col rounded-lg border-2 pl-2 pr-1 
                transition duration-200 ease-in-out hover:opacity-80 cursor-pointer"> 
              <span className="mt-2 ml-1">Chips-Challange</span>
              <span className="text-[#9CAFA3] text-[15px] ml-1">Reimagining the 1989 Classic Chip’s Challenge: A Software Engineering Project at Swansea University.</span>
              <div className="flex flex-wrap mt-auto mb-3">
                {["Java"].map((tech, index) => (
                  <span key={index} className="text-[#9CAFA3] bg-blue-500/10 text-blue-500 
                      rounded-full py-1 px-3 text-[13px] mr-2 ml-1">
                    {tech}
                  </span>
                ))}
              </div>
            </a>
              
            <a href="#Asteroids" className="w-full h-[150px] flex flex-col rounded-lg border-2 pl-2 pr-1 
                transition duration-200 ease-in-out hover:opacity-80 cursor-pointer"> 
              <span className="mt-2 ml-1">Asteroids</span>
              <span className="text-[#9CAFA3] text-[15px] ml-1">Asteroids Reimagined: A Unity-Based Introduction to Video Game Programming at Swansea University.</span>
              <div className="flex flex-wrap mt-auto mb-3">
                {["Unity", "C#"].map((tech, index) => (
                  <span key={index} className="text-[#9CAFA3] bg-blue-500/10 text-blue-500 
                      rounded-full py-1 px-3 text-[13px] mr-2 ml-1">
                    {tech}
                    {index < 1 && ','}
                  </span>
                ))}
              </div>
            </a>
          </div>
        </div>
      </div>
      <SyncUp />
      <SocialMedia />
      <Chips />
      <Asteroids />
    </div>
  );
}
