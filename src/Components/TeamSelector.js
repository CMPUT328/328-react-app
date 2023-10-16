import React, { useState, useEffect } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { listRegions } from "../graphql/queries";
import "./TeamSelector.css";

const TeamSelector = () => {
  const [regions, setRegions] = useState([]);
  const [category, setCategory] = useState("Region");
  const [itemIndex, setItemIndex] = useState(-1);
  const [leagues, setLeagues] = useState([]);
  const [imageSize, setImageSize] = useState(0);

  var image = document.getElementById("frame");

  const setSize = function (e) {
    if (e.target.width < e.target.height) {
      setImageSize(e.target.width - 170);
    } else {
      setImageSize(e.target.height - 170);
    }
  };

  const fetchRegions = async () => {
    const regionData = await API.graphql(graphqlOperation(listRegions));
    setRegions(regionData.data.listRegions.items);
  };

  const fetchLeagues = async (region) => {
    const leagueByRegion = `
            query MyQuery {
        listLeagues(filter: {region_id: {eq: "${region}"}}) {
          items {
            league_name
            image_url
            id
            region_id
          }
        }
      }
        `;
    const leagueData = await API.graphql(graphqlOperation(leagueByRegion));
    setLeagues(leagueData.data.listLeagues.items);
  };

  useEffect(() => {
    fetchRegions();
  }, []);

  return (
    <div className="frame-container">
      <div className="part1"></div>
      <div className="part2">
        <img
          src={require("../images/frame.png")}
          alt="frame"
          className="responsive-image"
          id="frame"
          onLoad={setSize}
        />
        <div
          className="content-container"
          style={{
            width: imageSize,
            height: imageSize,
          }}
        >
          <div className="tabs">
            <p style={{ color: category === "Region" ? "#BBA59A" : "#4C4E52" }}>
              Region
            </p>
            <img src={require("../images/arrow-icon.png")}></img>
            <p style={{ color: category === "League" ? "#BBA59A" : "#4C4E52" }}>
              League
            </p>
            <img src={require("../images/arrow-icon.png")}></img>
            <p style={{ color: category === "Teams" ? "#BBA59A" : "#4C4E52" }}>
              Teams
            </p>
          </div>
          <div className="region">
            {regions.map((region) => (
              <div key={region.id}>
                <p
                  onClick={() => {
                    fetchLeagues(region.id);
                  }}
                >
                  {region.id}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamSelector;
