import React from "react";

export default function Services() {
  return (
    <div className="min-h-[90vh] w-[100vw]">
      <div className="container mx-auto px-4 md:px-2">
        <div className="w-full relative md:my-16">
          <div className="z-10 rounded-full bg-[var(--leafgrey)] h-[50rem] w-[50rem] absolute top-[-8rem] left-[4rem] intro-moon-circle"></div>
        </div>
        <div>
          <div className="flex flex-col justify-between items-center w-full gap-4">
            <div className="z-20 flex flex-col md:flex-row w-full">
              <div className="h-60 w-60 rounded-xl flex-1"></div>
              <div className="flex flex-col flex-1">
                <h1 className="z-20 text-4xl md:text-6xl text-[var(--orange)] font-museo font-bold">
                  What can we do?
                </h1>
                <div className="text-[var(--white)] my-4 flex-1 text-lg">
                  At Nocxa, we are a team of motivated student developers
                  delivering innovative solutions. Our focus is on creativity
                  and problem-solving, as we aim to deliver dynamic software
                  that meets each client&#39;s unique needs.
                  <br />
                  <br />
                  Whether it&#39;s website design, app development, or machine
                  learning, our goal is to help clients bring their visions to
                  life and stay ahead in the digital world. With cutting-edge
                  technology services, we strive to provide businesses and
                  individuals with the tools they need to succeed in today&#39;s
                  rapidly evolving landscape.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
