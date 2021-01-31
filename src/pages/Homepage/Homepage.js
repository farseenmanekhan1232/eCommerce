import React from 'react';
import HomepageCard from './HomepageCard'
const Homepage=()=>{
return(
    <div style={{
        display:'flex',
        alignItems:'center',
        flexWrap:'wrap',
        height:'100%',
        width:'100%'
          }}>
          <HomepageCard card='Men' normal={false}/>
          <HomepageCard card='Women' normal={false}/>
            <HomepageCard card ='Accessories'   normal={true}/>
            <HomepageCard card ='Shoes'  normal={true}/>
            <HomepageCard card='Jackets' normal={true}/>
        </div>

);
}
export default Homepage;