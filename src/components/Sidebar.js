import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import logo from './logo.png';

const Sidebar = () => {
  const [mobile, setMobile] = useState(false);
  const showMobile = () => {
    if (window.innerWidth <= 800) {
      setMobile(false);
    } else {
      setMobile(false);
    }
  };
  window.addEventListener("resize", showMobile);
  return (

      <div className={mobile ? "sidebar-mobile" : "sidebar-web"}>
        <div className="branding">
          <div className="logo">
            <img className="im" src={logo} height="80px" width="80px"  alt=""/>
          </div>
          <p align="left" className="brand-name">Synthesize</p>
        </div>
        
        <ul className="container sidebar-mainlist">
          <li className="sidebar-list-items">
            <Link to="/home">Home</Link>
          </li>
          {/* <li className="sidebar-list-items">
            <Link to="/">Discover</Link>
          </li> */}

          <li className="sidebar-list-items">
            <Link to="">Playlists</Link>
          </li>
          <li className="sidebar-list-items">
            <Link to="/">New Playlist</Link>
          </li>
          <li className="sidebar-list-items">
            <Link to="/">Liked songs</Link>
          </li>
        </ul>
      </div>

  );
};

export default Sidebar;
