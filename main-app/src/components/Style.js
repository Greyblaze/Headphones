import React from 'react';
import './Style.css';

export const Style = () => {
    return (
        <div className='style'>
            <h1 className='home-title'>Choose Your Style</h1>
            <div className='style-container'>
                <div className='products'>
                    <div className='col'>
                        <img src='./img/product1.png'/>
                        <div className='sub'>
                            <div className='sub-txt'>
                                <h4>Black</h4>
                                <p>$249</p>
                            </div>
                            <button class="button button--flex products__button">
                                <i class="ri-shopping-bag-line button__icon"></i>
                            </button>
                        </div>
                    </div>
                    <div className='col'>
                        <img src='./img/product2.png'/>
                        <div className='sub'>
                            <div className='sub-txt'>
                                <h4>Black</h4>
                                <p>$249</p>
                            </div>
                            <button class="button button--flex products__button">
                                <i class="ri-shopping-bag-line button__icon"></i>
                            </button>
                        </div>
                    </div>
                    <div className='col'>
                        <img src='./img/product3.png'/>
                        <div className='sub'>
                            <div className='sub-txt'>
                                <h4>Black</h4>
                                <p>$249</p>
                            </div>
                            <button class="button button--flex products__button">
                                <i class="ri-shopping-bag-line button__icon"></i>
                            </button>
                        </div>
                    </div>
                </div>

                <div className='products'>
                <div className='col'>
                        <img src='./img/product4.png'/>
                        <div className='sub'>
                            <div className='sub-txt'>
                                <h4>Black</h4>
                                <p>$249</p>
                            </div>
                            <button class="button button--flex products__button">
                                <i class="ri-shopping-bag-line button__icon"></i>
                            </button>
                        </div>
                    </div>
                    <div className='col'>
                        <img src='./img/product5.png'/>
                        <div className='sub'>
                            <div className='sub-txt'>
                                <h4>Black</h4>
                                <p>$249</p>
                            </div>
                            <button class="button button--flex products__button">
                                <i class="ri-shopping-bag-line button__icon"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}