"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useIsVisible } from "./utils/intersecting"
import "./people.css";
import { p } from "motion/react-client";
import { PEOPLE, type Person } from "./data/people";

const CATEGORIES = [
  "Exec",
  "Creative",
  "Design",
  "Production",
  "Model",
  "Hair & Makeup",
  "PR",
];

const CATEGORY_FOLDER: Record<string, string> = {
  "Exec": "exec",
  "Creative": "creative",
  "Design": "design",
  "Production": "production",
  "Model": "model",
  "Hair & Makeup": "hairmakeup",
  "PR": "pr",
};

function getPhotoPath(category: string, person: Person): string {
  const catFolder = CATEGORY_FOLDER[category] || category.toLowerCase();
  const posFolder = person.position
    .toLowerCase()
    .replace(/ & /g, "-")
    .replace(/ /g, "-");
  return `/photos/${catFolder}/${posFolder}/${person.name}.jpg`;
}

const NAV_ITEMS = ["", ...CATEGORIES];

const COLS = NAV_ITEMS.length; // 8 slots per row

// Split people into rows of COLS, padding the last row with nulls
function chunkPeople(people: Person[]): (Person | null)[][] {
  const rows: (Person | null)[][] = [];
  for (let i = 0; i < people.length; i += COLS) {
    const row = Array.from({ length: COLS }, (_, j) =>
      i + j < people.length ? people[i + j] : null
    );
    rows.push(row);
  }
  return rows;
}

export default function PeopleContent() {
  const [activeTab, setActiveTab] = useState("Exec");
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const refs: Record<string, React.RefObject<HTMLElement | null>> = CATEGORIES.reduce(
    (acc, category) => {
      acc[category] = useRef<HTMLElement | null>(null);
      return acc;
    },
    {} as Record<string, React.RefObject<HTMLElement | null>>
  );

  CATEGORIES.forEach((category) => {
    const isVisible = useIsVisible(refs[category]);

    useEffect(() => {
      if (isVisible) {
        setActiveTab(category);
      }
    }, [isVisible, category]);
  });

  const handleNavClick = (item: string) => {
    setActiveTab(item);
    const el = sectionRefs.current[item];
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="people-page">
      {/* Horizontal Nav Bar */}
      <nav className="people-nav">
        {/* Top 24px row */}
        <div className="people-nav-row people-row-24">
          <div className="people-spacer people-spacer-top-border" />
          <div className="people-spacer people-spacer-top-border" />
          {NAV_ITEMS.map((item, index) => (
            <div key={`top-${item}`} style={{ display: "contents" }}>
              <div className="people-nav-cell" />
              {index < NAV_ITEMS.length - 1 && (
                <div className="people-separator" />
              )}
            </div>
          ))}
          <div className="people-spacer people-spacer-left-border people-spacer-top-border" />
          <div className="people-spacer people-spacer-top-border" />
        </div>

        {/* Middle 48px row with nav buttons */}
        <div className="people-nav-row people-row-48">
          <div className="people-spacer people-spacer-top-border" />
          <div className="people-spacer people-spacer-top-border" />
          {NAV_ITEMS.map((item, index) => (
            <div key={`mid-${item}`} style={{ display: "contents" }}>
                {(item == "") && (
                    <div className={`people-nav-cell`}></div>
                )}
                {(item != "") && (
                    <button
                        className={`people-nav-button ${activeTab === item ? "active" : ""}`}
                        onClick={() => handleNavClick(item)}
                    >
                        <span className="people-nav-button-label">{item}</span>
                    </button>
                )}
              {index < NAV_ITEMS.length - 1 && (
                <div className="people-separator" />
              )}
            </div>
          ))}
          <div className="people-spacer people-spacer-left-border people-spacer-top-border" />
          <div className="people-spacer people-spacer-top-border" />
        </div>

        {/* Bottom 24px row */}
        <div className="people-nav-row people-row-24">
          <div className="people-spacer people-spacer-top-border" />
          <div className="people-spacer people-spacer-top-border" />
          {NAV_ITEMS.map((item, index) => (
            <div key={`bottom-${item}`} style={{ display: "contents" }}>
              <div className="people-nav-cell" />
              {index < NAV_ITEMS.length - 1 && (
                <div className="people-separator" />
              )}
            </div>
          ))}
          <div className="people-spacer people-spacer-left-border people-spacer-top-border" />
          <div className="people-spacer people-spacer-top-border" />
        </div>
      </nav>

      {/* Photo sections - 7 sections corresponding to 7 nav buttons */}
      <div className="people-photo-sections">
        {NAV_ITEMS.filter((item) => item !== "").map((section, sectionIndex, arr) => (
          <React.Fragment key={section}>
          {/* Divider */}
          {sectionIndex > 0 && (
            <div className="people-photo-row people-row-24">
              <div className="people-spacer people-spacer-top-border" />
              <div className="people-spacer people-spacer-top-border" />
              <div className="people-gradient" />
              <div className="people-spacer people-spacer-left-border people-spacer-top-border" />
              <div className="people-spacer people-spacer-top-border" />
            </div>
          )}
          <div className="people-photo-section" ref={(el) => { sectionRefs.current[section] = el; if (refs[section]) (refs[section] as React.MutableRefObject<HTMLElement | null>).current = el; }}>
            {/* Top 24px row */}
            <div className="people-photo-row people-row-24">
              <div className="people-spacer" />
              <div className="people-spacer" />
              {NAV_ITEMS.map((item, index) => (
                <div key={`bottom-${item}`} style={{ display: "contents" }}>
                  <div className="people-photo-cell" />
                  {index < NAV_ITEMS.length - 1 && (
                    <div className="people-separator" />
                  )}
                </div>
              ))}
              <div className="people-spacer people-spacer-left-border" />
              <div className="people-spacer" />
            </div>

            {/* Photo rows */}
            {chunkPeople(PEOPLE[section] || []).map((row, rowIndex) => (
              <div key={rowIndex} className="people-photo-row">
                <div className="people-spacer" />
                <div className="people-spacer" />
                {row.map((person, colIndex) => (
                  <div key={colIndex} style={{ display: "contents" }}>
                    <div className="people-photo-group">
                      {person !== null ? (
                        <>
                          <div className="people-photo-cell" style={{ position: "relative" }}>
                            <Image
                              className="people-photo"
                              src={getPhotoPath(section, person)}
                              alt={person.name}
                              fill
                              sizes="(max-width: 768px) 25vw, 12.5vw"
                              onError={(e) => {
                                e.currentTarget.style.display = "none";
                                e.currentTarget.nextElementSibling?.classList.remove("hidden");
                              }}
                            />
                            <div className="people-photo-placeholder hidden" />
                          </div>
                          <div className="people-photo-name-group">
                            <div className="people-photo-name">{person.name}</div>
                            <div className="people-photo-position">{person.position}</div>
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="people-photo-cell people-photo-cell-empty" />
                          <div className="people-photo-name-group people-photo-name-group-empty" />
                        </>
                      )}
                    </div>
                    {colIndex < row.length - 1 && (
                      <div className="people-separator" />
                    )}
                  </div>
                ))}
                <div className="people-spacer people-spacer-left-border" />
                <div className="people-spacer" />
              </div>
            ))}

            {/* Bottom 24px row */}
            <div className="people-photo-row people-row-24">
              <div className="people-spacer" />
              <div className="people-spacer" />
              {NAV_ITEMS.map((item, index) => (
                <div key={`bottom-${item}`} style={{ display: "contents" }}>
                  <div className="people-photo-cell" />
                  {index < NAV_ITEMS.length - 1 && (
                    <div className="people-separator" />
                  )}
                </div>
              ))}
              <div className="people-spacer people-spacer-left-border" />
              <div className="people-spacer" />
            </div>
          </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
