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

      {/* Photo sections - 7 sections corresponding to 7 nav buttons */}
      <div className="people-photo-sections">
        {NAV_ITEMS.filter((item) => item !== "").map((section) => (
          <div key={section} className="people-photo-section">
            {/* Photo row */}
            <div className="people-photo-row">
              <div className="people-photo-spacer" />
              <div className="people-photo-spacer" />
              {NAV_ITEMS.map((_, index) => (
                <div key={index} style={{ display: "contents" }}>
                  <div className="people-photo-cell">
                    <div className="people-photo-placeholder" />
                  </div>
                  {index < NAV_ITEMS.length - 1 && (
                    <div className="people-photo-separator" />
                  )}
                </div>
              ))}
              <div className="people-photo-spacer" />
              <div className="people-photo-spacer" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
