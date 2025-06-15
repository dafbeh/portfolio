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
            <span className="text-[#9CAFA3] text-[15px]">• BSc Computer Science, ____ at Swansea University</span>

            <span className="mx-auto mt-8 mb-2">My technologies...</span>
          </div>
      </div>  
      <Carousel />
    </div>
  );
}