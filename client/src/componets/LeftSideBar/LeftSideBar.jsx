import React from "react";
import "./LeftSideBar.css";
import { NavLink } from "react-router-dom";
import Globe from "../../assets/Globe.png";
const LeftSideBar = () => {
  return (
    <div className="left-sidebar">
      <nav className="side-nav">
        <NavLink to="/" className="side-nav-links" activeClass="active">
          <p>Home</p>
        </NavLink>

        <div className="side-nav-div">
          <div>
            <p>PUBLIC</p>
          </div>

          <NavLink to="/Questions" className="side-nav-links" activeClass="active">
            <img src={Globe} alt="Globe" />
            <p>Questions</p>
          </NavLink>
          <NavLink to="/Tags" className="side-nav-links" activeClass="active">
            <p>Tags</p>
          </NavLink>
          <NavLink to="/Users" className="side-nav-links" activeClass="active">
            <p>Users</p>
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default LeftSideBar;
