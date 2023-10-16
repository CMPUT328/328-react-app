import React, { useState } from "react";
import "./Bucket.css";

const bucketRatio = 499 / 692;

const Bucket = ({ rankingTeam }) => {
  const [topStart, setTopStart] = useState(0);
  const [leftStart, setLeftStart] = useState(0);
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);

  const setSize = function (e) {
    if (e.target.width < e.target.height) {
      setTopStart((e.target.height - e.target.width * bucketRatio) / 2);
      setHeight(e.target.width * bucketRatio);
      setWidth(e.target.width);
      setLeftStart(0);
    } else {
      setTopStart(0);
      setLeftStart((e.target.width - e.target.height / bucketRatio) / 2);
      setHeight(e.target.height);
      setWidth(e.target.height / bucketRatio);
    }
  };

  return (
    <div className="bucket-container">
      <div className="gap"></div>
      <div className="group-frame-container">
        <img
          src={require("../images/group-frame.png")}
          className="group-frame-image"
          onLoad={setSize}
        ></img>
        <div
          className="bucket-content-container"
          style={{
            maxHeight: height * 0.7,
            maxWidth: width - 80,
          }}
        >
          <div className="bucket-content">
            {Object.keys(rankingTeam).map((key) => {
              return (
                <>
                  <p>{rankingTeam[key].team_name}</p>
                  <hr style={{}} />
                </>
              );
            })}
          </div>
        </div>
      </div>
      <img
        src={require("../images/enter-button.png")}
        style={{
          width: width / 5,
          position: "absolute",
          top: topStart + height * 0.7 + 30,
          left: leftStart + width - width / 6 - 60,
          zIndex: 1,
        }}
        alt="next"
      ></img>
    </div>
  );
};

export default Bucket;
