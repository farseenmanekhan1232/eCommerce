import React from "react";
import SHOP_DATA from '../shoppage/shopdata';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';
const Shoppage =()=> {
    return(
        SHOP_DATA.map((collection)=>{
            return(<CollectionPreview key={collection.id} title = {collection.title} items={collection.items} />)
        })
        );

}
export default Shoppage;

