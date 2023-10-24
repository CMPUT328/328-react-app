import React, { useState } from "react";
import "./Bucket.css";

const Bucket = ({ getBucket, setBucket, ready }) => {
  const removeTeam = (key) => {
    const temp = getBucket();
    delete temp[key];
    setBucket(temp);
  };

  return (
    <>
      <div className="bucket-container">
        <div className="enter-button" onClick={ready}></div>
        <div className="group-frame-image" alt="group-frame">
          <div className="bucket-content-container">
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
        </div>
      </div>
    </>
  );
};

export default Bucket;
