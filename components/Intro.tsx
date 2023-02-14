import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { ArrowDownIcon } from "./misc/Icons";
import { ArrowArt, Illustration1 } from "./misc/Illustrations.";

export default function Intro() {
  return (
    <>
      {/* Desktop */}
      <div className="container mx-auto h-h-full hidden md:flex">
        <div className="w-[80%] mx-auto flex flex-col md:flex-row relative px-4 mb-12 items-center justify-center">
          <div className="flex-1 flex flex-col justify-center">
            <h1 className="text-4xl md:text-6xl lg:text-[5rem] font-bold grad-bg-text font-museo">
              Bringing new ideas to life.
            </h1>
            <div className="flex flex-row">
              <div className="my-4 flex flex-row items-center justify-center cursor-pointer rounded-full hover-underline">
                <div className="w-auto text-2xl font-museo  py-1 md:py-2 text-[var(--lightWhite)] rounded-full pr-3">
                  See our <span className="text-[var(--pink)]">work</span>
                </div>
                <div className="h-[0.7rem] w-[0.7rem] rounded-full">
                  <FontAwesomeIcon
                    icon={faPlay}
                    className="text-[var(--pink)] rotate-90"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 flex items-center justify-center my-8">
            <Illustration1 className="w-[90%] h-auto" fill="var(--orange)" />
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="container mx-auto h-h-full w-full flex md:hidden">
        <div className="w-full flex flex-col relative px-4 h-full items-center align-middle justify-center">
          <div className="flex items-center justify-center flex-col">
            <h1 className="text-4xl font-bold font-museo mix-blend-difference z-10 w-5/6 mb-[-16%]">
              Bringing new ideas to life.
            </h1>
            <Illustration1 className="w-[90%] h-auto" fill="var(--orange)" />
          </div>
          <div className="flex flex-row w-[80%]">
            <div className="text-3xl font-bold font-museo w-4/6 text-right ml-auto my-2">
              See our <br />
              <span className="text-[var(--purple)]"> work</span>
            </div>
          </div>

          <div className="flex flex-col w-[100%] animate-pulse">
            <div className="vert-text text-[var(--leafgrey)] text-xl font-museo absolute bottom-[3rem] left-3">
              scroll
            </div>

            <div className="h-[0.7rem] w-[0.7rem] absolute bottom-[1.8rem] left-5 rounded-full">
              <FontAwesomeIcon
                icon={faPlay}
                className="text-[var(--leafgrey)] rotate-90"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
