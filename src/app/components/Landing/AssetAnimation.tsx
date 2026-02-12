"use client";

import { useEffect, useState } from "react";
import Lottie from "react-lottie";
import './LandingAnimation.css';

export type Stage = "landing" | "act1" | "act2" | "act3" | "act4";

interface AssetAnimationProps {
  stage: Stage;
}

const stageIndices: Record<Stage, number> = {
  landing: 0,
  act1: 1,
  act2: 2,
  act3: 4,
  act4: 6
};

const animationFiles = [
  ["/shapes/landingL.json", "/shapes/landingR.json"], // 0, landing
  ["/shapes/Act1-LSide.json", "/shapes/Act1-RSide.json"], // 1, act1, the original file names from the folder are in the wrong order...
  ["/shapes/act1to2 - L.json", "/shapes/act1to2 - R.json"], // 2, transition to act2 & act 2, the original file names from the folder are in the wrong order too...
  ["/shapes/act2to3L.json", "/shapes/act2to3R.json"], // 3, transition to act 3
  ["/shapes/act3start-L.json", "/shapes/act3start-R.json"], // 4, act3
  ["/shapes/act3to4-Lside.json", "/shapes/act3to4-Rside.json"], // 5, transition to act 4
  ["/shapes/act4end-L.json", "/shapes/act4end-Rside.json"] // 6 act4
];
  
interface AnimationPair {
  left: object | null;
  right: object | null;
}

function AssetAnimation({ stage }: AssetAnimationProps) {
  const [animationPairs, setAnimationPairs] = useState<AnimationPair[]>([]); // an array of animation pairs to play sequentially
  const [currentIndex, setCurrentIndex] = useState(0); // index of the current animation in animationPairs being played
  const [prevStageIndex, setPrevStageIndex] = useState(stageIndices[stage]);

  useEffect(() => {
    const loadAnimations = async () => {
      const stageIndex = stageIndices[stage];
      const [leftFile, rightFile] = animationFiles[stageIndex];

      const [leftData, rightData] = await Promise.all([
        leftFile ? fetch(leftFile).then((r) => r.json()) : null,
        rightFile ? fetch(rightFile).then((r) => r.json()) : null,
      ]);

      setAnimationPairs([{ left: leftData, right: rightData }]);
      setCurrentIndex(0);
    };
    loadAnimations();
  }, []);

  useEffect(() => {
    startTransition(stage);
  }, [stage]);

  const startTransition = async (newStage: Stage) => {
    const targetStageIndex = stageIndices[newStage];
    console.log({prevStageIndex, targetStageIndex});

    if (targetStageIndex > prevStageIndex) {
      const transitionPairs: AnimationPair[] = [];
      for (let i = prevStageIndex + 1; i <= targetStageIndex; i++) {
        // for each index between current and target, play the corresponding animation in order. wait until the prev animmation completes before moving to the next one..
        // Need to load all animations upfront to play through them sequentially.
        const [leftFile, rightFile] = animationFiles[i];
        const leftData = leftFile ? await fetch(leftFile).then((r) => r.json()) : null;
        const rightData = rightFile ? await fetch(rightFile).then((r) => r.json()) : null;

        transitionPairs.push({ left: leftData, right: rightData });
      }
      console.log({transitionPairs});
      // await Promise.all(transitionPairs.map(pair => Promise.all([pair.left, pair.right])));
      setAnimationPairs(transitionPairs);
      setCurrentIndex(0);
      setPrevStageIndex(targetStageIndex);
    } else if (targetStageIndex < prevStageIndex) {
      const transitionPairs: AnimationPair[] = [];
      for (let i = prevStageIndex - 1; i >= targetStageIndex; i--) {
        const [leftFile, rightFile] = animationFiles[i];
        const leftData = leftFile ? await fetch(leftFile).then((r) => r.json()) : null;
        const rightData = rightFile ? await fetch(rightFile).then((r) => r.json()) : null;

        transitionPairs.push({ left: leftData, right: rightData });
      }
      console.log({ transitionPairs });
      // await Promise.all(transitionPairs.map(pair => Promise.all([pair.left, pair.right])));
      setAnimationPairs(transitionPairs);
      setCurrentIndex(0);
      setPrevStageIndex(targetStageIndex);
    }
  }

  const handleComplete = () => {
    if (currentIndex < animationPairs.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  if (animationPairs.length === 0 || !animationPairs[currentIndex]) {
    return <div className="assetAnimation" />;
  }

  const currentPair = animationPairs[currentIndex];
  // console.log({currentPair});
  console.log("current stage", stage, "current index", currentIndex);

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


