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
import { cn } from "@/lib/utils";

export default function Process() {
  const steps = [
    { "name": "Discovery", "icon": Search },
    { "name": "Design", "icon": Palette },
    { "name": "Development", "icon": CodeXml },
    { "name": "Launch", "icon": Rocket },
    { "name": "Ongoing Support", "icon": HeartPulse },
  ]
  const [active, setActive] = useState(1);
  const ActiveIcon = steps[active - 1].icon;

  return (
    <div className="flex flex-col md:flex-row md:justify-between gap-5 items-center">
      <div className="w-[275px]">
        <div className="flex sm:flex-col flex-row gap-2 select-none cursor-pointer overflow-hidden">
          {steps.map((step, i) => (

            <div key={i} className={`flex p-3 rounded-lg transition-all duration-300 group
                ${active === i + 1 ? "bg-primary/10" : "hover:bg-primary/5"}`}
              onClick={() => setActive(i + 1)}>
              <div className="flex items-center gap-4">

                <div className={`rounded-full p-2 bg-background border-1 border-muted transition-all duration-300 
                    ${active === i + 1 ? "bg-primary/90" : "group-hover:border-primary/50"}`}>
                  <step.icon size={15} className="m-1" />
                </div>

                <div className={`flex flex-col transition-all duration-300
                    ${active === i + 1 ? "opacity-100" : "opacity-80"}`}>
                  <span className="text-xs text-primary/90">STEP 0{i + 1}</span>
                  <span className="text-sm pt-[2px] font-semibold">{step.name}</span>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="lg:w-[820px] w-full p-5">
        <Card
          className=" relative
            h-[300px]
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
            <p className="text-lg font-medium">Understand your business & goals</p>
            <p className="text-sm text-muted-foreground max-w-5/6">We start with a deep dive into your vision, target audience, and technical requirements. This ensures every decision from here is aligned with your goals.</p>
          </CardContent>

          <CardFooter className="m-5 mt-8">
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