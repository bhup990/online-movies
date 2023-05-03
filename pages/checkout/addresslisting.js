import React from 'react'
import Tickicon from '@/assets/images/icons/tick-right-icon.svg';
import Image from 'next/image';

const AddressList = () => {
    return (
        <div className='address-list'>
            <ul>
                <li><h6>Kaushal Ranpura</h6></li>
                <li><p>501, A, Jyouti Tower, Thakur Village, M Rao Marg, Kandivali (E), Mumbai, Maharashtra, 400 045. India</p></li>
                <li><button type='button'><Image src={Tickicon} alt='Write Trick Icon'/>Shipping to this Address</button></li>
                <li><span>Edit</span>|<span>Remove</span></li>
            </ul>
        </div>
    )
}

export default AddressList;