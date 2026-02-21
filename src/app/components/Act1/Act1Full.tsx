"use client";
import './act1Animation.css';
import Act1Content from "./Act1Content";
import Act1GradientAnimation from "./Act1GradientAnimation";
import { useScroll, useTransform, motion } from "motion/react";


// for the actual content on the pg (countdown, info, etc),
// just made a second grid on top of the og grid,,, not sure if there's moreefficient way to do it
export default function Act1Full() {


  return (
    <>
      <div className="actTextContent"><Act1Content/></div>
      <Act1GradientAnimation/>
      <div className="a1-gradient-bg"></div>
    </>
  );
}
