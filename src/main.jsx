import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { CursorifyProvider } from "@cursorify/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CursorifyProvider>
      <App />
    </CursorifyProvider>
  </React.StrictMode>
);
