import Cards from "@/components/molecules/cards";
import React, { Component, useRef } from "react";
import { useState, useEffect } from 'react';
import Slider from "react-slick";
import Image from "next/image";
import { Carousel, CarouselItem } from 'react-round-carousel';

// import images links 
import Newarrivalimg from '@/assets/images/newarrival.png';
export const items = [
    { id: 1, content: <Image src={Newarrivalimg} alt="Item 1" /> },
    { id: 2, content: <Image src={Newarrivalimg} alt="Item 2" /> },
    { id: 3, content: <Image src={Newarrivalimg} alt="Item 3" /> },
    { id: 4, content: <Image src={Newarrivalimg} alt="Item 4" /> },
    { id: 5, content: <Image src={Newarrivalimg} alt="Item 5" /> }
];

const NewarrivalData = [
    {
        "id": "01",
        "imagepath": Newarrivalimg,
        "imagename": "Lorem ipsum dummy text",
        "alt": "Lorem ipsum dummy text Images",
        "price": "₹ 10500"
    },

    {
        "id": "02",
        "imagepath": Newarrivalimg,
        "imagename": "Lorem ipsum dummy text",
        "alt": "Lorem ipsum dummy text Images",
        "price": "₹ 10500"
    },
    {
        "id": "03",
        "imagepath": Newarrivalimg,
        "imagename": "Lorem ipsum dummy text",
        "alt": "Lorem ipsum dummy text Images",
        "price": "₹ 10500"
    },

    {
        "id": "04",
        "imagepath": Newarrivalimg,
        "imagename": "Lorem ipsum dummy text",
        "alt": "Lorem ipsum dummy text Images",
        "price": "₹ 10500"
    },
    {
        "id": "05",
        "imagepath": Newarrivalimg,
        "imagename": "Lorem ipsum dummy text",
        "alt": "Lorem ipsum dummy text Images",
        "price": "₹ 10500"
    },
    {
        "id": "06",
        "imagepath": Newarrivalimg,
        "imagename": "Lorem ipsum dummy text",
        "alt": "Lorem ipsum dummy text Images",
        "price": "₹ 10500"
    },
    {
        "id": "07",
        "imagepath": Newarrivalimg,
        "imagename": "Lorem ipsum dummy text",
        "alt": "Lorem ipsum dummy text Images",
        "price": "₹ 10500"
    },
    {
        "id": "08",
        "imagepath": Newarrivalimg,
        "imagename": "Lorem ipsum dummy text",
        "alt": "Lorem ipsum dummy text Images",
        "price": "₹ 10500"
    },
    {
        "id": "09",
        "imagepath": Newarrivalimg,
        "imagename": "Lorem ipsum dummy text",
        "alt": "Lorem ipsum dummy text Images",
        "price": "₹ 10500"
    }

]

export default class Newarrival extends Component {
    state = {
        imageIndex: 0
    }

    render() {
        const settings = {
            infinite: true,
            lazyLoad: true,
            centerMode: true,
            centerPadding: 0,
            speed: 300,
            slidesToShow: 5,
            slidesToScroll: 1,
            beforeChange: (current, next) => this.setState({ imageIndex: next })
        };
        return (
            <section className="new-arrival">
                <div className="container">
                    <h5 data-aos="fade-up" data-aos-anchor-placement="top-bottom" class="aos-init aos-animate">Shop by New Arrival</h5>
                    <p data-aos="fade-up" data-aos-anchor-placement="top-bottom" class="aos-init aos-animate">Lorem ipusm dummy text dummy text</p>
                    <div data-aos="fade-up" data-aos-anchor-placement="center-bottom">
                        <Slider {...settings}>
                            {
                                NewarrivalData.map((items, index) => {
                                    return <div className={index === this.state.imageIndex ? "slide activeSlide" : "slide"}>
                                        <Cards
                                            key={index}
                                            img={items.imagepath}
                                            alt={items.alt}
                                            productname={items.imagename}
                                            pricetag={items.price}
                                        />
                                    </div>
                                })
                            }
                        </Slider>
                    </div>
                    <div className='exploreBtn'><button type='button'>Explore all Home Décor Products</button></div>
                </div>
            </section>
        );
    }
}

