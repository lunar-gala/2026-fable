"use client";

import { useEffect, useState, useRef } from "react";
import lottie, { AnimationItem } from "lottie-web";
import './LandingAnimation.css';
import { Stage } from "../Stage";

interface AssetAnimationProps {
  stage: Stage;
}

// Stage is a numeric enum, so need to use [Stage.Landing] syntax for the keys.
// Animation file indices when scrolling forward (down)
const stageForwardIndices: Record<Stage, number> = {
  [Stage.Landing]: 0,
  [Stage.Act1]: 2,
  [Stage.Act2]: 3,
  [Stage.Act3]: 5,
  [Stage.Act4]: 6
};

const animationForwardFiles = [
  ["/shapes/landing_start_L.json", "/shapes/landing_start_R.json"], // 0, landing
  ["/shapes/landing_end_L.json", "/shapes/landing_end_R.json"], // 1, landing end
  ["/shapes/a1_start_L.json", "/shapes/a1_start_R.json"], // 2, act1
  ["/shapes/a1toa2_L.json", "/shapes/a1toa2_R.json"], // 3, transition to act2 & act 2
  ["/shapes/a2_end_L.json", "/shapes/a2_end_R.json"], // 4, 2 end
  ["/shapes/a3_start_L.json", "/shapes/a3_start_R.json"], // 5, act3
  ["/shapes/a3toa4_final_L.json", "/shapes/a3toa4_final_R.json"], // 6, transition to act 4
];

// Animation file indices when scrolling backward (up)
const stageBackwardIndices: Record<Stage, number> = {
  [Stage.Landing]: 0,
  [Stage.Act1]: 1,
  [Stage.Act2]: 2,
  [Stage.Act3]: 3,
  [Stage.Act4]: 3
};

const animationBackwardFiles = [
  ["/shapes/landing_end_L.json", "/shapes/landing_end_R.json"], // 0, landing
  ["/shapes/a1toa2_L.json", "/shapes/a1toa2_R.json"], // 1, transition to act2 & act 2
  ["/shapes/a2_end_L.json", "/shapes/a2_end_R.json"], // 2, 2 end
  ["/shapes/a3toa4_final_L.json", "/shapes/a3toa4_final_R.json"], // 3, transition to act 4
];

interface LottieAnimationData {
  op?: number; // out point (total frames in Lottie JSON)
  [key: string]: unknown;
}

interface AnimationPair {
  left: LottieAnimationData | null;
  right: LottieAnimationData | null;
}

function AssetAnimation({ stage }: AssetAnimationProps) {
  const [animationPairs, setAnimationPairs] = useState<AnimationPair[]>([]); // an array of animation pairs to play sequentially
  const [currentIndex, setCurrentIndex] = useState(0); // index of the current animation in animationPairs being played
  const [prevStage, setPrevStage] = useState<Stage>(stage); // track previous stage for comparison
  const [isScrollUp, setIsScrollUp] = useState(false); // whether the user is scrolling up
  const [isLoaded, setIsLoaded] = useState(false);

  // use useRef for these constants; if defined outside component, will be populated again and results in duplicates
  // refs are good for storing information that doesn’t affect the visual output of your component
  const animationForwardData = useRef<[LottieAnimationData | null, LottieAnimationData | null][]>([]);
  const animationBackwardData = useRef<[LottieAnimationData | null, LottieAnimationData | null][]>([]);

  // Refs for lottie-web containers and instances
  const leftContainerRef = useRef<HTMLDivElement>(null);
  const rightContainerRef = useRef<HTMLDivElement>(null);
  const leftAnimRef = useRef<AnimationItem | null>(null);
  const rightAnimRef = useRef<AnimationItem | null>(null);

  // Fetch all animation data on mount
  useEffect(() => {
    const loadAnimations = async () => {
      for (const [leftFile, rightFile] of animationForwardFiles) {
        const [leftData, rightData] = await Promise.all([
          leftFile ? fetch(leftFile).then((raw) => raw.json()) : null,
          rightFile ? fetch(rightFile).then((raw) => raw.json()) : null
        ]);
        animationForwardData.current.push([leftData, rightData]);
      }

      for (const [leftFile, rightFile] of animationBackwardFiles) {
        const [leftData, rightData] = await Promise.all([
          leftFile ? fetch(leftFile).then((raw) => raw.json()) : null,
          rightFile ? fetch(rightFile).then((raw) => raw.json()) : null
        ]);
        animationBackwardData.current.push([leftData, rightData]);
      }

      // Set initial animation
      const stageIndex = stageForwardIndices[stage];
      const [leftData, rightData] = animationForwardData.current[stageIndex];
      setAnimationPairs([{ left: leftData, right: rightData }]);
      setCurrentIndex(0);
      setIsLoaded(true);
    };
    loadAnimations();
  }, []);

  // Handle stage changes
  useEffect(() => {
    if (isLoaded) startTransition(stage);
  }, [stage, isLoaded]);

  // Play animation when currentIndex or animationPairs change
  useEffect(() => {
    if (animationPairs.length === 0 || !animationPairs[currentIndex]) return;

    const currentPair = animationPairs[currentIndex];
    const shouldReverse = isScrollUp;

    // Destroy existing animations
    leftAnimRef.current?.destroy();
    rightAnimRef.current?.destroy();

    // Load and play left animation
    if (currentPair.left && leftContainerRef.current) {
      leftAnimRef.current = lottie.loadAnimation({
        container: leftContainerRef.current,
        renderer: 'svg',
        loop: false,
        autoplay: false,
        animationData: currentPair.left,
        rendererSettings: {
          preserveAspectRatio: "xMinYMid slice",
        },
      });

      leftAnimRef.current.addEventListener('complete', handleComplete);

      if (shouldReverse) {
        leftAnimRef.current.setDirection(-1);
        leftAnimRef.current.goToAndPlay(currentPair.left.op ?? 0, true);
      } else {
        leftAnimRef.current.setDirection(1);
        leftAnimRef.current.play();
      }
    }

    // Load and play right animation
    if (currentPair.right && rightContainerRef.current) {
      rightAnimRef.current = lottie.loadAnimation({
        container: rightContainerRef.current,
        renderer: 'svg',
        loop: false,
        autoplay: false,
        animationData: currentPair.right,
        rendererSettings: {
          preserveAspectRatio: "xMaxYMid slice",
        },
      });

      if (shouldReverse) {
        rightAnimRef.current.setDirection(-1);
        rightAnimRef.current.goToAndPlay(currentPair.right.op ?? 0, true);
      } else {
        rightAnimRef.current.setDirection(1);
        rightAnimRef.current.play();
      }
    }

    // Cleanup on unmount or before next effect run
    return () => {
      leftAnimRef.current?.destroy();
      rightAnimRef.current?.destroy();
    };
  }, [animationPairs, currentIndex, isScrollUp, stage]);

  const startTransition = (newStage: Stage) => {
    if (newStage > prevStage) {
      const prevStageIndex = stageForwardIndices[prevStage];
      const targetStageIndex = stageForwardIndices[newStage];
      const transitionPairs: AnimationPair[] = [];
      for (let i = prevStageIndex + 1; i <= targetStageIndex; i++) {
        // for each index between current and target, play the corresponding animation in order. wait until the prev animmation completes before moving to the next one..
        const [leftData, rightData] = animationForwardData.current[i];
        transitionPairs.push({ left: leftData, right: rightData });
      }
      // console.log({transitionPairs});
      setAnimationPairs(transitionPairs);
      setCurrentIndex(0);
      setIsScrollUp(false);
      setPrevStage(newStage);
    } else if (newStage < prevStage) {
      const prevStageIndex = stageBackwardIndices[prevStage];
      const targetStageIndex = stageBackwardIndices[newStage];
      const transitionPairs: AnimationPair[] = [];
      if (newStage == Stage.Act3 && prevStage == Stage.Act4) { // act4(forward) and act3(backward) shares the same animation data
        const [leftData, rightData] = animationBackwardData.current[targetStageIndex];
        transitionPairs.push({ left: leftData, right: rightData });
      } else {
        for (let i = prevStageIndex - 1; i >= targetStageIndex; i--) {
          const [leftData, rightData] = animationBackwardData.current[i];
          transitionPairs.push({ left: leftData, right: rightData });
        }
      }
      
      console.log({ transitionPairs });
      setAnimationPairs(transitionPairs);
      setCurrentIndex(0);
      setIsScrollUp(true);
      setPrevStage(newStage);
    }
  };

  const handleComplete = () => {
    setCurrentIndex((prev) => {
      if (prev < animationPairs.length - 1) {
        return prev + 1;
      }
      return prev;
    });
  };

  return (
    <div className="assetAnimation">
      <div className="assetAnimation-left" ref={leftContainerRef} />
      <div className="assetAnimation-right" ref={rightContainerRef} />
    </div>
  );
}

export default AssetAnimation;
