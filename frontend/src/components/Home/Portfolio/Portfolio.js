import React from "react";
import "./Portfolio.css";
import makeup from "../../../asstes/images/Image_Icon/Image/engin-akyurt-g-m8EDc4X6Q-unsplash 1.png";
const Portfolio = () => {
  return (
    <div className="portfolio">
      <div className="container">
        <div className="row">
          <div className="col-md-6 makeup_img">
            <img src={makeup} alt="" />
          </div>
          <div className="col-md-6 info">
            <h3>
              Let us handle your <br /> screen{" "}
              <span className="coloring_text">Professionally</span> .
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
              facilis aliquam debitis corporis fugiat? Quos atque quas tempore
              tempora inventore temporibus ducimus aliquam veritatis enim iusto
              ratione, odit eveniet eligendi?
            </p>

            <div className="row">
                <div className="col-md-6">
                    <h2>500+</h2>
                    <p>Happy Customers</p>
                </div>
                <div className="col-md-6">
                    <h2>16+</h2>
                    <p>Total Services</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
