"use client";

import { useEffect } from "react";

export default function Act3StageSetter() {
  useEffect(() => {
    document.body.dataset.stage = "act3";
    document.body.classList.add("lines-page");
    return () => {
      delete document.body.dataset.stage;
      document.body.classList.remove("lines-page");
    };
  }, []);
  return null;
}
