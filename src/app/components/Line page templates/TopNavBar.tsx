/**
 * commetnign ts out bc not using it 
 * "use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";

const ACTS: { label: string; route: string; lineNumbers?: number[] }[] = [
  { label: "Follow", route: "/viewer", lineNumbers: [1, 2, 3, 4] },
  { label: "Wander", route: "/wander", lineNumbers: [1, 2, 3, 4, 5] },
  { label: "Trace", route: "/lines", lineNumbers: [1, 2, 3, 4] },
  { label: "Discern", route: "/debut" },
];

export default function NavBarTop() {
  const [isDark, setIsDark] = useState(false);
  const [currentLine, setCurrentLine] = useState(1);
  const router = useRouter();
  const pathname = usePathname();

  const currentActLabel = pathname === "/lines" ? "Trace" : null;

  const handleActClick = (label: string, route: string) => {
    router.push(route);
  };

  const handleLineClick = (num: number, label: string) => {
    setCurrentLine(num);
    if (label === "Trace") {
      router.push(`/lines${num > 1 ? `?line=${num}` : ""}`);
    }
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
   <header className="navbar-top navbar-top-act3 navbar-light" role="banner">
      <div className="landingCell xs-cell" />
      <div className="landingCell">
        <nav className="navbar-top-nav" aria-label="Subnav - fixed to top of lines page">
          {ACTS.map((act) => (
            <div key={act.label} className="">
              <button
                type="button"
                className="navbar-top-link"
                onClick={() => handleActClick(act.label, act.route)}
              >
                <span className="navbar-nav-label">{act.label}</span>
              </button>
              {act.label === currentActLabel && act.lineNumbers && act.lineNumbers.length > 0 && (
                <div className="navbar-top-trace-sub navbar-top-act-sub">
                  {act.lineNumbers.map((num) => (
                    <button
                      key={num}
                      type="button"
                      className={`navbar-top-trace-num ${currentLine === num ? "navbar-top-trace-num--active" : ""}`}
                      onClick={() => handleLineClick(num, act.label)}
                      aria-pressed={currentLine === num}
                    >
                      {num}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
      <div className="landingCell xs-cell" />
    </header>
  

  );
}
 */