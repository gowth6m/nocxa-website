import React from "react";
import { Illustration1 } from "./misc/Illustrations.";

export default function Intro() {
  return (
    <div className="container mx-auto flex h-auto">
      {/* IDEA 1 */}
      {/* <div className="w-full flex flex-col md:flex-row my-12 relative">
        <div className="absolute md:top-16 md:w-3/6">
          <h1 className="text-8xl font-bold grad-bg-text font-museo">
            Bringing new ideas to life.
          </h1>
          <div className="sec-button w-40 my-10">View our work</div>
        </div>

        <div className="flex-1 flex items-center justify-center mt-8">
          <Illustration1
            className="w-4/6 md:w-3/6 h-auto"
            fill="var(--orange)"
          />
        </div>
      </div> */}

      {/* IDEA 2 */}

      <div className="w-full flex flex-col md:flex-row relative px-4 md:px-2">
        <div className="flex-1 flex flex-col">
          <h1 className="text-8xl font-bold grad-bg-text font-museo mt-10 md:mt-24">
            Bringing new ideas to life.
          </h1>
          <div className="sec-button-orange my-8 w-3/6 text-xl">View our work</div>
        </div>

        <div className="flex-1 flex items-center justify-center mt-8">
          <Illustration1
            className="w-4/6 md:w-5/6 h-auto"
            fill="var(--orange)"
          />
        </div>
      </div>
    </div>
  );
}
