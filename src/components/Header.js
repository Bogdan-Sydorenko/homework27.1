import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header className="header">
            <nav>
                <NavLink to="/" exact="true" activeClassName="active-link">
                    Головна
                </NavLink>
                <NavLink to="/contacts" activeClassName="active-link">
                    Контакти
                </NavLink>
                <NavLink to="/about" activeClassName="active-link">
                    Про мене
                </NavLink>
            </nav>
        </header>
    );
};

export default Header;
