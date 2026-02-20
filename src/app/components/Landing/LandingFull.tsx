"use client";
import './LandingAnimation.css';
import LandingAnimation from "./LandingAnimation"
import LandingContent from "./LandingContent"
export default function LandingFull() {

  return (
    <>
      <div className="actTextContent"><LandingContent/></div>
      <LandingAnimation/>
    </>
  );
}
