import Wrapper from '@/components/atom/wrapper';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

// Images link importd 
import ArrowImage from '../../../assets/images/icons/down-arr.svg';
import Ordersummary from './ordersummarydata';
import Applycoupon from '../applycoupon';

const OrderSummary = () => {
    const [openMyCoupon, setopenMyCoupon] = useState(false);

    const HandleMyCoupon = () => {
        setopenMyCoupon(!openMyCoupon);
    }
    return (
        <>
            {
                Ordersummary.map((item, i) => {
                    return (
                        <Wrapper>
                            <div className='ordersummary' key={i}>
                                {item.heading === true ? <h5 className='header'>Order Summary</h5> : null}
                                {item.heading === true ? <hr /> : ""}
                                <ul>
                                    <li><span>Sub Total</span><span>$ {item.sub_total}</span></li>
                                    <li><span>Discount</span><span> {item.discount}</span></li>
                                    {item.apply_promo === true ? <li className='promo'><span>Apply Promo</span><span onClick={HandleMyCoupon}>View all <Image src={ArrowImage} alt='Arrow Icon' /></span></li> : null}
                                    {/* <li className='remove-promo'><p>Saved with Promo <span>Remove</span></p> <span>$ 10</span></li> */}
                                    <li><span>Delivery Charges</span><span>{item.delivery_charges}</span></li>
                                    <li><span>VAT</span><span>$ {item.vat}</span></li>
                                </ul>
                                <hr />
                                <div className='total-sec'><span>Total Amount</span><span>$ {item.total_amount}</span></div>

                                {item.proceed_to_checkout === true ? <Link href='/checkout' className='checkoutBtn'><button type='button'>Proceed to Checkout</button></Link> : null}
                            </div>

                            {item.continue_link === true ? <Link href={"#"} className='continuelink'><span>Continue Shopping</span></Link> : null}
                        </Wrapper>
                    )
                })
            }

            <Applycoupon openMyCoupon={openMyCoupon} HandleMyCoupon={HandleMyCoupon} />
        </>
    )
}

export default OrderSummary