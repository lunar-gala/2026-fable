"use client";
import './act2Animation.css';
import Act2Content from "./Act2Content";
import Act2GradientAnimation from "./Act2GradientAnimation";
import { useScroll, useTransform, motion } from "motion/react";

// for the actual content on the pg (countdown, info, etc),
// just made a second grid on top of the og grid,,, not sure if there's moreefficient way to do it
export default function Act2Full() {
  const { scrollYProgress } = useScroll();
  // fade out buttons & text before the Act2→Act3 grid transition at 0.6
  const contentOpacity = useTransform(scrollYProgress, [0.52, 0.57], [1, 0]);

  return (
    <>
      <motion.div className="gridTextContent" style={{ opacity: contentOpacity }}>
        <Act2Content/>
      </motion.div>
      <Act2GradientAnimation/>
      <div className="a2-gradient-bg"></div>
    </>
  );
}
