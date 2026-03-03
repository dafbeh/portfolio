"use client";

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { useState } from "react";
import { Search, Palette, CodeXml, Rocket, HeartPulse } from "lucide-react";
import { useSwipeable } from 'react-swipeable';

export default function Process() {
  const steps = [
    { "name": "Discovery", "icon": Search, 
      "title": "Understand your business & goals",
      "description": "We start with a deep dive into your vision, target audience, and technical requirements. This ensures every decision from here is aligned with your goals."
     },
    { "name": "Design", "icon": Palette,
      "title": "Wireframes & visual direction",
      "description": "I translate your ideas into wireframes and high-fidelity mockups. You'll see and approve the look and feel before a single line of code is written."
     },
    { "name": "Development", "icon": CodeXml,
      "title": "Fast, clean, scalable code",
      "description": "Production-grade code built with modern frameworks. Performance, accessibility, and maintainability are baked in from the start."
     },
    { "name": "Launch", "icon": Rocket,
      "title": "Deployment, testing, domain setup",
      "description": "Rigorous QA testing across devices and browsers, followed by a smooth deployment. Domain, SSL, and hosting are all handled for you."
     },
    { "name": "Ongoing Support", "icon": HeartPulse,
      "title": "Updates, improvements, peace of mind",
      "description": "Your project doesn't end at launch. I provide continued support for updates, performance monitoring, and iterative improvements."
     },
  ]

  const [active, setActive] = useState(1);
  const ActiveIcon = steps[active - 1].icon;

  const handlers = useSwipeable({
    onSwipedLeft: () => setActive(prev => (prev < steps.length ? prev + 1 : prev)),
    onSwipedRight: () => setActive(prev => (prev > 1 ? prev - 1 : prev))
  });

  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:ml-5 gap-5 items-center max-w-full">
      <div className="lg:block md:w-[275px] sm:max-w-9/10 hidden">
        <div className="flex lg:flex-col flex-row gap-2 select-none cursor-pointer overflow-auto">
          {steps.map((step, i) => (

            <div key={i} className={`flex p-3 rounded-lg transition-all duration-300 group lg:px-2 px-5
                ${active === i + 1 ? "bg-primary/10" : "hover:bg-primary/5"}`}
              onClick={() => setActive(i + 1)}>
              <div className="flex items-center gap-4">

                <div className={`rounded-full p-2 bg-background border-1 border-muted 
                    transition-all duration-300
                    ${active === i + 1 ? "bg-primary/90" : "group-hover:border-primary/50"}`}>
                  <step.icon size={15} className="m-1" />
                </div>

                <div className={`flex flex-col transition-all duration-300 whitespace-nowrap
                    ${active === i + 1 ? "opacity-100" : "opacity-80"}`}>
                  <span className="text-xs text-primary/90">STEP 0{i + 1}</span>
                  <span className="text-sm pt-[2px] font-semibold">{step.name}</span>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="lg:w-[820px] md:w-3/4 sm:w-full p-5">
        <Card {...handlers}
          className="relative
            lg:h-[300px]
            bg-[#09090b]/1
            bg-[radial-gradient(at_95%_15%,_#151519_0px,_transparent_30%)]
          ">
          <CardHeader className="m-5">
            <CardTitle>
              <span className="absolute -top-2 right-1 opacity-3 text-9xl font-bold">
                0{active}
              </span>
              <div className="flex items-center gap-4">

                <div className="rounded-lg p-2 bg-primary/10 border-1 border-muted">
                  <ActiveIcon size={20} className="m-1" />
                </div>

                <div className="flex flex-col">
                  <span className="text-xs text-primary/90">STEP 0{active}</span>
                  <span className="text-xl pt-[2px] font-semibold">{steps[active - 1].name}</span>
                </div>

              </div>
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-2 ml-5">
            <p className="text-lg font-medium">{steps[active - 1].title}</p>
            <p className="text-sm text-muted-foreground max-w-5/6">{steps[active - 1].description}</p>
          </CardContent>

          <CardFooter className="m-5 lg:mt-8">
            <div className="flex items-center gap-2">
              {steps.map((_, dotIndex) => (
                <button
                  key={dotIndex}
                  onClick={() => setActive(dotIndex + 1)}
                  aria-label={`Go to step ${dotIndex + 1}`}
                  className={
                    `h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                      dotIndex === active - 1
                        ? "w-8 bg-primary"
                        : "w-1.5 bg-border hover:bg-muted-foreground"
                    }`
                  }
                />
              ))}
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}