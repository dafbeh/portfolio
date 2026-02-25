"use client";

import { Inter } from 'next/font/google'
import { Button } from '@/components/ui/button';
import Link from 'next/link'
import PriceCard from '@/components/Card';

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
            <h1 className={`${inter.className} text-center text-6xl sm:text-6xl lg:text-7xl`}>
              Freelance Services
            </h1>
          </div>
          <p className="text-center sm:w-[700px] w-9/10 text-gray-300/70 font-sans text-lg">
            Scalable, high-performance web solutions tailored to your business needs.
            I specialize in building production-ready applications with a focus on architecture,
            speed, and security.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:pt-4 
              w-full sm:w-auto p-2">
            <Button className="font-semibold p-6 text-[15px] cursor-pointer">
              Schedule a Consultation
            </Button>
            <Button asChild variant="outline"
              className="font-semibold p-6 text-[15px] cursor-pointer 
              border-white/20 hover:bg-white/5 w-full sm:w-auto"
            >
              <Link href="/">
                View My Work
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section>
        <div className="flex flex-col md:flex-row gap-3 justify-center items-center">
          <PriceCard
            title={"Growth"}
            price={39.99}
            description={"End-to-end development for MVPs or business website overhauls."}
            features={[
              "Everything in Starter",
              "Discounted development hours",
              "Speed optimization",
              "Frequent health checks",
              "Priority support",
            ]}
          />
          <PriceCard
            title={"Starter"}
            price={19.99}
            description={"End-to-end development for MVPs or business website overhauls."}
            features={[
              "Hosting Included",
              "Domain Management",
              "Minor text/image changes",
              "Security updates",
              "Email support",
            ]}
            popular
          />
          <PriceCard
            title={"Advanced"}
            price={99.99}
            description={"End-to-end development for MVPs or business website overhauls."}
            features={[
              "Everything in Growth",
              "Free small feature updates",
              "Same-week changes",
              "Emergency support",
            ]}
          />
        </div>
      </section>
    </div>
  );
}
