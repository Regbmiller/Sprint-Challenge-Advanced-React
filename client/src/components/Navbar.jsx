import React from "react";
import { useDarkMode } from "../hooks/useDarkMode";

export const Navbar = () => {
    const [ darkMode, setDarkMode ] = useDarkMode(false)
    return (
    <div>
        <button onClick={() => setDarkMode(!darkMode)}>Dark Mode!</button>
    </div>
    )
}

