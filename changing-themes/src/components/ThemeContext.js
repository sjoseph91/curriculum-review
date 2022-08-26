import React from 'react';

const ThemeContext = React.createContext();

function ThemeContextProvider(props){

    const [theme, setTheme] = React.useState("light");

    function toggleTheme(){
        setTheme(prev => prev === "light"? "dark" : "light")
    }

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export {ThemeContext, ThemeContextProvider}