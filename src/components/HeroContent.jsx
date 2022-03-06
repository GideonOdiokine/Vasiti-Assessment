import React from "react";
import heroImg from "../assets/people_.png";
import "./styles/HeroContent.scss";

const HeroContent = () => {
  return (
    <div className="showcase">
      <div className="container flex">
        <div className="showcase__left">
          <div className="showcase__content">
            <h2>Amazing Experiences from Our Wonderful Customers</h2>
            <p>
              Here is what customers and vendors are saying about us, you can
              share your stories with us too.
            </p>
          </div>
        </div>
        <div className="showcase__right">
          <div className="showcase_img">
            <img src={heroImg} alt="people" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
