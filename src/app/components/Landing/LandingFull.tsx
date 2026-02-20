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
    <>
      <motion.div className="actTextContent" style={{ opacity: contentOpacity }} ><LandingContent/></motion.div>
      <LandingAnimation/>
    </>
  );
}
