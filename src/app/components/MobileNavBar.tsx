"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";

const ACT_ITEMS = ["ACT I", "ACT II", "ACT III", "ACT IV"];
const NAV_ITEMS = ["Lines", "Tickets", "People", "About"];


const SCROLL_TARGETS: Record<string, number> = {
  "ACT I": 0.3,
  "ACT II": 0.5,
  "ACT III": 0.7,
  "ACT IV": 0.9,
};

export default function NavBar() {
/** const [isDark, setIsDark] = useState(false); */  
  const [hasOverflow, setHasOverflow] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
    const handleClick = () => {
        setIsVisible(!isVisible);
    };

  const router = useRouter();
  const pathname = usePathname();

  const handleNavigation = (item: string) => {
    const routes: Record<string, string> = {
      Lines: "/lines",
      Tickets: "https://cglink.me/2c1/r1935471",
      People: "/people",
      About: "/about",
    };
    const path = routes[item];
    if (path) {
      router.push(path);
    }
  };

  const handleActNavigation = (item: string) => {
    const target = SCROLL_TARGETS[item];
    if (pathname !== "/") {
      // Store scroll target for after navigation completes
      if (target !== undefined) {
        sessionStorage.setItem("scrollToAct", String(target));
      }
      router.push("/");
    } else if (target !== undefined) {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      window.scrollTo({ top: target * totalHeight, behavior: "smooth" });
    }
  };
    useEffect(() => {
    const checkOverflow = () => {
      const navbar = document.querySelector(".navbar-inner");
      if (navbar) {
        setHasOverflow(navbar.scrollHeight > navbar.clientHeight);
      }
    };

    checkOverflow();
    window.addEventListener("resize", checkOverflow);
    return () => window.removeEventListener("resize", checkOverflow);
  }, []);


  return (
    <div className={`navbar-nav-mobile`}>

        <div className=" off-white-bg xs-row rowGridNav">
            <div className=" mobilenav-xs-cell landingCell"></div>
            <div className=" rectangle-200 landingCell"></div>
            <div className=" mobilenav-xs-cell landingCell"></div>
        </div>

        <div className=" off-white-bg navbar-constant rowGridNav">
            <div className=" mobilenav-xs-cell landingCell"></div>
            <div className="landingCell flex-constant ">
              <a href="/">
                <img src="/wordmarkstraight.svg" alt="Fable"></img>
              </a>
                <button type="button" onClick={handleClick}>
                    <img
                        src="/lightasset.svg"
                        alt=""
                        aria-hidden="true"
                        className="rotate90 navbar-cutout"
                    />   
                </button>
            </div>
            <div className=" mobilenav-xs-cell landingCell"></div>
        </div>

            {isVisible && (
                <div className=" off-white-bg navbar-nav-bg">
                    <nav className=" off-white-bg navbar-nav-bg" aria-label="Primary navigation">
                    {NAV_ITEMS.map((item) => (
                        <button
                        key={item}
                        type="button"
                        className={`mobile-nav-row rowGrid`}
                        onClick={() => handleNavigation(item)}
                        >
                        <span className=" navbar-nav-label-mobile">{item}</span>
                        </button>
                    ))}
                    
                    </nav>
                </div>

            )}   
    </div>
  );
}
