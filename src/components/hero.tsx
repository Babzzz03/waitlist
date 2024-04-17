"use client";

import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

export function Hero() {
  return (
    <div className="h-[40rem] w-full rounded-md bg-slate-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-4xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-400 text-center font-sans font-bold">
          Join the waitlist
        </h1>
        <p className="text-neutral-100 max-w-lg mx-auto my-4 text-sm sm:text-base text-center relative z-10">
          Welcome to Unicity, the best transactional email service on the web. We provide reliable, scalable, and customizable email solutions for
          your business.
        </p>
        <Input
          type="email"
          placeholder="hi@unicity.com.ng"
          className="h-14 text-base rounded-full border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full relative z-10 mt-10 px-6 bg-neutral-100 text-background placeholder:text-neutral-700"
        />
        <Button className="w-full relative inline-flex h-14 overflow-hidden rounded-full p-[1px] my-6 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-[#6943baaf] px-3 py-1 text-base font-medium text-white backdrop-blur-3xl">
            Send
          </span>
        </Button>
      </div>
    </div>
  );
}
