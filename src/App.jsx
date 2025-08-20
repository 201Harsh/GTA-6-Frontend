import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import React, { useState } from "react";

const App = () => {
  const [shownContent, setshownContent] = useState(false);

  // Intro Mask Animation
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

  // GTA Text Animation + Parallax
  useGSAP(() => {
    if (!shownContent) return;

    // Animate GTA text when shown
    gsap.fromTo(
      ".text h3",
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power4.out",
        stagger: 0.2,
      }
    );

    // Parallax effect on mouse move
    const main = document.querySelector(".main");
    const handleMove = (e) => {
      const xMove = (e.clientX / window.innerWidth - 0.5) * 40;
      gsap.to(".main .text", { x: `${xMove * 0.4}%`, duration: 0.6 });
      gsap.to(".sky", { x: xMove, duration: 0.6 });
      gsap.to(".bg", { x: xMove * 1.6, duration: 0.6 });
    };

    main?.addEventListener("mousemove", handleMove);
    return () => main?.removeEventListener("mousemove", handleMove);
  }, [shownContent]);

  return (
    <>
      {/* Intro SVG Mask */}
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
          {/* Hero Section */}
          <div className="landing h-screen w-full overflow-hidden bg-black relative">
            {/* Navbar */}
            <div className="navbar absolute top-0 left-0 z-[50] w-full py-6 px-6 flex justify-between items-center">
              <div className="logo flex gap-5 items-center">
                <div className="lines flex flex-col gap-[5px]">
                  <div className="line w-12 h-1 bg-white"></div>
                  <div className="line w-8 h-1 bg-white"></div>
                  <div className="line w-5 h-1 bg-white"></div>
                </div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl text-white">
                  Rockstar
                </h3>
              </div>
            </div>

            {/* Background layers */}
            <div className="imagesdiv relative overflow-hidden w-full h-screen">
              <img
                src="bg.png"
                alt="Background"
                className="object-cover bg scale-[1.1] w-full h-full absolute top-0 left-0 z-20"
              />
              <img
                src="./sky.png"
                alt="Sky"
                className="object-cover scale-[1.1] sky w-full h-full absolute top-0 left-0 z-10"
              />

              {/* GTA Title */}
              <div className="text text-white flex flex-col gap-3 absolute top-20 sm:top-24 left-1/2 -translate-x-1/2 z-30 text-center">
                <h3 className="text-5xl sm:text-7xl lg:text-[10rem] font-bold leading-none -ml-0 sm:-ml-40">
                  Grand
                </h3>
                <h3 className="text-5xl sm:text-7xl lg:text-[10rem] font-bold leading-none ml-0 sm:ml-20">
                  Theft
                </h3>
                <h3 className="text-5xl sm:text-7xl lg:text-[10rem] font-bold leading-none -ml-0 sm:-ml-40">
                  Auto
                </h3>
              </div>

              {/* Character */}
              <img
                src="./girl.png"
                alt="Character"
                className="absolute girl -bottom-[25%] sm:-bottom-[35%] h-[120%] sm:h-full scale-[1.2] sm:scale-[1.3] left-1/2 -translate-x-1/2 z-40"
              />
            </div>

            {/* Bottom Bar */}
            <div className="btmbar text-white absolute z-[50] bottom-0 left-0 w-full py-6 px-6 bg-gradient-to-t from-black to-transparent flex flex-col sm:flex-row justify-between items-center">
              <div className="flex gap-3 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-8 h-8 sm:w-10 sm:h-10"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
                <h3 className="text-lg sm:text-xl">Scroll Down</h3>
              </div>
              <img
                className="h-10 sm:h-[55px] mt-4 sm:mt-0"
                src="./ps5.png"
                alt="PS5"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="w-full min-h-screen flex flex-col md:flex-row items-center justify-center bg-black px-6 md:px-20 py-12 gap-10">
            {/* Left Image */}
            <div className="limg relative w-full md:w-1/2 flex justify-center items-center">
              <img
                src="./imag.png"
                alt="Promo"
                className="max-h-[80%] object-contain"
              />
            </div>

            {/* Right Content */}
            <div className="rg w-full md:w-1/2 text-white space-y-6">
              <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold leading-tight">
                Still Running,<br />Not Hunting
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Distinctio possimus omnis inventore nesciunt architecto saepe.
              </p>
              <p className="text-base sm:text-lg md:text-xl text-gray-300">
                Eligendi nesciunt quia similique velit excepturi soluta
                tenetur illo repellat laborum eveniet eaque hic quisquam?
              </p>
              <p className="text-base sm:text-lg md:text-xl text-gray-300">
                Illum fugit eligendi sapiente repellat, ex cupiditate ipsa
                nostrum autem saepe.
              </p>
              <button className="bg-yellow-500 hover:bg-yellow-400 transition px-6 py-4 text-black text-lg sm:text-2xl rounded-xl font-bold">
                Download Now
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default App;
