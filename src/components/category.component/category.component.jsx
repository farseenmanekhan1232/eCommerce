import React from 'react';
import MenuItem from '../menu-item/menu-item.component';

const Category= (title , items)=>{
    return(
        <div>
        {title}
        {
            items.map(({title , imageUrl , id  , size})=>{
                return (<MenuItem title ={title} imageUrl={imageUrl} key={id} />);
           }
        }            
        </div>
    );
}

export default Category;