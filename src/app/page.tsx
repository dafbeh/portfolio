"use client";

import { useState } from 'react';
import FloatingBar from '@/components/FloatingBar';
import NavBar from '@/components/NavBar';
import Home from '@/components/sections/Home';
import Projects from '@/components/sections/Projects';
import { useSwipeable } from 'react-swipeable';

export default function HomePage() {
  const [activeSection, setActiveSection] = useState('home');

  const handlers = useSwipeable({
    onSwipedLeft: () => setActiveSection('projects'),
    onSwipedRight: () => setActiveSection('home')
  });

  return (
    <div>
      <main className="flex flex-col" {...handlers}>
        <NavBar activeSection={activeSection} setActiveSection={setActiveSection} />
        <FloatingBar />

        {activeSection === 'home' && <Home />}
        {activeSection === 'projects' && <Projects />}
      </main>
    </div>
  );
}
