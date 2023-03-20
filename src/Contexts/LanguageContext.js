import { createContext, useState } from 'react';

export const LanguageContext = createContext(true);

export const LanguageProvider = ({ children }) => {
    const [english, englishState] = useState(true);

    const toggleLanguage = () => {
        englishState(!english);
    }

    return (
        <LanguageContext.Provider value={{ english, toggleLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
}