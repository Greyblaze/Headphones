import React from 'react';
import './Spec.css';

export const Spec = () => {
    return (
        <div className='specs'>
            <h1 className='home-title'>Specs</h1>
            <div className='spec-container'>
                <div className='spec-txt'>
                   <div className='spec-data alpha'>
                       <h4>Connection</h4>
                       <p>Bluetooth v5.2</p>
                   </div>
                   <div className='spec-data beta'>
                       <h4>Battery</h4>
                       <p>Duration 40h</p>
                   </div>
                   <div className='spec-data beta'>
                       <h4>Load</h4>
                       <p>Fast charge 4.2-AAC</p>
                   </div>
                   <div className='spec-data alpha'>
                       <h4>Microphone</h4>
                       <p>Supports Apple Siri and Google</p>
                   </div>
                </div>
                <div className='spec-img'>
                    <img src='./img/specs.png'/>
                </div>
            </div>
        </div>
    )
}