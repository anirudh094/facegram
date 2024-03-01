import React, { useState } from "react";
import "../CSS/Create.css";
import { imgDB } from "./Firebase/Firebaseconfig.js";
import { v4 } from "uuid";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { getDatabase, ref as myRef, set } from "firebase/database";

function Create() {
  const [caption, setcaption] = useState("");
  const [img, setImg] = useState("");
  const dateofPost = new Date();

  const handleUpload = (e) => {
    console.log(e.target.files[0]);
    const imgs = ref(imgDB, `Imgs/${v4()}`);
    uploadBytes(imgs, e.target.files[0]).then((data) => {
      console.log(data, "imgs");
      getDownloadURL(data.ref).then((val) => {
        setImg(val);
      });
    });
  };

  const handleClick = async () => {
    const db = getDatabase();
    set(myRef(db, "Posts/" + dateofPost), {
      captionVal: caption,
      imgUrl: img,
    });
    //window.location.reload(true);
  };

  return (
    <div className="create-body">
      <div className="create-post">
        <img
          className="create-post-dp"
          src="https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=612x612&w=0&k=20&c=eU56mZTN4ZXYDJ2SR2DFcQahxEnIl3CiqpP3SOQVbbI="
          alt="profile"
        ></img>
        <input
          type="text"
          className="create-post-caption"
          onChange={(e) => setcaption(e.target.value)}
          placeholder="What's on your mind, Name?"
        />
      </div>
      <div className="create-post-addon">

        <div className="file-input">
          <input
            type="file"
            name="file-input"
            id="file-input"
            className="file-input__input"
            onChange={(e) => handleUpload(e)}
          />
          <label className="file-input__label" for="file-input">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="upload"
              className="svg-inline--fa fa-upload fa-w-16"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M296 384h-80c-13.3 0-24-10.7-24-24V192h-87.7c-17.8 0-26.7-21.5-14.1-34.1L242.3 5.7c7.5-7.5 19.8-7.5 27.3 0l152.2 152.2c12.6 12.6 3.7 34.1-14.1 34.1H320v168c0 13.3-10.7 24-24 24zm216-8v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h136v8c0 30.9 25.1 56 56 56h80c30.9 0 56-25.1 56-56v-8h136c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"
              ></path>
            </svg>
            <span>Media</span>
          </label>
        </div>
        <button className="create-post-btn" onClick={handleClick}>
          Share
        </button>
      </div>
    </div>
  );
}

export default Create;
