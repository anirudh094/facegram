import React, { useState, useEffect } from "react";
import "../CSS/Explore.css";
import { Icon } from "semantic-ui-react";
import { txtDB } from "./Firebase/Firebaseconfig";
import { ref, onValue, query, orderByChild } from "firebase/database";
function Explore() {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    const dbref = query(
      ref(txtDB, "Posts"),
      orderByChild("imgUrl")
    );
    const fetchData = () => {
      onValue(dbref, (snapshot) => {
        let records = [];
        snapshot.forEach((childSnapshot) => {
          let keyName = childSnapshot.key;
          let data = childSnapshot.val();
          records.push({ key: keyName, data: data });
        });
        setTableData(records);
      });
    };
    fetchData();
  },);

  return (
    <>
      <div className="explore-body">
        {tableData.map((row, index) => (
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
            <img className="post-image" src={row.data.imgUrl} alt="post"></img>
            <div className="explore-post-impressions">
              <Icon
                className="explore-post-impressions-icon"
                name="heart"
                size="large"
                color="red"
              />
              <Icon
                className="explore-post-impressions-icon"
                name="comment"
                size="large"
                color="grey"
              />
              <Icon
                className="explore-post-impressions-icon"
                name="share alternate"
                size="large"
                color="grey"
              />
            </div>
            <div className="explore-post-caption">
              <Icon
                className="explore-post-caption-quotes"
                name="quote left"
                size="small"
                color="white"
              />
              {row.data.captionVal}
              <Icon
                className="explore-post-caption-quotes"
                name="quote right"
                size="small"
                color="white"
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Explore;
