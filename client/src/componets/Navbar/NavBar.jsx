import "./NavBar.css";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import search from "../../assets/search.svg";
import Avatar from "../../componets/Avatar/Avatar";

const NavBar = () => {
  let user = null;
  return (
    <nav>
      <div className="navbar">
        <Link to="/" className="nav-logo">
          <img src={logo} alt="logo" className="nav-image" />
        </Link>
        <Link to="/" className="nav-item nav-btn">
          About
        </Link>
        <Link to="/" className="nav-item nav-btn">
          Products
        </Link>
        <Link to="/" className="nav-item nav-btn">
          For Teams
        </Link>
        <form>
          <input type="text" placeholder="search..." />
          <img src={search} alt="search.." width="18" className="search-icon" />
        </form>


        {user === null ? (
          <Link to="/Auth" className="nav-item nav-links">
            Log in
          </Link>
        ) : (
          <>
            <Avatar
              backgroundColor="#009dff"
              px="10px"
              py="7px"
              borderRadius="50%"
              cursor="pointer"
              
            >
              <Link
                to="./user"
                style={{ color: "white", textDecoration: "none" }}
              >M</Link>
            </Avatar>
            
            <Link  className="nav-item nav-links">Log out</Link>
          </>
        )}


      </div>
    </nav>
  );
};

export default NavBar;
