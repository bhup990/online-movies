import React, { Component } from "react";
import Slider from "react-slick";
import Link from "next/link";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import shop_for_1 from '../../../../assets/images/shop_for_1.png';
import shop_for_2 from '../../../../assets/images/shop_for_2.png';
import shop_for_3 from '../../../../assets/images/shop_for_3.png';
import shop_for_4 from '../../../../assets/images/shop_for_4.png';
import shop_for_5 from '../../../../assets/images/shop_for_5.png';
import Cards from "@/components/molecules/cards";

const ShopFor = [
    {
        "id": "01",
        "imagepath": shop_for_1,
        "imagename": "Bags",
        "alt": "Bags Images",
        "whistlisActive" : false
    },

    {
        "id": "02",
        "imagepath": shop_for_2,
        "imagename": "Shawls",
        "alt": "Shawls Images"
    },

    {
        "id": "03",
        "imagepath": shop_for_3,
        "imagename": "Kaftan",
        "alt": "Kaftan Images"
    },

    {
        "id": "04",
        "imagepath": shop_for_4,
        "imagename": "Pants",
        "alt": "Pants Images"
    },

    {
        "id": "05",
        "imagepath": shop_for_5,
        "imagename": "Skirts",
        "alt": "Skirts Images"
    },
]

export default class ShopForSection extends Component {
    render() {
        const settings = {
            className: "center",
            centerMode: true,
            infinite: true,
            dots: false,
            arrows: false,
            centerPadding: "120px",
            slidesToShow: 4,
            speed: 500
        };
        return (

            <section className='shop_for'>
                <div className='container'>
                    <h5 data-aos="fade-down">Shop for</h5>
                    <Tabs>
                        <TabList>
                            <Tab>Women</Tab>
                            <Tab>Men</Tab>
                        </TabList>

                        <TabPanel>
                            <div
                                data-aos="fade-up"
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
                                        ShopFor.map((items, index) => {
                                            return <>
                                                <Link href="/listingproduct">
                                                    <Cards
                                                        key={index}
                                                        isActive={items.whistlisActive}
                                                        img={items.imagepath}
                                                        alt={items.alt}
                                                        productname={items.imagename}
                                                    />
                                                </Link>
                                            </>
                                        })
                                    }

                                </Slider>
                            </div>
                        </TabPanel>

                        <TabPanel>
                            <Slider {...settings}>
                                {
                                    ShopFor.map((items, index) => {
                                        return <>
                                            <Cards
                                                key={index}
                                                img={items.imagepath}
                                                alt={items.alt}
                                                productname={items.imagename}
                                            />
                                        </>
                                    })
                                }

                            </Slider>
                        </TabPanel>
                    </Tabs>
                </div>
            </section>
        );
    }
}