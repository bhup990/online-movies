import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Slider from 'react-slick';
import Cards from '../cards';
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel, } from 'react-accessible-accordion';
import InnerZoomImage from '../innerzoomimage';
import Productdetailsdata from './productdetaildata';
import { Tooltip } from '@nextui-org/react';
import { HiOutlineHeart, HiHeart } from 'react-icons/hi';
import ToastPopup from '@/components/atom/toastpopup';
import Modalcreateaccount from '@/components/atom/createaccountpopup';


// Accordion default css link 
import 'react-accessible-accordion/dist/fancy-example.css';

// Import images link 
import ProductImg1 from '@/assets/images/pagelisting/product-images.png';
import ProductImg2 from '@/assets/images/pexels-dastan-khdir-16317494.jpg';
// import ProductImg2 from '../../../assets/images/'
import SearchIcon from '@/assets/images/pagelisting/search-icon.svg';
import HeartIcon from '@/assets/images/pagelisting/heart-icon.svg';
import ShareIcon from '@/assets/images/pagelisting/share-icon.svg';
import LockIcon from '@/assets/images/pagelisting/btn-lock-icon.svg';
// Imported images links 
import SameBrand1 from '@/assets/images/pagelisting/samebrand1.png';
import SameBrand2 from '@/assets/images/pagelisting/samebrand2.png';
import SameBrand3 from '@/assets/images/pagelisting/samebrand3.png';
import SameBrand4 from '@/assets/images/pagelisting/samebrand4.png';


const SameBrandData = [
    {
        "id": "01",
        "imgpath": SameBrand1,
        "imgname": "by Clutch Story",
        "decription": "Linen and Rayon Beige"
    },

    {
        "id": "02",
        "imgpath": SameBrand2,
        "imgname": "by Clutch Story",
        "alt": "featuredproduct_1",
        "decription": "Viscose and Polyester Caramel"
    },

    {
        "id": "01",
        "imgpath": SameBrand3,
        "imgname": "by Clutch Story",
        "decription": "Linen and Rayon Beige"
    },

    {
        "id": "01",
        "imgpath": SameBrand4,
        "imgname": "by Clutch Story",
        "decription": "Viscose Dark Brown-Multicolor"
    },
    {
        "id": "01",
        "imgpath": SameBrand1,
        "imgname": "by Clutch Story",
        "decription": "Linen and Rayon Beige"
    },

    {
        "id": "02",
        "imgpath": SameBrand2,
        "imgname": "by Clutch Story",
        "alt": "featuredproduct_1",
        "decription": "Viscose and Polyester Caramel"
    },

    {
        "id": "01",
        "imgpath": SameBrand3,
        "imgname": "by Clutch Story",
        "decription": "Linen and Rayon Beige"
    },

    {
        "id": "01",
        "imgpath": SameBrand4,
        "imgname": "by Clutch Story",
        "decription": "Viscose Dark Brown-Multicolor"
    }

]

const Productdetails = () => {

    const [zoomImg, setzoomImg] = useState(Productdetailsdata[0].imgpath);
    const [zoomImgAlt, setzoomImgAlt] = useState(Productdetailsdata[0].alt);
    const [likeWhistlist, setlikeWhistlist] = useState(true);
    const [toastup, setToastup] = useState(false);
    const [addtyocartbtn, setAddtyocartbtn] = useState(false);
    const [modalCreateAcc, setModalCreateAcc] = useState(true);

    const handleModalPopup = () => {
        setModalCreateAcc(false);
    }

    useEffect(() => {
        setTimeout(() => {
            setToastup(false);
            setAddtyocartbtn(false);
        }, 5000);
    }, [toastup])

    const handleAddtoCart = () => {
        setToastup(true);
        setAddtyocartbtn(true);
    }

    // Whistlist click function 
    const handleWhistlist = () => {
        setlikeWhistlist(!likeWhistlist)
    }

    // Zoom Images handling 
    const handleZoomImg = (value) => {
        setzoomImg(value.imgpath)
        setzoomImgAlt(value.alt)
    }

    const settings = {
        centerMode: false,
        infinite: true,
        dots: false,
        arrows: true,
        slidesToShow: 4,
        speed: 500
    }
    return (
        <>
            <div className='container'>
                <div className='product-details'>
                    <div className='breadcrumb'>
                        <ul>
                            <li><Link href="/">Home</Link></li>
                            <li><Link href={'#'}>Women</Link></li>
                            <li><Link href={'#'}>Clothing</Link></li>
                            <li><Link href={'#'}>Shirts</Link></li>
                            <li className='active'><Link href={'#'}>by Clutch Story</Link></li>
                        </ul>
                    </div>

                    <div className='details-wrapper'>
                        <div className='image-magnify'>
                            <div className='small-images'>
                                <ul>
                                    {
                                        Productdetailsdata.map((item, i) => {
                                            return <li id={i} onClick={() => handleZoomImg(item)}><Image src={item.imgpath} alt={item.alt} /></li>
                                        })
                                    }
                                </ul>
                            </div>
                            <div className='large-image'>
                                {/* <InnerImageZoomCus /> */}
                                <InnerZoomImage
                                    src={zoomImg}
                                    zoomimgalt={zoomImgAlt}
                                />
                            </div>
                            <div className='bottom-icon'>
                                <ul>
                                    <li><Tooltip content={"Hover Image to Zoom"}><Image src={SearchIcon} alt='Search Icon' /></Tooltip></li>
                                    <li> <Tooltip content={"Add to Wishlist"} className='wishlist' onClick={handleWhistlist}>
                                        {likeWhistlist ? <HiOutlineHeart /> : <HiHeart />}
                                    </Tooltip></li>
                                    <li><Image src={ShareIcon} alt='Share Icon' /></li>
                                </ul>
                            </div>

                        </div>

                        <div className='details'>
                            <div className='label'>Bestseller</div>

                            <div className='product-name'>
                                <h5>Product Name</h5>
                                <p>By a Clutch Story</p>
                                <span>$ 100</span>
                                <small>Taxes & Duties calculated at checkout</small>
                            </div>

                            <div className='select-color'>
                                <span>Color</span>
                                <ul>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                </ul>
                            </div>

                            {/* This select-size section show if product have size other wise hide   */}
                            {/* <div className='select-size'>
                                <p>Size<span>Size Chart</span></p>
                                <div className='custom-dropdown'>
                                    <div className='dropdown'><p>Choose Size</p></div>

                                    <div className='dropdown-list'>
                                        <div className='dropdown-option'>
                                            <span>38</span>
                                            <div className='incre-decre'>
                                                <button type='button'>-</button>
                                                <input type='number' value="0" />
                                                <button type='button'>+</button>
                                            </div>
                                        </div>
                                        <div className='dropdown-option'>
                                            <span>40</span>
                                            <div className='incre-decre'>
                                                <button type='button'>-</button>
                                                <input type='number' value="0" />
                                                <button type='button'>+</button>
                                            </div>
                                        </div>
                                        <div className='dropdown-option'>
                                            <span>42</span>
                                            <div className='incre-decre'>
                                                <button type='button'>-</button>
                                                <input type='number' value="0" />
                                                <button type='button'>+</button>
                                            </div>
                                        </div>
                                        <div className='dropdown-option'>
                                            <span>44</span>
                                            <div className='incre-decre'>
                                                <button type='button'>-</button>
                                                <input type='number' value="0" />
                                                <button type='button'>+</button>
                                            </div>
                                        </div>
                                        <div className='dropdown-option'>
                                            <span>46</span>
                                            <div className='incre-decre'>
                                                <button type='button'>-</button>
                                                <input type='number' value="0" />
                                                <button type='button'>+</button>
                                            </div>
                                        </div>
                                        <div className='dropdown-option'>
                                            <span>48</span>
                                            <div className='incre-decre'>
                                                <button type='button'>-</button>
                                                <input type='number' value="0" />
                                                <button type='button'>+</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='add-to-cart'>
                                    <button type='button'><Image src={LockIcon} alt="Lock Icon" />ADD TO CART</button>
                                </div>
                            </div> */}

                            {/* This section show when size is not available  */}
                            <div className='quantity'>
                                <small>Quantity</small>
                                <ul>
                                    <li><select>
                                        <option selected>1</option>
                                        <option >3</option>
                                        <option >4</option>
                                        <option >5</option>
                                    </select></li>
                                    <li>
                                        <div className='qty-addtocart'>
                                            <button className={`${addtyocartbtn ? "clickbtn" : ""}`} type='button' onClick={handleAddtoCart}><Image src={LockIcon} alt="Lock Icon" />ADD TO CART</button>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className='crafting-time'>
                                <h5>Crafting Time</h5>
                                <p>Lorem Ipsum is simply dummy text of the printing  typesetting industry. typesetting Ipsum has been the industry's standard dummy text</p>
                            </div>
                            <Accordion>
                                <AccordionItem >
                                    <AccordionItemHeading>
                                        <AccordionItemButton>Product Information </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p>Green printed casual shirt, has a mandarin collar, three-quarter sleeves, and curved hem.</p>
                                    </AccordionItemPanel>
                                </AccordionItem>

                                <AccordionItem >
                                    <AccordionItemHeading>
                                        <AccordionItemButton>Material & Care </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p>
                                            100% Viscose <br />Machine wash
                                        </p>
                                    </AccordionItemPanel>
                                </AccordionItem>

                                <AccordionItem >
                                    <AccordionItemHeading>
                                        <AccordionItemButton>Shipping Information</AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p>
                                            This product will be shipped to you after 4-5 days from the date of order placed. <br />  <Link href={"#"} >learn more</Link>
                                        </p>
                                    </AccordionItemPanel>
                                </AccordionItem>

                                <AccordionItem >
                                    <AccordionItemHeading>
                                        <AccordionItemButton>How it is made</AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                            Lorem Ipsum is  dummy text.
                                        </p>
                                    </AccordionItemPanel>
                                </AccordionItem>

                                <AccordionItem >
                                    <AccordionItemHeading>
                                        <AccordionItemButton>Customization</AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                            Lorem Ipsum is  dummy text.
                                        </p>
                                    </AccordionItemPanel>
                                </AccordionItem>

                            </Accordion>
                        </div>
                    </div>
                </div>

                <div className='slider-wrapper'>
                    <div className='container'>
                        <section className='same-brand'>
                            <h5 data-aos="fade-left">From the Same Brand</h5>
                            <div
                                data-aos="fade-right"
                                data-aos-offset="100"
                                data-aos-delay="20"
                                data-aos-duration="1000"
                                data-aos-easing="ease-in-out"
                                data-aos-mirror="true"
                                data-aos-once="false"
                                data-aos-anchor-placement="center"
                            >
                                <Slider {...settings}>
                                    {
                                        SameBrandData.map((item, index) => {
                                            return <Cards
                                                key={index}
                                                img={item.imgpath}
                                                alt={item.alt}
                                                productname={item.imgname}
                                                description={item.decription}
                                            />
                                        })
                                    }
                                </Slider>
                            </div>
                        </section>

                        <section className='similarproduct'>
                            <h5 data-aos="fade-left">From the Same Brand</h5>
                            <div
                                data-aos="fade-right"
                                data-aos-offset="100"
                                data-aos-delay="20"
                                data-aos-duration="1000"
                                data-aos-easing="ease-in-out"
                                data-aos-mirror="true"
                                data-aos-once="false"
                                data-aos-anchor-placement="center"
                            >
                                <Slider {...settings}>
                                    {
                                        SameBrandData.map((item, index) => {
                                            return <Cards
                                                key={index}
                                                img={item.imgpath}
                                                alt={item.alt}
                                                productname={item.imgname}
                                                description={item.decription}
                                            />
                                        })
                                    }
                                </Slider>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
            {toastup ? <ToastPopup /> : null}
            {modalCreateAcc ? <Modalcreateaccount toggle={handleModalPopup} modalOpen={modalCreateAcc} /> : null}
        </>
    )
}

export default Productdetails;