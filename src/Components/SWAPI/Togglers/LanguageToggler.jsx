import { useContext } from "react";
import { LanguageContext } from "../../../Contexts/LanguageContext";

const LanguageToggler = () => {

    const { english, toggleLanguage } = useContext(LanguageContext);

    return (
        <button onClick={toggleLanguage}>
            {english ? 'Switch to UA' : 'Перейти на англійську'}
        </button>
    );
};

export default LanguageToggler;