"use client";
import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import '../Landing/LandingAnimation.css';
import './act2Animation.css';




interface CellConfig {
    size: "xs2xl" | "xs2l" | "s2m" | "m2s" | "l2xs" | "xl2xs";
    variant: "v0" | "v1" | "v2" | "v3" | "v4" | "v5" | "v6";
    position: "c1" | "c2" | "c3" | "c4" | "c5" | "c6";
}
/*
classes:
xs2xl
xs2l
s2m
m2s
l2xs
xl2xs
*/ 
interface RowConfig {
    rowClass: string;
    size: "xs2xl" | "xs2l" | "s2m" | "m2s" | "l2xs" | "xl2xs";
    cells: CellConfig[];
}

const rows: RowConfig[] = [
    {
        rowClass: "row24px", size:"xs2xl", cells: [
            { size: "xs2xl", variant: "v0", position: "c1"}, { size: "xs2l", variant: "v0", position: "c2" }, { size: "s2m", variant: "v0", position:"c3" },
            { size: "m2s", variant: "v0", position: "c4" }, { size: "l2xs", variant: "v0", position: "c5" }, { size: "xl2xs", variant: "v0", position:"c6" },
            { size: "xl2xs", variant: "v0", position: "c6" }, { size: "l2xs", variant: "v0", position: "c5" }, { size: "m2s", variant: "v0", position:"c4" },
            { size: "s2m", variant: "v0", position: "c3"}, { size: "xs2l", variant: "v0" , position: "c2" }, { size: "xs2xl", variant: "v0", position:"c1" },
        ]
    },
    {
        rowClass: "row24px", size:"xs2l", cells: [
            { size: "xs2xl", variant: "v0", position: "c1"}, { size: "xs2l", variant: "v0", position: "c2" }, { size: "s2m", variant: "v0", position:"c3" },
            { size: "m2s", variant: "v0", position: "c4" }, { size: "l2xs", variant: "v0", position: "c5" }, { size: "xl2xs", variant: "v0", position:"c6" },
            { size: "xl2xs", variant: "v0", position: "c6" }, { size: "l2xs", variant: "v0", position: "c5" }, { size: "m2s", variant: "v0", position:"c4" },
            { size: "s2m", variant: "v0", position: "c3"}, { size: "xs2l", variant: "v0" , position: "c2" }, { size: "xs2xl", variant: "v0", position:"c1" },
        ]
    },
    {
        rowClass: "row-eighth",size:"s2m", cells: [
            { size: "xs2xl", variant: "v0", position: "c1"}, { size: "xs2l", variant: "v0", position: "c2" }, { size: "s2m", variant: "v0", position:"c3" },
            { size: "m2s", variant: "v0", position: "c4" }, { size: "l2xs", variant: "v0", position: "c5" }, { size: "xl2xs", variant: "v0", position:"c6" },
            { size: "xl2xs", variant: "v0", position: "c6" }, { size: "l2xs", variant: "v0", position: "c5" }, { size: "m2s", variant: "v0", position:"c4" },
            { size: "s2m", variant: "v0", position: "c3"}, { size: "xs2l", variant: "v0" , position: "c2" }, { size: "xs2xl", variant: "v0", position:"c1" },
        ]
    },
    {
        rowClass: "row-quarter", size:"m2s", cells: [
            { size: "xs2xl", variant: "v0", position: "c1"}, { size: "xs2l", variant: "v0", position: "c2" }, { size: "s2m", variant: "v0", position:"c3" },
            { size: "m2s", variant: "v0", position: "c4" }, { size: "l2xs", variant: "v0", position: "c5" }, { size: "xl2xs", variant: "v0", position:"c6" },
            { size: "xl2xs", variant: "v0", position: "c6" }, { size: "l2xs", variant: "v0", position: "c5" }, { size: "m2s", variant: "v0", position:"c4" },
            { size: "s2m", variant: "v0", position: "c3"}, { size: "xs2l", variant: "v0" , position: "c2" }, { size: "xs2xl", variant: "v0", position:"c1" },
        ]
    },
    {
        rowClass: "row-half", size:"l2xs", cells: [
            { size: "xs2xl", variant: "v0", position: "c1"}, { size: "xs2l", variant: "v0", position: "c2" }, { size: "s2m", variant: "v0", position:"c3" },
            { size: "m2s", variant: "v0", position: "c4" }, { size: "l2xs", variant: "v0", position: "c5" }, { size: "xl2xs", variant: "v0", position:"c6" },
            { size: "xl2xs", variant: "v0", position: "c6" }, { size: "l2xs", variant: "v0", position: "c5" }, { size: "m2s", variant: "v0", position:"c4" },
            { size: "s2m", variant: "v0", position: "c3"}, { size: "xs2l", variant: "v0" , position: "c2" }, { size: "xs2xl", variant: "v0", position:"c1" },
        ]
    },
    {
        rowClass: "row-full", size:"xl2xs", cells: [
            { size: "xs2xl", variant: "v0", position: "c1"}, { size: "xs2l", variant: "v0", position: "c2" }, { size: "s2m", variant: "v0", position:"c3" },
            { size: "m2s", variant: "v0", position: "c4" }, { size: "l2xs", variant: "v0", position: "c5" }, { size: "xl2xs", variant: "v0", position:"c6" },
            { size: "xl2xs", variant: "v0", position: "c6" }, { size: "l2xs", variant: "v0", position: "c5" }, { size: "m2s", variant: "v0", position:"c4" },
            { size: "s2m", variant: "v0", position: "c3"}, { size: "xs2l", variant: "v0" , position: "c2" }, { size: "xs2xl", variant: "v0", position:"c1" },
        ]
    },
    {
        rowClass: "row-full", size:"xl2xs", cells: [
            { size: "xs2xl", variant: "v0", position: "c1"}, { size: "xs2l", variant: "v0", position: "c2" }, { size: "s2m", variant: "v0", position:"c3" },
            { size: "m2s", variant: "v0", position: "c4" }, { size: "l2xs", variant: "v0", position: "c5" }, { size: "xl2xs", variant: "v0", position:"c6" },
            { size: "xl2xs", variant: "v0", position: "c6" }, { size: "l2xs", variant: "v0", position: "c5" }, { size: "m2s", variant: "v0", position:"c4" },
            { size: "s2m", variant: "v0", position: "c3"}, { size: "xs2l", variant: "v0" , position: "c2" }, { size: "xs2xl", variant: "v0", position:"c1" },
        ]
    },
    {
        rowClass: "row-half", size:"l2xs", cells: [
            { size: "xs2xl", variant: "v0", position: "c1"}, { size: "xs2l", variant: "v0", position: "c2" }, { size: "s2m", variant: "v0", position:"c3" },
            { size: "m2s", variant: "v0", position: "c4" }, { size: "l2xs", variant: "v0", position: "c5" }, { size: "xl2xs", variant: "v0", position:"c6" },
            { size: "xl2xs", variant: "v0", position: "c6" }, { size: "l2xs", variant: "v0", position: "c5" }, { size: "m2s", variant: "v0", position:"c4" },
            { size: "s2m", variant: "v0", position: "c3"}, { size: "xs2l", variant: "v0" , position: "c2" }, { size: "xs2xl", variant: "v0", position:"c1" },
        ]
    },
    {
        rowClass: "row-quarter", size:"m2s", cells: [
            { size: "xs2xl", variant: "v0", position: "c1"}, { size: "xs2l", variant: "v0", position: "c2" }, { size: "s2m", variant: "v0", position:"c3" },
            { size: "m2s", variant: "v0", position: "c4" }, { size: "l2xs", variant: "v0", position: "c5" }, { size: "xl2xs", variant: "v0", position:"c6" },
            { size: "xl2xs", variant: "v0", position: "c6" }, { size: "l2xs", variant: "v0", position: "c5" }, { size: "m2s", variant: "v0", position:"c4" },
            { size: "s2m", variant: "v0", position: "c3"}, { size: "xs2l", variant: "v0" , position: "c2" }, { size: "xs2xl", variant: "v0", position:"c1" },
        ]
    },
    {
        rowClass: "row-eighth", size:"s2m", cells: [
            { size: "xs2xl", variant: "v0", position: "c1"}, { size: "xs2l", variant: "v0", position: "c2" }, { size: "s2m", variant: "v0", position:"c3" },
            { size: "m2s", variant: "v0", position: "c4" }, { size: "l2xs", variant: "v0", position: "c5" }, { size: "xl2xs", variant: "v0", position:"c6" },
            { size: "xl2xs", variant: "v0", position: "c6" }, { size: "l2xs", variant: "v0", position: "c5" }, { size: "m2s", variant: "v0", position:"c4" },
            { size: "s2m", variant: "v0", position: "c3"}, { size: "xs2l", variant: "v0" , position: "c2" }, { size: "xs2xl", variant: "v0", position:"c1" },
        ]
    },
    {
        rowClass: "row24px", size:"xs2l", cells: [
            { size: "xs2xl", variant: "v0", position: "c1"}, { size: "xs2l", variant: "v0", position: "c2" }, { size: "s2m", variant: "v0", position:"c3" },
            { size: "m2s", variant: "v0", position: "c4" }, { size: "l2xs", variant: "v0", position: "c5" }, { size: "xl2xs", variant: "v0", position:"c6" },
            { size: "xl2xs", variant: "v0", position: "c6" }, { size: "l2xs", variant: "v0", position: "c5" }, { size: "m2s", variant: "v0", position:"c4" },
            { size: "s2m", variant: "v0", position: "c3"}, { size: "xs2l", variant: "v0" , position: "c2" }, { size: "xs2xl", variant: "v0", position:"c1" },
        ]
    },
    {
        rowClass: "row24px", size:"xs2xl", cells: [
            { size: "xs2xl", variant: "v0", position: "c1"}, { size: "xs2l", variant: "v0", position: "c2" }, { size: "s2m", variant: "v0", position:"c3" },
            { size: "m2s", variant: "v0", position: "c4" }, { size: "l2xs", variant: "v0", position: "c5" }, { size: "xl2xs", variant: "v0", position:"c6" },
            { size: "xl2xs", variant: "v0", position: "c6" }, { size: "l2xs", variant: "v0", position: "c5" }, { size: "m2s", variant: "v0", position:"c4" },
            { size: "s2m", variant: "v0", position: "c3"}, { size: "xs2l", variant: "v0" , position: "c2" }, { size: "xs2xl", variant: "v0", position:"c1" },
        ]
    },
];

const sizeClassMap = {
    xs2xl:"xs2xl",
    xs2l:"xs2l",
    s2m:"s2m",
    m2s:"m2s",
    l2xs:"l2xs",
    xl2xs:"xl2xs",
};


const sizeWidthMap = {
    xs2xl:"1.5%",
    xs2l:"1.5%",
    s2m:"6.25%",
    m2s:"12.5%",
    l2xs:"25%",
    xl2xs:"50%",
};

const nextSizeWidthMap = {
    xs2xl:"50%",
    xs2l:"25%",
    s2m:"12.5%",
    m2s:"6.25%",
    l2xs:"1.5%",
    xl2xs:"1.5%",
};

const sizeHeightMap = {
    xs2xl:"3%",
    xs2l:"3%",
    s2m:"6.25%",
    m2s:"12.5%",
    l2xs:"25%",
    xl2xs:"50%",
};

const nextSizeHeightMap = {
    xs2xl:"50%",
    xs2l:"25%",
    s2m:"12.5%",
    m2s:"6.25%",
    l2xs:"3%",
    xl2xs:"3%",
};


export default function Act2GradientAnimation() {
    const { scrollYProgress } = useScroll();
    const gridRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!gridRef.current) return;
        const cells = gridRef.current.querySelectorAll('[class*="a2-gradient-"]');
        const maxDelay = 2;
        cells.forEach((cell) => {
            const randomDelay = Math.random() * maxDelay;
            (cell as HTMLElement).style.animationDelay = `${randomDelay}s`;
        });
    }, []);

    /*
    useEffect(() => {
        console.log('Setting up hover effects');
        if (!gridRef.current) return;
        console.log('gridRef current:', gridRef.current);
        // Gradual animation speed change on hover for v1 elements
        const gridElements = gridRef.current.querySelectorAll('[class*="gradient-animation-v"]');

        const cleanupFns: (() => void)[] = [];
        const pageLoadTime = performance.now();

        gridElements.forEach((element) => {
            const defaultDuration = 30;
            (element as HTMLElement).style.animationDuration = defaultDuration + 's';
            const hoverDuration = 14;
            const baseTransitionTime = 5000; // takes 5 seconds to transition

            // Dynamic transition time that scales with page open time
            // We need this because how CSS calculates animation position causes transition speed to accelerate as time passed.
            const getTransitionTime = () => {
                const elapsedSeconds = (performance.now() - pageLoadTime) / 1000;
                // Scale factor: starts at 1x, increases over time
                // Every 60 seconds, add 1 second to transition time
                const scaleFactor = 1 + (elapsedSeconds / 60);
                return baseTransitionTime * scaleFactor;
            };

            let currentDuration = defaultDuration;
            let targetDuration = defaultDuration;
            let animationFrameId: number | null = null;
            let startTime: number | null = null;
            let startDuration: number | null = null;
            let activeTransitionTime: number = baseTransitionTime;

            function animateDuration(timestamp: number) {
                if (startTime === null) {
                    startTime = timestamp;
                    startDuration = currentDuration;
                    activeTransitionTime = getTransitionTime();
                }

                const elapsed = timestamp - startTime;
                const progress = Math.min(elapsed / activeTransitionTime, 1);

                // Ease out cubic for smooth deceleration
                const easeProgress = 1 - Math.pow(1 - progress, 3);
                currentDuration = startDuration! + (targetDuration - startDuration!) * easeProgress;
                (element as HTMLElement).style.animationDuration = currentDuration + 's';

                if (progress < 1) {
                    animationFrameId = requestAnimationFrame(animateDuration);
                } else {
   
                    animationFrameId = null;
                    startTime = null;
                    startDuration = null;
                }
            }

            const handleMouseEnter = () => {
                console.log('Mouse entered animationFrameId:', animationFrameId);
                targetDuration = hoverDuration;
                if (animationFrameId) {
                    cancelAnimationFrame(animationFrameId);
                }
                startTime = null;
                startDuration = null;
                animationFrameId = requestAnimationFrame(animateDuration);
            };

            const handleMouseLeave = () => {
                console.log('Mouse left animationFrameId:', animationFrameId);
                targetDuration = defaultDuration;
                if (animationFrameId) {
                    cancelAnimationFrame(animationFrameId);
                }
                startTime = null;
                startDuration = null;
                animationFrameId = requestAnimationFrame(animateDuration);
            };

            element.addEventListener('mouseenter', handleMouseEnter);
            element.addEventListener('mouseleave', handleMouseLeave);

            cleanupFns.push(() => {
                element.removeEventListener('mouseenter', handleMouseEnter);
                element.removeEventListener('mouseleave', handleMouseLeave);
                if (animationFrameId) {
                    cancelAnimationFrame(animationFrameId);
                }
            });
        });

        return () => {
            cleanupFns.forEach(fn => fn());
        };
    }, []);

    */

    return (
        <div className="gradient-grid" ref={gridRef}>
            {rows.map((row, rowIdx) => (
                <motion.div 
                    className={`${row.rowClass} rowGrid`} 
                    style={{ height: useTransform(scrollYProgress, [0,1], [sizeHeightMap[row.size], nextSizeHeightMap[row.size]])}}   
                    key={rowIdx}
                >
                    {row.cells.map((cell, cellIdx) => (                        
                        <motion.div
                            key={cellIdx}
                            className={`${sizeClassMap[cell.size]} landingCell a2-gradient-${cell.variant} ${cell.position}`}
                            style={{ width: useTransform(scrollYProgress, [0,1], [sizeWidthMap[cell.size], nextSizeWidthMap[cell.size]])}}   
                        > {/*  The color of the gradient needs to fade out as the scroll happens too  */}
                        </motion.div>
                    ))}
                </motion.div>
            ))}
        </div>
    );

}