import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Contacts from './pages/Contacts';
import About from './pages/About';
import ThemeProvider from './components/ThemeProvider';

const App = () => {
    return (
        <ThemeProvider>
            <Router>
                <div className="app">
                    <Header />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/contacts" element={<Contacts />} />
                        <Route path="/about" element={<About />} />
                    </Routes>
                </div>
            </Router>
        </ThemeProvider>
    );
};

export default App;
