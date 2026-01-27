"use client";

import { COLORS } from "../constants";
import LandingAnimation from "./LandingAnimation";

export default function MainContent() {
  return (
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
      <img
        src="/wordmark.png"
        alt="Lunar Gala"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          maxWidth: "60%",
          maxHeight: "80%",
          objectFit: "contain",
        }}
      />
    </div>
  );
}
