import React from "react";
import "../CSS/Navigation.css";
import { Link } from "react-router-dom";
import { Icon } from "semantic-ui-react";

function Navigation() {
  return (
    <div className="navigation-body">
      <Link to={"/home"} className="navigation-icon">
        <Icon name="home" size="large" />
        <div>Home</div>
      </Link>
      <Link to={"/explore"} className="navigation-icon">
        <Icon name="compass" size="large" />
        <div>Explore</div>
      </Link>
      <Link to={"/create"} className="navigation-icon">
        <Icon name="add square" size="large" />
        <div>Create</div>
      </Link>
    </div>
  );
}

export default Navigation;
