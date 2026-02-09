"use client";
import './Act1.css';
import { useEffect, useRef } from "react";
import { motion, useTransform } from "motion/react";

interface CellConfig {
    size: "size24px" | "size625" | "size125" | "size25" | "size50";
    variant?: "v1" | "v2";
    hasMovingGradient?: boolean;
}

interface RowConfig {
    rowClass: string;
    cells: CellConfig[];
}

const rows: RowConfig[] = [
    {
        rowClass: "row24px", cells: [
            { size: "size24px" },
            { size: "size24px" },
            { size: "size625" },
            { size: "size125" },
            { size: "size25" },
            { size: "size50" },
            { size: "size50" },
            { size: "size25" },
            { size: "size125" },
            { size: "size625" },
            { size: "size24px" },
            { size: "size24px" },
        ]
    },
    {
        rowClass: "row24px", cells: [
            { size: "size24px" },
            { size: "size24px" },
            { size: "size625" },
            { size: "size125" },
            { size: "size25" },
            { size: "size50" },
            { size: "size50" },
            { size: "size25" },
            { size: "size125" },
            { size: "size625" },
            { size: "size24px" },
            { size: "size24px" },
        ]
    },
    {
        rowClass: "row48px", cells: [
            { size: "size24px" },
            { size: "size24px" },
            { size: "size625" },
            { size: "size125" },
            { size: "size25", variant: "v1", hasMovingGradient: true },
            { size: "size50" },
            { size: "size50" },
            { size: "size25" },
            { size: "size125" },
            { size: "size625" },
            { size: "size24px" },
            { size: "size24px" },
        ]
    },
    {
        rowClass: "row-eighth", cells: [
           { size: "size24px" },
            { size: "size24px" },
            { size: "size625" },
            { size: "size125" },
            { size: "size25", variant: "v1", hasMovingGradient: true },
            { size: "size50" },
            { size: "size50" },
            { size: "size25" },
            { size: "size125" },
            { size: "size625" },
            { size: "size24px" },
            { size: "size24px" },
        ]
    },
    {
        rowClass: "row-quarter", cells: [
            { size: "size24px" },
            { size: "size24px" },
            { size: "size625", variant: "v1", hasMovingGradient: true },
            { size: "size125" },
            { size: "size25" },
            { size: "size50" },
            { size: "size50" },
            { size: "size25" },
            { size: "size125" },
            { size: "size625", variant: "v2", hasMovingGradient: true },
            { size: "size24px" },
            { size: "size24px" },
        ]
    },
    {
        rowClass: "row-half", cells: [
           { size: "size24px" },
            { size: "size24px" },
            { size: "size625" },
            { size: "size125" },
            { size: "size25" },
            { size: "size50" },
            { size: "size50", variant: "v2", hasMovingGradient: true },
            { size: "size25" },
            { size: "size125" },
            { size: "size625" },
            { size: "size24px" },
            { size: "size24px" },
        ]
    },
    {
        rowClass: "row-half", cells: [
            { size: "size24px" },
            { size: "size24px" },
            { size: "size625" },
            { size: "size125" },
            { size: "size25", variant: "v1", hasMovingGradient: true },
            { size: "size50" },
            { size: "size50", variant: "v2", hasMovingGradient: true },
            { size: "size25", variant: "v2", hasMovingGradient: true },
            { size: "size125" },
            { size: "size625" },
            { size: "size24px" },
            { size: "size24px" },
        ]
    },
    {
        rowClass: "row-quarter", cells: [
            { size: "size24px" },
            { size: "size24px" },
            { size: "size625" },
            { size: "size125" },
            { size: "size25" },
            { size: "size50" },
            { size: "size50" },
            { size: "size25", variant: "v2", hasMovingGradient: true },
            { size: "size125" },
            { size: "size625" },
            { size: "size24px" },
            { size: "size24px" },
        ]
    },
    {
        rowClass: "row-eighth", cells: [
            { size: "size24px" },
            { size: "size24px" },
            { size: "size625" },
            { size: "size125" },
            { size: "size25" },
            { size: "size50" },
            { size: "size50" },
            { size: "size25" },
            { size: "size125" },
            { size: "size625" },
            { size: "size24px" },
            { size: "size24px" },
        ]
    },
    {
        rowClass: "row48px", cells: [
            { size: "size24px" },
            { size: "size24px" },
            { size: "size625" },
            { size: "size125" },
            { size: "size25" },
            { size: "size50" },
            { size: "size50" },
            { size: "size25" },
            { size: "size125" },
            { size: "size625" },
            { size: "size24px" },
            { size: "size24px" },
        ]
    },
    {
        rowClass: "row24px", cells: [
            { size: "size24px" },
            { size: "size24px" },
            { size: "size625" },
            { size: "size125" },
            { size: "size25" },
            { size: "size50" },
            { size: "size50" },
            { size: "size25" },
            { size: "size125" },
            { size: "size625" },
            { size: "size24px" },
            { size: "size24px" },
        ]
    },
    {
        rowClass: "row24px", cells: [
            { size: "size24px" },
            { size: "size24px" },
            { size: "size625" },
            { size: "size125" },
            { size: "size25" },
            { size: "size50" },
            { size: "size50" },
            { size: "size25" },
            { size: "size125" },
            { size: "size625" },
            { size: "size24px" },
            { size: "size24px" },
        ]
    },
];

const sizeClassMap = {
    size24px: "cell-twenty-fourth",
    size625: "cell-sixteenth",
    size125: "cell-eighth",
    size25: "cell-quarter",
    size50: "cell-half",
};

export default function LandingAnimation() {

    const gridRef = useRef<HTMLDivElement>(null);

    return (
        <div className="gradient-grid" 
            ref={gridRef} 
            style={{ 
                background: 'linear-gradient(180deg, #B0D2DE 39%, #F2EFE5 100%)', 
                width: '95%',
                position: "fixed",
                top: 0,
                left: "5%"
            }}>
            {rows.map((row, rowIdx) => (
                <div className={row.rowClass} key={rowIdx}>
                    {row.cells.map((cell, cellIdx) => (                        
                        <div
                            key={cellIdx}
                            className={`${sizeClassMap[cell.size]} landingCell`}
                        >
                            {cell.hasMovingGradient && cell.variant ? (
                                <div
                                    className={`variant-${cell.variant}`}
                                />
                            ) : null}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}