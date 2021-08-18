import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import "./BookingList.css";
import BookingOrderList from "./BookingOrderList";



const bookingData = [
  {
    "id":1,
    "name":"Anti Age Face Mask",
    "img":"https://i.ibb.co/28bf7dm/Group-1373.png",
    "status":"Done",
    "description":"We craft stunning and amazing web UI, using a well drrafted UX to fit your product."
  },
  {
    "id":2,
    "name":"Hair Color & Styleing",
    "img":"https://i.ibb.co/31cRwCZ/Group-1372.png",
    "status":"Pending",
    "description":"Amazing flyers, social media posts and brand representations that would make your brand stand out.",
},
{
  "id":3,
  "name":"Skin Care Treatment",
  "img":"https://i.ibb.co/KGx3hG4/Group-1374.png",
  "status":"Done",
  "description":"With well written codes, we build amazing apps for all platforms, mobile and web apps in general.",
},
{
  "id":4,
  "name":"Skin Care Treatment",
  "img":"https://i.ibb.co/KGx3hG4/Group-1374.png",
  "status":"Pending",
  "description":"With well written codes, we build amazing apps for all platforms, mobile and web apps in general.",
},
]
const BookingList = () => {
  return (
    <div className="booking_list p-4">
      <div className="row">
        <div className="col-md-2 sidebar_main">
          <Sidebar />
        </div>
        <div className="col-md-10">
        <div className="head_area row d-flex justify-content-between pl-5 pr-5">
              <div className="page_name">
                Booking List
              </div>
              <div className="user_name">
                Pro Rasel
              </div>
            </div>
          <div className="row data_area">
            {
              bookingData.map((data) => (
                <BookingOrderList key={data.id} data={data} />
              ))
            }
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingList;
