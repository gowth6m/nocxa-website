import React from "react";

export default function Services() {
  return (
    <div className="min-h-[100svh] w-[100vw]">
      <div className="container mx-auto px-4 md:px-2">
        <div className="rounded-3xl bg-[var(--leafgrey)] min-h-[100svh]">
          <div className="flex flex-col justify-between items-center w-full px-4 md:px-8">
            <div className="flex flex-col font-museo my-8 w-full text-left justify-center align-middle">
              <div className="italic grad-bg-text text-lg md:text-2xl">
                Services
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-[var(--cream)] w-full text-left">
                What can we do?
              </h1>
            </div>
            <div className="text-[var(--cream)] flex">
              <div className="md:w-3/6">
                Nocxa is a student-led software company is dedicated to
                delivering innovative web development, app development and
                machine learning solutions. Our team of talented and motivated
                developers provide cutting-edge technology services to
                businesses and individuals.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
