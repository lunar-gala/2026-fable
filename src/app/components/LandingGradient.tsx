"use client";

import Lottie from "lottie-react";
import { useEffect, useState, useCallback } from "react";

export default function LandingGradient() {
  const [animationData, setAnimationData] = useState(null);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    fetch("/landingdemo-1_22-v1.json")
      .then((res) => res.json())
      .then((data) => setAnimationData(data));
  }, []);

  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    // Fade out over the first viewport height of scrolling
    const newOpacity = Math.max(0, 1 - scrollY / windowHeight);
    setOpacity(newOpacity);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  if (!animationData) {
    return null;
  }

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        opacity,
        backgroundColor: "white",
        transition: "opacity 0.1s ease-out",
      }}
    >
      <Lottie
        animationData={animationData}
        loop={true}
        autoplay={true}
        style={{
          width: "100%",
          height: "100%",
        }}
      />
    </div>
  );
}
