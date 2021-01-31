import React from 'react';
import './Homepage.css';

const HomepageCard = ({card , normal}) =>{
    if (normal){
        return(     <div className='HomepageCard normal'>
                        <div className='Homepage-font'>
                                {card}
                        </div>
                    </div>
        );
    
    }
    else{
        return(  
                    <div className='HomepageCard'>
                        <div className='Homepage-font'>
                                {card}
                        </div>
                    </div>
        );
    
    }
}
export default HomepageCard;