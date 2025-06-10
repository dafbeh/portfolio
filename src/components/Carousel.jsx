import React from "react";
import "../styles/index.css";

const technologies = [
    "JavaScript",
    "React",
    "Node.js",
    "PHP",
    "Laravel",
    "HTML5",
    "CSS",
    "Tailwind CSS",
    "C#",
    "Java",
];

export default function TechCarousel() {
  return (
    <div className="flex justify-center items-center">
      <div className="max-w-[600px] overflow-hidden relative 
          [mask-image:_linear-gradient(to_right,_transparent_0,_white_128px,white_calc(100%-128px),_transparent_100%)]">
        <div className="carousel-track flex">
          {[...technologies, ...technologies].map((tech, index) => (
            <div className="mx-8 whitespace-nowrap shrink-0 text-2xl py-6" key={index}>
              {tech}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
