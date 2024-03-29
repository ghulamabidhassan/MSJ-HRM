import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AppProvider } from "./Context.jsx";

const root = document.getElementById("root");
ReactDOM.createRoot(root).render(
  <AppProvider>
    <App />
  </AppProvider>
);
