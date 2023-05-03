import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";

const CarouselSlider = (props) => {
    var settings = {
        dots: props.dots ? props.dots : false,
        autoplay:true,
        infinite: props.infinite ? props.infinite : true,
        speed: props.speed ? props.speed : 500,
        arrows: props.arrows ? props.arrows : true,
        slidesToShow: props.slidestoshow ? props.slidestoshow : 1,
        variableWidth: props.variableWidth ? props.variableWidth : true,
        lazyLoad: props.lazyLoad ? props.lazyLoad :  true,
        slidesToScroll: props.slidestoscroll ? props.slidestoscroll : 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    };
    return (
        <div className="container">
            <div className="aliserWrapper">
                <Slider {...settings}>
                    {props.children}
                </Slider>
            </div>
        </div>
    );
}

export default CarouselSlider;