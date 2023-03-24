import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.module.css';
import App from './App';
import { ThemeProvider } from './Contexts/ThemeContext';
import { LanguageProvider } from './Contexts/LanguageContext';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <ThemeProvider>
        <LanguageProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </LanguageProvider>
    </ThemeProvider>
);

