export default function Navbar({ activeSection, setActiveSection }) {
  return (
    <nav className="flex justify-center items-center p-1 md:p-2">
      <div className="border rounded-lg h-[50px] w-[600px] flex items-center justify-center select-none">
        <div className="flex items-center justify-center gap-x-10 sm:gap-x-26">
          <button
            onClick={() => setActiveSection('home')}
            className={`text-l font-bold cursor-pointer ${
              activeSection === 'home' ? 'text-white' : 'text-[#9CAFA3]'
            } hover:text-white`}
          >
            Home
          </button>
          <button
            onClick={() => setActiveSection('projects')}
            className={`text-l font-bold cursor-pointer ${
              activeSection === 'projects' ? 'text-white' : 'text-[#9CAFA3]'
            } hover:text-white`}
          >
            Projects
          </button>
        </div>
      </div>
    </nav>
  );
}