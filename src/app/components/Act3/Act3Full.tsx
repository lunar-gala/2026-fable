"use client";
import './act3Animation.css';
import Act3Content from "./Act3Content";
import Act3GradientAnimation from "./Act3GradientAnimation";
import Act3GradientBottom from "./Act3GradientBottom";

// for the actual content on the pg (countdown, info, etc),
// just made a second grid on top of the og grid,,, not sure if there's moreefficient way to do it
export default function Act3Full() {

  return (
    <>
      <div className="actTextContent"><Act3Content/></div>
      <Act3GradientAnimation/>
      <div className='bottomgradient'><Act3GradientBottom/></div>
      <div className="a3bg"></div>
    </>
  );
}
