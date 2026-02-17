"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const NAV_ITEMS = ["Viewer", "Tracks", "Debut"];

export default function NavBarTop() {
  const [isDark, setIsDark] = useState(false);
  const router = useRouter();

  const handleNavigation = (item: string) => {
    const routes: Record<string, string> = {
      Viewer: "/viewer",
      Tracks: "/tracks", 
      Debut: "/debut",
    };
    const path = routes[item];
    if (path) router.push(path);
  };

  useEffect(() => {
    const setFromStage = () => {
      const stage = document.body.dataset.stage || "landing";
      setIsDark(stage === "act3" || stage === "act4");
    };

    setFromStage();
    const observer = new MutationObserver(setFromStage);
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["data-stage"],
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header className={`navbar-top ${isDark ? "navbar-dark" : "navbar-light"}`}>
      <div className="navbar-top-inner">
        <div className="navbartop-logo">Follow</div>
        
        <nav className="navbar-top-nav" aria-label="Top navigation">
          {NAV_ITEMS.map((item) => (
            <button
              key={item}
              type="button"
              className="navbar-top-link"
              onClick={() => handleNavigation(item)}
            >
              <span className="navbar-nav-label">{item}</span>
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
