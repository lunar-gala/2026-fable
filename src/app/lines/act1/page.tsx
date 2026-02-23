"use client";

import LinepgFull from "@/app/components/Line page templates/A1LinesFull";
import NavBar from "@/app/components/NavBar";
import MobileNavBar from "@/app/components/MobileNavBar";
import React, { Suspense } from 'react'

export default function A1LinePage() {
  const [isMobile, setIsMobile] = React.useState(false);
  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {isMobile ? <MobileNavBar /> : <NavBar />}
      <div className="pageContent">
        <Suspense>
          <div className="linesMain">
            <LinepgFull />
          </div>         
        </Suspense>
      </div>
    </>
  );
}