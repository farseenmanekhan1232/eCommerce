import React from 'react';

const CollectionPreview=( {title , items})=>{
    return(
        <div>
        <h1>
        {`${title}`}
        </h1>
        <div>
        {items.filter((item , ind)=>ind<4).map((item)=>{
            return(
                <div>
                {item.name}
                </div>
            );
        })}
        </div>
        </div>
    );
}

export default CollectionPreview;