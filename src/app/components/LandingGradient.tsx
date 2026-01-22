"use client";

import Lottie from "lottie-react";
import { useEffect, useState } from "react";

export default function LandingGradient() {
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
    <Lottie
      animationData={animationData}
      loop={true}
      autoplay={true}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
      }}
    />
  );
}
