"use client";

import { useState } from 'react';
import FloatingBar from '@/components/FloatingBar';
import NavBar from '@/components/NavBar';
import Home from '@/components/sections/Home';
import Projects from '@/components/sections/Projects';

export default function HomePage() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div>
      <main>
        <FloatingBar />
        <NavBar activeSection={activeSection} setActiveSection={setActiveSection} />

        {activeSection === 'home' && <Home />}
        {activeSection === 'projects' && <Projects />}
      </main>
    </div>
  );
}
