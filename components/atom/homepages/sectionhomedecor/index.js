import React, { Component } from "react";
import Slider from "react-slick";
import Image from "next/image";

// Images Import Links 
import homeDecor_1 from '@/assets/images/home-decor-1.png';
import homeDecor_2 from '@/assets/images/home-decor-2.png';
import homeDecor_3 from '@/assets/images/home-decor-3.png';
import Cards from "@/components/molecules/cards";

const Homedecordata = [
    {
        "id": "01",
        "imagepath": homeDecor_1,
        "imagename": "Table Linens",
        "alt": "Table Linens Images"
    },

    {
        "id": "02",
        "imagepath": homeDecor_2,
        "imagename": "Cushion Covers",
        "alt": "Cushion Covers Images"
    },

    {
        "id": "03",
        "imagepath": homeDecor_3,
        "imagename": "Bedsheets and Bedcovers",
        "alt": "Bedsheets and Bedcovers Images"
    }
]

export default class Homedecor extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1
        };
        return (
            <section className="home_decor">
                <div className="container">
                    <h5 data-aos="fade-up" data-aos-anchor-placement="top-bottom">Shop for Home Décor</h5>
                    <p data-aos="fade-up" data-aos-anchor-placement="top-bottom">Lorem ipusm dummy text dummy text</p>
                    <div data-aos="fade-up" data-aos-duration="3000">
                    <Slider {...settings}>
                        {
                            Homedecordata.map((items, index) => {
                                return <Cards
                                    key={index}
                                    img={items.imagepath}
                                    alt={items.alt}
                                    productname={items.imagename}
                                />
                            })
                        }
                    </Slider>
                    </div>
                </div>
            </section>
        );
    }
}