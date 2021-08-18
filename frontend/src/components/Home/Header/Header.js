import React from "react";
import "./Header.css";
import { Link } from 'react-router-dom';
import women from '../../../asstes/images/Image_Icon/Image/beautiful-young-asian-woman-touching-her-clean-face-with-fresh-healthy-skin-isolated-white-wall-beauty-cosmetics-facial-treatment-concept 1.png'
const Header = () => {
  return (
    <div className="container header">
      <div className="row">
        <div className="col-md-6 intro">
          <h1>
            BEAUTY SALON <br /> FOR EVERY WOMEN
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            eius numquam assumenda ab, dolorem nihil quasi eos facilis! Amet
            delectus assumenda exercitationem illum cupiditate minima.
          </p>
          <Link to="#" className="nav-link custom_link">GET AN APPOINTMENT</Link>
        </div>
        <div className="col-md-6 image">
            <img src={women} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
