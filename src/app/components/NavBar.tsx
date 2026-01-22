"use client";

import { COLORS } from "../constants";

export default function NavBar() {
  const navItems = ["About", "People", "Tickets", "Lines"];

  return (
    <nav
      className="fixed left-0 top-0 h-screen flex flex-col justify-evenly items-center"
      style={{ width: "5%", backgroundColor: COLORS.background }}
    >
      {navItems.map((item) => (
        <button
          key={item}
          className="text-black hover:opacity-70 transition-opacity"
          style={{
            writingMode: "vertical-rl",
            textOrientation: "mixed",
            transform: "rotate(180deg)",
          }}
        >
          {item}
        </button>
      ))}
    </nav>
  );
}
