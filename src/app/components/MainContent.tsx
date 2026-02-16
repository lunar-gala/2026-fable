"use client";

import { useState, useEffect } from "react";
import { COLORS } from "../constants";
import LandingAnimation from "./Landing/LandingAnimation";
import Act1Full from "./Act1/Act1Full";
import Act2Full from "./Act2/Act2Full";
import Act3Full from "./Act3/Act3Full";
import AssetAnimation, { Stage } from "./Landing/AssetAnimation";

import { useScroll } from "motion/react";
import { Asset } from "next/font/google";

function getStageFromProgress(progress: number): Stage { // TODO: looks like a terrible implementation
  if (progress < 0.2) return "landing";
  if (progress < 0.4) return "act1";
  if (progress < 0.6) return "act2";
  if (progress < 0.8) return "act3";
  return "act4";
}

export default function MainContent() {
  const { scrollYProgress } = useScroll();
  const [stage, setStage] = useState<Stage>("landing");

  useEffect(() => {
    // subscribes to a Framer Motion MotionValue; The callback fires continuously as the user scrolls, receiving the current progress (0 to 1) as value:
    // the on() function returns a function that removes THIS specific callback
    const unsubscribe = scrollYProgress.on("change", (value) => {
      const newStage = getStageFromProgress(value);
      setStage((prev) => (prev !== newStage ? newStage : prev));
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <>
      <div style={{ position: "relative", width: "100%", height: "500vh" }}>
        <div id="animationWindow"
        style={{
          position: "fixed",
          top: 0,
          left: "5%",
          width: "95%",
          height: "100vh",
          backgroundColor: COLORS.background,
          transition: "opacity 0.1s ease-out",
        }}
        >
          {stage === "landing" && <LandingAnimation />}
          {stage === "act1" && <Act1Full />}
          {stage === "act2" && <Act2Full />}
          {stage === "act3" && <Act3Full />}
          <AssetAnimation stage={stage} />

        </div>
      </div>
    </>

  );
}
