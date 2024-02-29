import React from "react";
import "../CSS/Profile.css";

function Profile() {
  return (
    <div className="profile-body">
      <img
        src="https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=612x612&w=0&k=20&c=eU56mZTN4ZXYDJ2SR2DFcQahxEnIl3CiqpP3SOQVbbI="
        alt="profile"
      ></img>
      <h1>nkchaudhary01</h1>
      <p>Wildlife Photographer</p>
      <button>Edit</button>
      <div className="profile-stats">
        <div>
          <h5>96</h5>
          <h6>Posts</h6>
        </div>
        <div>
          <h5>3500</h5>
          <h6>Followers</h6>
        </div>
        <div>
          <h5>900</h5>
          <h6>Followings</h6>
        </div>
      </div>
    </div>
  );
}

export default Profile;
