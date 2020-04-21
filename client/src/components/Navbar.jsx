import React from "react";
import { useDarkMode } from "../hooks/useDarkMode";

const Navbar = () => {
    const [ darkMode, setDarkMode ] = useDarkMode(false)
    return (
    <div>
        <button onClick={() => setDarkMode(!darkMode)}>Dark Mode!</button>
    </div>
    )
}

export default Navbar; 