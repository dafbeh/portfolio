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
      <main className="flex flex-col">
        <NavBar activeSection={activeSection} setActiveSection={setActiveSection} />
        <FloatingBar />

        {activeSection === 'home' && <Home />}
        {activeSection === 'projects' && <Projects />}
      </main>
    </div>
  );
}
