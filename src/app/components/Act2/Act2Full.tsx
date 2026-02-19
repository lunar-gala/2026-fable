"use client";
import './act2Animation.css';
import Act2Content from "./Act2Content";
import Act2GradientAnimation from "./Act2GradientAnimation";

// for the actual content on the pg (countdown, info, etc),
// just made a second grid on top of the og grid,,, not sure if there's moreefficient way to do it
export default function Act2Full() {

  return (
    <>
      <div className="gridTextContent"><Act2Content/></div>
      <Act2GradientAnimation/>
      <div className="a2-gradient-bg"></div>
    </>
  );
}
