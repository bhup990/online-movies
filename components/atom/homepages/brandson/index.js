import React from 'react';
import Slider from 'react-slick';

const brandsdata = [
    {
        "id": "01",
        "text": "Vendor",
        "boldtext": "Logo"
    },
    {
        "id": "02",
        "text": "Vendor",
        "boldtext": "Logo"
    },
    {
        "id": "03",
        "text": "Vendor",
        "boldtext": "Logo"
    },
    {
        "id": "04",
        "text": "Vendor",
        "boldtext": "Logo"
    },
    {
        "id": "05",
        "text": "Vendor",
        "boldtext": "Logo"
    },
    {
        "id": "06",
        "text": "Vendor",
        "boldtext": "Logo"
    },
    {
        "id": "07",
        "text": "Vendor",
        "boldtext": "Logo"
    },
    {
        "id": "08",
        "text": "Vendor",
        "boldtext": "Logo"
    },
    {
        "id": "09",
        "text": "Vendor",
        "boldtext": "Logo"
    },
    {
        "id": "10",
        "text": "Vendor",
        "boldtext": "Logo"
    }

]

const BrandsOn = () => {
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 900,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000

    };
    return (
        <section className='brands-on'>
            <div className='container'>
                <h5>Brands on Aayoni</h5>
                <Slider {...settings}>
                    {
                        brandsdata.map((item, index) => {
                            return <div className='brands-logo' key={index}>
                                {/* <Image src={} /> */}
                                <p>{item.text} <span>{item.boldtext}</span></p>
                            </div>
                        })
                    }

                </Slider>
            </div>
        </section>
    )
}

export default BrandsOn