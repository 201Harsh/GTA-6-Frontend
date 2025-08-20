import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import React, { useState } from "react";

const App = () => {
  const [shownContent, setshownContent] = useState(false);
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.to(".vi-mask-group", {
      duration: 1.8,
      rotate: 10,
      ease: "Power4.easeInOut",
      transformOrigin: "center",
    }).to(".vi-mask-group", {
      scale: 10,
      duration: 1.2,
      delay: -1.8,
      ease: "Expo.easeInOut",
      transformOrigin: "center",
      opacity: 0,
      onUpdate: function () {
        if (this.progress() >= 0.9) {
          setshownContent(true);
          const svg = document.querySelector(".svg");
          if (svg) svg.remove();
          this.kill();
        }
      },
    });
  });

  useGSAP(() => {
    const main = document.querySelector(".main");
    main?.addEventListener("mousemove", (e) => {
      const xMove = (e.clientX / window.innerWidth - 0.5) * 40;
      gsap.to(".main .text", {
        x: `${xMove * 0.4}%`,
      });
      gsap.to(".sky", {
        x: xMove,
      });
      gsap.to(".bg", {
        x: xMove * 1.6,
      });
    });
  }, [shownContent]);

  return (
    <>
      <div className="svg flex justify-center items-center h-screen w-full bg-black fixed top-0 left-0 z-[100] overflow-hidden">
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  fontSize="250"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="Arial Black"
                >
                  VI
                </text>
              </g>
            </mask>
          </defs>
          <image
            href="./bgcity.png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
        </svg>
      </div>
      {shownContent && (
        <div className="main w-full bg-black">
          <div className="landing h-screen w-full overflow-hidden bg-black relative">
            <div className="navbar absolute top-0 left-0 z-[50] w-full py-10 px-10">
              <div className="logo flex gap-7">
                <div className="lines flex flex-col gap-[5px]">
                  <div className="line w-15 h-2 bg-white"></div>
                  <div className="line w-8 h-2 bg-white"></div>
                  <div className="line w-5 h-2 bg-white"></div>
                </div>
                <h3 className="text-4xl -mt-[8px] leading-none text-white">
                  Rockstar
                </h3>
              </div>
            </div>
            <div className="imagesdiv relative overflow-hidden w-full h-screen">
              <img
                src="bg.png"
                alt=""
                className="object-cover bg scale-[1.1] w-full h-full absolute top-0 left-0 z-20"
              />
              <img
                src="./sky.png"
                alt=""
                className="object-cover scale-[1.1] sky w-full h-full absolute top-0 left-0 z-10"
              />
              <div className="text text-white flex flex-col gap-3 absolute top-24 left-1/2 -translate-x-1/2 z-30">
                <h3 className="text-[10rem] leading-none font-bold -ml-40">
                  Grand
                </h3>
                <h3 className="text-[10rem] leading-none font-bold ml-20">
                  Theft
                </h3>
                <h3 className="text-[10rem] leading-none font-bold -ml-40">
                  Auto
                </h3>
              </div>
              <img
                src="./girl.png"
                alt=""
                className="absolute girl -bottom-[35%] h-full scale-[1.3] left-1/2 -translate-x-1/2 z-40"
              />
            </div>
            <div className="btmbar text-white absolute z-[50] bottom-0 left-0 w-full py-10 px-12 bg-gradient-to-t from-black to-transparent">
              <div className="flex gap-4 items-center">
                <i className="text-4xl text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-10 h-10"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </i>

                <h3 className="text-xl font-[Helvetica_Now_Display]">
                  Scroll Down
                </h3>
              </div>
              <img
                className="absolute h-[55px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 "
                src="./ps5.png"
                alt=""
              />
            </div>
          </div>
          <div className="w-full h-full flex items-center justify-center bg-black">
            <div className="cntnr flex text-white w-full h-[80%] justify-center items-center">
              <div className="limg relative w-1/2 h-full">
                <img
                  className="absolute -top-1/2 left-50 -translate-x-1/2 -translate-y-1/2"
                  src="./imag.png"
                  alt=""
                />
              </div>
              <div className="rg w-[30%] py-30">
                <h1 className="text-8xl">Still Running,</h1>
                <h1 className="text-8xl">Not Hunting</h1>
                <p className="mt-10 text-xl font-[Helvetica_Now_Display]">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Distinctio possimus, asperiores nam, omnis inventore nesciunt
                  a architecto eveniet saepe, ducimus necessitatibus at
                  voluptate.
                </p>
                <p className="mt-3 text-xl font-[Helvetica_Now_Display]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                  eius illum fugit eligendi nesciunt quia similique velit
                  excepturi soluta tenetur illo repellat consectetur laborum
                  eveniet eaque, dicta, hic quisquam? Ex cupiditate ipsa nostrum
                  autem sapiente.
                </p>
                <p className="mt-10 text-xl font-[Helvetica_Now_Display]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                  eius illum fugit eligendi nesciunt quia similique velit
                  excepturi soluta tenetur illo repellat consectetur laborum
                  eveniet eaque, dicta, hic quisquam? Ex cupiditate ipsa nostrum
                  autem sapiente.
                </p>
                <button className="bg-yellow-500 px-10 py-10 text-black mt-10 text-4xl">
                  Download Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default App;
