import React from "react";
import { Button } from "./ui/button";

export default function Header() {
  return (
    <header className="h-20 md:h-[100px] w-full flex items-center justify-between px-4 md:px-8 lg:px-16 text-white">
      <div className="text-xl sm:text-2xl font-semibold">Unicity</div>
      <nav>
        <ul className="flex items-center gap-4">
          {/* <ModeToggle /> */}
          {/* <Button className="bg-[#6943ba] text-primary px-8 rounded-full">Contact us</Button> */}
          <div className="w-32">
            <Button className="w-full relative inline-flex h-12 overflow-hidden rounded-full p-[1px] my-6 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-[#6943baaf] px-3 py-1 text-base font-normal text-white backdrop-blur-3xl">
                Contact us
              </span>
            </Button>
          </div>
        </ul>
      </nav>
    </header>
  );
}
