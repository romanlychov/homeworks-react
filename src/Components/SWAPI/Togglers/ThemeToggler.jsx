import { useContext } from "react";
import { LanguageContext } from "../../../Contexts/LanguageContext";
import { ThemeContext } from "../../../Contexts/ThemeContext";

const ThemeToggler = () => {
    const { darkTheme, toggleTheme } = useContext(ThemeContext);
    const { english } = useContext(LanguageContext)

    return (
        <button onClick={toggleTheme}>
            {english ? `Change theme on ${darkTheme ? 'light' : 'dark'}` : `Змінити тему на ${darkTheme ? 'світлу' : 'темну'}`}
        </button>
    );
};

export default ThemeToggler;