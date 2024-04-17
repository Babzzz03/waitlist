"use client";
import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";
import { Hero } from "@/components/hero";
import React from "react";
import Header from "@/components/header";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { BentoGridLayout } from "@/components/bento";
import { GridBackground } from "@/components/grid-background";

export default function Home() {
  return (
    <main>
      <div className="relative">
        <Header />
        <Hero />
        <BackgroundBeams />
      </div>
      <LampContainer>
        <motion.div
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: -80 }}
          transition={{
            delay: 0,
            duration: 0.8,
            ease: "easeInOut",
          }}
        >
          <BentoGridLayout />
        </motion.div>
      </LampContainer>
      <GridBackground />
    </main>
  );
}
