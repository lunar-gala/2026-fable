"use client";
import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import '../Landing/LandingAnimation.css';
import './act3Animation.css';




interface CellConfig {
    size: "xs" | "s" | "m" | "l" | "xl";
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
    cells: CellConfig[];
}

const rows: RowConfig[] = [
    {
        rowClass: "xl-row",  cells: [
            { size: "xl", variant: "v6", position: "c1"}, { size: "l", variant: "v0", position: "c2" }, { size: "m", variant: "v0", position:"c3" },
            { size: "s", variant: "v0", position: "c4" }, { size: "xs", variant: "v0", position: "c5" }, { size: "xs", variant: "v0", position:"c6" },
            { size: "xs", variant: "v0", position: "c6" }, { size: "xs", variant: "v0", position: "c5" }, { size: "s", variant: "v0", position:"c4" },
            { size: "m", variant: "v0", position: "c3"}, { size: "l", variant: "v0" , position: "c2" }, { size: "xl", variant: "v0", position:"c1" },
        ]
    },
    {
        rowClass: "l-row", cells: [
            { size: "xl", variant: "v0", position: "c1"}, { size: "l", variant: "v0", position: "c2" }, { size: "m", variant: "v0", position:"c3" },
            { size: "s", variant: "v0", position: "c4" }, { size: "xs", variant: "v0", position: "c5" }, { size: "xs", variant: "v0", position:"c6" },
            { size: "xs", variant: "v0", position: "c6" }, { size: "xs", variant: "v0", position: "c5" }, { size: "s", variant: "v0", position:"c4" },
            { size: "m", variant: "v0", position: "c3"}, { size: "l", variant: "v0" , position: "c2" }, { size: "xl", variant: "v0", position:"c1" },
        ]
    },
    {
        rowClass: "m-row", cells: [
            { size: "xl", variant: "v0", position: "c1"}, { size: "l", variant: "v0", position: "c2" }, { size: "m", variant: "v0", position:"c3" },
            { size: "s", variant: "v0", position: "c4" }, { size: "xs", variant: "v0", position: "c5" }, { size: "xs", variant: "v0", position:"c6" },
            { size: "xs", variant: "v0", position: "c6" }, { size: "xs", variant: "v0", position: "c5" }, { size: "s", variant: "v0", position:"c4" },
            { size: "m", variant: "v0", position: "c3"}, { size: "l", variant: "v0" , position: "c2" }, { size: "xl", variant: "v0", position:"c1" },
        ]
    },
    {
        rowClass: "s-row", cells: [
            { size: "xl", variant: "v0", position: "c1"}, { size: "l", variant: "v0", position: "c2" }, { size: "m", variant: "v0", position:"c3" },
            { size: "s", variant: "v0", position: "c4" }, { size: "xs", variant: "v0", position: "c5" }, { size: "xs", variant: "v0", position:"c6" },
            { size: "xs", variant: "v0", position: "c6" }, { size: "xs", variant: "v0", position: "c5" }, { size: "s", variant: "v0", position:"c4" },
            { size: "m", variant: "v0", position: "c3"}, { size: "l", variant: "v0" , position: "c2" }, { size: "xl", variant: "v0", position:"c1" },
        ]
    },
    {
        rowClass: "xs-row",  cells: [
            { size: "xl", variant: "v0", position: "c1"}, { size: "l", variant: "v0", position: "c2" }, { size: "m", variant: "v0", position:"c3" },
            { size: "s", variant: "v0", position: "c4" }, { size: "xs", variant: "v0", position: "c5" }, { size: "xs", variant: "v0", position:"c6" },
            { size: "xs", variant: "v0", position: "c6" }, { size: "xs", variant: "v0", position: "c5" }, { size: "s", variant: "v0", position:"c4" },
            { size: "m", variant: "v0", position: "c3"}, { size: "l", variant: "v0" , position: "c2" }, { size: "xl", variant: "v0", position:"c1" },
        ]
    },
    {
        rowClass: "xs-row", cells: [
            { size: "xl", variant: "v0", position: "c1"}, { size: "l", variant: "v0", position: "c2" }, { size: "m", variant: "v0", position:"c3" },
            { size: "s", variant: "v0", position: "c4" }, { size: "xs", variant: "v0", position: "c5" }, { size: "xs", variant: "v0", position:"c6" },
            { size: "xs", variant: "v0", position: "c6" }, { size: "xs", variant: "v0", position: "c5" }, { size: "s", variant: "v0", position:"c4" },
            { size: "m", variant: "v0", position: "c3"}, { size: "l", variant: "v0" , position: "c2" }, { size: "xl", variant: "v0", position:"c1" },
        ]
    },
    {
        rowClass: "xs-row", cells: [
            { size: "xl", variant: "v0", position: "c1"}, { size: "l", variant: "v0", position: "c2" }, { size: "m", variant: "v0", position:"c3" },
            { size: "s", variant: "v0", position: "c4" }, { size: "xs", variant: "v0", position: "c5" }, { size: "xs", variant: "v0", position:"c6" },
            { size: "xs", variant: "v0", position: "c6" }, { size: "xs", variant: "v0", position: "c5" }, { size: "s", variant: "v0", position:"c4" },
            { size: "m", variant: "v0", position: "c3"}, { size: "l", variant: "v0" , position: "c2" }, { size: "xl", variant: "v0", position:"c1" },
        ]
    },
    {
        rowClass: "xs-row",  cells: [
            { size: "xl", variant: "v0", position: "c1"}, { size: "l", variant: "v0", position: "c2" }, { size: "m", variant: "v0", position:"c3" },
            { size: "s", variant: "v0", position: "c4" }, { size: "xs", variant: "v0", position: "c5" }, { size: "xs", variant: "v0", position:"c6" },
            { size: "xs", variant: "v0", position: "c6" }, { size: "xs", variant: "v0", position: "c5" }, { size: "s", variant: "v0", position:"c4" },
            { size: "m", variant: "v0", position: "c3"}, { size: "l", variant: "v0" , position: "c2" }, { size: "xl", variant: "v0", position:"c1" },
        ]
    },
    {
        rowClass: "s-row", cells: [
            { size: "xl", variant: "v0", position: "c1"}, { size: "l", variant: "v0", position: "c2" }, { size: "m", variant: "v0", position:"c3" },
            { size: "s", variant: "v0", position: "c4" }, { size: "xs", variant: "v0", position: "c5" }, { size: "xs", variant: "v0", position:"c6" },
            { size: "xs", variant: "v0", position: "c6" }, { size: "xs", variant: "v0", position: "c5" }, { size: "s", variant: "v0", position:"c4" },
            { size: "m", variant: "v0", position: "c3"}, { size: "l", variant: "v0" , position: "c2" }, { size: "xl", variant: "v0", position:"c1" },
        ]
    },
    {
        rowClass: "m-row", cells: [
            { size: "xl", variant: "v0", position: "c1"}, { size: "l", variant: "v0", position: "c2" }, { size: "m", variant: "v0", position:"c3" },
            { size: "s", variant: "v0", position: "c4" }, { size: "xs", variant: "v0", position: "c5" }, { size: "xs", variant: "v0", position:"c6" },
            { size: "xs", variant: "v0", position: "c6" }, { size: "xs", variant: "v0", position: "c5" }, { size: "s", variant: "v0", position:"c4" },
            { size: "m", variant: "v0", position: "c3"}, { size: "l", variant: "v0" , position: "c2" }, { size: "xl", variant: "v0", position:"c1" },
        ]
    },
    {
        rowClass: "l-row", cells: [
            { size: "xl", variant: "v0", position: "c1"}, { size: "l", variant: "v0", position: "c2" }, { size: "m", variant: "v0", position:"c3" },
            { size: "s", variant: "v0", position: "c4" }, { size: "xs", variant: "v0", position: "c5" }, { size: "xs", variant: "v0", position:"c6" },
            { size: "xs", variant: "v0", position: "c6" }, { size: "xs", variant: "v0", position: "c5" }, { size: "s", variant: "v0", position:"c4" },
            { size: "m", variant: "v0", position: "c3"}, { size: "l", variant: "v0" , position: "c2" }, { size: "xl", variant: "v0", position:"c1" },
        ]
    },
    {
        rowClass: "xl-row", cells: [
            { size: "xl", variant: "v0", position: "c1"}, { size: "l", variant: "v0", position: "c2" }, { size: "m", variant: "v0", position:"c3" },
            { size: "s", variant: "v0", position: "c4" }, { size: "xs", variant: "v0", position: "c5" }, { size: "xs", variant: "v0", position:"c6" },
            { size: "xs", variant: "v0", position: "c6" }, { size: "xs", variant: "v0", position: "c5" }, { size: "s", variant: "v0", position:"c4" },
            { size: "m", variant: "v0", position: "c3"}, { size: "l", variant: "v0" , position: "c2" }, { size: "xl", variant: "v0", position:"c1" },
        ]
    },
];

const sizeClassMap = {
    xs:"xs-cell",
    s:"s-cell",
    m:"m-cell",
    l:"l-cell",
    xl:"xl-cell",
};


export default function Act3GradientAnimation() {
    const { scrollYProgress } = useScroll();
    
    const gridRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!gridRef.current) return;
        const cells = gridRef.current.querySelectorAll('[class*="a3-gradient-"]');
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
                    key={rowIdx}
                >
                    {row.cells.map((cell, cellIdx) => (                        
                        <motion.div
                            key={cellIdx}
                            className={`${sizeClassMap[cell.size]} landingCellWhite a3-gradient-${cell.variant} ${cell.position}`}
                        > {/*  The color of the gradient needs to fade out as the scroll happens too  */}
                        </motion.div>
                    ))}
                </motion.div>
            ))}
        </div>
    );

}