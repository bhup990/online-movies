import FiveStars from '@/components/atom/fivestars';
import React from 'react';
import Cards from '../cards';

const Customercards = (props) => {
    return (
        <div className='customersays-cards'>
            <div className='cards-item'>
                <strong>{props.username}</strong>
                <hr />
                <FiveStars />
                <h6>{props.comments}</h6>
                <Cards
                    img={props.reviewimg}
                    alt={props.alt}
                    productname={props.productname}
                />
            </div>
        </div>
    )
}

export default Customercards