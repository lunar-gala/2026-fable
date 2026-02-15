"use client";
import './about.css';
import AboutContent from "./AboutContent";
import AboutGrid from "./AboutGrid";

// for the actual content on the pg (countdown, info, etc), 
// just made a second grid on top of the og grid,,, not sure if there's moreefficient way to do it
export default function AboutFull() {

  return (
    <>
      <div className="gridTextContent"><AboutContent/></div>
      <AboutGrid/>
    </>


  );
}
