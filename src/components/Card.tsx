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

export default function PriceCard({ title, price, description, features, popular = false }:
  { title: string, price: number, description: string, features: string[], popular?: boolean }) {
  return (
    <Card className={`md:w-[350px] w-9/10 h-[500px] mx-2 bg-secondary/30 relative
        border-1 border-muted/50 ${popular ? "border-primary/80 border-3" : ""}`}>
      <CardHeader>
        {popular && (
          <span className="absolute -top-3 right-1/2 translate-x-1/2 
            bg-primary text-white text-xs px-2 py-1 font-semibold
            rounded-full tracking-widest">
            MOST POPULAR
          </span>
        )}
        <CardTitle className="text-xl pt-2 font-semibold">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div>
          <span className="text-4xl font-bold font-inter">
            ${price}
          </span>
          <span className="text-md text-gray-300/70 font-inter"> /per month</span>
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
            ${popular? "bg-primary" :
               "bg-black/10 hover:bg-white/1 text-gray-300 hover:text-gray-300"}`} 
            variant={popular ? "default" : "outline"}>
          {popular ? "Start Project": "Get Started"}
        </Button>
      </CardFooter>
    </Card>
  )
}