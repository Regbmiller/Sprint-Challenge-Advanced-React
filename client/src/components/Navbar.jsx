import React, { useState } from "react";
import { useDarkMode } from "../hooks/useDarkMode";

export const Navbar = () => {
    const [darkMode, setDarkMode] = useDarkMode(false);
    const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
        
    return (
    <nav className="navbar">
        <div className="dark-mode__toggle" onClick={toggleMode}>
            <div
                className={darkMode ? 'toggle toggled' : 'toggle'}
            />
        </div>
    </nav>
)
}


{/* <button onClick={() => setDarkMode(!darkMode)}>Dark Mode!</button> */}
