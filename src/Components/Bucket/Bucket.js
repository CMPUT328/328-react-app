import React, { useState } from "react";
import "./Bucket.css";

const bucketRatio = 499 / 692;

const Bucket = ({ getBucket, setBucket }) => {
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

  const removeTeam = (key) => {
    const temp = getBucket();
    delete temp[key];
    setBucket(temp);
  };

  return (
    <div className="bucket-container">
      <div className="gap"></div>
      <div className="group-frame-container">
        <div
          className="group-frame-image"
          onLoad={setSize}
          alt="group-frame"
        ></div>
        <div
          className="bucket-content-container"
          style={{
            maxHeight: height * 0.7,
            maxWidth: width - 80,
            paddingBottom: 35,
          }}
        >
          <div className="bucket-content">
            {Object.keys(getBucket()).map((key) => {
              return (
                <div key={key}>
                  <p onClick={() => removeTeam(key)}>
                    {getBucket()[key].team_name}
                  </p>
                  <hr />
                </div>
              );
            })}
          </div>
        </div>
        <div className="button-container">
          <img
            src={require("../../images/enter-button.png")}
            className="enter-button"
            alt="next"
            style={{
              top: topStart + height * 0.7 + 20,
              left: leftStart + width - width / 5 - 30,
              width: width / 5,
              zIndex: 1,
              position: "absolute",
              cursor: "pointer",
            }}
            onClick={() => {
              console.log(getBucket());
            }}
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Bucket;
