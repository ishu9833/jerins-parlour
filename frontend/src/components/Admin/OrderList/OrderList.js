import { ViewColumnSharp } from "@material-ui/icons";
import React from "react";
import SidebarAdmin from "../SidebarAdmin/SidebarAdmin";
import OrderDetail from "./OrderDetail";
import "./OrderList.css";

const OrderData = [
  {
    id: 1,
    title: "Anti Age Face Mask",
    name: "Anika Sharma",
    payWith: "Cradit Card",
    email: "example.123@gmail.com",
    img: "https://i.ibb.co/28bf7dm/Group-1373.png",
    status: "Done",
    description:
      "We craft stunning and amazing web UI, using a well drrafted UX to fit your product.",
  },
  {
    id: 2,
    title: "Hair Color & Styleing",
    name: "Kanika Sharma",
    payWith: "Cradit Card",
    email: "example.123@gmail.com",
    img: "https://i.ibb.co/31cRwCZ/Group-1372.png",
    status: "Pending",
    description:
      "Amazing flyers, social media posts and brand representations that would make your brand stand out.",
  },
  {
    id: 3,
    title: "Skin Care Treatment",
    name: "Ankita Puran",
    payWith: "Cradit Card",
    email: "example.123@gmail.com",
    img: "https://i.ibb.co/KGx3hG4/Group-1374.png",
    status: "Done",
    description:
      "With well written codes, we build amazing apps for all platforms, mobile and web apps in general.",
  },
  {
    id: 4,
    title: "Skin Care Treatment",
    name: "Ritu Puran",
    payWith: "Cradit Card",
    email: "example.123@gmail.com",
    img: "https://i.ibb.co/KGx3hG4/Group-1374.png",
    status: "Pending",
    description:
      "With well written codes, we build amazing apps for all platforms, mobile and web apps in general.",
  },
];
const OrderList = () => {
  return (
    <div className="order-list p-4">
      <div className="row">
        <div className="col-md-2 sidebar_main">
          <SidebarAdmin />
        </div>
        <div className="col-md-10">
          <div className="head_area row d-flex justify-content-between pl-5 pr-5 pb-2">
            <div className="page_name">Order List</div>
            <div className="user_name">admin name</div>
          </div>
          <div className="data_area">
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email ID</th>
                  <th>Registreted Date </th>
                  <th>Volunteer List</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderList;
