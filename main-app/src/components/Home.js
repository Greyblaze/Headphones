import React from 'react';
import './Home.css';

export const Home = () => {
    return (
        <div className='home '>
            <div className='home-container'>
                <div className='home-image'>
                    <img src='./img/home.png' className='home-img'/>
                </div>
                <div className="home-data">
                        <div className="home-header">
                            <h1 className="home-title">On ear</h1>
                            <h2 class="home-subtitle">Beats 3</h2>
                        </div>

                        <div className="home-footer">
                            <h3 className="home-title-description">Overview</h3>
                            <p className="home-description">Enjoy award-winning Beats sound with wireless listening freedom and a sleek, 
                                streamlined design with comfortable padded earphones, delivering first-rate playback.
                            </p>
                            <a href="#" className="button button--flex">
                                <span className="button--flex">
                                    <i className="ri-shopping-bag-line button-icon"/> Add to Bag
                                </span>
                                <span className="home-price">$299</span>
                            </a>
                        </div>
                    </div>
            </div>
        </div>
    )
}