"use client";
import { useState } from "react";
import { Projects } from "../constants";
import { Rammetto_One } from "next/font/google";

export const Rammetto = Rammetto_One({ subsets: ["latin"], weight: "400" });
export function ProjectsSection() {
  let [mouseDown, setMouseDown] = useState(false);
  let [mouseMV, setMouseMv] = useState(0);
  let handleMoving = (e: any) => {
    let el = e.target as HTMLElement;
    if (mouseDown) {
      console.log(el);
      if (mouseMV < e.screenX) {
        el.scroll({ left: el.scrollLeft + 10 });
        console.log("to left");
      }
      if (mouseMV < e.screenX) {
        el.scroll({ left: el.scrollLeft - 10 });
        console.log("to right");
      }
      setMouseMv(e.clientX);
    }
  };
  return (
    <section className="work my-12">
      <h2 className={Rammetto.className + " text-lg max-md:text-base"}>
        Recent Work
      </h2>
      <main
        className="flex flex-row gap-4 mt-4 overflow-auto relative"
      >
        {Projects.map((project) => (
          <div className="card min-w-[14rem] w-full h-80 bg-red-400"
          key={project.name}>
            <a href={project.github} className="w-full h-full" target="_blank">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-full hover:z-20 object-cover min-h-fit pointer-events-none"
              />
            </a>
          </div>
        ))}
      </main>
    </section>
  );
}
