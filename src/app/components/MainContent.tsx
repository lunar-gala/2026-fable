"use client";

import { useState, useEffect } from "react";
import LandingAnimation from "./Landing/LandingAnimation";
import Act1Full from "./Act1/Act1Full";
import Act2Full from "./Act2/Act2Full";
import Act3Full from "./Act3/Act3Full";
import Act4Full from "./Act4/Act4Full";
import AssetAnimation from "./Landing/AssetAnimation";
import ActNavArrows from "./ActNavArrows";
import { Stage } from "./Stage";

import { useScroll } from "motion/react";

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
    const scrollTarget = sessionStorage.getItem("scrollToAct");
    if (scrollTarget) {
      sessionStorage.removeItem("scrollToAct");
      // Set stage immediately so the correct act content renders from the first frame
      const targetStage = getStageFromProgress(parseFloat(scrollTarget));
      setStage(targetStage);
      // Scroll to the matching position after layout is computed
      requestAnimationFrame(() => {
        const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
        window.scrollTo({ top: parseFloat(scrollTarget) * totalHeight, behavior: "instant" });
      });
    } else {
      window.scrollTo(0, 0);
    }
  }, []);

  useEffect(() => {
    // subscribes to a Framer Motion MotionValue; The callback fires continuously as the user scrolls, receiving the current progress (0 to 1) as value:
    // the on() function returns a function that removes THIS specific callback
    const unsubscribe = scrollYProgress.on("change", (value) => {
      const newStage = getStageFromProgress(value);
      setStage((prev) => (prev !== newStage ? newStage : prev));
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  // Sync stage to body dataset so NavBar can detect dark mode
  useEffect(() => {
    const stageNames = ["landing", "act1", "act2", "act3", "act4"];
    document.body.dataset.stage = stageNames[stage];
    return () => {
      delete document.body.dataset.stage;
    };
  }, [stage]);

  return (
    <>
      <div style={{ position: "relative", width: "100%", height: "800vh" }}>
        <div id="animationWindow"
        style={{
          position: "fixed",
          top: 0,
          height: "100vh",
          backgroundColor: stage >= Stage.Act3 ? "#000" : "#F2EFE5",
        }}

        >
          {stage === Stage.Landing && <LandingAnimation />}
          {stage === Stage.Act1 && <Act1Full />}
          {stage === Stage.Act2 && <Act2Full />}
          {stage === Stage.Act3 && <Act3Full />}
          {stage === Stage.Act4 && <Act4Full />}
          <AssetAnimation stage={stage} />
          <ActNavArrows stage={stage} />

        </div>
      </div>
    </>

  );
}
