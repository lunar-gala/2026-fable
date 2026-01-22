"use client";

import Lottie from "lottie-react";
import { useEffect, useState, useCallback } from "react";
import { COLORS } from "../constants";

export default function MainContent() {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    fetch("/landingdemo-1_22-v1.json")
      .then((res) => res.json())
      .then((data) => setAnimationData(data));
  }, []);

  if (!animationData) {
    return null;
  }

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: "5%",
        width: "95%",
        height: "100%",
        backgroundColor: COLORS.background,
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
      <img
        src="/wordmark.png"
        alt="Lunar Gala"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          maxWidth: "60%",
          maxHeight: "80%",
          objectFit: "contain",
        }}
      />
    </div>
  );
}
