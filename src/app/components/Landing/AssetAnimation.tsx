"use client";

import { useEffect, useState } from "react";
import Lottie from "react-lottie";
import './LandingAnimation.css';

export type Stage = "landing" | "act1" | "act2" | "act3" | "act4";

interface AssetAnimationProps {
  stage: Stage;
}

const stageIndices: Record<Stage, number[]> = {
  landing: [0, 0],
  act1: [1, 2], // stop at index 1 when scrolling down from landing to act1; stop at index 2 when scrolling up from act2 to act1
  act2: [2, 3],
  act3: [3, 5],
  act4: [5, 6]
};

const animationFiles = [
  ["/shapes/landingL.json", "/shapes/landingR.json"], // 0, landing
  ["/shapes/Act1-LSide.json", "/shapes/Act1-RSide.json"], // 1, transition to act1 & act1, the original file names from the folder are in the wrong order...
  ["/shapes/act1to2 - L.json", "/shapes/act1to2 - R.json"], // 2, transition to act2 & act 2, the original file names from the folder are in the wrong order too...
  ["/shapes/act2to3L.json", "/shapes/act2to3R.json"], // 3, transition to act 3
  ["/shapes/act3start-L.json", "/shapes/act3start-R.json"], // 4, act3
  ["/shapes/act3to4-Lside.json", "/shapes/act3to4-Rside.json"], // 5, transition to act 4
  ["/shapes/act4end-L.json", "/shapes/act4end-Rside.json"] // 6 act4
];
  
interface LottieAnimationData {
  op?: number; // an attribute in the json file; it means out point (total frames in Lottie JSON)
  [key: string]: unknown;
}

interface AnimationPair {
  left: LottieAnimationData | null;
  right: LottieAnimationData | null;
}

function AssetAnimation({ stage }: AssetAnimationProps) {
  const [animationPairs, setAnimationPairs] = useState<AnimationPair[]>([]); // an array of animation pairs to play sequentially
  const [currentIndex, setCurrentIndex] = useState(0); // index of the current animation in animationPairs being played
  const [prevStageIndex, setPrevStageIndex] = useState(0); // TODO: probably need to store & update instead of referencing it
  const [isReverse, setIsReverse] = useState(false); // whether to play animations in reverse

  useEffect(() => {
    const loadAnimations = async () => {
      const stageIndex = stageIndices[stage][0];
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
      // console.log({transitionPairs});
      setAnimationPairs(transitionPairs);
      setCurrentIndex(0);
      setIsReverse(false);
      setPrevStageIndex(targetStageIndex);
      set
    } else if (targetStageIndex < prevStageIndex) {
      const transitionPairs: AnimationPair[] = [];
      for (let i = prevStageIndex; i >= targetStageIndex; i--) {
        const [leftFile, rightFile] = animationFiles[i];
        const leftData = leftFile ? await fetch(leftFile).then((r) => r.json()) : null;
        const rightData = rightFile ? await fetch(rightFile).then((r) => r.json()) : null;

        transitionPairs.push({ left: leftData, right: rightData });
      }
      console.log({ transitionPairs });
      setAnimationPairs(transitionPairs);
      setCurrentIndex(0);
      setIsReverse(true);
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

  // Get total frames (op = out point in Lottie JSON) for reverse playback segments
  const leftTotalFrames = currentPair.left?.op ?? 0;
  const rightTotalFrames = currentPair.right?.op ?? 0;

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

  // For reverse playback, use segments to play from last frame to first frame
  const leftSegments = isReverse && leftTotalFrames > 0 ? [leftTotalFrames, 0] as [number, number] : undefined;
  const rightSegments = isReverse && rightTotalFrames > 0 ? [rightTotalFrames, 0] as [number, number] : undefined;

  const eventListeners = [
    { eventName: "complete" as const, callback: handleComplete },
  ];

  return (
    <div className="assetAnimation">
      {currentPair.left && (
        <div className="assetAnimation-left">
          <Lottie options={leftOptions} eventListeners={eventListeners} segments={leftSegments} />
        </div>
      )}
      {currentPair.right && (
        <div className="assetAnimation-right">
          <Lottie options={rightOptions} eventListeners={eventListeners} segments={rightSegments} />
        </div>
      )}
    </div>
  );
}

export default AssetAnimation;


