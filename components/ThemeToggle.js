import React, { useEffect, useState } from 'react';
import './ThemeToggle.css';

function ThemeToggle({ onLogout }) {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.body.classList.remove('light', 'dark');
    document.body.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <div className="theme-section">
      <div className="theme-toggle">
        <button onClick={() => setTheme('light')}>Light Mode</button>
        <button onClick={() => setTheme('dark')}>Dark Mode</button>
      </div>
      <button className="logout-btn" onClick={onLogout}>Logout</button>
    </div>
  );
}

export default ThemeToggle;
