import React from "react";
import "./Sidebar.css";
import { SidebarData } from "./SidebarData";
import logo from "../../../asstes/images/Image_Icon/Group 33092.png";
import { Link } from "react-router-dom";
const Sidebar = () => {
  const customer = SidebarData.filter((data) => data.page === "customer");
  console.log(customer);
  return (
    <div className=" sidebar">
      <div className="img">
        <img src={logo} alt="" />
      </div>
      <ul className="sidebarList">
        {customer.map((val, key) => {
          return (
            <li
              key={key}
              className="li"
              id={window.location.pathname === val.link ? "active" : ""}
              // onClick={(e) => {
              //   e.preventDefault();
              //   window.location.pathname = val.link;
              // }}
            >
              <Link  className="li Link" to={val.link} id={window.location.pathname === val.link ? "active" : ""}>
                <div id="icon">{val.icon}</div>
                <div id="title">{val.title}</div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
