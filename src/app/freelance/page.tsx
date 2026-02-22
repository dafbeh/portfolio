"use client";

import { useState } from 'react';
import FloatingBar from '@/components/FloatingBar';

export default function HomePage() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div>
      <main>
        <FloatingBar />

      </main>
    </div>
  );
}
