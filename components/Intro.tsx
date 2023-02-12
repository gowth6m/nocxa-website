import React from "react";
import { ArrowArt, Illustration1 } from "./misc/Illustrations.";

export default function Intro() {
  return (
    <div className="container mx-auto flex h-auto">
      <div className="w-full flex flex-col md:flex-row relative px-4 mb-20">
        <div className="flex-1 flex flex-col">
          <h1 className="text-4xl md:text-8xl font-bold grad-bg-text font-museo mt-8 md:mt-24 lg:mt-40">
            Bringing new ideas to life.
          </h1>
          <div className="flex flex-row">
            <div className="mt-8 md:my-8 w-auto text-lg md:text-xl font-museo px-4 py-2 bg-[var(--pink)] border-2 border-[var(--pink)] text-[var(--lightWhite)] rounded-full cursor-pointer hover:bg-[var(--orange)] hover:border-[var(--orange)]">
              View our work
            </div>

            <ArrowArt
              className="rotate-[180deg] scale-x-[-1] origin-bottom mx-8 md:mx-10 my-1 md:mt-2"
              fill="var(--orange)"
            />
          </div>
          {/* <ArrowArt
              className="rotate-[200deg] scale-x-[-1] origin-bottom mx-8"
              fill="var(--orange)"
            /> */}
        </div>

        <div className="flex-1 flex items-center justify-center my-8">
          <Illustration1 className="w-[90%] h-auto" fill="var(--orange)" />
        </div>
      </div>
    </div>
  );
}
