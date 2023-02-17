import React from "react";
import Illustration2 from "./misc/Illustrations.";

export default function About() {
  return (
    <div className="h-auto w-[100vw] flex justify-center items-center">
      <div className="container p-4 md:p-0 h-full my-2 md:my-8 md:w-[100%] md:mx-8">
        <div className="rounded-3xl bg-[var(--leafgrey)] h-full">
          <div className="flex flex-col justify-between items-center w-full mx-auto px-4 md:pl-8 md:pr-4 h-full md:flex-row">
            <div className="flex flex-col md:flex-1 max-w-[calc(1280px/2)]">
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
                  We&#39;re not your average software development agency.
                  We&#39;re more like Willy Wonka&#39;s factory, except instead
                  of candy, we whip up beautiful,{" "}
                  <span className="grad-bg-text text-base md:text-lg italic pr-[2px]">
                    one-of-a-kind
                  </span>{" "}
                  software creations.
                  <br />
                  <br />
                  Based in{" "}
                  <span className="grad-bg-text text-base md:text-lg italic pr-[2px]">
                    London
                  </span>
                  , we cater to brands that won&#39;t settle for anything less
                  than innovative, standout software solutions. So, if
                  you&#39;re ready to ditch the plain-vanilla software and
                  embrace something{" "}
                  <span className="grad-bg-text text-base md:text-lg italic pr-[2px]">
                    truly extraordinary
                  </span>
                  , we&#39;re the agency for you!
                </div>
              </div>
            </div>
            <div className="flex w-full items-center justify-center mt-4 mb-8 md:flex-1 max-w-[calc(1280px/2)]">
              <Illustration2 className="h-40 w-5/6 md:w-full md:h-80" />
            </div>
          </div>
        </div>

        {/* THREE FOCUS */}
        <div className="w-full p-2 md:p-4 my-16 md:my-36">
          <div className="text-3xl md:text-6xl font-museo w-full md:w-5/6">
            We design and develop bespoke software with three things in mind
            <span className="grad-bg-text"> three things in mind;</span>
          </div>

          <div className="text-2xl mt-16 md:mt-24 flex flex-col md:flex-row">
            <div className="flex flex-col flex-1">
              <div className="font-museo">
                <span className="grad-bg-text text-lg mr-2">01. </span>
                <span className="font-black md:text-4xl">Beauty</span>
              </div>
              <div className="text-sm md:text-base font-comfortaa my-4 max-w-[calc(1280px/3)]">
                Developing stunning one-of-a-kind digital design that catches
                people’s eye and brings your brand to life online.
              </div>
            </div>
            <div className="bg-[var(--leafgrey)] w-full h-full flex-1 rounded-3xl">
              <Illustration2 className="h-40 w-5/6 md:w-full md:h-80" />
            </div>
          </div>

          <div className="text-2xl mt-16 md:mt-24 flex flex-col md:flex-row">
            <div className="flex flex-col flex-1">
              <div className="font-museo">
                <span className="grad-bg-text text-lg mr-2">02. </span>
                <span className="font-black md:text-4xl">Thought</span>
              </div>
              <div className="text-sm md:text-base font-comfortaa my-4 max-w-[calc(1280px/3)]">
                As a web design agency, we love to deliver meaningful and
                intuitive user experiences that build trust with your target
                audience.
              </div>
            </div>
            <div className="bg-[var(--leafgrey)] w-full h-full flex-1 rounded-3xl">
              <Illustration2 className="h-40 w-5/6 md:w-full md:h-80" />
            </div>
          </div>

          <div className="text-2xl mt-16 md:mt-24 flex flex-col md:flex-row">
            <div className="flex flex-col flex-1">
              <div className="font-museo">
                <span className="grad-bg-text text-lg mr-2">03. </span>
                <span className="font-black md:text-4xl">Impact</span>
              </div>
              <div className="text-sm md:text-base font-comfortaa my-4 max-w-[calc(1280px/3)]">
                Designing tailor made solutions that resonate with your
                customers and drives them to act.
              </div>
            </div>
            <div className="bg-[var(--leafgrey)] w-full h-full flex-1 rounded-3xl">
              <Illustration2 className="h-40 w-5/6 md:w-full md:h-80" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
