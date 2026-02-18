"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";


const ACT_ITEMS = ["ACT I", "ACT II", "ACT III", "ACT IV"];
const NAV_ITEMS = ["Lines", "Tickets", "People", "About"];

export default function NavBar() {
  const [isDark, setIsDark] = useState(false);
  const [hasOverflow, setHasOverflow] = useState(false);
  const router = useRouter();

  const handleNavigation = (item) => {
    const routes = {
      "Lines": "/lines",
      "Tickets": "/tickets",
      "People": "/people",
      "About": "/about",
    };
    
    const path = routes[item];
    if (path) {
      router.push(path);
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

  useEffect(() => {
    const initialStage = document.body.dataset.stage || "landing";
    setIsDark(initialStage === "act3" || initialStage === "act4");

    const observer = new MutationObserver(() => {
      const currentStage = document.body.dataset.stage || "landing";
      setIsDark(currentStage === "act3" || currentStage === "act4");
    });

    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["data-stage"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <aside className={`navbar ${isDark ? "navbar-dark" : "navbar-light"}`}>
      <div className="navbar-inner">
        <div className="navbar-row navbar-logo-row">
          <div className="navbar-logo">
            <img src="/wordmark.svg"></img>
          </div>
        </div>

        <div className="navbar-nav">
          <img
            src={isDark ? "/asset cutout dark.svg" : "/lightasset.svg"}
            alt=""
            aria-hidden="true"
            className="navbar-cutout"
          />
        </div>

        {!hasOverflow && ACT_ITEMS.map((item) => (
          <div key={item} className="navbar-row navbar-act-row">
            <span className="navbar-act-label">{item}</span>
          </div>
        ))}

        <nav className="navbar-nav" aria-label="Primary navigation">
          {NAV_ITEMS.map((item) => (
            <button
              key={item}
              type="button"
              className={`navbar-row ${item === "Lines" ? "navbar-link-row navbar-link-row--plain" : "navbar-link-row"}`}
              onClick={() => handleNavigation(item)}
            >
              {item !== "Lines" && (
                <img
                  src={isDark ? "/asset cutout dark.svg" : "/lightasset.svg"}
                  alt=""
                  aria-hidden="true"
                  className="navbar-cutout-sm"
                />
              )}
              <span className="navbar-nav-label">{item}</span>
            </button>
          ))}
        </nav>

        <div className="navbar-row navbar-footer">
          <img
            src="/lg wordmark.svg"
            alt="Lunar Gala"
            className="navbar-footer-wordmark"
          />
        </div>
      </div>
    </aside>
  );
}
