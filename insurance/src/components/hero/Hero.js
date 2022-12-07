import React from "react";
import "./hero.scss";
import { images } from "../../images";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div>
      <div className="hero">
        <div className="right-top-image">
          <picture>
            <source
              media="(max-width:767px)"
              srcSet={images.intro_right_mobile}
            />
            <img src={images.intro_right} alt="" />
          </picture>
        </div>
        <div className="hero__wrapper container">
          <div className="hero__content">
            <h1 className="title1">
              Lorem Ipsum
            </h1>
            <p className="hero__text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <Link to='/register' className="register"><button className="btn">Register</button></Link>
          </div>
          <div className="hero__image">
            <picture>
              <source media="(max-width:767px)" srcSet={images.intro_mobile} />
              <img src={images.intro_desktop} alt="" />
            </picture>
          </div>
        </div>
        <div className="left-bottom-image">
          <picture>
            <source media="(max-width:767px)" srcSet={images.intro_left_mobile} />
            <img src={images.intro_left} alt="" />
          </picture>
        </div>
      </div>
    </div>
  );
};

export default Hero;
