import React from 'react';
import Layout from '@/layouts/Main';
import Link from 'next/link';
import Image from 'next/image';
import { FaTruck } from "react-icons/fa";
import { ImFilePdf } from "react-icons/im";
import Dress from '../../assets/images/shop_for_3.png';
import OrderSummary from "../../components/molecules/ordersummary/orderSummary";

const ThankYouOrder = () => {
    return (
        <Layout>
            <div className='thankyou-order'>

                <div className='container'>
                    <div className='breadcrumb'>
                        <ul>
                            <li><Link href="/">Home</Link></li>
                            <li><Link href={'#'}>Thank You</Link></li>
                        </ul>
                    </div>

                    <div className='contentWrapper'>

                        <div className="heading">
                            <h2>Thank you for your Order</h2>
                            <h5>Your payment has been received. We’ll intiate your order shortly</h5>
                        </div>

                        <div className="order-info">
                            <div className="track-order">
                                <div className="order-details">
                                    <ul>
                                        <li>Order Number : <strong>2326562</strong></li>
                                        <li>Order Status : <strong>Confirmed</strong></li>
                                    </ul>
                                </div>
                                <div className="track-order-details">
                                    <ul>
                                        <li><a href="#" className="btn btn-order"><FaTruck /> Track Order</a></li>
                                        <li><a href="#" className="btn btn-invoice"><ImFilePdf /> Download Invoice</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="address-details">
                            <div className="billing-shipping">
                                <ul>
                                    <li>
                                        <h4>Billing Address</h4>
                                        <div className="custom-address">
                                            <h6>Kaushal Ranpura</h6>
                                            <address>501, A, Jyouti Tower, Thakur Village, M Rao Marg, Kandivali (E), Mumbai, Maharashtra, 400 045. India</address>
                                        </div>
                                    </li>
                                    <li>
                                        <h4>Shipping Address</h4>
                                        <div className="custom-address">
                                            <h6>Kaushal Ranpura</h6>
                                            <address>405 A Wing MK Plaza, Ghodbunder Rd, Anand Nagar, Thane West, Thane, Maharashtra 400615. India</address>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="thank-order-summary">
                            <h4>Your order summary</h4>
                            <div className="your-order-summary">
                                <div className="left">
                                    <ul>
                                        <li>
                                            <div className="order-product">
                                                <div className="order_product_details">
                                                    <ul>
                                                        <li>
                                                            <Image src={Dress} alt="Dress" title="Dress"></Image>
                                                        </li>
                                                        <li className="produtInfo">
                                                            <h6>Clutch Story</h6>
                                                            <h4>Product Name</h4>
                                                            <div className='type'>
                                                                <div className='color'>Color : <span>&nbsp;</span></div>
                                                                <div className='size'>
                                                                    <p>Size : <span>38</span></p>
                                                                    <p>Size : <span>40</span></p>
                                                                </div>
                                                                <div className='qty'>
                                                                    <p>Qty: <span>1</span></p>
                                                                    <p>Qty: <span>1</span></p>
                                                                </div>
                                                                <div className="price">
                                                                    <p>$ 100</p>
                                                                    <p>$ 100</p>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <OrderSummary />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default ThankYouOrder;