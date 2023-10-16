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
  const [regionChoice, setRegionChoice] = useState("");
  const [leagueChoice, setLeagueChoice] = useState("");

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
    console.log(leagueData.data.listLeagues.items);
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
            <img src={require("../images/arrow-icon.png")} alt="arrow"></img>
            <p style={{ color: category === "League" ? "#BBA59A" : "#4C4E52" }}>
              League
            </p>
            <img src={require("../images/arrow-icon.png")} alt="arrow"></img>
            <p style={{ color: category === "Teams" ? "#BBA59A" : "#4C4E52" }}>
              Teams
            </p>
          </div>

          <div className="region">
            {category === "Region" ? (
              <>
                {regions.map((region) => (
                  <div key={region.id}>
                    <p
                      onClick={() => {
                        setRegionChoice(region.id);
                      }}
                      style={{
                        color: regionChoice === region.id ? "#CBAF86" : null,
                      }}
                    >
                      {region.id}
                    </p>
                  </div>
                ))}
              </>
            ) : category === "League" ? (
              <>
                {leagues.map((league) => (
                  <div
                    key={league.id}
                    style={{
                      flexDirection: "row",
                      display: "flex",
                      alignContent: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <p
                      onClick={() => {
                        setLeagueChoice(league.id);
                      }}
                      style={{
                        color: leagueChoice === league.id ? "#CBAF86" : null,
                      }}
                    >
                      {league.league_name}
                    </p>
                    <img
                      src={league.image_url}
                      alt="league"
                      style={{
                        width: imageSize / 10,
                        height: imageSize / 10,
                        marginTop: imageSize / 30,
                      }}
                    ></img>
                  </div>
                ))}
              </>
            ) : (
              <></>
            )}
          </div>

          <div className="nextButton">
            <img
              src={require("../images/next-button.png")}
              style={{ width: imageSize / 4 }}
              onClick={() => {
                fetchLeagues(regionChoice);
                setCategory("League");
              }}
              alt="next"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamSelector;
