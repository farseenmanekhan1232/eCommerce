import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.component.scss';

class Directory extends React.Component{
    constructor(){
        super();

        this.state={
            sections: [
                {
                title: 'hats',
                  imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                  id: 1,
                  size:'',
                  linkUrl: 'shop/hats'
                },
                {
                  title: 'JACKETS',
                  imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                  id: 2,
                  size:'',
                  linkUrl: 'shop/jackets'
                },
                {
                  title: 'SNEAKERS',
                  imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                  id: 3,
                  size:'',
                  linkUrl: 'shop/sneakers'
                },
                {
                  title: 'WOMEN',
                  imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                  size: 'large',
                  id: 4,
                  linkUrl: 'shop/womens'
                },
                {
                  title: 'MEN',
                  imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                  size: 'large',
                  id: 5,
                  linkUrl: 'shop/mens'
                }
              ]
        };
    }

    render(){
        return(
            <div className='directory-menu'>
            {    this.state.sections.map(({title , imageUrl , id  , size})=>{
                         return (<MenuItem title ={title} imageUrl={imageUrl} key={id} size={size} />);
                    }
            )
            }
            </div>
        );
    }
}
export default Directory;