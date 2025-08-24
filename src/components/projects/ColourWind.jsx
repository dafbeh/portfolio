import Album from '../Album.jsx';
import { RevealOnScroll } from '../RevealOnScroll.jsx';
import { ArrowUpRight } from 'lucide-react';

const name = 'Colour Wind';
const sourceCode = 'https://colour-wind.vercel.app/';
const techList = ["Next.js", "React", "Tailwind"];
const slides = [
  'Projects/ColourWind/ColourWind-1.png',
  'Projects/ColourWind/ColourWind-2.png'
];
const text = `Colour Wind is an interactive web tool that allows developers 
    and designers to generate complete Tailwind CSS color palettes from a 
    single base color. Users can pick a color, name their palette, and 
    instantly see shades from 50 to 950. The tool also generates ready-to-use 
    Tailwind @theme code blocks for quick integration into projects.`;

export default function Project1() {
  return (
    <section id={name} className="flex justify-center items-center p-2">
      <div className="h-full w-[600px] flex flex-col">
        <RevealOnScroll>
        <div className="mt-2 flex items-center justify-between">
          <div className='flex items-center gap-0'>
            <span className="font-bold text-[18px]">{name}</span>
            <a href={sourceCode} target='_blank'>
              <ArrowUpRight color="#2b7fff" strokeWidth={1.5} />
            </a>
          </div>
          <div>
            {techList.map((tech, index) => (
              <span key={index} className="text-[#9CAFA3] bg-blue-500/10 text-blue-500 
                  rounded-full py-1 px-3 text-[13px] mr-1">
                {tech}
              </span>
            ))}
          </div>
        </div>
        <hr className="h-px mt-2 mb-2 bg-[#1b1b1d] border-0"></hr>
        <span className="text-[#9CAFA3] text-[15px] pb-3">{text}</span>
        <Album slides={slides}/>
        </RevealOnScroll>
      </div>
    </section>
  );
}