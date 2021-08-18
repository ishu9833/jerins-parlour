import React from "react";
import "./BookingList.css";
const BookingOrderList = ({ data }) => {
  console.log(data);
  const { img, name, description, status } = data;
  return (
    <div className="col-md-5 booking_data">
      <div className="booking_head row d-flex justify-content-between align-items-center">
        <div className="booking_img">
          <img src={img} alt="" />
        </div>
        <div className="booking_status">
          <button className=  {status === "Done" ? "done_status" : "pending_status"}>{status}</button>
        </div>
      </div>
      <div className="booking_header">
        <h5>{name}</h5>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default BookingOrderList;
