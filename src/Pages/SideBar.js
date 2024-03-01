import React from "react";
import "../CSS/SideBar.css";
import Profile from "./Profile";
import Navigation from "./Navigation";
import Logout from "./Logout";

function SideBar() {
  return (
    <>
      {" "}
      <div className="sidebar-body">
        <div className="side-bar-big">
          <Profile />
          <Navigation />
          <Logout />
        </div>
      </div>
    </>
  );
}

export default SideBar;
