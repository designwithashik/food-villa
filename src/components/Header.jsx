import React from 'react';
import { NavLink } from 'react-router-dom';
import ActiveLink from './ActiveLink';

const Header = () => {
    return (
        <nav>
            <div className="logo"></div>
            <ul>
                <ActiveLink to='/'>Home</ActiveLink>
                <ActiveLink to='/explore-foods'>Explore Foods</ActiveLink>
                <ActiveLink to='/orders'>Orders</ActiveLink>
            </ul>
        </nav>
    );
};

export default Header;