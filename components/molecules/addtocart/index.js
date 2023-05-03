import React from 'react';
import Image from 'next/image';


// Images link Imported 
import CloseIcon from '@/assets/images/icons/close-icon.svg';
import Shop_for_3 from '@/assets/images/shop_for_3.png';
import DeleteIcon from '@/assets/images/icons/delete-icon.svg';
import Link from 'next/link';

const AddtoCart = ({ handleAddtoCart, addCartActive }) => {
  return (
    <div className={`addtocart-wrapper ${addCartActive ? '' : 'displayblock'}`}>
      <div className='overlay'></div>
      <div className='mycart'>
        <h5>My Cart <Image src={CloseIcon} alt='Close Icon' onClick={handleAddtoCart} /></h5>
        <div className='selected-product'>
          <Image src={Shop_for_3} alt='shop_for_3' />
          <div className='product-info'>
            <p>Clutch Story</p>
            <h6>Product Name</h6>
            <div className='selected-color'><span>Color</span><span className='color-circle'></span></div>
            <div className='size'>
              <small>Size</small>

              <div className='incre-total'>
                <div className='size-qty'>
                  <div className='incr-dcr'>
                    <div className='control-btn'>
                      <span>38</span>
                      <div className='border-line'>
                        <button>-</button>
                        <input type='number' value='1' readOnly />
                        <button type='button'>+</button>
                      </div>
                    </div>
                    <span className='money-sign'>$ 100</span>
                  </div>

                  <div className='dlt'>
                    <span>$ 100</span>
                    <Image src={DeleteIcon} alt='Delete icon' />
                  </div>
                </div>
              </div>

              <div className='incre-total'>
                <div className='size-qty'>
                  <div className='incr-dcr'>
                    <div className='control-btn'>
                      <span>38</span>
                      <div className='border-line'>
                        <button>-</button>
                        <input type='number' value='1' readOnly />
                        <button type='button'>+</button>
                      </div>
                    </div>
                    <span className='money-sign'>$ 100</span>
                  </div>

                  <div className='dlt'>
                    <span>$ 100</span>
                    <Image src={DeleteIcon} alt='Delete icon' />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div className='checkout-process'>
          <div className='btns'>
            <Link href='/shoppingcart'><button type='button' className='view-cart'>View Cart</button></Link>
            <Link href='/checkout'><button type='button' className='checkout-btn'>Proceed to Checkout</button></Link>
          </div>
          <span>$ 200</span>
        </div>
      </div>
    </div>
  )
}

export default AddtoCart;