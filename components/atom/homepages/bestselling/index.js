import Cards from "@/components/molecules/cards";
import React, { Component } from "react";
import Slider from "react-slick";

// import images links 
import bestsell_img_1 from '@/assets/images/best-selling-1.png';
import bestsell_img_2 from '@/assets/images/best-selling-2.png';

const Bestselldata = [
    {
        "id": "01",
        "imagepath": bestsell_img_1,
        "imagename": "Lorem ipsum dummy text",
        "alt": "Lorem ipsum dummy text Images",
        "price": "₹10500"
    },

    {
        "id": "02",
        "imagepath": bestsell_img_2,
        "imagename": "Lorem ipsum dummy text",
        "alt": "Lorem ipsum dummy text Images",
        "price": "₹10500"
    }
]

export default class Bestselling extends Component {
    render() {
        const settings = {
            autoPlay: true,
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 2,
            slidesToScroll: 1
        };
        return (
            <section className="best_selling">
                <div className="container">
                    <h5 data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">Shop by Best Selling</h5>
                    <p data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">Lorem ipusm dummy text dummy text</p>
                    <div data-aos="fade-left"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine">

                        <Slider {...settings}>
                            {
                                Bestselldata.map((items, index) => {
                                    return <Cards
                                        key={index}
                                        img={items.imagepath}
                                        alt={items.alt}
                                        productname={items.imagename}
                                        pricetag={items.price}
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