import React, { useEffect, useState } from "react";
import "../CSS/Profile.css";

function Profile() {
  const [name, setName] = useState("");
  const [profilePhoto, setprofilePhoto] = useState("");

  useEffect(() => {
    const storedName = localStorage.getItem("name");
    const profile = localStorage.getItem("photo");

    if (storedName) {
      setName(storedName);
    }
    if (profile) {
      setprofilePhoto(profile);
    }
  }, []);
  return (
    <div className="profile-body">
      <img
        src={profilePhoto}
        alt="profile"
      ></img>
      <h1>{name}</h1>
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
