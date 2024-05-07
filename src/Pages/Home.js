import React from "react";
import "../CSS/Home.css";
import Explore from "./Explore";
import Create from "./Create";
import TopBar from "./TopBar";
import SideBar from "./SideBar";
function Home() {
  return (
    <div className="home-body">
      <TopBar />
      <SideBar />
      <Create />
      <Explore />
    </div>
  );
}

export default Home;
