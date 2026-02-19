"use client";
import './act4Animation.css';
import Act4Content from "./Act4Content";
import Act4GradientAnimation from "./Act4GradientAnimation";``
import Act4GradientBottom from "./Act4GradientBottom";

export default function Act4Full() {

  return (
    <>
      <div className="gridTextContent"><Act4Content/></div>
      <Act4GradientAnimation/>
      <div className='bottomgradient'><Act4GradientBottom/></div>
      <div className="a4bg"></div>
    </>
  );
}
