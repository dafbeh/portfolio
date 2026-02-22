"use client"

export default function Navbar({ activeSection, setActiveSection }: any) {
  return (
    <nav className="flex justify-center items-center py-5">
      <div className="border border-white/20 rounded-lg h-[45px] w-[350px] 
        flex items-center justify-between select-none">
        <div className={`flex items-center justify-center w-1/2 w-full h-full rounded-l-lg ${activeSection === 'home' ? 'bg-white' : ''}`}>
          <button
            onClick={() => setActiveSection('home')}
            className={`text-l font-bold cursor-pointer w-full h-full ${activeSection === 'home' ? 'text-[#09090b]' : ''
              }`}
          >
            Home
          </button>
        </div>
        <div className={`flex items-center justify-center w-1/2 w-full h-full rounded-r-lg ${activeSection === 'projects' ? 'bg-white' : ''}`}>
          <button
            onClick={() => setActiveSection('projects')}
            className={`text-l font-bold cursor-pointer w-full h-full ${activeSection === 'projects' ? 'text-[#09090b]' : ''
              }`}
          >
            Projects
          </button>
        </div>
      </div>
    </nav>
  );
}