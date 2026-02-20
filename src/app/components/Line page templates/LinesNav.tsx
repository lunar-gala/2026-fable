
"use client";
import "@/app/components/Line page templates/linespages.css";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";

/** Act button container: main label + optional expanded line numbers (only for current act). */
const ACTS: { label: string; route: string; lineNumbers?: number[] }[] = [
  { label: "Follow", route: "/viewer", lineNumbers: [1, 2, 3, 4] },
  { label: "Wander", route: "/wander", lineNumbers: [5, 6, 7, 8] },
  { label: "Trace", route: "/lines", lineNumbers: [9, 10, 11, 12] },
  { label: "Discern", route: "/debut", lineNumbers: [13, 14, 15, 16, 17] },
];

export default function LinesNav() {
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


  return (
    <div className=" linesnav">
      <div className="rowempty rowGridContent">
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
      <div className=" rowcontent rowGridContent">
            <div className="landingCell xs-cell-navcontent" />
            <div className="landingCell xs-cell-navcontent" />
            <div className="rowcontent w100">
                {ACTS.map((act) => (
                    <>
                        <div key={act.label} className="navlinebutton rowcontent">
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
                 
                    </>
                ))}
            </div>
            <div className="landingCell xs-cell-navcontent" />
      </div>
    </div>
  );
}

