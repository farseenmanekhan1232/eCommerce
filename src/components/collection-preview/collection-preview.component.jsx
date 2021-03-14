import React from 'react';
import MenuItem from '../menu-item/menu-item.component';

const CollectionPreview=( {title , items})=>{
    return(
        <div>
        <h1>
        {`${title}`}
        </h1>
        <div>
        {items.map((item)=>{
            return(<MenuItem title={item.name} classname={"collection-preview"}/>);
        })}
        </div>
        </div>
    );
}

export default CollectionPreview;