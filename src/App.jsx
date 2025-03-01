import { useState, useEffect } from 'react';
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./components/sections/Home";
import About from "./components/sections/About";
import Contact from "./components/sections/Contact";
import Products from "./components/sections/Products";
import RegistrationForm from "./components/sections/RegistrationForm"; // Import the RegistrationForm component

export default function App() {
  // Initialize theme: get from localStorage or set to 'light' by default
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  // Update the <html> class and save theme to localStorage on change
  useEffect(() => {
    localStorage.setItem('theme', theme);
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  // Theme toggle function
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
        <Route path="/register" element={<RegistrationForm />} /> {/* Add the registration route */}
      </Routes>
    </div>
  );
}
