import Carousel from '../Carousel.jsx';

export default function Home() {
  return (
    <div>
      <div className="flex justify-center items-center p-2">

          <div className="h-full w-[600px] flex flex-col">
            <span className="font-bold text-[18px] mt-2">About me</span>
            <hr className="h-px mt-2 mb-4 bg-[#1b1b1d] border-0"></hr>
            <span className="text-[#9CAFA3] text-[15px]">
              I'm a UK-based software developer focused on modern web 
              applications, user interface, and user experience. 
              I work across full-stack development and real-time 
              systems.
            </span>

            <span className="font-bold text-[18px] mt-5">Education</span>
            <hr className="h-px mt-2 mb-4 bg-[#1b1b1d] border-0"></hr>
            <span className="text-[#9CAFA3] text-[15px]">• <b>BSc Computer Science – First Class Honours, Swansea University</b></span>
            <span className="text-[#9CAFA3] text-[15px]">• Achieved a First on dissertation and final-year project</span>
            <span className="text-[#9CAFA3] text-[15px]">• Scored <b>93%</b> in Web Application Development</span>
            <span className="text-[#9CAFA3] text-[15px]">• Scored <b>96%</b> in Game Development</span>

            <span className="font-bold text-[18px] mt-5">In progress:</span>
            <hr className="h-px mt-2 mb-4 bg-[#1b1b1d] border-0"></hr>
            <a href="https://github.com/dafbeh/Marketplace">
              <span className="text-[#9CAFA3] text-[15px] text-underline">• <u>A full-stack NFT marketplace platform with Laravel</u></span>
            </a>

            <span className="mx-auto mt-8 pb-1">My technologies</span>
          </div>
      </div>  
      <Carousel />
      <div className="pb-12"></div>
    </div>
  );
}