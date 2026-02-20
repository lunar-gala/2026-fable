"use client";
import A1LinesContent from "@/app/components/Line page templates/A1LinesContent";
import A2LinesContent from "@/app/components/Line page templates/A2LinesContent";
import A3LinesContent from "@/app/components/Line page templates/A3LinesContent";
import A4LinesContent from "@/app/components/Line page templates/A4LinesContent";
import LinePageGrid from "@/app/components/Line page templates/LinePageGrid";
import LinesNav from "@/app/components/Line page templates/LinesNav";
import "@/app/components/Line page templates/linespages.css";
import TopNavBar from "@/app/components/Act 3 Line/TopNavBar";



// for the actual content on the pg (countdown, info, etc), 
// just made a second grid on top of the og grid,,, not sure if there's moreefficient way to do it
export default function A3LinesFull() {

  return (
    <>
      <div className="w100h100">
        <LinesNav />
        <div className="linesPageContent">
          <div className="gridTextContent"><A4LinesContent/></div>
          <LinePageGrid/>
        </div>
      </div>

    </>


  );
}

