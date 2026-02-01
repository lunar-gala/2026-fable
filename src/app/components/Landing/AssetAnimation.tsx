"use client";

import { useEffect, useState } from "react";
import Lottie from "react-lottie";
import './LandingAnimation.css';

export type Stage = "landing" | "act1" | "act2" | "act3" | "act4";

interface AssetAnimationProps {
  stage: Stage;
}

const stageToFile: Record<Stage, string[]> = {
  landing: ["/shapes/landingasset.json"],
  act1: ["/shapes/act1start.json"],
  act2: ["/shapes/act1to2-0131.json"],
  act3: ["/shapes/act2end.json", "/shapes/act3asset.json", "/shapes/act3to4.json"],
  act4: ["/shapes/act4end.json"],
};
  
function AssetAnimation({ stage }: AssetAnimationProps) {
  const [animationDataList, setAnimationDataList] = useState<object[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const loadAnimations = async () => {
      const files = stageToFile[stage];
      const dataList = await Promise.all(
        files.map(async (file) => {
          const response = await fetch(file);
          return response.json();
        })
      );
      setAnimationDataList(dataList);
      setCurrentIndex(0);
    };
    loadAnimations();
  }, [stage]);

  const handleComplete = () => {
    if (currentIndex < animationDataList.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  if (animationDataList.length === 0) {
    return <div className="assetAnimation" />;
  }

  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationDataList[currentIndex],
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const eventListeners = [
    { eventName: "complete" as const, callback: handleComplete },
  ];

  return (
    <div className="assetAnimation">
      <Lottie options={defaultOptions} eventListeners={eventListeners} />
    </div>
  );
}

export default AssetAnimation;


