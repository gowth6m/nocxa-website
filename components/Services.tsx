import React from "react";
import Illustration2 from "./misc/Illustrations.";

export default function Services() {
  return (
    <div className="h-auto w-[100vw]">
      <div className="container mx-auto p-4 md:p-0 h-full my-2 md:my-8 md:w-[100%]">
        <div className="rounded-3xl bg-[var(--leafgrey)] h-full">
          <div className="flex flex-col justify-between items-center w-full px-4 md:px-8 h-full md:flex-row">
            <div className="flex flex-col md:flex-1">
              <div className="flex flex-col font-museo my-8 w-full text-left justify-center align-middle">
                <div className="italic grad-bg-text text-lg md:text-2xl">
                  ABOUT US
                </div>
                <h1 className="text-3xl md:text-5xl font-bold text-[var(--cream)] w-full text-left">
                  What&#39;s Nocxa?
                </h1>
              </div>
              <div className="text-[var(--cream)] flex font-comfortaa text-sm md:mb-8">
                <div className="md:text-base">
                  Nocxa is a{" "}
                  <span className="grad-bg-text text-lg italic">
                    {" "}
                    student-led{" "}
                  </span>{" "}
                  software company is dedicated to delivering innovative web
                  development, app development and machine learning solutions.
                  <br />
                  <br />
                  Our team of talented and motivated developers provide
                  cutting-edge technology services to businesses and
                  individuals.
                  <div className="hidden md:block">
                    <br />
                    With a focus on{" "}
                    <span className="grad-bg-text text-lg italic">
                      {" "}
                      creativity{" "}
                    </span>{" "}
                    and a passion for problem-solving, we aim to deliver dynamic
                    and intuitive software that meets the unique needs of each
                    of our clients. From website design to app development and
                    beyond, our goal is to help our clients bring their{" "}
                    <span className="grad-bg-text text-lg italic">
                      {" "}
                      visions to life{" "}
                    </span>{" "}
                    and stay ahead in today&#39;s fast-paced digital world.
                  </div>
                </div>
              </div>
            </div>
            <div className="flex w-full items-center justify-center mt-4 mb-8 md:flex-1">
              <Illustration2 className="h-40 w-5/6 md:w-full md:h-80" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
