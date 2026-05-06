import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { animateWithGsap } from "../utils/animations";
import { chipImg, frameImg, frameVideo } from "../utils";

gsap.registerPlugin(ScrollTrigger);


export const HowItWorks = () => {
  const videoRef = useRef();

  useGSAP(() => {
    // Chip zoom-in animation on scroll
    gsap.from("#chip", {
      scrollTrigger: {
        trigger: "#chip",
        start: "20% bottom",
      },
      opacity: 0,
      scale: 2,
      duration: 2,
      ease: "power2.inOut",
    });

    // Play video when it enters the viewport
    gsap.to("#hiw-video", {
      scrollTrigger: {
        trigger: "#hiw-video",
        start: "-10% bottom",
        onEnter: () => {
          if (videoRef.current) videoRef.current.play();
        },
      },
    });

    // Fade-in animations for .g_fadeIn elements
    // starts from y:100 opacity:0 (matching the g_fadeIn CSS class)
    animateWithGsap(".g_fadeIn", {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.inOut",
    });
  }, []);

  return (
    <section id="hiw" className="common-padding">
      <div className="screen-max-width">
        {/* Chip image */}
        <div id="chip" className="flex-center w-full my-20">
          <img src={chipImg} alt="chip" width={180} height={180} />
        </div>

        {/* Title & Subtitle */}
        <div className="flex flex-col items-center">
          <h2 className="hiw-title">
            A17 Pro Chip.
            <br />A Monster Win for gaming.
          </h2>

          <p className="hiw-subtitle">
            It's here. The biggest redesign in the history of Apple GPUs.
          </p>
        </div>

        {/* Phone frame + video */}
        <div className="mt-10 md:mt-20 mb-14">
          <div className="relative h-full flex-center">
            {/* Phone frame overlay */}
            <div className="overflow-hidden">
              <img
                src={frameImg}
                alt="frame"
                className="bg-transparent relative z-10"
              />
            </div>

            {/* Video inside frame */}
            <div className="hiw-video">
              <video
                id="hiw-video"
                className="pointer-events-none"
                playsInline
                preload="none"
                muted
                autoPlay
                ref={videoRef}
                src={frameVideo}
              />
            </div>
          </div>

          {/* Label below frame */}
          <p className="text-gray font-semibold text-center mt-3">
            Honkai: Star Rail
          </p>
        </div>

        {/* Feature text blocks — matches reference image exactly */}
        <div className="hiw-text-container">
          <div className="flex flex-1 justify-center flex-col">
            <p className="hiw-text g_fadeIn">
              A17 Pro is an entirely new class of iPhone chip that delivers our{" "}
              <span className="text-white font-semibold">
                best graphics performance by far.
              </span>
            </p>
          </div>

          <div className="flex flex-1 justify-center flex-col">
            <p className="hiw-text g_fadeIn">
              Mobile{" "}
              <span className="text-white font-semibold">
                games will look and feel so immersive,
              </span>{" "}
              with incredibly detailed environments and more realistic
              characters. And with industry‑leading speed and efficiency, A17
              Pro takes fast and runs with it.
            </p>
          </div>
        </div>

        {/* Chip spec stat cards */}
        <div className="mt-16 flex flex-col md:flex-row gap-5">

          <div className="flex-1 flex justify-center flex-col g_fadeIn">
            <p className="hiw-text">New</p>
            <p className="hiw-bigtext">Pro-class GPU</p>
            <p className="hiw-text">with 6 cores</p>
          </div>

          <div className="flex-1 flex justify-center flex-col g_fadeIn">
            <p className="hiw-text">Up to</p>
            <p className="hiw-bigtext">4x faster</p>
            <p className="hiw-text">ray tracing</p>
          </div>

        </div>

      </div>
    </section>
  );
};
