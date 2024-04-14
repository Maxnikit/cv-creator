import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserView, MobileView } from "react-device-detect";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserView>
      <App />
    </BrowserView>

    <MobileView>
      <h1>Sorry, but this website is only available in desktop</h1>
    </MobileView>
  </React.StrictMode>
);
