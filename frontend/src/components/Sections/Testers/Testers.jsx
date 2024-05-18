import React from "react";
import Slider from "react-slick";
import "./Testers.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Testers = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
      };
    
  return (
    <section className="testomional-section mt-5 pt-5">
    <div className="container">
      <div className="row justify-content-center mb-5 pb-5">
        <div className="col-md-7 text-center heading-section">
          <span className="subheading">guests says</span>
          <h2>Our Satisfied Guests says</h2>
        </div>
      </div>
      <div className="row">
        <div className="slider-container">
          <Slider {...settings}>
            <div className="testomional-slider-item text-center px-5">
              <div className="testomional-content">
                <div className="testomional-wrap p-4 pb-5">
                  <div className="user-img mb-4"></div>
                  <div className="text">
                    <p className="star-rate">
                      <span>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                      </span>
                    </p>
                    <p className="mb-5">
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts.
                    </p>
                    <p className="name">Dennis Green</p>
                    <span className="position">Guests from Italy</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="testomional-slider-item text-center px-5">
              <div className="testomional-content">
                <div className="testomional-wrap p-4 pb-5">
                  <div className="user-img mb-4"></div>
                  <div className="text">
                    <p className="star-rate">
                      <span>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                      </span>
                    </p>
                    <p className="mb-5">
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts.
                    </p>
                    <p className="name">Dennis Green</p>
                    <span className="position">Guests from Italy</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="testomional-slider-item text-center px-5">
              <div className="testomional-content">
                <div className="testomional-wrap p-4 pb-5">
                  <div className="user-img mb-4"></div>
                  <div className="text">
                    <p className="star-rate">
                      <span>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                      </span>
                    </p>
                    <p className="mb-5">
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts.
                    </p>
                    <p className="name">Dennis Green</p>
                    <span className="position">Guests from Italy</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="testomional-slider-item text-center px-5">
              <div className="testomional-content">
                <div className="testomional-wrap p-4 pb-5">
                  <div className="user-img mb-4"></div>
                  <div className="text">
                    <p className="star-rate">
                      <span>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                      </span>
                    </p>
                    <p className="mb-5">
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts.
                    </p>
                    <p className="name">Dennis Green</p>
                    <span className="position">Guests from Italy</span>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Testers
