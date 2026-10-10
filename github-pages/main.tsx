import React from "react";
import { createRoot } from "react-dom/client";
import Home from "../app/page";
import "../app/globals.css";
import "../app/sections.css";
import "../app/redesign.css";
import "../app/team.css";
import "../app/typography.css";
import "../app/hero-intelligence.css";
import "../app/projects.css";
import "../app/project-stars.css";
import "../app/h5-story.css";
import "../app/howone.css";
import "../app/howone-logo.css";
import "../app/mobile-order.css";
import "../app/site-stats.css";
import "../app/brand-logo.css";
import "./pages.css";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
);
