import React, { useRef } from "react";
import Slider from "react-slick";
import "./Banner.css";

function Banner() {
  let sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <div className="AutoPlay__box">
      <div className="slider-container">
        <Slider ref={(slider) => (sliderRef = slider)} {...settings}>
          <div className="slider__card sliderCard1">
            <div className="slider__card__overlay"></div>
            <div className="slider__card__box">
              <h1>Book a table for yourself at a time convenient for you</h1>
              <button>Book a table</button>
            </div>
          </div>
          <div className="slider__card sliderCard2">
            <div className="slider__card__overlay"></div>
            <div className="slider__card__box">
              <h1>Book a table for yourself at a time convenient for you</h1>
              <button>Book a table</button>
            </div>
          </div>
          <div className="slider__card sliderCard3">
            <div className="slider__card__overlay"></div>
            <div className="slider__card__box">
              <h1>Tasty & Delicous Food</h1>
              <button>Book a table</button>
            </div>
          </div>
        </Slider>
      </div>
      <div className=" AutoPlay__box__bottom">
     
        <form >
          <input type="text" class="form-control" placeholder="Name" />
          <input type="text" class="form-control" placeholder="Phone" />
          <input type="text" placeholder="M/D/YYYY" />
          <input type="text" placeholder="Time" />
          <select className="selectFrom" name="" id="" class="form-control">
            <option value="">Person</option>
            <option value="">1</option>
            <option value="">2</option>
            <option value="">3</option>
            <option value="">4+</option>
          </select>
          <button>Book a table</button>
        </form>
        </div>
   
    </div>
  );
}
export default Banner;
