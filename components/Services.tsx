import React from "react";

export default function Services() {
  const services = [
    {
      title: "Web Development",
      desc: "We build websites that are fast, secure, and easy to use.",
    },
    {
      title: "UI/UX Design",
      desc: "We design websites that are fast, secure, and easy to use.",
    },
    {
      title: "Branding",
      desc: "We build websites that are fast, secure, and easy to use.",
    },
    {
      title: "App Development",
      desc: "We build websites that are fast, secure, and easy to use.",
    },
  ];

  function Service({ title, desc }: any) {
    return (
      <div className="p-4 overflow-hidden text-[var(--cream)]">
        <div className="text-3xl md:text-5xl font-semibold my-4 grad-bg-text">
          {title}
        </div>
        <div className="my-4 md:text-xl">{desc}</div>
      </div>
    );
  }

  return (
    <div className="h-auto w-[100vw] flex justify-center items-center bg-[var(--leafgrey)]">
      <div className="container p-4 md:p-0 h-full my-2 md:my-8 md:w-[100%] md:mx-8">
        <h1 className="text-4xl font-bold grad-bg-text md:hidden p-4 font-museo">
          SERVICES<span className="grad-bg-text">.</span>
        </h1>
        <div className="flex flex-row justify-center align-middle">
          <div className="flex-auto w-full flex flex-col gap-4">
            <div className="flex gap-4 h-3/6 flex-col md:flex-row">
              <div className="w-full md:w-3/5 bg-[var(--mainGrey)] h-full rounded-3xl cursor-pointer dot-hover-box">
                <Service title={services[0].title} desc={services[0].desc} />
              </div>
              <div className="w-full md:w-2/5 bg-[var(--tintBlack3)] h-full rounded-3xl cursor-pointer">
                <Service title={services[1].title} desc={services[1].desc} />
              </div>
            </div>

            <div className="flex gap-4 h-3/6 flex-col md:flex-row">
              <div className="w-full md:w-2/5 bg-[var(--tintBlack3)] h-full rounded-3xl cursor-pointer">
                <Service title={services[2].title} desc={services[2].desc} />
              </div>
              <div className="w-full md:w-3/5 bg-[var(--mainGrey)] h-full rounded-3xl cursor-pointer dot-hover-box">
                <Service title={services[3].title} desc={services[3].desc} />
              </div>
            </div>
          </div>
          <div className="flex-auto md:block hidden">
            <h1 className="text-3xl md:text-[8rem] lineh1 font-bold text-[var(--cream)] text-center text-sideways pl-4 align-middle my-2">
              SERVICES<span className="grad-bg-text">.</span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
