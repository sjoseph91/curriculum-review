import React from "react";  
import { ThemeContext } from "./ThemeContext";

export default function Footer(){

    const {theme} = React.useContext(ThemeContext);
    const customStyle = {
        backgroundColor: theme === "light" ? "grey" : "black",
        color: theme === "light" ? "black" : "white",
    }

    return (
        <footer style={customStyle}>
            Here is the footer
        </footer>
    )
}