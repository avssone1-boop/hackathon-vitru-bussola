import React from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { App } from "./App";
import { BussolaProvider } from "./hooks/useBussola";
import "./styles.css";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HashRouter>
      <BussolaProvider>
        <App />
      </BussolaProvider>
    </HashRouter>
  </React.StrictMode>,
);
