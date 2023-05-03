import Customercards from "@/components/molecules/customercards";
import React, { Component } from "react";
import Slider from "react-slick";

import customer_says_1 from '../../../../assets/images/customer_says_1.png';
import customer_says_2 from '../../../../assets/images/customer_says_2.png';
import customer_says_3 from '../../../../assets/images/customer_says_3.png';

const Customersaysdata = [
    {
        "id": "01",
        "username": "Mohan Parekh",
        "fivestar": true,
        "usercomment": "Loved the dress. great fit and feel of dress, loved it",
        "imagepath": customer_says_1,
        "alt": "customer_says_1",
        "imagename": "Product Name Lorem"

    },

    {
        "id": "01",
        "username": " Pravin Roy",
        "fivestar": true,
        "usercomment": "Amazing Product. Very Comfortable and perfect fit.",
        "imagepath": customer_says_2,
        "alt": "customer_says_2",
        "imagename": "Product Name Lorem"
    },

    {
        "id": "01",
        "username": "Megha Sarkar",
        "fivestar": true,
        "usercomment": "Empress waist dress Excellent!",
        "imagepath": customer_says_3,
        "alt": "customer_says_3",
        "imagename": "Product Name Lorem"
    }
]

export default class Customersays extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1
        };
        return (
            <section className="customer-says">
                <div className="container">
                    <h5 data-aos="fade-up" data-aos-anchor-placement="top-bottom">What our Customer Says...</h5>
                    <div data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                        <Slider {...settings}>
                            {
                                Customersaysdata.map((items, index) => {
                                    return <Customercards
                                        key={index}
                                        username={items.username}
                                        comments={items.usercomment}
                                        reviewimg={items.imagepath}
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