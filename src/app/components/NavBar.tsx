"use client";

import { useState } from "react";

const NAV_ITEMS = [
  "Act I",
  "Act II",
  "Act III",
  "Act IV",
  "Lines",
  "Tickets",
  "People",
  "About",
];

export default function NavBar() {
  const [activeItem, setActiveItem] = useState(NAV_ITEMS[0]);

  return (
    <aside className="sidebar">
      <button className="sidebar-logo" type="button">
        FABLE
      </button>

      <nav className="sidebar-nav" aria-label="Primary">
        {NAV_ITEMS.map((item) => (
          <button
            key={item}
            type="button"
            className={`nav-item${activeItem === item ? " active" : ""}`}
            onClick={() => setActiveItem(item)}
            aria-current={activeItem === item ? "page" : undefined}
          >
            <span className="nav-bracket" aria-hidden="true" />
            <span className="nav-label">{item}</span>
            <span className="nav-coming-soon" aria-hidden="true">
              Coming Soon
            </span>
          </button>
        ))}
    </nav>

      <div className="sidebar-footer">
        <span className="sidebar-footer-logo">LCS</span>
      </div>
    </aside>
  );
}
