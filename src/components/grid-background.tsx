import React from "react";
import { Timer } from "./timer";
import { Button } from "./ui/button";

export function GridBackground() {
  return (
    <div className="h-[50rem] w-full bg-slate-950  bg-grid-white/[0.2] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-slate-950 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="w-full p-4 flex flex-col items-center justify-center">
        <h2 className="text-4xl sm:text-7xl font-bold text-center relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-400 py-8">
          {/* <Timer /> */}
          Launching in F.U.T.O <br /> Next Semester
        </h2>
        <p className="text-neutral-100 max-w-lg mx-auto text-sm sm:text-base text-center relative z-10">
          Join us as we revolutionize the educational system and make life easier for students
        </p>
        <Button className="w-full lg:w-96 relative inline-flex h-14 overflow-hidden rounded-full p-[1px] my-6 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-[#6943baaf] px-3 py-1 text-base font-medium text-white backdrop-blur-3xl">
            Join us
          </span>
        </Button>
      </div>
    </div>
  );
}
