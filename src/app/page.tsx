"use client";

import AboutContent from "./components/About/AboutContent";
import AboutFull from "./components/About/AboutFull";
import MainContent from "./components/MainContent";
import NavBar from "./components/NavBar";
import MobileNavBar from "./components/MobileNavBar";
import PeopleContent from "./components/People/PeopleContent";
import { COLORS } from "./constants";
import React, { useState } from 'react';


export default function Home() {
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
    <main
      style={{ backgroundColor: COLORS.background }}
    >
      {isMobile ? <MobileNavBar /> : <NavBar />}
      <div className="pageContent">
        <MainContent />
      </div>
      {/* <div className="peopleContent"><PeopleContent /></div> */}
    
    </main>
  );
}
