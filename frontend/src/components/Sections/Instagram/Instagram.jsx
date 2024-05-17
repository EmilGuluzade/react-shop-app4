import React from "react";
import "./Instagram.css";
const Instagram = () => {
  return (
    <section class="instagram">
      <div class="container-fluid">
        <div class="row no-gutters justify-content-center pb-5">
          <div class="col-md-7 text-center heading-section ftco-animate fadeInUp ftco-animated">
            <h2>
              <span>Instagram</span>
            </h2>
          </div>
        </div>
        <div class="row no-gutters">
          <div class="col-sm-12 col-md ftco-animate fadeInUp ftco-animated">
            <a
              href="images/insta-1.jpg"
              class="insta-img image-popup"
              style={{"background-image":" url(https://preview.colorlib.com/theme/tasty/images/insta-1.jpg)"}}
            >
              <div class="icon d-flex justify-content-center">
              <i className="fa-brands fa-instagram"></i>

              </div>
            </a>
          </div>
          <div class="col-sm-12 col-md ftco-animate fadeInUp ftco-animated">
            <a
              href="images/insta-2.jpg"
              class="insta-img image-popup"
              style={{"background-image":" url(	https://preview.colorlib.com/theme/tasty/images/insta-2.jpg)",backgroundSize:"cover",backgroundPosition:"cover"}}

            >
              <div class="icon d-flex justify-content-center">
              <i className="fa-brands fa-instagram"></i>

              </div>
            </a>
          </div>
          <div class="col-sm-12 col-md ftco-animate fadeInUp ftco-animated">
            <a
              href="images/insta-3.jpg"
              class="insta-img image-popup"
              style={{"background-image":" url(	https://preview.colorlib.com/theme/tasty/images/insta-3.jpg)"}}

            >
              <div class="icon d-flex justify-content-center">
                <i className="fa-brands fa-instagram"></i>
              </div>
            </a>
          </div>
          <div class="col-sm-12 col-md ftco-animate fadeInUp ftco-animated">
            <a
              href="images/insta-4.jpg"
              class="insta-img image-popup"
              style={{"background-image":" url(	https://preview.colorlib.com/theme/tasty/images/insta-4.jpg)"}}

            >
              <div class="icon d-flex justify-content-center">
              <i className="fa-brands fa-instagram"></i>

              </div>
            </a>
          </div>
          <div class="col-sm-12 col-md ftco-animate fadeInUp ftco-animated">
            <a
              href="images/insta-5.jpg"
              class="insta-img image-popup"
              style={{"background-image":" url(https://preview.colorlib.com/theme/tasty/images/insta-5.jpg)"}}

            >
              <div class="icon d-flex justify-content-center">
              <i className="fa-brands fa-instagram"></i>

              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Instagram;
