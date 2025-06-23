import Album from '../Album.jsx';
import { RevealOnScroll } from '../RevealOnScroll.jsx';

const name = 'Social Site';
const sourceCode = 'https://github.com/dafbeh/Laravel-Social-Media';
const techList = ['Laravel', 'PHP', 'JavaScript'];
const slides = [
  'Projects/Social/Social-1.png',
  'Projects/Social/Social-2.png',
  'Projects/Social/Social-3.png'
];
const text = `Design and Development of a Social Media Style Web Application 
        Using Laravel.  Developed as part of Swansea University's Web 
        Application Development module, it allows users to create profiles, 
        post updates, and interact with others in a dynamic timeline. 
        Features include user authentication, responsive UI design, 
        real-time comment threads, and post engagement tools.`;

export default function Project2() {
  return (
    <section id="SocialSite" className="flex justify-center items-center p-2">
      <div className="h-full w-[600px] flex flex-col">
        <RevealOnScroll>
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