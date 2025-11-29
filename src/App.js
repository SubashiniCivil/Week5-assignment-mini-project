import { useContext } from "react";
import { UserContext } from "./context/UserContext";
import { ThemeContext } from "./context/ThemeContext";
import Login from "./Login";
import Profile from "./Profile";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const { user } = useContext(UserContext);
  const { theme, toggleTheme } = useContext(ThemeContext);

 return (
  <div className={`app-container ${theme}`}>
    {/* Navbar */}
    <Navbar />

    {/* Theme toggle button */}
    <button className="theme-toggle" onClick={toggleTheme}>
      {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
    </button>

    <h1>Context API – Mini Project</h1>

    {/* Login / Profile */}
    {user ? <Profile /> : <Login />}

    {/* Footer */}
    <Footer />
  </div>
);

}

export default App;


