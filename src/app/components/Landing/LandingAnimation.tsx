"use client";
import './LandingAnimation.css';
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
            { size: "halfeighth", variant: "v1" }, { size: "smallsmall", variant: "v1" }, { size: "smallsmall", variant: "v1" },
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

    return (
        <div className="gradient-grid" ref={gridRef}>
            {rows.map((row, rowIdx) => (
                <div className={row.rowClass} key={rowIdx}>
                    {row.cells.map((cell, cellIdx) => (                        
                        <motion.div
                            key={cellIdx}
                            className={`${sizeClassMap[cell.size]} gradient-vertical gradient-animation-${cell.variant}`}
                            /* style={{ width: useTransform(scrollYProgress, [0,1], [sizeWidthMap[cell.size], nextSizeWidthMap[cell.size]]) }} */
                        />
                    ))}
                </div>
            ))}
        </div>
    );

}
