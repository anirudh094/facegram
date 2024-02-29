import React from "react";
import "../CSS/Logout.css";
import { Icon } from "semantic-ui-react";

function Logout() {
  return (
    <div className="logout-body">
      <Icon name="log out" size="large" color="red"/>
      <div>Logout</div>
    </div>
  );
}

export default Logout;
