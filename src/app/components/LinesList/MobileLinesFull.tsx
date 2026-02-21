"use client";
import LinesContent from "@/app/components/LinesList/LinesContent";
import MobileLinesContent from "@/app/components/LinesList/MobileLinesContent";
import LinesGrid from "@/app/components/LinesList/LinesGrid";
import MobileLinesGrid from "@/app/components/LinesList/MobileLinesGrid";

// for the actual content on the pg (countdown, info, etc), 
// just made a second grid on top of the og grid,,, not sure if there's moreefficient way to do it
export default function MobileLinesFull() {

  return (
    <>
      <div className="gridTextContent"><MobileLinesContent/></div>
      <MobileLinesGrid/>
    </>


  );
}

