import React from "react";
import "./AboutTasty.css";

const AboutTasty = () => {
  return (
    <div className="AboutTasty">
      <div className="AboutTasty__box">
        <div className="AboutTasty__left">
          <img
            src="https://preview.colorlib.com/theme/tasty/images/about-2.jpg.webp"
            alt=""
          />
        </div>
        <div className="AboutTasty__right">
          <h3>ABOUT TASTY</h3>
          <h2>Our chef cooks the most delicious food for you </h2>
          <div className="AboutTasty__right__p">
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean.
            </p>
            <p>
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia. It is a paradisematic country, in
              which roasted parts of sentences fly into your mouth.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutTasty;
