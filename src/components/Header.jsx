import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import ActiveLink from './ActiveLink';

const Header = () => {
    return (
        <nav className='flex justify-between my-6'>
            <div className="logo">
                <Link to='/' className='text-[36px] font-bold '>Food<span className='text-[#F46A06]'>Villa</span></Link>
            </div>
            <ul className='flex gap-5 font-bold items-center'>
                <ActiveLink to='/'>Home</ActiveLink>
                <ActiveLink to='/explore-foods'>Explore Foods</ActiveLink>
                <ActiveLink to='/orders'>Orders</ActiveLink>
            </ul>
        </nav>
    );
};

export default Header;