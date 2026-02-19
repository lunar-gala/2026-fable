"use client";
import LinesContent from "@/app/components/Act 1 Line/LinesContent";
import LinesGrid from "@/app/components/Act 1 Line/LinesGrid";

// for the actual content on the pg (countdown, info, etc), 
// just made a second grid on top of the og grid,,, not sure if there's moreefficient way to do it
export default function LinesFull() {

  return (
    <>
      <div className="gridTextContent"><LinesContent/></div>
      <LinesGrid/>
    </>


  );
}

