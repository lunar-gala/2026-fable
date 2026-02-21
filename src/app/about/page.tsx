"use client";

import AboutFull from "@/app/components/About/AboutFull";
import NavBar from "../components/NavBar";
import MobileNavBar from "../components/MobileNavBar";
import React, { useState } from 'react';


export default function AboutPage() {
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
        <AboutFull />
      </div>   
    </>
  );
}