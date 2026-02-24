"use client";

import { Inter } from 'next/font/google'
import { Button } from '@/components/ui/button';
import Link from 'next/link'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  weight: '900',
})


export default function HomePage() {
  return (
    <div className="bg-background">
      {/* Hero */}
      <section>
        <div className="flex flex-col gap-5 justify-center items-center md:py-35 py-10">
          <div className="flex flex-col gap-5 justify-center items-center">
            <div className="text-primary text-sm font-bold font-sans tracking-widest
              bg-primary/10 px-4 py-1 rounded-full border-1 border-primary/20 select-none">
              AVAILABLE FOR NEW PROJECTS
            </div>
            <h1 className={`${inter.className} text-center text-4xl sm:text-6xl lg:text-7xl`}>
              Freelance Services
            </h1>
          </div>
          <p className="text-center sm:w-[700px] px-2 text-gray-300/70 font-sans text-lg">
            Scalable, high-performance web solutions tailored to your business needs.
            I specialize in building production-ready applications with a focus on architecture,
            speed, and security.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:pt-4 
              w-full sm:w-auto p-2">
            <Button className="font-bold p-6 text-[15px] cursor-pointer">
              Schedule a Consultation
            </Button>
            <Button asChild variant="outline"
              className="font-bold p-6 text-[15px] cursor-pointer 
              border-white/20 hover:bg-white/5 w-full sm:w-auto"
            >
              <Link href="/">
                View My Work
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
