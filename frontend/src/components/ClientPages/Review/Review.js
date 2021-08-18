import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import "./Review.css";
const Review = () => {
  return (
    <div className="booking_list p-4">
      <div className="row">
        <div className="col-md-2 sidebar_main">
          <Sidebar />
        </div>
        <div className="col-md-10">
          <div className="head_area row d-flex justify-content-between pl-5 pr-5">
            <div className="page_name">Review</div>
            <div className="user_name">Pro Rasel</div>
          </div>
          <div className="data_area">
            <form action="">
              <div className="text_field">
                <input type="text" placeholder="Your Name" />
              </div>
              <br />
              <div className="text_field">
                <input
                  type="text"
                  placeholder="Company's name and designation"
                />
              </div>
              <br />
              <div className="text_field message_div">
                <textarea
                  placeholder="Description"
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                ></textarea>
              </div>
                <button className="custome_btn_btn" type="submit">
                  Submit
                </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
