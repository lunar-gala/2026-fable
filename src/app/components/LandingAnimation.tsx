"use client";

import { useEffect, useRef } from "react";

type AnimationVariant = "v1" | "v2" | "v3" | "v4";

interface CellConfig {
    size: "small" | "half" | "full";
    variant: AnimationVariant;
}

interface RowConfig {
    rowClass: string;
    cells: CellConfig[];
}

const rows: RowConfig[] = [
    {
        rowClass: "row24px", cells: [
            { size: "small", variant: "v1" }, { size: "small", variant: "v1" }, { size: "half", variant: "v1" },
            { size: "small", variant: "v2" }, { size: "small", variant: "v4" }, { size: "full", variant: "v2" },
            { size: "full", variant: "v1" }, { size: "small", variant: "v1" }, { size: "small", variant: "v1" },
            { size: "half", variant: "v1" }, { size: "small", variant: "v1" }, { size: "small", variant: "v1" },
        ]
    },
    {
        rowClass: "row24px", cells: [
            { size: "small", variant: "v1" }, { size: "small", variant: "v1" }, { size: "half", variant: "v1" },
            { size: "small", variant: "v3" }, { size: "small", variant: "v1" }, { size: "full", variant: "v1" },
            { size: "full", variant: "v1" }, { size: "small", variant: "v1" }, { size: "small", variant: "v1" },
            { size: "half", variant: "v1" }, { size: "small", variant: "v1" }, { size: "small", variant: "v1" },
        ]
    },
    {
        rowClass: "row48px", cells: [
            { size: "small", variant: "v1" }, { size: "small", variant: "v1" }, { size: "half", variant: "v2" },
            { size: "small", variant: "v1" }, { size: "small", variant: "v1" }, { size: "full", variant: "v2" },
            { size: "full", variant: "v2" }, { size: "small", variant: "v1" }, { size: "small", variant: "v1" },
            { size: "half", variant: "v1" }, { size: "small", variant: "v1" }, { size: "small", variant: "v1" },
        ]
    },
    {
        rowClass: "row-eighth", cells: [
            { size: "small", variant: "v1" }, { size: "small", variant: "v1" }, { size: "half", variant: "v1" },
            { size: "small", variant: "v2" }, { size: "small", variant: "v2" }, { size: "full", variant: "v2" },
            { size: "full", variant: "v1" }, { size: "small", variant: "v3" }, { size: "small", variant: "v1" },
            { size: "half", variant: "v2" }, { size: "small", variant: "v4" }, { size: "small", variant: "v3" },
        ]
    },
    {
        rowClass: "row-quarter", cells: [
            { size: "small", variant: "v2" }, { size: "small", variant: "v1" }, { size: "half", variant: "v2" },
            { size: "small", variant: "v3" }, { size: "small", variant: "v3" }, { size: "full", variant: "v2" },
            { size: "full", variant: "v2" }, { size: "small", variant: "v1" }, { size: "small", variant: "v2" },
            { size: "half", variant: "v2" }, { size: "small", variant: "v3" }, { size: "small", variant: "v1" },
        ]
    },
    {
        rowClass: "row-half", cells: [
            { size: "small", variant: "v1" }, { size: "small", variant: "v2" }, { size: "half", variant: "v1" },
            { size: "small", variant: "v2" }, { size: "small", variant: "v1" }, { size: "full", variant: "v3" },
            { size: "full", variant: "v2" }, { size: "small", variant: "v1" }, { size: "small", variant: "v3" },
            { size: "half", variant: "v3" }, { size: "small", variant: "v3" }, { size: "small", variant: "v4" },
        ]
    },
    {
        rowClass: "row-full", cells: [
            { size: "small", variant: "v1" }, { size: "small", variant: "v2" }, { size: "half", variant: "v1" },
            { size: "small", variant: "v2" }, { size: "small", variant: "v4" }, { size: "full", variant: "v3" },
            { size: "full", variant: "v3" }, { size: "small", variant: "v4" }, { size: "small", variant: "v3" },
            { size: "half", variant: "v3" }, { size: "small", variant: "v1" }, { size: "small", variant: "v4" },
        ]
    },
    {
        rowClass: "row-half", cells: [
            { size: "small", variant: "v2" }, { size: "small", variant: "v1" }, { size: "half", variant: "v2" },
            { size: "small", variant: "v2" }, { size: "small", variant: "v1" }, { size: "full", variant: "v2" },
            { size: "full", variant: "v1" }, { size: "small", variant: "v3" }, { size: "small", variant: "v4" },
            { size: "half", variant: "v1" }, { size: "small", variant: "v3" }, { size: "small", variant: "v4" },
        ]
    },
    {
        rowClass: "row-quarter", cells: [
            { size: "small", variant: "v1" }, { size: "small", variant: "v1" }, { size: "half", variant: "v2" },
            { size: "small", variant: "v1" }, { size: "small", variant: "v2" }, { size: "full", variant: "v2" },
            { size: "full", variant: "v4" }, { size: "small", variant: "v3" }, { size: "small", variant: "v4" },
            { size: "half", variant: "v3" }, { size: "small", variant: "v4" }, { size: "small", variant: "v1" },
        ]
    },
    {
        rowClass: "row-eighth", cells: [
            { size: "small", variant: "v1" }, { size: "small", variant: "v1" }, { size: "half", variant: "v1" },
            { size: "small", variant: "v1" }, { size: "small", variant: "v1" }, { size: "full", variant: "v2" },
            { size: "full", variant: "v2" }, { size: "small", variant: "v1" }, { size: "small", variant: "v1" },
            { size: "half", variant: "v1" }, { size: "small", variant: "v1" }, { size: "small", variant: "v1" },
        ]
    },
    {
        rowClass: "row48px", cells: [
            { size: "small", variant: "v1" }, { size: "small", variant: "v2" }, { size: "half", variant: "v1" },
            { size: "small", variant: "v1" }, { size: "small", variant: "v1" }, { size: "full", variant: "v3" },
            { size: "full", variant: "v4" }, { size: "small", variant: "v4" }, { size: "small", variant: "v4" },
            { size: "half", variant: "v4" }, { size: "small", variant: "v4" }, { size: "small", variant: "v4" },
        ]
    },
    {
        rowClass: "row24px", cells: [
            { size: "small", variant: "v1" }, { size: "small", variant: "v1" }, { size: "half", variant: "v1" },
            { size: "small", variant: "v4" }, { size: "small", variant: "v1" }, { size: "full", variant: "v3" },
            { size: "full", variant: "v1" }, { size: "small", variant: "v4" }, { size: "small", variant: "v1" },
            { size: "half", variant: "v1" }, { size: "small", variant: "v1" }, { size: "small", variant: "v1" },
        ]
    },
    {
        rowClass: "row24px", cells: [
            { size: "small", variant: "v1" }, { size: "small", variant: "v1" }, { size: "half", variant: "v3" },
            { size: "small", variant: "v1" }, { size: "small", variant: "v1" }, { size: "full", variant: "v1" },
            { size: "full", variant: "v2" }, { size: "small", variant: "v4" }, { size: "small", variant: "v1" },
            { size: "half", variant: "v1" }, { size: "small", variant: "v1" }, { size: "small", variant: "v1" },
        ]
    },
];

const sizeClassMap = {
    small: "rectangle-small",
    half: "rectangle-half",
    full: "rectangle-full",
};

export default function LandingAnimation() {
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
                        <div
                            key={cellIdx}
                            className={`${sizeClassMap[cell.size]} gradient-vertical gradient-animation-${cell.variant}`}
                        />
                    ))}
                </div>
            ))}
        </div>
    );
}
