import Album from '../Album.jsx';

const name = 'SyncUp';
const sourceCode = 'https://github.com/dafbeh/SyncUp';
const techList = ['Node.js', 'Socket.io', 'JavaScript'];
const text = `SyncUp allows multiple users to watch 
    YouTube videos together simultaneously. 
    Utilising Node.js to create a server environment 
    and Socket.io to communicate between the client and 
    server, the system handles synchronisation for separate 
    rooms. Features include a no-sign-up design, 
    customisable synchronisation settings, syncing 
    corrections and social features. The final implementation 
    delivers low latency across multiple clients of different
    devices and a foundation for future development.`;

export default function Project1() {
  return (
    <section id={name} className="flex justify-center items-center p-2">
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
                  rounded-full py-1 px-3 text-[13px] mr-2">
                {tech}
                {index < 2 && ','}
              </span>
            ))}
          </div>
        </div>
        <hr className="h-px mt-2 mb-4 bg-[#1b1b1d] border-0"></hr>
        <span className="text-[#9CAFA3] text-[15px] pb-2">{text}</span>
      </div>
    </section>
  );
}