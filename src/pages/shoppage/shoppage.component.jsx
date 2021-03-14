import React from "react";
import Category from "../../components/category.component/category.component";
import SHOP_DATA from "../../";
class Shoppage extends React.Component {
    render(
        SHOP_DATA.map((id , title , items)=>{
        
            return(<Category key ={id} title ={title} items= {items}/>);
        
        });

}

export default Shoppage;

