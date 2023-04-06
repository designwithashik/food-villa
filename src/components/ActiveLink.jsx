import React from 'react';
import { NavLink } from 'react-router-dom';

const ActiveLink = ({to, children}) => {
    return (
        <li>
            <NavLink to={to} className={({ isActive }) => isActive ? 'text-black' : 'text-[#F46A06]'}>
                {children}
            </NavLink>
        </li>
    );
};

export default ActiveLink;