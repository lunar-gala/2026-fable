"use client";
import A3LinesContent from "@/app/components/Act 3 Line/A3LinesContent";
import A3LinesGrid from "@/app/components/Act 3 Line/A3LinesGrid";

// for the actual content on the pg (countdown, info, etc), 
// just made a second grid on top of the og grid,,, not sure if there's moreefficient way to do it
export default function A3LinesFull() {

  return (
    <>
      <div className="gridTextContent"><A3LinesContent/></div>
      <A3LinesGrid/>
    </>


  );
}

