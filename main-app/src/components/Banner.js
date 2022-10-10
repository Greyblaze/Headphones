import React from 'react';
import './Banner.css';

export const Banner = () => {
    return (
        <div className='banner'>
            <div className='banner-container'>
                <div className='banner-txt'>
                    <h2>Immerse yourself in your music</h2>
                    <p>Get it now, upto 50% off.</p>
                    <a href="#" class="button button--flex">
                        <i class="ri-shopping-bag-line button__icon"></i> Shop Now
                    </a>
                </div>
                <div className='banner-img'>
                    <img src='./img/discount.png' />
                </div>
            </div>
        </div>
    )
}