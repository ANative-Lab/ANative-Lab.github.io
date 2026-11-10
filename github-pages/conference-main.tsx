import React from "react";
import { createRoot } from "react-dom/client";
import Conference from "../app/conference";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Conference />
  </React.StrictMode>,
);
