"use client";

import NavBar from "@/app/components/NavBar";
import LinesFull from "@/app/components/LinesList/LinesFull"
import MobileNavBar from "../components/MobileNavBar";
import React, { useState } from 'react';

export default function LinesPage() {
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
        <LinesFull />
      </div>   
    </>


  );
}