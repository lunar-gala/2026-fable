"use client";

import { Content } from "next/dist/compiled/@next/font/dist/google";
import { COLORS } from "../constants";
import LandingAnimation from "./Landing/LandingAnimation";
import { motion, useScroll } from "motion/react"
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
      <LandingAnimation />

      </div>
    </>

  );
}
