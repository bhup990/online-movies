import React, { useState } from 'react';
import Image from 'next/image';
import Layout from '@/layouts/afterlogin';
import Link from 'next/link';
import AddressList from './addresslisting';

// Images links imported 
import Tickicon from '@/assets/images/icons/tick-right-icon.svg';
import OrderSummary from '@/components/molecules/ordersummary';
import Applycoupon from '@/components/molecules/applycoupon';

const Checkout = () => {
  const [Checkbox, setCheckbox] = useState(false);
  const [Showbillingdetails, setShowbillingdetails] = useState(false);

  const Handlecheckbox = () => {
    setCheckbox(!Checkbox);
    setShowbillingdetails(!Showbillingdetails);
  }
  return (
    <Layout>
      <div className='checkout-wrapper'>
        <div className='container'>
          <h6>Checkout</h6>

          <div className='main-wrapper'>
            <div className='right-side-form'>
              <div className='form-wrapper'>
                <div className='contact-details'>
                  <span className='mandatory-fields'>* Mandatory Fields</span>
                  <h6>Contact Details</h6>
                  <form>
                    <div className='form-group'>
                      <label>Full Name*</label>
                      <input type='text' placeholder='Enter First and Last Name' />
                    </div>

                    <div className='form-group'>
                      <label>Email ID*</label>
                      <input type='text' placeholder='Enter Email Id' />
                    </div>

                    <div className='form-group'>
                      <label>Mobile*</label>
                      <ul>
                        <li>
                          <select aria-readonly>
                            <option>+91</option>
                            <option>+341</option>
                            <option>+231</option>
                            <option>+923</option>
                          </select>
                        </li>
                        <li><input type='number' placeholder='9865890245' readOnly /></li>
                      </ul>
                    </div>
                  </form>
                </div>

                <div className='shipping-details'>
                  <h6>Shipping  Details</h6>

                  <form>
                    <div className='form-group'>
                      <label>Address 1*</label>
                      <input type='text' placeholder='Enter your address' />
                    </div>

                    <div className='form-group'>
                      <label>Address 2</label>
                      <input type='text' placeholder='Enter your address' />
                    </div>

                    <div className='form-group'>
                      <label>Country*</label>
                      <select>
                        <option>India</option>
                        <option>India</option>
                        <option>India</option>
                        <option>India</option>
                      </select>
                    </div>

                    <div className='form-group'>
                      <label>State*</label>
                      <select>
                        <option>Maharashtra</option>
                        <option>Gujrat</option>
                        <option>Up</option>
                        <option>Mp</option>
                      </select>
                    </div>

                    <div className='form-group'>
                      <label>City*</label>
                      <select>
                        <option>Thane</option>
                        <option>Kurla</option>
                        <option>Chembur</option>
                        <option>wroli</option>
                      </select>
                    </div>

                    <div className='form-group'>
                      <label>Pincode*</label>
                      <input type='number' />
                    </div>
                  </form>

                  <AddressList />

                  <div className='checkbox'>
                    <div className={`box ${Checkbox ? 'boxstyle' : " "}`} onClick={Handlecheckbox}>
                      <Image src={Tickicon} alt='Tick icon' />
                    </div>
                    <span>Is your billing address different?</span>
                  </div>

                  <div className='add-new-address'>
                    <hr />
                    <button type='type' className='new-address-btn'>Add New Address</button>
                  </div>

                </div>

                <div className={`billing-details ${Showbillingdetails ? "displayblk" : " "}`}>
                  <h6>Billing Details</h6>

                  <form>
                    <div className='form-group'>
                      <label>Address 1*</label>
                      <input type='text' placeholder='Enter your address' />
                    </div>

                    <div className='form-group'>
                      <label>Address 2</label>
                      <input type='text' placeholder='Enter your address' />
                    </div>

                    <div className='form-group'>
                      <label>Country*</label>
                      <select>
                        <option>India</option>
                        <option>India</option>
                        <option>India</option>
                        <option>India</option>
                      </select>
                    </div>

                    <div className='form-group'>
                      <label>State*</label>
                      <select>
                        <option>Maharashtra</option>
                        <option>Gujrat</option>
                        <option>Up</option>
                        <option>Mp</option>
                      </select>
                    </div>

                    <div className='form-group'>
                      <label>City*</label>
                      <select>
                        <option>Thane</option>
                        <option>Kurla</option>
                        <option>Chembur</option>
                        <option>wroli</option>
                      </select>
                    </div>

                    <div className='form-group'>
                      <label>Pincode*</label>
                      <input type='number' />
                    </div>
                  </form>

                  <AddressList />

                  <div className='add-new-address'>
                    <hr />
                    <button type='type' className='new-address-btn'>Add New Address</button>
                  </div>

                </div>
              </div>

              <div className='saveBtn'><Link href={"/checkoutreview"}><button type='button'>Save and Continue</button></Link></div>
            </div>

            <OrderSummary />
          </div>

        </div>
      </div>
      <Applycoupon />
    </Layout>
  )
}

export default Checkout