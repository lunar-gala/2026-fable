"use client";
import { useState } from "react";
import "./people.css";

const NAV_ITEMS = [
  "",
  "Exec",
  "Creative",
  "Design",
  "Production",
  "Model",
  "Hair & Makeup",
  "PR",
];

export default function PeopleContent() {
  const [activeTab, setActiveTab] = useState("Exec");

  return (
    <div className="people-page">
      {/* Horizontal Nav Bar */}
      <nav className="people-nav">
        {/* Top 24px row */}
        <div className="people-nav-row people-nav-row-24">
          <div className="people-nav-spacer" />
          <div className="people-nav-spacer" />
          {NAV_ITEMS.map((item, index) => (
            <div key={`top-${item}`} style={{ display: "contents" }}>
              <div className="people-nav-cell" />
              {index < NAV_ITEMS.length - 1 && (
                <div className="people-nav-separator" />
              )}
            </div>
          ))}
          <div className="people-nav-spacer" />
          <div className="people-nav-spacer" />
        </div>

        {/* Middle 48px row with nav buttons */}
        <div className="people-nav-row people-nav-row-48">
          <div className="people-nav-spacer" />
          <div className="people-nav-spacer" />
          {NAV_ITEMS.map((item, index) => (
            <div key={`mid-${item}`} style={{ display: "contents" }}>
                {(item == "") && (
                    <div className={`people-nav-empty-button`}></div>
                )}
                {(item != "") && (
                    <button
                        className={`people-nav-button ${activeTab === item ? "active" : ""}`}
                        onClick={() => setActiveTab(item)}
                    >
                        <span className="people-nav-button-label">{item}</span>
                    </button>
                )}
              {index < NAV_ITEMS.length - 1 && (
                <div className="people-nav-separator" />
              )}
            </div>
          ))}
          <div className="people-nav-spacer" />
          <div className="people-nav-spacer" />
        </div>

        {/* Bottom 24px row */}
        <div className="people-nav-row people-nav-row-24">
          <div className="people-nav-spacer" />
          <div className="people-nav-spacer" />
          {NAV_ITEMS.map((item, index) => (
            <div key={`bottom-${item}`} style={{ display: "contents" }}>
              <div className="people-nav-cell" />
              {index < NAV_ITEMS.length - 1 && (
                <div className="people-nav-separator" />
              )}
            </div>
          ))}
          <div className="people-nav-spacer" />
          <div className="people-nav-spacer" />
        </div>
      </nav>

      {/* Content area */}
      <div className="people-content-area">
        {/* Content for each tab can be added here */}
      </div>
    </div>
  );
}
