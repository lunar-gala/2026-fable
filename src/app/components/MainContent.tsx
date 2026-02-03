"use client";

import { Content } from "next/dist/compiled/@next/font/dist/google";
import { COLORS } from "../constants";
import LandingAnimation from "./Landing/LandingAnimation";
<<<<<<< Updated upstream
import { motion, useScroll } from "motion/react"
=======
import LandingAssetAnimation from "./Landing/LandingAssetAnimation";
import TeaserGradientAnimation from "./Teaser/TeaserGradientAnimation";
import WordmarkAnimation from "./Landing/WordmarkAnimation";
import { motion, useScroll } from "motion/react";
import CountdownTeaser from "./Teaser/CountdownTeaser";

>>>>>>> Stashed changes
export default function MainContent() {

  return (
    <>
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
<<<<<<< Updated upstream
      <LandingAnimation />

=======
      <TeaserGradientAnimation />
>>>>>>> Stashed changes
      </div>
    </>

  );
}
