import React from 'react'
import Slider from 'react-slick'
import './Carousel.css'

const Carousel = ({ children, ...settings }) => {
    return (
        <Slider {...settings} className='carousel-container'>
            {children}
        </Slider>
    );
};

export default Carousel
