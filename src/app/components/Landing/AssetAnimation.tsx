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
  ["/shapes/a3toa4_L.json", "/shapes/a3toa4_R.json"], // 6, transition to act 4
];

// Animation file indices when scrolling backward (up)
const stageBackwardIndices: Record<Stage, number> = {
  [Stage.Landing]: 0,
  [Stage.Act1]: 1,
  [Stage.Act2]: 2,
  [Stage.Act3]: 3,
  [Stage.Act4]: 3
};

// missing: a1toa2R, landing end
const animationBackwardFiles = [
  ["/shapes/landing_end_L.json", "/shapes/landing_end_R.json"], // 0, landing
  ["/shapes/a1toa2_L.json", "/shapes/a1toa2_R.json"], // 1, transition to act2 & act 2
  ["/shapes/a2_end_L.json", "/shapes/a2_end_R.json"], // 2, 2 end
  ["/shapes/a3toa4_L.json", "/shapes/a3toa4_R.json"], // 3, transition to act 4
];

// When jumping directly to an act (e.g. from /people → Act II via sidebar), the
// normal forward-index animation's last frame often has shapes that are invisible
// or the wrong colour because of how the opacity layers are structured:
//   a1toa2 last frame  → light-blue top layer animated out, dark-brown bottom visible
//   a3_start last frame → black shapes fully cover white shapes on black bg
//   a3toa4 last frame   → same issue
//
// This config selects a different animation file + frame for each act's "resting
// state" that shows the shapes with correct colours/visibility.
// frame: -1 means "last valid frame" (op − 1), any other number is a literal frame.
const stageRestingConfig: Record<Stage, { index: number; frame: number }> = {
  [Stage.Landing]: { index: 0, frame: -1 },
  [Stage.Act1]:    { index: 2, frame: -1 },    // a1_start: both layers at opacity 100 by frame 90
  [Stage.Act2]:    { index: 4, frame: 1 },     // a2_end: pink shapes at full opacity
  [Stage.Act3]:    { index: 5, frame: -1 },    // a3_start: last frame — black filled shapes + white outlines fully visible on gradient bg
  [Stage.Act4]:    { index: 6, frame: -1 },    // a3toa4_final: last frame — shapes in Act 4 final resting position
};

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
  const prevStageRef = useRef<Stage>(stage); // track previous stage for comparison (ref to avoid stale state during rapid transitions)
  const stageRef = useRef<Stage>(stage); // always-current stage value for use in async callbacks
  const [isScrollUp, setIsScrollUp] = useState(false); // whether the user is scrolling up
  const [isLoaded, setIsLoaded] = useState(false);
  const isJumpRef = useRef(false); // true when jumping multiple stages (skip animation, show final frame)

  // When navigating from another page, this ref stores the exact frame number
  // to show.  null means "not an initial jump — use normal jump logic".
  // This is set once during load and consumed (set back to null) after the
  // first playback effect renders it.
  const initialJumpFrameRef = useRef<number | null>(null);

  // use useRef for these constants; if defined outside component, will be populated again and results in duplicates
  // refs are good for storing information that doesn't affect the visual output of your component
  const animationForwardData = useRef<[LottieAnimationData | null, LottieAnimationData | null][]>([]);
  const animationBackwardData = useRef<[LottieAnimationData | null, LottieAnimationData | null][]>([]);

  // Refs for lottie-web containers and instances
  const leftContainerRef = useRef<HTMLDivElement>(null);
  const rightContainerRef = useRef<HTMLDivElement>(null);
  const leftAnimRef = useRef<AnimationItem | null>(null);
  const rightAnimRef = useRef<AnimationItem | null>(null);

  // Keep stageRef in sync with the latest stage value
  useEffect(() => {
    stageRef.current = stage;
  }, [stage]);

  // Fetch all animation data on mount
  // Uses cancelled flag to handle React 18 StrictMode double-invocation
  useEffect(() => {
    let cancelled = false;

    const loadAnimations = async () => {
      const forwardData: [LottieAnimationData | null, LottieAnimationData | null][] = [];
      const backwardData: [LottieAnimationData | null, LottieAnimationData | null][] = [];

      for (const [leftFile, rightFile] of animationForwardFiles) {
        const [leftData, rightData] = await Promise.all([
          leftFile ? fetch(leftFile).then((raw) => raw.json()) : null,
          rightFile ? fetch(rightFile).then((raw) => raw.json()) : null
        ]);
        if (cancelled) return;
        forwardData.push([leftData, rightData]);
      }

      for (const [leftFile, rightFile] of animationBackwardFiles) {
        const [leftData, rightData] = await Promise.all([
          leftFile ? fetch(leftFile).then((raw) => raw.json()) : null,
          rightFile ? fetch(rightFile).then((raw) => raw.json()) : null
        ]);
        if (cancelled) return;
        backwardData.push([leftData, rightData]);
      }

      if (cancelled) return;

      // Assign complete arrays to refs (replaces any stale data)
      animationForwardData.current = forwardData;
      animationBackwardData.current = backwardData;

      // Set initial animation using the CURRENT stage (ref), not the stale closure value
      const currentStage = stageRef.current;

      if (currentStage !== Stage.Landing) {
        // Jumping to a non-landing stage from another page.
        // Use the resting-state config so shapes appear with the right colours.
        const cfg = stageRestingConfig[currentStage];
        const pair = forwardData[cfg.index];
        const targetFrame = cfg.frame === -1
          ? Math.max(0, (pair[0]?.op ?? 1) - 1)
          : cfg.frame;

        isJumpRef.current = true;
        initialJumpFrameRef.current = targetFrame;
        prevStageRef.current = currentStage;
        setAnimationPairs([{ left: pair[0], right: pair[1] }]);
      } else {
        const stageIndex = stageForwardIndices[currentStage];
        const [leftData, rightData] = forwardData[stageIndex];
        prevStageRef.current = currentStage;
        setAnimationPairs([{ left: leftData, right: rightData }]);
      }

      setCurrentIndex(0);
      setIsLoaded(true);
    };
    loadAnimations();

    return () => { cancelled = true; };
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

    const isJump = isJumpRef.current;
    const initialFrame = initialJumpFrameRef.current; // snapshot before clearing

    // Deep-clone animation data before passing to Lottie, because lottie-web
    // mutates animationData in-place. Without cloning, reusing the same object
    // on subsequent loads produces corrupted or blank animations.
    const leftOp = currentPair.left?.op ?? 0;
    const rightOp = currentPair.right?.op ?? 0;

    // Load and play left animation
    if (currentPair.left && leftContainerRef.current) {
      leftAnimRef.current = lottie.loadAnimation({
        container: leftContainerRef.current,
        renderer: 'svg',
        loop: false,
        autoplay: false,
        animationData: JSON.parse(JSON.stringify(currentPair.left)),
        rendererSettings: {
          preserveAspectRatio: "xMinYMid slice",
        },
      });

      leftAnimRef.current.addEventListener('complete', handleComplete);

      if (isJump) {
        // For initial-load jumps, use the pre-computed frame from initialJumpFrameRef.
        // For scroll-based multi-stage jumps, use the original logic.
        const targetFrame = initialFrame !== null
          ? initialFrame
          : (shouldReverse ? 0 : Math.max(0, leftOp - 1));
        leftAnimRef.current.goToAndStop(targetFrame, true);
      } else if (shouldReverse) {
        leftAnimRef.current.setDirection(-1);
        leftAnimRef.current.goToAndPlay(Math.max(0, leftOp - 1), true);
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
        animationData: JSON.parse(JSON.stringify(currentPair.right)),
        rendererSettings: {
          preserveAspectRatio: "xMaxYMid slice",
        },
      });

      if (isJump) {
        const targetFrame = initialFrame !== null
          ? initialFrame
          : (shouldReverse ? 0 : Math.max(0, rightOp - 1));
        rightAnimRef.current.goToAndStop(targetFrame, true);
      } else if (shouldReverse) {
        rightAnimRef.current.setDirection(-1);
        rightAnimRef.current.goToAndPlay(Math.max(0, rightOp - 1), true);
      } else {
        rightAnimRef.current.setDirection(1);
        rightAnimRef.current.play();
      }
    }

    // Consume the initial jump frame so subsequent transitions use normal logic
    if (initialFrame !== null) {
      initialJumpFrameRef.current = null;
    }

    // Cleanup on unmount or before next effect run
    return () => {
      leftAnimRef.current?.destroy();
      rightAnimRef.current?.destroy();
    };
  }, [animationPairs, currentIndex, isScrollUp]);

  const startTransition = (newStage: Stage) => {
    const prevStage = prevStageRef.current;

    // Same stage — nothing to transition (initial load is handled by the load effect)
    if (newStage === prevStage) return;

    if (newStage > prevStage) {
      const prevStageIndex = stageForwardIndices[prevStage];
      const targetStageIndex = stageForwardIndices[newStage];
      const transitionPairs: AnimationPair[] = [];

      // If jumping more than 1 stage, skip intermediate animations and show the target's final frame
      if (newStage - prevStage > 1) {
        isJumpRef.current = true;
        const [leftData, rightData] = animationForwardData.current[targetStageIndex];
        transitionPairs.push({ left: leftData, right: rightData });
      } else {
        isJumpRef.current = false;
        // When going from Landing to Act1, skip landing_end (index 1) and play
        // a1_start (index 2) directly. Playing both sequentially causes a visible
        // "double clutch" — shapes exit, disappear, then re-enter.
        const startIndex = (prevStage === Stage.Landing && newStage === Stage.Act1)
          ? targetStageIndex
          : prevStageIndex + 1;
        for (let i = startIndex; i <= targetStageIndex; i++) {
          const [leftData, rightData] = animationForwardData.current[i];
          transitionPairs.push({ left: leftData, right: rightData });
        }
      }

      setAnimationPairs(transitionPairs);
      setCurrentIndex(0);
      setIsScrollUp(false);
      prevStageRef.current = newStage;
    } else if (newStage < prevStage) {
      const prevStageIndex = stageBackwardIndices[prevStage];
      const targetStageIndex = stageBackwardIndices[newStage];
      const transitionPairs: AnimationPair[] = [];

      if (newStage === Stage.Landing) {
        // Going backward to Landing: play landing_start forward so the draw-in
        // animation is visible (same as on fresh page load).
        isJumpRef.current = false;
        const cfg = stageRestingConfig[Stage.Landing];
        const [leftData, rightData] = animationForwardData.current[cfg.index];
        transitionPairs.push({ left: leftData, right: rightData });
      } else if (prevStage - newStage > 1) {
        // If jumping more than 1 stage, skip intermediate animations and show the target's first frame
        isJumpRef.current = true;
        const [leftData, rightData] = animationBackwardData.current[targetStageIndex];
        transitionPairs.push({ left: leftData, right: rightData });
      } else if (newStage == Stage.Act3 && prevStage == Stage.Act4) {
        isJumpRef.current = false;
        const [leftData, rightData] = animationBackwardData.current[targetStageIndex];
        transitionPairs.push({ left: leftData, right: rightData });
      } else {
        isJumpRef.current = false;
        for (let i = prevStageIndex - 1; i >= targetStageIndex; i--) {
          const [leftData, rightData] = animationBackwardData.current[i];
          transitionPairs.push({ left: leftData, right: rightData });
        }
      }

      setAnimationPairs(transitionPairs);
      setCurrentIndex(0);
      // When returning to Landing, play landing_start forward (draw-in), not reversed
      setIsScrollUp(newStage !== Stage.Landing);
      prevStageRef.current = newStage;
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
