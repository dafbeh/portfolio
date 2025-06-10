import { useState } from 'react';
import './styles/index.css'
import FloatingBar from './components/FloatingBar.jsx';
import NavBar from './components/Navbar.jsx';
import Home from './components/sections/Home.jsx';
import Projects from './components/sections/Projects.jsx';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <>
      <FloatingBar />
      <NavBar activeSection={activeSection} setActiveSection={setActiveSection} />

      {activeSection === 'home' && <Home />}
      {activeSection === 'projects' && <Projects />}
    </>
  );
}

export default App;
