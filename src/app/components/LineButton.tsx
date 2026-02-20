"use client";
import './lineButton.css';
import { motion, AnimatePresence } from "motion/react";

interface LineButtonProps {
  name: string;
  number: number;
  act: 1 | 2 | 3 | 4;
  gradientDir: "horizontal" | "vertical";
  align: "left" | "right";
  verticalAlign?: "top" | "bottom";
  fillCell?: boolean;
}

export default function LineButton({ name, number, act, gradientDir, align, verticalAlign = "bottom", fillCell = false }: LineButtonProps) {
  const dirClass = gradientDir === "horizontal" ? "hgrad" : "vgrad";
  const className = [
    "line-button",
    `line-button--a${act}-${dirClass}`,
    align === "left" ? "line-button--left" : "line-button--right",
    verticalAlign === "top" ? "line-button--top" : "line-button--bottom",
    fillCell ? "line-button--fill" : "",
  ].join(" ");

  return (
    <AnimatePresence>
      <motion.button
        type="button"
        className={className}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <sup className="line-button__number">{number}</sup>
        {name}
      </motion.button>
    </AnimatePresence>
  );
}
