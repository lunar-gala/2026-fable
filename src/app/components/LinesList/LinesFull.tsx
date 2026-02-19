"use client";
<<<<<<<< HEAD:src/app/components/Act 1 Line/LinesFull.tsx
import LinesContent from "@/app/components/Act 1 Line/LinesContent";
import LinesGrid from "@/app/components/Act 1 Line/LinesGrid";
========
import LinesContent from "@/app/components/LinesList/LinesContent";
import LinesGrid from "@/app/components/LinesList/LinesGrid";
>>>>>>>> 24de6938af609a39324ad869b013b0f849ecc089:src/app/components/LinesList/LinesFull.tsx

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

