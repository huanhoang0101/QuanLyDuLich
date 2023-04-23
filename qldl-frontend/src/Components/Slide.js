import React from 'react';
import Slider from 'react-slick';
import slide1 from '../image/slide/slide1.jpg'
import slide2 from '../image/slide/slide2.png'
import slide3 from '../image/slide/slide3.png'

const Slide = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToScroll: 1

  };

  return (
    <Slider {...settings}>
      <div>
        <img src={slide1} width="100%" height="500px"/>
      </div>
      <div>
        <img src={slide2} width="100%" height="500px"/>
      </div>
      <div>
        <img src={slide3} width="100%" height="500px"/>
      </div>
    </Slider>
  );
};

export default Slide;
