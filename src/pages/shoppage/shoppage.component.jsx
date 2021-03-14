import React from "react";
import Category from "../../components/category.component/category.component";
import SHOP_DATA from "../shoppage/shopdata";
const Shoppage =()=> {
    return(
        SHOP_DATA.map((id , title , items)=>{
        
            return(<Category key ={id} title ={title} items= {items}/>);
        
        }));

}

export default Shoppage;

