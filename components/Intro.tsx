import React from "react";
import IntroIllustration from "./misc/Background";

export default function Intro() {
  return (
    <div className="w-full flex flex-col md:flex-row ">
      <div className="rounded-lg flex-1 flex flex-col items-center justify-center">
        <h1 className="text-8xl font-bold">Nocxa</h1>
        <p className="text-xl font-light">
          Nocturnal <span className="text-[var(--purple)]">x</span> Agency
        </p>
      </div>

      <div className="flex-1 flex items-center justify-center">
        <IntroIllustration className="w-4/6" />
      </div>
    </div>
  );
}
