"use client";

import { useEffect, useState } from "react";
import Lottie from "react-lottie";
import './LandingAnimation.css';

export type Stage = "landing" | "act1" | "act2" | "act3" | "act4";

interface AssetAnimationProps {
  stage: Stage;
}

const stageToFile: Record<Stage, string[][]> = {
  landing: [["/shapes/landingL.json", "/shapes/landingR.json"]],
  act1: [[]],
  act2: [[]],
  act3: [[]],
  act4: [[]],
  // act1: ["/shapes/act1start.json"],
  // act2: ["/shapes/act1to2-0131.json"],
  // act3: ["/shapes/act2end.json", "/shapes/act3asset.json", "/shapes/act3to4.json"],
  // act4: ["/shapes/act4end.json"],
};
  
interface AnimationPair {
  left: object | null;
  right: object | null;
}

function AssetAnimation({ stage }: AssetAnimationProps) {
  const [animationPairs, setAnimationPairs] = useState<AnimationPair[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const loadAnimations = async () => {
      const filePairs = stageToFile[stage];
      const pairs = await Promise.all(
        filePairs.map(async (pair) => {
          const [leftFile, rightFile] = pair;
          const [leftData, rightData] = await Promise.all([
            leftFile ? fetch(leftFile).then((r) => r.json()) : null,
            rightFile ? fetch(rightFile).then((r) => r.json()) : null,
          ]);
          return { left: leftData, right: rightData };
        })
      );
      setAnimationPairs(pairs);
      setCurrentIndex(0);
    };
    loadAnimations();
  }, [stage]);

  const handleComplete = () => {
    if (currentIndex < animationPairs.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  if (animationPairs.length === 0 || !animationPairs[currentIndex]) {
    return <div className="assetAnimation" />;
  }

  const currentPair = animationPairs[currentIndex];

  const leftOptions = {
    loop: false,
    autoplay: true,
    animationData: currentPair.left,
    rendererSettings: {
      preserveAspectRatio: "xMinYMid slice",
    },
  };

  const rightOptions = {
    loop: false,
    autoplay: true,
    animationData: currentPair.right,
    rendererSettings: {
      preserveAspectRatio: "xMaxYMid slice",
    },
  };

  const eventListeners = [
    { eventName: "complete" as const, callback: handleComplete },
  ];

  return (
    <div className="assetAnimation">
      {currentPair.left && (
        <div className="assetAnimation-left">
          <Lottie options={leftOptions} eventListeners={eventListeners} />
        </div>
      )}
      {currentPair.right && (
        <div className="assetAnimation-right">
          <Lottie options={rightOptions} eventListeners={eventListeners} />
        </div>
      )}
    </div>
  );
}

export default AssetAnimation;


