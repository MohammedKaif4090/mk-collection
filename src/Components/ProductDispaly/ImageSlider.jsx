import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


// Custom Next Arrow Component
function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        right: "10px",
        zIndex: 1,
        
        color: "black",
      }}
      onClick={onClick}
    />
  );
}

// Custom Previous Arrow Component
function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        left: "10px",
        zIndex: 1,
        color: "black",
      }}
      onClick={onClick}
    />
  );
}

const ImageSlider = ({ image }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,           
    nextArrow: <NextArrow />, 
    prevArrow: <PrevArrow />, 
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {image.map((img, index) => (
          <div key={index}>
            <img
              src={img}
              alt={`Product View ${index + 1}`}
              className="main-img"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
