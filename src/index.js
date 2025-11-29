// src/index.js
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { UserProvider } from "./context/UserContext";
import { ThemeProvider } from "./context/ThemeContext";
import { ApiProvider } from "./context/ApiContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <ThemeProvider>
    <UserProvider>
      <ApiProvider>
        <App />
      </ApiProvider>
    </UserProvider>
  </ThemeProvider>
);



