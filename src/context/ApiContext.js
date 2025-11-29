// src/context/ApiContext.js
import { createContext, useEffect, useState } from "react";

export const ApiContext = createContext();

export const ApiProvider = ({ children }) => {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => {
        if (!res.ok) throw new Error("Network response not ok");
        return res.json();
      })
      .then((data) => {
        setPost(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message || "Fetch error");
        setLoading(false);
      });
  }, []);

  return (
    <ApiContext.Provider value={{ post, loading, error }}>
      {children}
    </ApiContext.Provider>
  );
};
