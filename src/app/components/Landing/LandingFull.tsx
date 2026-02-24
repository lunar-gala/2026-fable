"use client";
import './LandingAnimation.css';
import LandingAnimation from "./LandingAnimation"
import LandingContent from "./LandingContent"

export default function LandingFull() {
  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      <div
        className="actTextContent"
      >
        <LandingContent />
      </div>
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
