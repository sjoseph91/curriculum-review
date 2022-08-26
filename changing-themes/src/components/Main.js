import React from 'react';
import { ThemeContext } from './ThemeContext';

export default function Main(){

    const {theme, toggleTheme} = React.useContext(ThemeContext);

    const customStyle = {
        backgroundColor: theme === "light" ? "white" : "black",
        color: theme === "light" ? "black" : "orange",
    }
    return (
        <main style={customStyle}>
            <h1>Click the button to toggle the **** Theme!</h1>
            <button onClick={toggleTheme}>Toggle Theme </button>
        </main>
    )
}