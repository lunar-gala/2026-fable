"use client";

import NavBar from "../components/NavBar";
import PeopleContent from "../components/People/PeopleContent";
import MobileNavBar from "../components/MobileNavBar";
import React, { useState } from 'react';
import { COLORS } from ".././constants";

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
      <main
        style={{ backgroundColor: COLORS.background }}
      >
        {isMobile ? <MobileNavBar /> : <NavBar />}
        <div className="pageContent">
          <PeopleContent />
        </div>
      
      </main>
    );
}