import React from 'react';
import './Navbar.css';

export const Navbar = () => {
    return (
        <>
        <div className='navbar'>
            <nav className='nav-container'>
                <div className='logo'>
                    <img src='./img/logo.png' />
                </div>
                <div className='menu'>
                    <li className='nav-item'>
                        <a href='#home' className='nav-link'>Home</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#specs' className='nav-link'>Specs</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#case' className='nav-link'>Case</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#products' className='nav-link'>Products</a>
                    </li>
                </div>
            </nav>
        </div>
    </>    
    )
}