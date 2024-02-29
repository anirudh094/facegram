import React from "react";
import "../CSS/SideBar.css";
import Profile from "./Profile";
import Navigation from "./Navigation";
import Logout from "./Logout";
function SideBar() {
  return (
    <div className="sidebar-body">
      <img className="logo" src="images/logo.png" alt="logo"></img>
      <Profile/>
      <Navigation/>
      <Logout/>
    </div>
  );
}

export default SideBar;