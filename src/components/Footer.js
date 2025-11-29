import { useEffect, useState } from "react";

const Footer = () => {
  const quotes = [
    "Believe you can and you're halfway there.",
    "Success is not final, failure is not fatal.",
    "Every moment is a fresh beginning.",
    "Dream big. Start small. Act now.",
    "Stay positive, work hard, make it happen."
  ];

  const [quote, setQuote] = useState("");

  useEffect(() => {
    // Pick a random quote
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  }, []);

  return (
    <footer className="footer">
      <p className="footer-text">❝ {quote} ❞</p>
      <p className="copyright">© 2025 Context Mini Project</p>
    </footer>
  );
};

export default Footer;

