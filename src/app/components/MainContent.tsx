"use client";

import { Content } from "next/dist/compiled/@next/font/dist/google";
import { COLORS } from "../constants";
import LandingAnimation from "./Landing/LandingAnimation";
<<<<<<< Updated upstream
import TeaserGradientAnimation from "./Teaser/TeaserGradientAnimation";
import { motion, useScroll } from "motion/react";
=======
import LandingAssetAnimation from "./Landing/LandingAssetAnimation";
import TeaserGradientAnimation2 from "./Teaser/TeaserGradientAnimation2";
import TeaserContent from "./Teaser/TeaserContent";
import TeaserGradientAnimation from "./Teaser/TeaserGradientAnimation";
import Countdown from "./Teaser/Countdown";
import WordmarkAnimation from "./Landing/WordmarkAnimation";
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
      <TeaserGradientAnimation />
=======
      <div className="gradient-grid teaser-textcontent">      
        <TeaserContent/>
      </div>
      <TeaserGradientAnimation2/>
>>>>>>> Stashed changes

      </div>
    </>

  );
}
