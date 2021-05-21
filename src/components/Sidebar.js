import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SidebarNew.css";


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
          <img src="logo.png" height="80px" width="80px" alt="" />
        </div>
        <p className="brand-name">Synthesize</p>
      </div>

      <ul className="container sidebar-mainlist">
        <li className="sidebar-list-items">
          <Link to="/">Home</Link>
        </li>
        <li className="sidebar-list-items">
          <Link to="/">Discover</Link>
        </li>

        <li className="sidebar-list-items">
          <Link to="/">Playlists</Link>
        </li>
        <li className="sidebar-list-items">
          <Link to="/">New Played</Link>
        </li>
        <li className="sidebar-list-items">
          <Link to="/">Liked songs</Link>
        </li>
      </ul>
    </div>

  );
};

export default Sidebar;
