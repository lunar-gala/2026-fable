"use client";
import React, { useState } from "react";
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

const COLS = NAV_ITEMS.length; // 8 slots per row
const ITEMS_PER_SECTION = 14;

// Split items into rows of COLS, padding the last row with nulls
function chunkItems(total: number): (number | null)[][] {
  const rows: (number | null)[][] = [];
  for (let i = 0; i < total; i += COLS) {
    const row = Array.from({ length: COLS }, (_, j) =>
      i + j < total ? i + j : null
    );
    rows.push(row);
  }
  return rows;
}

export default function PeopleContent() {
  const [activeTab, setActiveTab] = useState("Exec");

  return (
    <div className="people-page">
      {/* Horizontal Nav Bar */}
      <nav className="people-nav">
        {/* Top 24px row */}
        <div className="people-nav-row people-row-24">
          <div className="people-spacer" />
          <div className="people-spacer" />
          {NAV_ITEMS.map((item, index) => (
            <div key={`top-${item}`} style={{ display: "contents" }}>
              <div className="people-nav-cell" />
              {index < NAV_ITEMS.length - 1 && (
                <div className="people-separator" />
              )}
            </div>
          ))}
          <div className="people-spacer" />
          <div className="people-spacer" />
        </div>

        {/* Middle 48px row with nav buttons */}
        <div className="people-nav-row people-row-48">
          <div className="people-spacer" />
          <div className="people-spacer" />
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
                <div className="people-separator" />
              )}
            </div>
          ))}
          <div className="people-spacer" />
          <div className="people-spacer" />
        </div>

        {/* Bottom 24px row */}
        <div className="people-nav-row people-row-24">
          <div className="people-spacer" />
          <div className="people-spacer" />
          {NAV_ITEMS.map((item, index) => (
            <div key={`bottom-${item}`} style={{ display: "contents" }}>
              <div className="people-nav-cell" />
              {index < NAV_ITEMS.length - 1 && (
                <div className="people-separator" />
              )}
            </div>
          ))}
          <div className="people-spacer" />
          <div className="people-spacer" />
        </div>
      </nav>

      {/* Photo sections - 7 sections corresponding to 7 nav buttons */}
      <div className="people-photo-sections">
        {NAV_ITEMS.filter((item) => item !== "").map((section, sectionIndex, arr) => (
          <React.Fragment key={section}>
          {/* Divider */}
          {sectionIndex > 0 && (
            <div className="people-photo-row people-row-24">
              <div className="people-spacer" />
              <div className="people-spacer" />
              <div className="people-gradient" />
              <div className="people-spacer" />
              <div className="people-spacer" />
            </div>
          )}
          <div className="people-photo-section">
            {/* Top 24px row */}
            <div className="people-photo-row people-row-24">
              <div className="people-spacer" />
              <div className="people-spacer" />
              {NAV_ITEMS.map((item, index) => (
                <div key={`bottom-${item}`} style={{ display: "contents" }}>
                  <div className="people-nav-cell" />
                  {index < NAV_ITEMS.length - 1 && (
                    <div className="people-separator" />
                  )}
                </div>
              ))}
              <div className="people-spacer" />
              <div className="people-spacer" />
            </div>

            {/* Photo rows */}
            {chunkItems(ITEMS_PER_SECTION).map((row, rowIndex) => (
              <div key={rowIndex} className="people-photo-row">
                <div className="people-spacer" />
                <div className="people-spacer" />
                {row.map((item, colIndex) => (
                  <div key={colIndex} style={{ display: "contents" }}>
                    <div className="people-photo-group">
                      {item !== null ? (
                        <>
                          <div className="people-photo-cell">
                            <div className="people-photo-placeholder" />
                          </div>
                          <div className="people-photo-name-group">
                            <div className="people-photo-name">Name</div>
                            <div className="people-photo-position">Position</div>
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="people-photo-cell" />
                          <div className="people-photo-name-group" />
                        </>
                      )}
                    </div>
                    {colIndex < row.length - 1 && (
                      <div className="people-separator" />
                    )}
                  </div>
                ))}
                <div className="people-spacer" />
                <div className="people-spacer" />
              </div>
            ))}

            {/* Bottom 24px row */}
            <div className="people-photo-row people-row-24">
              <div className="people-spacer" />
              <div className="people-spacer" />
              {NAV_ITEMS.map((item, index) => (
                <div key={`bottom-${item}`} style={{ display: "contents" }}>
                  <div className="people-nav-cell" />
                  {index < NAV_ITEMS.length - 1 && (
                    <div className="people-separator" />
                  )}
                </div>
              ))}
              <div className="people-spacer" />
              <div className="people-spacer" />
            </div>
          </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
