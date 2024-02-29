import React from "react";
import "../CSS/Explore.css";

function Explore() {
  return (
    <>
      <div className="explore-body">
        <div className="explore-body-cards">
          <div className="explore-body-cards-acc-info">
            <img
              src="https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=612x612&w=0&k=20&c=eU56mZTN4ZXYDJ2SR2DFcQahxEnIl3CiqpP3SOQVbbI="
              alt="profile"
            ></img>
            <div>
              <h4>cameron_will</h4>
              <h5>Mumbai, India</h5>
            </div>
          </div>
          <img
            className="post-image"
            src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?size=626&ext=jpg&ga=GA1.1.1395880969.1709164800&semt=sph"
            alt="post"
          ></img>
        </div>
      </div>
    </>
  );
}

export default Explore;
