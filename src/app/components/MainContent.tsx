"use client";

import { useState, useEffect } from "react";
import { COLORS } from "../constants";
import LandingAnimation from "./Landing/LandingAnimation";
import Act1Full from "./Act1/Act1Full";
import Act2Full from "./Act2/Act2Full";
import Act3Full from "./Act3/Act3Full";
import AssetAnimation from "./Landing/AssetAnimation";
import { Stage } from "./Stage";

import { useScroll } from "motion/react";
import { Asset } from "next/font/google";

function getStageFromProgress(progress: number): Stage { // TODO: looks like a terrible implementation
  if (progress < 0.2) return Stage.Landing;
  if (progress < 0.4) return Stage.Act1;
  if (progress < 0.6) return Stage.Act2;
  if (progress < 0.8) return Stage.Act3;
  return Stage.Act4;
}

export default function MainContent() {
  const { scrollYProgress } = useScroll();
  const [stage, setStage] = useState<Stage>(Stage.Landing);

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
      <div style={{ position: "relative", width: "100%", height: "800vh" }}>
        <div id="animationWindow"
        style={{ 
          position: "fixed",
          top: 0,
          height: "100vh",
        }}

        >
          {stage === Stage.Landing && <LandingAnimation />}
          {stage === Stage.Act1 && <Act1Full />}
          {stage === Stage.Act2 && <Act2Full />}
          {stage === Stage.Act3 && <Act3Full />}
          <AssetAnimation stage={stage} />

        </div>
      </div>
    </>

  );
}
