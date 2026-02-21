"use client";
import { useEffect, useRef } from "react";
import { motion, useScroll } from "motion/react";
import './act4Animation.css';

interface CellConfig {
    size: "xs" | "s" | "m" | "l" | "xl";
    variant: "v0" | "v1" | "v2" | "v3" | "v4";
    position: "c1" | "c2" | "c3" | "c4" | "c5" | "c6";
}

interface RowConfig {
    rowClass: string;
    cells: CellConfig[];
}

const rows: RowConfig[] = [
    {
        rowClass: "xl-row", cells: [
            { size: "xl", variant: "v0", position: "c1"}, { size: "l", variant: "v0", position: "c2" }, { size: "m", variant: "v3", position:"c3" },
            { size: "s", variant: "v0", position: "c4" }, { size: "xs", variant: "v0", position: "c5" }, { size: "xs", variant: "v0", position:"c6" },
            { size: "xs", variant: "v0", position: "c6" }, { size: "xs", variant: "v0", position: "c5" }, { size: "s", variant: "v0", position:"c4" },
            { size: "m", variant: "v0", position: "c3"}, { size: "l", variant: "v3" , position: "c2" }, { size: "xl", variant: "v0", position:"c1" },
        ]
    },
    {
        rowClass: "l-row", cells: [
            { size: "xl", variant: "v0", position: "c1"}, { size: "l", variant: "v0", position: "c2" }, { size: "m", variant: "v3", position:"c3" },
            { size: "s", variant: "v0", position: "c4" }, { size: "xs", variant: "v0", position: "c5" }, { size: "xs", variant: "v0", position:"c6" },
            { size: "xs", variant: "v0", position: "c6" }, { size: "xs", variant: "v0", position: "c5" }, { size: "s", variant: "v0", position:"c4" },
            { size: "m", variant: "v0", position: "c3"}, { size: "l", variant: "v3" , position: "c2" }, { size: "xl", variant: "v0", position:"c1" },
        ]
    },
    {
        rowClass: "m-row", cells: [
            { size: "xl", variant: "v0", position: "c1"}, { size: "l", variant: "v0", position: "c2" }, { size: "m", variant: "v3", position:"c3" },
            { size: "s", variant: "v0", position: "c4" }, { size: "xs", variant: "v0", position: "c5" }, { size: "xs", variant: "v0", position:"c6" },
            { size: "xs", variant: "v0", position: "c6" }, { size: "xs", variant: "v0", position: "c5" }, { size: "s", variant: "v4", position:"c4" },
            { size: "m", variant: "v4", position: "c3"}, { size: "l", variant: "v3" , position: "c2" }, { size: "xl", variant: "v0", position:"c1" },
        ]
    },
    {
        rowClass: "s-row", cells: [
            { size: "xl", variant: "v4", position: "c1"}, { size: "l", variant: "v0", position: "c2" }, { size: "m", variant: "v3", position:"c3" },
            { size: "s", variant: "v0", position: "c4" }, { size: "xs", variant: "v0", position: "c5" }, { size: "xs", variant: "v0", position:"c6" },
            { size: "xs", variant: "v0", position: "c6" }, { size: "xs", variant: "v0", position: "c5" }, { size: "s", variant: "v4", position:"c4" },
            { size: "m", variant: "v4", position: "c3"}, { size: "l", variant: "v0" , position: "c2" }, { size: "xl", variant: "v0", position:"c1" },
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
        rowClass: "s-row", cells: [
            { size: "xl", variant: "v0", position: "c1"}, { size: "l", variant: "v3", position: "c2" }, { size: "m", variant: "v0", position:"c3" },
            { size: "s", variant: "v0", position: "c4" }, { size: "xs", variant: "v0", position: "c5" }, { size: "xs", variant: "v0", position:"c6" },
            { size: "xs", variant: "v0", position: "c6" }, { size: "xs", variant: "v0", position: "c5" }, { size: "s", variant: "v0", position:"c4" },
            { size: "m", variant: "v0", position: "c3"}, { size: "l", variant: "v0" , position: "c2" }, { size: "xl", variant: "v0", position:"c1" },
        ]
    },
    {
        rowClass: "m-row", cells: [
            { size: "xl", variant: "v0", position: "c1"}, { size: "l", variant: "v3", position: "c2" }, { size: "m", variant: "v0", position:"c3" },
            { size: "s", variant: "v0", position: "c4" }, { size: "xs", variant: "v0", position: "c5" }, { size: "xs", variant: "v0", position:"c6" },
            { size: "xs", variant: "v0", position: "c6" }, { size: "xs", variant: "v0", position: "c5" }, { size: "s", variant: "v0", position:"c4" },
            { size: "m", variant: "v3", position: "c3"}, { size: "l", variant: "v0" , position: "c2" }, { size: "xl", variant: "v0", position:"c1" },
        ]
    },
    {
        rowClass: "l-row", cells: [
            { size: "xl", variant: "v0", position: "c1"}, { size: "l", variant: "v3", position: "c2" }, { size: "m", variant: "v0", position:"c3" },
            { size: "s", variant: "v0", position: "c4" }, { size: "xs", variant: "v0", position: "c5" }, { size: "xs", variant: "v0", position:"c6" },
            { size: "xs", variant: "v0", position: "c6" }, { size: "xs", variant: "v0", position: "c5" }, { size: "s", variant: "v0", position:"c4" },
            { size: "m", variant: "v0", position: "c3"}, { size: "l", variant: "v2" , position: "c2" }, { size: "xl", variant: "v1", position:"c1" },
        ]
    },
    {
        rowClass: "xl-row", cells: [
            { size: "xl", variant: "v0", position: "c1"}, { size: "l", variant: "v0", position: "c2" }, { size: "m", variant: "v3", position:"c3" },
            { size: "s", variant: "v0", position: "c4" }, { size: "xs", variant: "v0", position: "c5" }, { size: "xs", variant: "v0", position:"c6" },
            { size: "xs", variant: "v0", position: "c6" }, { size: "xs", variant: "v0", position: "c5" }, { size: "s", variant: "v0", position:"c4" },
            { size: "m", variant: "v0", position: "c3"}, { size: "l", variant: "v4" , position: "c2" }, { size: "xl", variant: "v4", position:"c1" },
        ]
    },
];

const sizeClassMap = {
    xs: "xs-cell",
    s: "s-cell",
    m: "m-cell",
    l: "l-cell",
    xl: "xl-cell",
};

export default function Act4GradientAnimation() {
    const gridRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!gridRef.current) return;
        const cells = gridRef.current.querySelectorAll('[class*="a4-gradient-"]');
        const maxDelay = 2;
        cells.forEach((cell) => {
            const randomDelay = Math.random() * maxDelay;
            (cell as HTMLElement).style.animationDelay = `${randomDelay}s`;
        });
    }, []);

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
                            className={`${sizeClassMap[cell.size]} landingCellWhite a4-gradient-${cell.variant} ${cell.position}`}
                        >
                        </motion.div>
                    ))}
                </motion.div>
            ))}
        </div>
    );
}
