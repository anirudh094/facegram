import React from "react";
import "../CSS/Create.css";
import { Icon } from "semantic-ui-react";

function Create() {
  return (
    <div className="create-body">
      <div className="create-post">
        <img
          className="create-post-dp"
          src="https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=612x612&w=0&k=20&c=eU56mZTN4ZXYDJ2SR2DFcQahxEnIl3CiqpP3SOQVbbI="
          alt="profile"
        ></img>
        <div className="create-post-caption">What's on your mind, Name?</div>
      </div>
      <div className="create-post-addon">
        <div className="create-post-image">
          <Icon name="image" size="large" color="orange" />
          <div>Media</div>
        </div>
        <button className="create-post-btn">Share</button>
      </div>
    </div>
  );
}

export default Create;
