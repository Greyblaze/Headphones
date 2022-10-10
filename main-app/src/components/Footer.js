import React from 'react';
import './Footer.css';

export const Footer = () => {
    return(
        <div className='footer'>
            <div className='foot-container'>
                <div className='foot-logo'>
                    <img src='./img/logo.png'/>
                </div>
                <div className='foot-product'>
                    <h4>Products</h4>
                    <p>Headphones</p>
                    <p>Earphones</p>
                    <p>Earbuds</p>
                    <p>Accessories</p>
                </div>
                <div className='foot-support'>
                    <h4>Support</h4>
                    <p>Product help</p>
                    <p>Register</p>
                    <p>Updates</p>
                    <p>Provides</p>
                </div>
                <div className='foot-news'>
                    <div className='fn-container'>
                        <p>Email</p>
                        <button>Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    )
}