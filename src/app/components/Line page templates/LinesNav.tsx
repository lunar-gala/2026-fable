
"use client";
import "@/app/components/Line page templates/linespages.css";
import { useEffect, useState } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

/** Act button container: main label + optional expanded line numbers (only for current act). */
const ACTS: { label: string; route: string; lineNumbers?: number[] }[] = [
  { label: "Follow", route: "/lines/act1", lineNumbers: [1, 2, 3, 4] },
  { label: "Wander", route: "/lines/act2", lineNumbers: [5, 6, 7, 8] },
  { label: "Trace", route: "/lines/act3", lineNumbers: [9, 10, 11, 12] },
  { label: "Discern", route: "/lines/act4", lineNumbers: [13, 14, 15, 16, 17] }, // 13: echo, 14: lethe, 15: vestige, 16: persistence, 17: zamaan
];


export default function LinesNav() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  // Helper: get act label from pathname
  function getActLabel(path: string): string | null {
    if (path === "/lines" || path === "/lines/act3") return "Trace";
    if (path === "/lines/act1") return "Follow";
    if (path === "/lines/act2") return "Wander";
    if (path === "/lines/act4") return "Discern";
    return null;
  }

  // Helper: get default line for act
  function getDefaultLineForAct(actLabel: string | null): number {
    const act = ACTS.find((a) => a.label === actLabel);
    return act && act.lineNumbers && act.lineNumbers.length > 0 ? act.lineNumbers[0] : 1;
  }

  // Determine current act and line robustly
  const currentActLabel = getActLabel(pathname);
  const lineParam = searchParams?.get("line");
  const [currentLine, setCurrentLine] = useState(() => {
    if (lineParam) return parseInt(lineParam, 10);
    return getDefaultLineForAct(currentActLabel);
  });

  // Sync currentLine with URL/query changes
  useEffect(() => {
    if (lineParam) {
      setCurrentLine(parseInt(lineParam, 10));
    } else {
      setCurrentLine(getDefaultLineForAct(currentActLabel));
    }
  }, [lineParam, pathname]);

  const handleActClick = (label: string, route: string) => {
    router.push(route);
  };

  const handleLineClick = (num: number, label: string) => {
    setCurrentLine(num);
    const act = ACTS.find((a) => a.label === label);
    if (!act) return;
    if (label === "Trace") {
      router.push(`/lines/act3${num > 1 ? `?line=${num}` : ""}`);
    } else {
      router.push(`${act.route}${num > 1 ? `?line=${num}` : ""}`);
    }
  };

  return (
    <div className=" linesnav">
      <div className="rowempty rowGrid">
        <div className="landingCell xs-cell c1" />
        <div className="landingCell xs-cell c3" />
        <div className="landingCell l-cell c4" />
        <div className="landingCell xs-cell c5" />
        <div className="landingCell l-cell c6" />
        <div className="landingCell xs-cell c6" />
        <div className="landingCell l-cell c6" />
        <div className="landingCell xs-cell c6" />
        <div className="landingCell l-cell c6" />
        <div className="landingCell xs-cell c3" />
        <div className="landingCell xs-cell c1" />
      </div>
      <div className=" rowcontent rowGrid">
            <div className="landingCell xs-cell-navcontent" />
            <div className="landingCell xs-cell-navcontent" />
            <div className="rowcontent w100">
                {ACTS.map((act) => (
                    <div key={act.label} className="navlinebutton rowcontent">
                        <div  className="navlinebutton">
                            <button
                            type="button"
                            className="landingCell "
                            onClick={() => handleActClick(act.label, act.route)}
                            >
                                <span className="actNavName">{act.label}</span>
                            </button>
                            {/* Only the current act gets the expanded view with line numbers */}
                            {act.label === currentActLabel && act.lineNumbers && act.lineNumbers.length > 0 && (
                            <div className="navbarNumbers">
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
                        <div className="landingCell xs-cell-nav" />           
                    </div>
                ))}
            </div>
            <div className="landingCell xs-cell-navcontent" />
      </div>
    </div>
  );
}

