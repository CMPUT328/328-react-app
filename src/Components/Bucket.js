import React from "react";
import "./Bucket.css";

const Bucket = ({ rankingTeam }) => {
  return (
    <div className="bucket-container">
      <img
        src={require("../images/group-frame.png")}
        className="responsive-image"
      ></img>
    </div>
  );
};

export default Bucket;
