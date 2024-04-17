import React from "react";
import Download from "@/components/buttons/Download";
import Hero from "@/components/ui/Hero";
import { Pipes } from "@/components/three/Pipes";

const First = () => {
  return (
    <div className="flex flex-col overflow-hidden justify-center items-center w-full h-screen text-white bg-white pt-[3%]">
      <Hero/>
      <div className="w-[80%] my-12 rounded-3xl h-[70%]">
        <Pipes />
      </div>
      <Download />
    </div>
  );
};

export default First;
