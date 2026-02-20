/*
"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

 Act button container: main label + optional expanded line numbers (only for current act). 
const ACTS: { label: string; route: string; lineNumbers?: number[] }[] = [
  { label: "Follow", route: "/lines/act1", lineNumbers: [1, 2, 3, 4] },
  { label: "Wander", route: "/lines/act2", lineNumbers: [1, 2, 3, 4] },
  { label: "Trace", route: "/lines/act3", lineNumbers: [1, 2, 3, 4] },
  { label: "Discern", route: "/lines/act4",lineNumbers: [1, 2, 3, 4,5]  },
];

  const [isDark, setIsDark] = useState(false);
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const lineParam = searchParams?.get("line");
  const [currentLine, setCurrentLine] = useState(lineParam ? parseInt(lineParam, 10) : 1);

  // Sync currentLine with URL/query changes
  useEffect(() => {
    setCurrentLine(lineParam ? parseInt(lineParam, 10) : 1);
  }, [lineParam, pathname]);

  let currentActLabel: string | null = null;
  if (pathname === "/lines" || pathname === "/lines/act3") {
    currentActLabel = "Trace";
  } else if (pathname === "/lines/act1") {
    currentActLabel = "Follow";
  } else if (pathname === "/lines/act2") {
    currentActLabel = "Wander";
  } else if (pathname === "/lines/act4") {
    currentActLabel = "Discern";
  }

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
              Only the current act gets the expanded view with line numbers 
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
