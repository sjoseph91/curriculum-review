import React from "react";
import { ThemeContext } from "./ThemeContext";

export default function Header(){

    const {theme} = React.useContext(ThemeContext);
    const customStyle = {
        backgroundColor: theme === "light" ? "grey" : "black",
        color: theme === "light" ? "black" : "white",
    }
    return (
        <header style={customStyle}>
            <nav >
                <a href="www.google.com">Home</a>
                <a href="www.google.com">About</a>
                <a href="www.google.com">Contact</a>
            </nav>
        </header>
    )
}