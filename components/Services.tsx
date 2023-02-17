import React from "react";

export default function Services() {
  return (
    <div className="h-auto w-[100vw] flex justify-center items-center bg-[var(--leafgrey)]">
      <div className="container p-4 md:p-0 h-full my-2 md:my-8 md:w-[100%] md:mx-8">
        <div className="flex flex-col font-museo my-8 w-full text-left justify-center align-middle">
          <div className="italic grad-bg-text text-lg md:text-2xl">
            SERVICES
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-[var(--cream)] w-full text-left">
            What can we do?
          </h1>
        </div>
      </div>
    </div>
  );
}
