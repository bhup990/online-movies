import React,{useState} from 'react';
import Image from 'next/image';
import Layout from '@/layouts/Main';
import OrderSummary from '@/components/molecules/ordersummary';
import { HiOutlineHeart, HiHeart } from 'react-icons/hi';

// Imported Images link 
import shop_for_3 from '../../assets/images/shop_for_3.png';
import DeleteIcon from '../../assets/images/icons/delete-icon.svg';
import Greenheart from '../../assets/images/icons/greenheart.svg';



const Shoppingcartpage = () => {
    const [likeWhistlist, setlikeWhistlist] = useState(true);

    const handleWhistlist = () => {
        setlikeWhistlist(!likeWhistlist)
    }

    return (
        <Layout>
            <div className='shopping-cart'>
                <div className='container'>
                    <h5>Your Shopping Cart</h5>
                    <div className='content-wrapper'>
                        <div className='product-cart'>
                            <Image src={shop_for_3} alt='shop_for_3' />
                            <div className='product-details'>
                                <small>Clutch Story</small>
                                <h6>Product Name</h6>
                                <p>Color <br /><span></span></p>
                                <div className='size'>
                                    <span>Size</span>
                                    <div className='displayflx'>
                                        <div className='incr-decr'>
                                            <div className='border-line'>
                                                <span>38</span>
                                                <div className='incr-decr-btn'>
                                                    <button type='button'>-</button>
                                                    <input type='number' value='1' />
                                                    <button type='button'>+</button>
                                                </div>
                                            </div>
                                            <small>$ 100</small>
                                        </div>
                                        <div className='remove-btn'>
                                            <span className='money-text'>$ 100</span>
                                            <Image src={DeleteIcon} alt='DeleteIcon' />
                                            <span>Remove</span>
                                        </div>
                                    </div>

                                    <div className='displayflx'>
                                        <div className='incr-decr'>
                                            <div className='border-line'>
                                                <span>38</span>
                                                <div className='incr-decr-btn'>
                                                    <button type='button'>-</button>
                                                    <input type='number' value='1' />
                                                    <button type='button'>+</button>
                                                </div>
                                            </div>
                                            <small>$ 100</small>
                                        </div>
                                        <div className='remove-btn'>
                                            <span className='money-text'>$ 100</span>
                                            <Image src={DeleteIcon} alt='DeleteIcon' />
                                            <span >Remove</span>
                                        </div>
                                    </div>

                                    <div className='movetowhistlist' onClick={handleWhistlist}>
                                        {/* <Image src={Greenheart} alt='Heart_icon' /> */}
                                        {likeWhistlist ? <HiOutlineHeart /> : <HiHeart />}
                                        <span>Move to Wishlist</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <OrderSummary />
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Shoppingcartpage