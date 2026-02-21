"use client";
import '@/app/components/About/about.css';
import AboutContent from "@/app/components/About/AboutContent";
import AboutGrid from "@/app/components/About/AboutGrid";

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

