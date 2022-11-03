import React from "react";
import "./info.scss"
import { images } from "../../images"

const Info = () => {
  return <div>
    <div className="we-are-different">
      <div className="container">
        <h2 className="title1 title1--mod">We are different</h2>
        <div className="we-are-different__content">
          <div className="snappy">
            <img src={images.snappy_process} alt=""/>
            <h3>Lorem Ipsum</h3>
            <p>It is a long established fact that a reader will be distracted by
               the readable content of a page when looking at its layout.</p>
          </div>
          <div className="affordable">
            <img src={images.affordable_prices} alt=""/>
            <h3>Lorem Ipsum</h3>
            <p>It is a long established fact that a reader will be distracted by
               the readable content of a page when looking at its layout.</p>
          </div>
          <div className="people">
            <img src={images.people_first} alt=""/>
            <h3>Lorem Ipsum</h3>
            <p>It is a long established fact that a reader will be distracted by
               the readable content of a page when looking at its layout.</p>
          </div>
        </div>
      </div>
    </div>
  </div>;
};

export default Info;
