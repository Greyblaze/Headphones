import React from 'react';
import './Case.css';

export const Case = () => {
    return(
        <div className='case'>
            <h1 className='home-title'>Case</h1>
            <div className='case-container'>
                <div className='case-img'>
                    <img src='./img/case.png'  />
                </div>
                <div className='case-txt'>
                    <p>With a comfortable and adaptable case so that you can store it whenever you want, and keep your durability forever.</p>
                    <a href="#" class="button button--flex">
                        <i class="ri-information-line button-icon"></i> More info
                    </a>
                </div>
            </div>
      </div>
    )
}