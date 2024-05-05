import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { CursorifyProvider } from "@cursorify/react";
import { Parallax } from "react-parallax";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Parallax blur={10} strength={200}>
    <React.StrictMode>
      <CursorifyProvider>
        <App />
      </CursorifyProvider>
    </React.StrictMode>
  </Parallax>
);
