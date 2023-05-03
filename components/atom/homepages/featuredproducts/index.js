import Cards from '@/components/molecules/cards';
import React from 'react';
import Slider from 'react-slick';
import { HiOutlineArrowUp } from 'react-icons/hi';

// Imported images links 
import featuredproduct_1 from '../../../../assets/images/feature-product.png';
import featuredproduct_2 from '../../../../assets/images/feature-product-1.png';

const featuredData = [
    {
        "id": "01",
        "imgpath": featuredproduct_1,
        "imgname": "Lorem ipsum dummy text",
        "pricetag": "₹10000"
    },

    {
        "id": "02",
        "imgpath": featuredproduct_2,
        "imgname": "Lorem ipsum dummy text",
        "alt": "featuredproduct_1",
        "pricetag": "₹10000"
    },

    {
        "id": "01",
        "imgpath": featuredproduct_1,
        "imgname": "Lorem ipsum dummy text",
        "pricetag": "₹10000"
    },

    {
        "id": "01",
        "imgpath": featuredproduct_2,
        "imgname": "Lorem ipsum dummy text",
        "pricetag": "₹10000"
    },
    {
        "id": "01",
        "imgpath": featuredproduct_2,
        "imgname": "Lorem ipsum dummy text",
        "pricetag": "₹10000"
    },

]

const Featuredproduct = () => {
    const settings = {
        autoPlay: true,
        lazyLoad: true,
        dots: true,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        appendDots: dots => (
            <div>
                <ul>
                    {dots}
                    <li>/  {featuredData.length < 10 ? ("0" + featuredData.length) : featuredData.length}</li>
                </ul>
            </div>
        ),
        customPaging: i => (
            <div>
                {i < 9 ? ("0" + (i + 1)) : i + 1}
            </div>
        )

    };
    return (
        <section className='featured-product'>
            <div className='container'>
                <h5 data-aos="fade-left">Featured Products</h5>
                <p data-aos="fade-left">Lorem ipusm dummy text dummy text</p>
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
                            featuredData.map((item, index) => {
                                return <Cards
                                    key={index}
                                    img={item.imgpath}
                                    alt={item.alt}
                                    productname={item.imgname}
                                    pricetag={item.pricetag}
                                />
                            })
                        }
                    </Slider>
                </div>
            </div>
        </section>
    )
}

export default Featuredproduct;