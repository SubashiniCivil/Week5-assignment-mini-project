// src/components/Navbar.js
import React, { useContext } from "react";
import { ApiContext } from "../context/ApiContext";
import { ThemeContext } from "../context/ThemeContext";

const Navbar = () => {
  const { post, loading, error } = useContext(ApiContext);
  const { theme } = useContext(ThemeContext);

  return (
    <header className={`navbar ${theme === "dark" ? "navbar-dark" : ""}`}>
      <div className="nav-left">
        <strong>Context API – Mini Project</strong>
      </div>

      <div className="nav-right">
        {loading && <span className="api-status">API: Loading…</span>}
        {error && <span className="api-status error">API: Error</span>}
        {!loading && !error && (
          <span className="api-status">API: Loaded</span>
        )}
      </div>
    </header>
  );
};

export default Navbar;
