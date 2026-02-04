"use client";
import '../Landing/LandingAnimation.css';
import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";




interface CellConfig {
    size: "smallsmall" | "smallquarter" | "smallhalf" | "halfeighth" | "fullfull";
    variant: "v1" | "v2" | "v3" | "v4";
}

interface RowConfig {
    rowClass: string;
    cells: CellConfig[];
}

const rows: RowConfig[] = [
    {
        rowClass: "row24px", cells: [
            { size: "smallsmall", variant: "v1" }, { size: "smallsmall", variant: "v1" }, { size: "halfeighth", variant: "v1" },
            { size: "smallquarter", variant: "v1" }, { size: "smallhalf", variant: "v2" }, { size: "fullfull", variant: "v2" },
            { size: "fullfull", variant: "v1" }, { size: "smallhalf", variant: "v1" }, { size: "smallquarter", variant: "v1" },
            { size: "halfeighth", variant: "v1" }, { size: "smallsmall", variant: "v1" }, { size: "smallsmall", variant: "v1" },
        ]
    },
    {
        rowClass: "row24px", cells: [
            { size: "smallsmall", variant: "v1" }, { size: "smallsmall", variant: "v1" }, { size: "halfeighth", variant: "v1" },
            { size: "smallquarter", variant: "v1" }, { size: "smallhalf", variant: "v1" }, { size: "fullfull", variant: "v1" },
            { size: "fullfull", variant: "v1" }, { size: "smallhalf", variant: "v1" }, { size: "smallquarter", variant: "v2" },
            { size: "halfeighth", variant: "v1" }, { size: "smallsmall", variant: "v1" }, { size: "smallsmall", variant: "v1" },
        ]
    },
    {
        rowClass: "row48px", cells: [
            { size: "smallsmall", variant: "v1" }, { size: "smallsmall", variant: "v1" }, { size: "halfeighth", variant: "v1" },
            { size: "smallquarter", variant: "v2" }, { size: "smallhalf", variant: "v4" }, { size: "fullfull", variant: "v2" },
            { size: "fullfull", variant: "v1" }, { size: "smallhalf", variant: "v1" }, { size: "smallquarter", variant: "v1" },
            { size: "halfeighth", variant: "v1" }, { size: "smallsmall", variant: "v1" }, { size: "smallsmall", variant: "v1" },
        ]
    },
    {
        rowClass: "row-eighth", cells: [
            { size: "smallsmall", variant: "v1" }, { size: "smallsmall", variant: "v1" }, { size: "halfeighth", variant: "v1" },
            { size: "smallquarter", variant: "v2" }, { size: "smallhalf", variant: "v4" }, { size: "fullfull", variant: "v2" },
            { size: "fullfull", variant: "v1" }, { size: "smallhalf", variant: "v1" }, { size: "smallquarter", variant: "v1" },
            { size: "halfeighth", variant: "v1" }, { size: "smallsmall", variant: "v1" }, { size: "smallsmall", variant: "v1" },
        ]
    },
    {
        rowClass: "row-quarter", cells: [
            { size: "smallsmall", variant: "v1" }, { size: "smallsmall", variant: "v1" }, { size: "halfeighth", variant: "v1" },
            { size: "smallquarter", variant: "v2" }, { size: "smallhalf", variant: "v4" }, { size: "fullfull", variant: "v2" },
            { size: "fullfull", variant: "v1" }, { size: "smallhalf", variant: "v1" }, { size: "smallquarter", variant: "v1" },
            { size: "halfeighth", variant: "v1" }, { size: "smallsmall", variant: "v1" }, { size: "smallsmall", variant: "v1" },
        ]
    },
    {
        rowClass: "row-half", cells: [
            { size: "smallsmall", variant: "v1" }, { size: "smallsmall", variant: "v1" }, { size: "halfeighth", variant: "v1" },
            { size: "smallquarter", variant: "v2" }, { size: "smallhalf", variant: "v4" }, { size: "fullfull", variant: "v2" },
            { size: "fullfull", variant: "v1" }, { size: "smallhalf", variant: "v1" }, { size: "smallquarter", variant: "v1" },
            { size: "halfeighth", variant: "v1" }, { size: "smallsmall", variant: "v1" }, { size: "smallsmall", variant: "v1" },
        ]
    },
    {
        rowClass: "row-full", cells: [
            { size: "smallsmall", variant: "v1" }, { size: "smallsmall", variant: "v1" }, { size: "halfeighth", variant: "v1" },
            { size: "smallquarter", variant: "v2" }, { size: "smallhalf", variant: "v4" }, { size: "fullfull", variant: "v4" },
            { size: "fullfull", variant: "v1" }, { size: "smallhalf", variant: "v1" }, { size: "smallquarter", variant: "v1" },
            { size: "halfeighth", variant: "v1" }, { size: "smallsmall", variant: "v1" }, { size: "smallsmall", variant: "v1" },
        ]
    },
    {
        rowClass: "row-half", cells: [
            { size: "smallsmall", variant: "v1" }, { size: "smallsmall", variant: "v1" }, { size: "halfeighth", variant: "v1" },
            { size: "smallquarter", variant: "v2" }, { size: "smallhalf", variant: "v4" }, { size: "fullfull", variant: "v2" },
            { size: "fullfull", variant: "v1" }, { size: "smallhalf", variant: "v1" }, { size: "smallquarter", variant: "v1" },
            { size: "halfeighth", variant: "v1" }, { size: "smallsmall", variant: "v1" }, { size: "smallsmall", variant: "v1" },
        ]
    },
    {
        rowClass: "row-quarter", cells: [
            { size: "smallsmall", variant: "v1" }, { size: "smallsmall", variant: "v1" }, { size: "halfeighth", variant: "v1" },
            { size: "smallquarter", variant: "v2" }, { size: "smallhalf", variant: "v4" }, { size: "fullfull", variant: "v2" },
            { size: "fullfull", variant: "v1" }, { size: "smallhalf", variant: "v1" }, { size: "smallquarter", variant: "v1" },
            { size: "halfeighth", variant: "v1" }, { size: "smallsmall", variant: "v1" }, { size: "smallsmall", variant: "v1" },
        ]
    },
    {
        rowClass: "row-eighth", cells: [
            { size: "smallsmall", variant: "v1" }, { size: "smallsmall", variant: "v1" }, { size: "halfeighth", variant: "v1" },
            { size: "smallquarter", variant: "v2" }, { size: "smallhalf", variant: "v4" }, { size: "fullfull", variant: "v2" },
            { size: "fullfull", variant: "v1" }, { size: "smallhalf", variant: "v1" }, { size: "smallquarter", variant: "v1" },
            { size: "halfeighth", variant: "v1" }, { size: "smallsmall", variant: "v1" }, { size: "smallsmall", variant: "v1" },
        ]
    },
    {
        rowClass: "row48px", cells: [
            { size: "smallsmall", variant: "v1" }, { size: "smallsmall", variant: "v1" }, { size: "halfeighth", variant: "v1" },
            { size: "smallquarter", variant: "v2" }, { size: "smallhalf", variant: "v4" }, { size: "fullfull", variant: "v2" },
            { size: "fullfull", variant: "v1" }, { size: "smallhalf", variant: "v1" }, { size: "smallquarter", variant: "v1" },
            { size: "halfeighth", variant: "v1" }, { size: "smallsmall", variant: "v1" }, { size: "smallsmall", variant: "v1" },
        ]
    },
    {
        rowClass: "row24px", cells: [
            { size: "smallsmall", variant: "v1" }, { size: "smallsmall", variant: "v1" }, { size: "halfeighth", variant: "v1" },
            { size: "smallquarter", variant: "v2" }, { size: "smallhalf", variant: "v4" }, { size: "fullfull", variant: "v2" },
            { size: "fullfull", variant: "v1" }, { size: "smallhalf", variant: "v1" }, { size: "smallquarter", variant: "v1" },
            { size: "halfeighth", variant: "v1" }, { size: "smallsmall", variant: "v1" }, { size: "smallsmall", variant: "v1" },
        ]
    },
    {
        rowClass: "row24px", cells: [
            { size: "smallsmall", variant: "v1" }, { size: "smallsmall", variant: "v1" }, { size: "halfeighth", variant: "v1" },
            { size: "smallquarter", variant: "v2" }, { size: "smallhalf", variant: "v4" }, { size: "fullfull", variant: "v2" },
            { size: "fullfull", variant: "v1" }, { size: "smallhalf", variant: "v1" }, { size: "smallquarter", variant: "v1" },
            { size: "halfeighth", variant: "v1" }, { size: "smallsmall", variant: "v1" }, { size: "smallsmall", variant: "v4" },
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

/*
const sizeWidthMap = {
    smallhalf: "12px",
    smallquarter: "12px",
    smallsmall: "12px",
    halfeighth: "25%",
    fullfull: "50%",
};

const nextSizeWidthMap = {
    smallhalf: "25%",
    smallquarter: "12.5%",
    smallsmall: "12px",
    halfeighth: "6.25%",
    fullfull: "50%",
};
*/

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

        gridElements.forEach((element) => {
            const defaultDuration = 30;
            (element as HTMLElement).style.animationDuration = defaultDuration + 's';
            const hoverDuration = 8;
            const transitionTime = 5000; // 1 second to transition

            let currentDuration = defaultDuration;
            let targetDuration = defaultDuration;
            let animationFrameId: number | null = null;
            let startTime: number | null = null;
            let startDuration: number | null = null;

            function animateDuration(timestamp: number) {
                if (startTime === null) {
                    startTime = timestamp;
                    startDuration = currentDuration;
                    if (targetDuration === defaultDuration) {
                        console.log("++ start");
                    } else {
                        console.log("-- start");
                    }
                }

                const elapsed = timestamp - startTime;
                const progress = Math.min(elapsed / transitionTime, 1);
                // const progress = elapsed / transitionTime % 1;

                // Ease out cubic for smooth deceleration
                const easeProgress = 1 - Math.pow(1 - progress, 3);

                currentDuration = startDuration! + (targetDuration - startDuration!) * easeProgress;
                if (targetDuration === defaultDuration) {
                    console.log("++ currentDuration:", currentDuration.toFixed(2));
                } else {
                    console.log("-- currentDuration:", currentDuration.toFixed(2));
                }
                (element as HTMLElement).style.animationDuration = currentDuration + 's';

                // console.log({elapsed, currentDuration, targetDuration});

                if (progress < 1) {
                    animationFrameId = requestAnimationFrame(animateDuration);
                } else {
                    if (targetDuration === defaultDuration) {
                        console.log("++ end");
                    } else {
                        console.log("-- end");
                    }
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
                        <div
                            key={cellIdx}
                            className={`${sizeClassMap[cell.size]} landingCell gradient-vertical gradient-animation-${cell.variant}`}
                        >
                            {/* <div className={`gradient-vertical gradient-animation-${cell.variant}`}></div> */}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );

}
