import { React, useState, useEffect } from 'react'
import Layout from '@/layouts/Main';
import OrderSummary from "../../components/molecules/ordersummary";
import Checkbox from '../../components/atom/checkbox/input';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { VscChromeClose } from 'react-icons/vsc';

const CheckoutReview = () => {

    const [checkbox, setCheckbox] = useState(true);
    const handleCheckboxChange = () => {
        setCheckbox(!checkbox)
    }

    const handelFormSubmit = (e) => {
        e.preventDefault()
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const TermsAndConditions = () => (
        <Popup trigger={<span>Terms and Conditions</span>} modal aria-describedby={"pinHome"}>
            {close => (
                <div className='terms-popup'>
                    <div className='pop-title'>
                        <h2>Terms and Conditions</h2>
                        <a className="close" onClick={close}><span><VscChromeClose className="closebtn" /></span></a>
                    </div>

                    <div className='pop-body'>
                        <div className='inner-div'>
                            <h3 className="title">Lorem Ipsum Is Simply Dummy</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been industry's standard dummy text ever since thes, when an unknown printer took a galley of and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>

                            <h3 className="title">Lorem Ipsum Is Simply Dummy</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been industry's standard dummy text ever since thes, when an unknown printer took a galley of and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>

                            <ul>
                                <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                                <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                                <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )}
        </Popup>
    );

    return (
        <Layout>
            <div className='checkout-review'>

                <div className='container'>

                    <div className='contentWrapper'>

                        <div className="heading">
                            <h2>Review</h2>
                        </div>

                        <div className="checkout-summary">
                            <div className="details">
                                <ul>
                                    <li>
                                        <h4>Contact Details</h4>
                                        <div className='contact'>
                                            <div className='email'><span>Email ID</span> <span>Kaushalranpura@gmail.com</span></div>
                                            <div className='mobile'><span>Mobile</span> <span>91-9865890245</span></div>
                                        </div>
                                    </li>
                                    <li>
                                        <h4>Billing Address</h4>
                                        <div>
                                            <h6>Kaushal Ranpura</h6>
                                            <address>501, A, Jyouti Tower, Thakur Village, M Rao Marg, Kandivali (E), Mumbai, Maharashtra, 400 045. India</address>
                                        </div>
                                    </li>
                                    <li>
                                        <h4>Shipping Address</h4>
                                        <div>
                                            <h6>Kaushal Ranpura</h6>
                                            <address>405 A Wing MK Plaza, Ghodbunder Rd, Anand Nagar, Thane West, Thane, Maharashtra 400615. India</address>
                                        </div>
                                    </li>
                                </ul>

                                <div className="make-info">
                                    <div className="checkbox">
                                        <Checkbox
                                            autoComplete="off"
                                            id={"agree"}
                                            type={"checkbox"}
                                            name={"checkbox"}
                                            inputClass={"styled-checkbox"}
                                            onChange={handleCheckboxChange}
                                            value={checkbox}
                                            checked={true}
                                        />
                                        <label for="agree">I agree to {TermsAndConditions()} </label>
                                    </div>
                                    <button type="submit" onClick={handelFormSubmit}><span>Make Payment</span></button>
                                </div>
                            </div>

                            <OrderSummary />
                        </div>

                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default CheckoutReview;