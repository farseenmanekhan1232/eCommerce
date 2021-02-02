import React from 'react';
import './menu-item.component.scss';

const MenuItem = ({title}) =>{
    <div className='menu-item'>
        <div className='content'>
            <h1 className='title'>{title.capitilize()}</h1>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>
}

export default MenuItem;