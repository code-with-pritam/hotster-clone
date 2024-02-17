import React from 'react'
import "./imgslider.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'
import Carousel from './Carousel';
import Wrap from './Wrap';
import slider1 from "../../images/slider-badging.jpg"
import slider2 from "../../images/slider-scale.jpg"
import slider3 from "../../images/slider-badag.jpg"
import slider4 from "../../images/slider-scales.jpg"

const Imgslider = (props) => {
  let settings = {
    dots: true,
    infinity: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: 1,
  }
  return (
    <Carousel {...settings}>
      <Wrap>
        <a>
          <img src={slider1}/>
        </a>
      </Wrap>
      <Wrap>
        <a>
          <img src={slider2}/>
        </a>
      </Wrap>
      <Wrap>
        <a>
          <img src={slider3}/>
        </a>
      </Wrap>
      <Wrap>
        <a>
          <img src={slider4}/>
        </a>
      </Wrap>
    </Carousel>
  );
};

export default Imgslider;
