import React from "react";
import "../CSS/Logout.css";
import AuthDetails from "./AuthDetails";

function Logout() {
  return (
    <div className="logout-body">
      {/* <Icon name="log out" size="large" color="red"/> */}
      <div><AuthDetails/></div>
    </div>
  );
}

export default Logout;
