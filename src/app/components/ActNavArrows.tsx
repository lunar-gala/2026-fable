"use client";

import { Stage } from "./Stage";
import Image from "next/image";

const ACT_LABELS: Record<number, string> = {
  [Stage.Landing]: "LANDING",
  [Stage.Act1]: "ACT I",
  [Stage.Act2]: "ACT II",
  [Stage.Act3]: "ACT III",
  [Stage.Act4]: "ACT IV",
};

// Scroll targets as fractions of total scroll height (center of each stage range)
const SCROLL_TARGETS: Record<number, number> = {
  [Stage.Landing]: 0.1,
  [Stage.Act1]: 0.3,
  [Stage.Act2]: 0.5,
  [Stage.Act3]: 0.7,
  [Stage.Act4]: 0.9,
};

function scrollToStage(target: Stage) {
  const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
  const targetScroll = SCROLL_TARGETS[target] * totalHeight;
  window.scrollTo({ top: targetScroll, behavior: "smooth" });
}

interface ActNavArrowsProps {
  stage: Stage;
}

export default function ActNavArrows({ stage }: ActNavArrowsProps) {
  const isDark = stage === Stage.Act3 || stage === Stage.Act4;
  const darkClass = isDark ? " nav-arrow--dark" : "";

  const prevStage = stage > Stage.Act1 ? stage - 1 : null;
  const nextStage = stage < Stage.Act4 ? stage + 1 : null;

  return (
    <>
      {prevStage !== null && (
        <button
          className={`nav-arrow nav-arrow-left${darkClass}`}
          onClick={() => scrollToStage(prevStage)}
          aria-label={`Go to ${ACT_LABELS[prevStage]}`}
        >
          <Image
            src="/arrow_button.svg"
            alt=""
            width={18}
            height={27}
            className="nav-arrow-icon nav-arrow-icon-left"
          />
          <span className="nav-arrow-label">{ACT_LABELS[prevStage]}</span>
        </button>
      )}
      {nextStage !== null && (
        <button
          className={`nav-arrow nav-arrow-right${darkClass}`}
          onClick={() => scrollToStage(nextStage)}
          aria-label={`Go to ${ACT_LABELS[nextStage]}`}
        >
          <Image
            src="/arrow_button.svg"
            alt=""
            width={18}
            height={27}
            className="nav-arrow-icon"
          />
          <span className="nav-arrow-label">{ACT_LABELS[nextStage]}</span>
        </button>
      )}
    </>
  );
}
