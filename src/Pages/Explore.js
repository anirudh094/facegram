import React, { useState, useEffect } from "react";
import "../CSS/Explore.css";
import { Icon } from "semantic-ui-react";
import { txtDB } from "./Firebase/Firebaseconfig";
import { ref, onValue, query, orderByKey} from "firebase/database";
import TopBar from "./TopBar";
import SideBar from "./SideBar";

function Explore() {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    const dbref = query(ref(txtDB, "Posts"), orderByKey());
    const fetchData = () => {
      onValue(dbref, (snapshot) => {
        let records = [];
        snapshot.forEach((childSnapshot) => {
          let keyName = childSnapshot.key;
          let data = childSnapshot.val();
          records.push({ key: keyName, data: data });
        });
        records.sort((a, b) => b.key.localeCompare(a.key));
        setTableData(records);
      });
    };
    fetchData();
  },[]);

  return (
    <>
      <TopBar />
      <SideBar />
      <div className="explore-body">
        {tableData.map((row, index) => (
          <div className="explore-body-cards">
            <div className="explore-body-cards-acc-info">
              <img src={row.data.dp} alt="profile"></img>
              <div>
                <h4>{row.data.username}</h4>
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
