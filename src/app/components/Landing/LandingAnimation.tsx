"use client";
import './LandingAnimation.css';
import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";




interface CellConfig {
    size: "smallsmall" | "smallquarter" | "smallhalf" | "halfeighth" | "fullfull";
    variant: "v1" | "v2" | "v3" | "v4";
    position: "c1" | "c2" | "c3" | "c4" | "c5" | "c6";
}

interface RowConfig {
    rowClass: string;
    cells: CellConfig[];
}

const rows: RowConfig[] = [
    {
        rowClass: "row24px", cells: [
            { size: "smallsmall", variant: "v1", position:"c1"}, { size: "smallsmall", variant: "v1", position:"c2" }, { size: "halfeighth", variant: "v1", position:"c3" },
            { size: "smallquarter", variant: "v1", position:"c4" }, { size: "smallhalf", variant: "v1", position:"c5" }, { size: "fullfull", variant: "v2", position:"c6" },
            { size: "fullfull", variant: "v1", position:"c6" }, { size: "smallhalf", variant: "v1", position:"c5" }, { size: "smallquarter", variant: "v1", position:"c4" },
            { size: "halfeighth", variant: "v1", position:"c3"}, { size: "smallsmall", variant: "v1" , position:"c2" }, { size: "smallsmall", variant: "v1", position:"c1" },
        ]
    },
    {
        rowClass: "row24px", cells: [
            { size: "smallsmall", variant: "v1", position:"c1"}, { size: "smallsmall", variant: "v1", position:"c2" }, { size: "halfeighth", variant: "v1", position:"c3" },
            { size: "smallquarter", variant: "v1", position:"c4" }, { size: "smallhalf", variant: "v1", position:"c5" }, { size: "fullfull", variant: "v1", position:"c6" },
            { size: "fullfull", variant: "v1", position:"c6" }, { size: "smallhalf", variant: "v1", position:"c5" }, { size: "smallquarter", variant: "v1", position:"c4" },
            { size: "halfeighth", variant: "v1", position:"c3"}, { size: "smallsmall", variant: "v1" , position:"c2" }, { size: "smallsmall", variant: "v1", position:"c1" },
        ]
    },
    {
        rowClass: "row-eighth", cells: [
            { size: "smallsmall", variant: "v1", position:"c1"}, { size: "smallsmall", variant: "v1", position:"c2" }, { size: "halfeighth", variant: "v1", position:"c3" },
            { size: "smallquarter", variant: "v2", position:"c4" }, { size: "smallhalf", variant: "v1", position:"c5" }, { size: "fullfull", variant: "v2", position:"c6" },
            { size: "fullfull", variant: "v1", position:"c6" }, { size: "smallhalf", variant: "v2", position:"c5" }, { size: "smallquarter", variant: "v1", position:"c4" },
            { size: "halfeighth", variant: "v1", position:"c3"}, { size: "smallsmall", variant: "v1" , position:"c2" }, { size: "smallsmall", variant: "v1", position:"c1" },
        ]
    },
    {
        rowClass: "row-quarter", cells: [
            { size: "smallsmall", variant: "v1", position:"c1"}, { size: "smallsmall", variant: "v1", position:"c2" }, { size: "halfeighth", variant: "v2", position:"c3" },
            { size: "smallquarter", variant: "v1", position:"c4" }, { size: "smallhalf", variant: "v3", position:"c5" }, { size: "fullfull", variant: "v1", position:"c6" },
            { size: "fullfull", variant: "v2", position:"c6" }, { size: "smallhalf", variant: "v1", position:"c5" }, { size: "smallquarter", variant: "v2", position:"c4" },
            { size: "halfeighth", variant: "v2", position:"c3"}, { size: "smallsmall", variant: "v2" , position:"c2" }, { size: "smallsmall", variant: "v3", position:"c1" },
        ]
    },
    {
        rowClass: "row-half", cells: [
            { size: "smallsmall", variant: "v1", position:"c1"}, { size: "smallsmall", variant: "v2", position:"c2" }, { size: "halfeighth", variant: "v1", position:"c3" },
            { size: "smallquarter", variant: "v2", position:"c4" }, { size: "smallhalf", variant: "v1", position:"c5" }, { size: "fullfull", variant: "v3", position:"c6" },
            { size: "fullfull", variant: "v2", position:"c6" }, { size: "smallhalf", variant: "v1", position:"c5" }, { size: "smallquarter", variant: "v2", position:"c4" },
            { size: "halfeighth", variant: "v3", position:"c3"}, { size: "smallsmall", variant: "v3" , position:"c2" }, { size: "smallsmall", variant: "v1", position:"c1" },
        ]
    },
    {
        rowClass: "row-full", cells: [
            { size: "smallsmall", variant: "v1", position:"c1"}, { size: "smallsmall", variant: "v2", position:"c2" }, { size: "halfeighth", variant: "v1", position:"c3" },
            { size: "smallquarter", variant: "v2", position:"c4" }, { size: "smallhalf", variant: "v1", position:"c5" }, { size: "fullfull", variant: "v3", position:"c6" },
            { size: "fullfull", variant: "v2", position:"c6" }, { size: "smallhalf", variant: "v1", position:"c5" }, { size: "smallquarter", variant: "v3", position:"c4" },
            { size: "halfeighth", variant: "v3", position:"c3"}, { size: "smallsmall", variant: "v3" , position:"c2" }, { size: "smallsmall", variant: "v4", position:"c1" },
        ]
    },
    {
        rowClass: "row-half", cells: [
            { size: "smallsmall", variant: "v2", position:"c1"}, { size: "smallsmall", variant: "v1", position:"c2" }, { size: "halfeighth", variant: "v2", position:"c3" },
            { size: "smallquarter", variant: "v2", position:"c4" }, { size: "smallhalf", variant: "v1", position:"c5" }, { size: "fullfull", variant: "v2", position:"c6" },
            { size: "fullfull", variant: "v3", position:"c6" }, { size: "smallhalf", variant: "v4", position:"c5" }, { size: "smallquarter", variant: "v1", position:"c4" },
            { size: "halfeighth", variant: "v3", position:"c3"}, { size: "smallsmall", variant: "v4" , position:"c2" }, { size: "smallsmall", variant: "v4", position:"c1" },
        ]
    },
    {
        rowClass: "row-quarter", cells: [
            { size: "smallsmall", variant: "v1", position:"c1"}, { size: "smallsmall", variant: "v1", position:"c2" }, { size: "halfeighth", variant: "v2", position:"c3" },
            { size: "smallquarter", variant: "v1", position:"c4" }, { size: "smallhalf", variant: "v1", position:"c5" }, { size: "fullfull", variant: "v2", position:"c6" },
            { size: "fullfull", variant: "v3", position:"c6" }, { size: "smallhalf", variant: "v4", position:"c5" }, { size: "smallquarter", variant: "v4", position:"c4" },
            { size: "halfeighth", variant: "v1", position:"c3"}, { size: "smallsmall", variant: "v4" , position:"c2" }, { size: "smallsmall", variant: "v4", position:"c1" },
        ]
    },
    {
        rowClass: "row-eighth", cells: [
            { size: "smallsmall", variant: "v1", position:"c1"}, { size: "smallsmall", variant: "v2", position:"c2" }, { size: "halfeighth", variant: "v1", position:"c3" },
            { size: "smallquarter", variant: "v1", position:"c4" }, { size: "smallhalf", variant: "v1", position:"c5" }, { size: "fullfull", variant: "v3", position:"c6" },
            { size: "fullfull", variant: "v4", position:"c6" }, { size: "smallhalf", variant: "v1", position:"c5" }, { size: "smallquarter", variant: "v4", position:"c4" },
            { size: "halfeighth", variant: "v4", position:"c3"}, { size: "smallsmall", variant: "v4" , position:"c2" }, { size: "smallsmall", variant: "v1", position:"c1" },
        ]
    },
    {
        rowClass: "row24px", cells: [
            { size: "smallsmall", variant: "v1", position:"c1"}, { size: "smallsmall", variant: "v1", position:"c2" }, { size: "halfeighth", variant: "v1", position:"c3" },
            { size: "smallquarter", variant: "v4", position:"c4" }, { size: "smallhalf", variant: "v2", position:"c5" }, { size: "fullfull", variant: "v3", position:"c6" },
            { size: "fullfull", variant: "v4", position:"c6" }, { size: "smallhalf", variant: "v4", position:"c5" }, { size: "smallquarter", variant: "v3", position:"c4" },
            { size: "halfeighth", variant: "v2", position:"c3"}, { size: "smallsmall", variant: "v1" , position:"c2" }, { size: "smallsmall", variant: "v1", position:"c1" },
        ]
    },
    {
        rowClass: "row24px", cells: [
            { size: "smallsmall", variant: "v1", position:"c1"}, { size: "smallsmall", variant: "v1", position:"c2" }, { size: "halfeighth", variant: "v1", position:"c3" },
            { size: "smallquarter", variant: "v1", position:"c4" }, { size: "smallhalf", variant: "v1", position:"c5" }, { size: "fullfull", variant: "v4", position:"c6" },
            { size: "fullfull", variant: "v3", position:"c6" }, { size: "smallhalf", variant: "v1", position:"c5" }, { size: "smallquarter", variant: "v4", position:"c4" },
            { size: "halfeighth", variant: "v3", position:"c3"}, { size: "smallsmall", variant: "v3" , position:"c2" }, { size: "smallsmall", variant: "v2", position:"c1" },
        ]
    },
];

const sizeClassMap = {
    smallhalf: "small-half",
    smallquarter: "small-quarter",
    smallsmall: "small-small",
    halfeighth: "half-eighth",
    fullfull: "full-full",
};


const sizeWidthMap = {
    smallhalf: "1.5%",
    smallquarter: "1.5%",
    smallsmall: "1.5%",
    halfeighth: "25%",
    fullfull: "50%",
};

const nextSizeWidthMap = {
    smallhalf: "25%",
    smallquarter: "12.5%",
    smallsmall: "1.5%",
    halfeighth: "6.25%",
    fullfull: "50%",
};


export default function LandingAnimation() {
    const { scrollYProgress } = useScroll();
    
    const gridRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!gridRef.current) return;
        const cells = gridRef.current.querySelectorAll(".gradient-vertical");
        const maxDelay = 2;
        cells.forEach((cell) => {
            const randomDelay = Math.random() * maxDelay;
            (cell as HTMLElement).style.animationDelay = `${randomDelay}s`;
        });
    }, []);

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



    return (
        <div className="gradient-grid" ref={gridRef}>
            {rows.map((row, rowIdx) => (
                <div className={row.rowClass} key={rowIdx}>
                    {row.cells.map((cell, cellIdx) => (                        
                        <motion.div
                            key={cellIdx}
                            className={`${sizeClassMap[cell.size]} landingCell gradient-vertical gradient-animation-${cell.variant} ${cell.position}`}
                            style={{ width: useTransform(scrollYProgress, [0,1], [sizeWidthMap[cell.size], nextSizeWidthMap[cell.size]])}}   
                        > {/*  The color of the gradient needs to fade out as the scroll happens too  */}
                        </motion.div>
                    ))}
                </div>
            ))}
        </div>
    );

}