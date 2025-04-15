"use client";

import { useRef, useEffect, useState } from "react";
import Container from "@/app/global-components/Container/Container";
import TourDates from "../TourDates/TourDates";
import { ArrowBottom } from "@/app/svg-icons/svg-icons";

export default function Shows({ data }) {
  const [isScrollMoreVisible, setIsScrollMoreVisible] = useState(false);
  const scrollableDivRef = useRef(null);

  const clickHandler = () => {
    scrollableDivRef.current.scrollTo({
      top:
        scrollableDivRef.current.scrollTop +
        scrollableDivRef.current.offsetHeight,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const scrollableDiv = scrollableDivRef.current;

    const handleScroll = () => {
      if (
        scrollableDiv.scrollTop +
          scrollableDiv.offsetHeight +
          scrollableDivRef.current.childNodes[0].children[0].offsetHeight >=
        scrollableDiv.scrollHeight
      ) {
        setIsScrollMoreVisible(false);
      } else {
        setIsScrollMoreVisible(true);
      }
    };

    scrollableDiv.addEventListener("scroll", handleScroll);

    return () => {
      scrollableDiv.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      id="shows"
      className="relative mt-16 w-full h-[32rem] lg:h-screen lg:min-h-[45rem] lg:max-h-[40rem] overflow-hidden"
    >
      {/* 🎥 Video ozadje */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/first-frame.png"
          className="w-full h-full object-cover"
        >
          <source src="./video-band.mp4" type="video/mp4" />
          <p>
            Your browser doesn&#8217;t support HTML video. Here is a{" "}
            <a href="./video-band.mp4">link to the video</a> instead.
          </p>
        </video>
        <div className="absolute inset-0 bg-hero-pattern bg-repeat mix-blend-overlay"></div>
      </div>

      {/* Vsebina nad videom */}
      <Container customClasses="relative z-10 pb-2.5 h-full">
        <div className="flex flex-col items-center text-white pt-11">
          <h2 className="text-2xl font-bold lg:text-4xl">Prihajajoči špili</h2>
        </div>

        <div
          className="scroller relative mt-6 h-[calc(100%-14rem)] overflow-hidden overflow-y-auto no-scrollbar"
          ref={scrollableDivRef}
        >
          <TourDates data={data} />
        </div>

        <div
          className={`absolute bottom-5 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center transition ${
            !isScrollMoreVisible ? "opacity-0" : ""
          }`}
          onClick={clickHandler}
        >
          <p className="text-yellow-btn-primary text-sm underline cursor-pointer">
            Show more
          </p>
          <ArrowBottom />
        </div>
      </Container>
    </section>
  );
}
