import React from 'react';
import Sidebar from '..//Sidebar/Sidebar';
import './Booking.css'
const Booking = () => {
    return (
        <div className="booking p-4">
      <div className="row">
        <div className="col-md-2 sidebar_main">
          <Sidebar />
        </div>
        <div className="col-md-10">
        <div className="head_area row d-flex justify-content-between pl-5 pr-5">
              <div className="page_name">
                Booking
              </div>
              <div className="user_name">
                Pro Rasel
              </div>
            </div>
          <div className="data_area">
            <form action="">
            <div className="text_field">
                <input type="text" placeholder="Your Name" />
              </div>
              <br />
              <div className="text_field">
                <input type="email" placeholder="Your Email" />
              </div>
              <br />
              <div className="text_field">
                <input type="text" placeholder="Service Name" />
              </div><br />
              <p style={{"color":"#bfbfbf", "font-size":"14px"}}>Pay with</p>
              <br />
              
            </form>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Booking;