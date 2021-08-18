import React from "react";
import "./Footer.css";
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <div className=" footer_container">
      <div className="container"></div>
      <div className="row">
        <div className="col-md-4 col-div footer_link">
        <i className="icon fas fa-map-marker-alt"></i> &nbsp; &nbsp;
          <p>
          
            H#000 (0th Floor), Road #00, New DOHS, Mohakhali, Dhaka, Bangladesh
          </p>
        </div>
        <div className="col-md-4">
          <div className="row">
            <div className="col-sm-6 footer_link">
             
              <ul>
              <h6>Company</h6>
                <li><Link to="#" className="links">About</Link></li>
                <li> <Link to="#" className="links">Project</Link> </li>
                <li> <Link to="#" className="links">Our Team</Link> </li>
                <li> <Link to="#" className="links">Terms Condition</Link> </li>
                <li> <Link to="#" className="links">Submit Listing</Link> </li>
              </ul>
            </div>
            <div className="col-sm-6 footer_link">
              
              <ul>
              <h6>Quick Links</h6>
                <li> <Link to="#"  className="links">Quick Links</Link> </li>
                <li> <Link to="#" className="links">Rentals</Link> </li>
                <li> <Link to="#" className="links">Sides</Link> </li>
                <li> <Link to="#" className="links">Contact</Link> </li>
                <li> <Link to="#" className="links">Our blog</Link> </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-4 footer_link">
          <h6>About us</h6>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit
            repellendus qui ducimus odio nostrum consectetur quam doloremque id,
            soluta ullam, saepe distinctio rerum, tempora aspernatur veritatis
            voluptatibus expedita iste dolor!
          </p>

          <div className="social-icon">
              <i className=" fab fa-instagram-square"></i>
              <i className="fab fa-facebook-square"></i>
              <i className="fab fa-linkedin"></i>
              <i className="fab fa-youtube"></i>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Footer;
