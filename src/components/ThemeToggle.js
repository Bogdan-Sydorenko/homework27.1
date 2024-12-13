import React from 'react';
import { useTheme } from './ThemeProvider';

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button onClick={toggleTheme}>
            {theme === 'light' ? 'Темна тема' : 'Світла тема'}
        </button>
    );
};

export default ThemeToggle;
