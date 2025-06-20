import Album from '../Album.jsx';
import { RevealOnScroll } from '../RevealOnScroll.jsx';

const name = 'Asteroids';
const sourceCode = 'https://github.com/dafbeh/Asteroids';
const techList = ['C#', 'Unity'];
const slides = [
  'Projects/Asteroids/Asteroids-1.png',
  'Projects/Asteroids/Asteroids-2.png',
  'Projects/Asteroids/Asteroids-3.png'
];
const text = `A modern remake of the classic game, 
        built in Unity with C#. Implemented core systems 
        like player movement, shooting, asteroid behavior, 
        collisions, and score tracking. Added power-ups 
        to enhance gameplay and built a clean, responsive UI.`;

export default function Project1() {
  return (
    <section id={name} className="flex justify-center items-center p-2 pb-3">
      <RevealOnScroll>
      <div className="h-full w-[600px] flex flex-col">
        <div className="mt-2 flex items-center justify-between">
          <div className='flex items-center gap-2'>
            <span className="font-bold text-[18px]">{name}</span>
            <a href={sourceCode} target='_blank'>
              <svg className='hover:stroke-white cursor-pointer'
                xmlns="http://www.w3.org/2000/svg" width="20" height="20" 
                fill="none" stroke="#9cafa3" stroke-linecap="round" 
                viewBox="0 0 24 24" stroke-linejoin="round" stroke-width="2">
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
              </svg>
            </a>
          </div>
          <div>
            {techList.map((tech, index) => (
              <span key={index} className="text-[#9CAFA3] bg-blue-500/10 text-blue-500 
                  rounded-full py-1 px-3 text-[13px] mr-1">
                {tech}
                {index < 1 && ','}
              </span>
            ))}
          </div>
        </div>
        <hr className="h-px mt-2 mb-4 bg-[#1b1b1d] border-0"></hr>
        <span className="text-[#9CAFA3] text-[15px] pb-3">{text}</span>
        <Album slides={slides}/>
      </div>
      </RevealOnScroll>
    </section>
  );
}