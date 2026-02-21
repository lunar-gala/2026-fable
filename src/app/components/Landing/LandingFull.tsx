"use client";
import './LandingAnimation.css';
import LandingAnimation from "./LandingAnimation"
import LandingContent from "./LandingContent"
import { useScroll, useTransform, motion } from "motion/react";

export default function LandingFull() {
  const { scrollYProgress } = useScroll();
  // fade out buttons & text before the Act2→Act3 grid transition at 0.6
  const contentOpacity = useTransform(scrollYProgress, [0.10, 0.12], [1, 0]);

  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      <motion.div
        className="actTextContent"
      >
        <LandingContent />
      </motion.div>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      >
        <LandingAnimation />
      </div>
    </div>
  );
}
