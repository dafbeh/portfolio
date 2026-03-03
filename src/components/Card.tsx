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
import { Button } from "@/components/ui/button"
import { CircleCheck } from "lucide-react"
import { motion, useTime, useTransform } from "framer-motion";

export default function PriceCard({ title, price, description, features, popular = false }:
  { title: string, price: number, description: string, features: string[], popular?: boolean }) {
  const time = useTime();

  const rotate = useTransform(time, [0, 5000], [0, 360], {
    clamp: false,
  })
  const rotatingBg = useTransform(rotate, (r) =>
    `conic-gradient(
    from ${r}deg,
    transparent 0deg,
    rgba(184, 207, 255, 0.8) 60deg,
    transparent 140deg,
    transparent 360deg
  )`
  );

  return (
    <div className="relative px-2">
      {popular && (
        <motion.div
          className="absolute rounded-lg inset-3 blur-lg z-0 pointer-events-none -my-2"
          style={{ background: rotatingBg }}
        />
      )}

      <Card className={`lg:w-[340px] xl:w-[360px] sm:w-[450px] w-full h-[500px] before:bg-secondary/30 border-1 
        border-muted/50 relative
        ${popular ? "border-primary/80 border-3" : ""}`}>
        <CardHeader>
          {popular && (
            <div>
              <span className="absolute -top-3 right-1/2 translate-x-1/2 
            bg-primary text-white text-xs px-2 py-1 font-semibold
            rounded-full tracking-widest">
                MOST POPULAR
              </span>
            </div>
          )}
          <CardTitle className="text-xl pt-2 font-semibold">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <div>
            <span className="text-4xl font-bold font-inter">
              £{price}
            </span>
            <span className="text-lg text-gray-300/70 font-inter"> /per month</span>
          </div>

          <div className="mt-4">
            <span className="text-gray-300/70 text-sm">
              {description}
            </span>
          </div>

          <div className="mt-6">
            <ul className="flex flex-col gap-2">
              {features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-2 text-sm text-gray-300/70"
                >
                  <CircleCheck className="size-5 text-primary" />
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

        </CardContent>
        <CardFooter className="mt-auto">
          <Button className={`w-full p-4 text-[14px] cursor-pointer 
            ${popular ? "bg-primary" :
              "bg-black/10 hover:bg-white/1 text-gray-300 hover:text-gray-300"}`}
            variant={popular ? "default" : "outline"}>
            {popular ? "Start Project" : "Get Started"}
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}