import React from "react";
import "./SidebarAdmin.css";
import { SidebarAdminData } from "./SidebarAdminData";
import logo from "../../../asstes/images/Image_Icon/Group 33092.png";
import { Link } from "react-router-dom";
const SidebarAdmin = () => {
  return (
    <div className=" sidebar">
      <div className="img">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
      </div>
      <ul className="sidebarList">
        {SidebarAdminData.map((val, key) => {
          return (
            <li
              key={key}
              className="li"

              // onClick={(e) => {
              //   e.preventDefault();
              //   window.location.pathname = val.link;
              // }}
            >
              <Link
                className="li Link"
                to={val.link}
                id={window.location.pathname === val.link ? "active" : ""}
              >
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

export default SidebarAdmin;
