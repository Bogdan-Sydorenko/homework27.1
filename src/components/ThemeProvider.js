import React, { createContext, useContext, useState, useEffect } from 'react';
import '../theme.css';

// Створення контексту
const ThemeContext = createContext();

// Хук для доступу до контексту теми
export const useTheme = () => useContext(ThemeContext);

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');

    // Перемикання теми
    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme); // Збереження у LocalStorage
    };

    // Ініціалізація теми при завантаженні сторінки
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') || 'light';
        setTheme(savedTheme);
    }, []);

    // Додавання теми до атрибута `data-theme` HTML
    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
