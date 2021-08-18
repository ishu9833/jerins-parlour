import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { Link, useHistory } from "react-router-dom";
import logo from "../../../asstes/images/Image_Icon/Group 33092.png";
import useStyles from "./styles";
import { Avatar, Button, Typography } from "@material-ui/core";
import { useDispatch } from "react-redux";
const Navbar = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const logout = () => {
    dispatch({ type: "LOGOUT" });

    history.push("/");
    setUser(null);
  };
  // useEffect(() => {
  //   const token = user?.token;
  //   setUser(JSON.parse(localStorage.getItem("profile")));
  // }, []);
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light">
        <Link to="/" className="navbar-brand logo">
          <img src={logo} alt="" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto all_links">
            <li className="nav-item active">
              <Link to="/home" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item active">
              <Link to="/services" className="nav-link">
                Services
              </Link>
            </li>
            <li className="nav-item active">
              <Link to="/portfoilo" className="nav-link">
                Portfoilo
              </Link>
            </li>
            <li className="nav-item active">
              <Link to="/testimonial" className="nav-link">
                Customers
              </Link>
            </li>
            <li className="nav-item active">
              {user ? (
                <div className={classes.profile}>
                  {/* <Avatar className={classes.purple} alt={user?.result.name} src={user?.result.imageUrl}>{user?.result.name.charAt(0)}</Avatar> */}
                  <Link to="#" className="nav-link">
                    {user?.result.name}
                  </Link>
                  <Button
                    variant="contained"
                    className={classes.logout}
                    color="secondary"
                    onClick={logout}
                  >
                    Logout
                  </Button>
                </div>
              ) : (
                <Link to="/auth" className="nav-link custom_login">
                  Login
                </Link>
              )}
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
