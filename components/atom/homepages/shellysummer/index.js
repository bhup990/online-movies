import Cards from "@/components/molecules/cards";
import React, { Component } from "react";
import Slider from "react-slick";

// Import images links 
import shelly_summer_1 from '@/assets/images/shelly_summer_1.png';
import shelly_summer_2 from '@/assets/images/shelly_summer_2.png';
import shelly_summer_3 from '@/assets/images/shelly_summer_3.png';
import shelly_summer_4 from '@/assets/images/shelly_summer_4.png';

const ShellySummer = [
    {
        "id": "01",
        "imagepath": shelly_summer_1,
        "imagename": "Dresses",
        "alt": "Dresses Images"
    },

    {
        "id": "02",
        "imagepath": shelly_summer_2,
        "imagename": "Bags",
        "alt": "Bags Images"
    },

    {
        "id": "03",
        "imagepath": shelly_summer_3,
        "imagename": "Accessories",
        "alt": "Accessories Images"
    },

    {
        "id": "04",
        "imagepath": shelly_summer_4,
        "imagename": "Footwear",
        "alt": "Footwear Images"
    }
]

export default class Shellysummer extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1
        };
        return (
            <section className="shelly-summer">
                <div className="container">
                    <h5 data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine">Shop by Shelly Summer</h5>
                    <p data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine">Lorem ipusm dummy text dummy text</p>
                    <div data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
                        <Slider {...settings}>
                            {
                                ShellySummer.map((items, index) => {
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