import React, { useState } from 'react';
import Addcarticon from '../../../assets/images/icons/addtocarticon.svg';
import Image from 'next/image';

const ToastPopup = () => {
    const [Openpopup, setOpenpopup] = useState(true);
    
    return (
        <div className='toastpopup'>
            <div className='popup'>
                <Image src={Addcarticon} alt='Add to cart icon' />
                <span>Added TO CART</span>
            </div>
        </div>
    )
}

export default ToastPopup;