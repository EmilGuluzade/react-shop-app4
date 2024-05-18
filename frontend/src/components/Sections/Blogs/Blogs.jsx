import React from "react";
import Slider from "react-slick";
import "./Blogs.css";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Blogs = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
      };
  return (
    <section className="bg-light">
    <div className="container mt-5 pt-5 pb-5">
      <div className="row justify-content-center mb-5 pb-5">
        <div className="col-md-7 text-center heading-section">
          <span className="subheading">Blog</span>
          <h2>Recent Blog</h2>
        </div>
      </div>
      <div className="row">
        <div className="slider-container">
          <Slider {...settings}>
            <div className="blog-slider-item px-5">
              <div className="blog-content">
                <Link to="#" className="blog-20 ">
                  <img
                    src="https://preview.colorlib.com/theme/tasty/images/image_4.jpg.webp"
                    alt=""
                    className="img-fluid"
                  />
                </Link>
                <div className="text pt-4">
                  <div className="meta">
                    <div>
                      <Link to="#">July 7, 2018</Link>
                    </div>
                    <div>
                      <Link to="#">Admin</Link>
                    </div>
                  </div>
                  <h3 className="heading">
                    <Link typeof="#">
                      Even the all-powerful Pointing has no control about the
                      blind texts
                    </Link>
                  </h3>
                  <p className="clear-fix">
                    <Link to="#" className="float-left read">
                      Read more
                    </Link>
                    <Link to="#" className="float-right meta-chat">
                      <span className="icon-chat">
                        <i className="fa-solid fa-message"></i>
                      </span>
                      3
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="blog-slider-item px-5">
              <div className="blog-content">
                <Link to="#" className="blog-20 ">
                  <img
                    src="https://preview.colorlib.com/theme/tasty/images/image_4.jpg.webp"
                    alt=""
                    className="img-fluid"
                  />
                </Link>
                <div className="text pt-4">
                  <div className="meta">
                    <div>
                      <Link to="#">July 7, 2018</Link>
                    </div>
                    <div>
                      <Link to="#">Admin</Link>
                    </div>
                  </div>
                  <h3 className="heading">
                    <Link typeof="#">
                      Even the all-powerful Pointing has no control about the
                      blind texts
                    </Link>
                  </h3>
                  <p className="clear-fix">
                    <Link to="#" className="float-left read">
                      Read more
                    </Link>
                    <Link to="#" className="float-right meta-chat">
                      <span className="icon-chat">
                        <i className="fa-solid fa-message"></i>
                      </span>
                      3
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="blog-slider-item px-5">
              <div className="blog-content">
                <Link to="#" className="blog-20 ">
                  <img
                    src="https://preview.colorlib.com/theme/tasty/images/image_4.jpg.webp"
                    alt=""
                    className="img-fluid"
                  />
                </Link>
                <div className="text pt-4">
                  <div className="meta">
                    <div>
                      <Link to="#">July 7, 2018</Link>
                    </div>
                    <div>
                      <Link to="#">Admin</Link>
                    </div>
                  </div>
                  <h3 className="heading">
                    <Link typeof="#">
                      Even the all-powerful Pointing has no control about the
                      blind texts
                    </Link>
                  </h3>
                  <p className="clear-fix">
                    <Link to="#" className="float-left read">
                      Read more
                    </Link>
                    <Link to="#" className="float-right meta-chat">
                      <span className="icon-chat">
                        <i className="fa-solid fa-message"></i>
                      </span>
                      3
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="blog-slider-item px-5">
              <div className="blog-content">
                <Link to="#" className="blog-20 ">
                  <img
                    src="https://preview.colorlib.com/theme/tasty/images/image_4.jpg.webp"
                    alt=""
                    className="img-fluid"
                  />
                </Link>
                <div className="text pt-4">
                  <div className="meta">
                    <div>
                      <Link to="#">July 7, 2018</Link>
                    </div>
                    <div>
                      <Link to="#">Admin</Link>
                    </div>
                  </div>
                  <h3 className="heading">
                    <Link typeof="#">
                      Even the all-powerful Pointing has no control about the
                      blind texts
                    </Link>
                  </h3>
                  <p className="clear-fix">
                    <Link to="#" className="float-left read">
                      Read more
                    </Link>
                    <Link to="#" className="float-right meta-chat">
                      <span className="icon-chat">
                        <i className="fa-solid fa-message"></i>
                      </span>
                      3
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="blog-slider-item px-5">
              <div className="blog-content">
                <Link to="#" className="blog-20 ">
                  <img
                    src="https://preview.colorlib.com/theme/tasty/images/image_4.jpg.webp"
                    alt=""
                    className="img-fluid"
                  />
                </Link>
                <div className="text pt-4">
                  <div className="meta">
                    <div>
                      <Link to="#">July 7, 2018</Link>
                    </div>
                    <div>
                      <Link to="#">Admin</Link>
                    </div>
                  </div>
                  <h3 className="heading">
                    <Link typeof="#">
                      Even the all-powerful Pointing has no control about the
                      blind texts
                    </Link>
                  </h3>
                  <p className="clear-fix">
                    <Link to="#" className="float-left read">
                      Read more
                    </Link>
                    <Link to="#" className="float-right meta-chat">
                      <span className="icon-chat">
                        <i className="fa-solid fa-message"></i>
                      </span>
                      3
                    </Link>
                  </p>
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

export default Blogs