import React, { useState, useEffect } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { listRegions } from "../../graphql/queries";
import "./TeamSelector.css";

const TeamSelector = ({ setBucket, getBucket }) => {
  const [regions, setRegions] = useState([]);
  const [category, setCategory] = useState("Region");
  const [leagues, setLeagues] = useState([]);
  const [imageSize, setImageSize] = useState(0);
  const [regionChoice, setRegionChoice] = useState("");
  const [leagueChoice, setLeagueChoice] = useState("");
  const [teams, setTeams] = useState({});

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
    if (region === "") {
      setLeagues([]);
      return;
    }
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

  const fetchTeams = async (league) => {
    if (league === "") {
      setTeams({});
      return;
    }
    const teamByLeague = `
          query MyQuery {
        listTournaments(filter: {league_id: {eq: ${league}}}) {
          items {
            teams {
              items {
                team {
                  id
                  team_name
                  rank
                }
              }
            }
          }
        }
      }
      `;
    const teamData = await API.graphql(graphqlOperation(teamByLeague));
    const teamList = {};
    teamData.data.listTournaments.items.forEach((element) => {
      element.teams.items.forEach((team) => {
        teamList[team.team.id] = {
          team_name: team.team.team_name,
          rank: team.team.rank,
        };
      });
    });
    setTeams(teamList);
  };

  const updateRankingTeam = (team) => {
    const temp = getBucket();
    temp[team] = teams[team];
    setBucket(temp);
  };

  useEffect(() => {
    fetchRegions();
    fetchLeagues(regionChoice);
    fetchTeams(leagueChoice);
  }, [leagueChoice, regionChoice]);

  return (
    <div className="frame-container">
      <div alt="frame" className="responsive-image" id="frame" onLoad={setSize}>
        <div className="content-container">
          <div className="tabs">
            <p
              style={{
                color: category === "Region" ? "#BBA59A" : "#4C4E52",
                cursor: "pointer",
              }}
              onClick={() => {
                setCategory("Region");
              }}
            >
              Region
            </p>
            <img src={require("../../images/arrow-icon.png")} alt="arrow"></img>
            <p
              style={{
                color: category === "League" ? "#BBA59A" : "#4C4E52",
                cursor: "pointer",
              }}
              onClick={() => {
                setCategory("League");
              }}
            >
              League
            </p>
            <img src={require("../../images/arrow-icon.png")} alt="arrow"></img>
            <p
              style={{
                color: category === "Teams" ? "#BBA59A" : "#4C4E52",
                cursor: "pointer",
              }}
              onClick={() => {
                setCategory("Teams");
              }}
            >
              Teams
            </p>
          </div>

          <div className="content">
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
                    <hr />
                  </div>
                ))}
              </>
            ) : category === "League" ? (
              <>
                {leagues.map((league) => (
                  <div key={league.id}>
                    <div
                      style={{
                        flexDirection: "row",
                        display: "flex",
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
                        className="league-icon"
                      ></img>
                    </div>
                    <hr />
                  </div>
                ))}
              </>
            ) : (
              <>
                {Object.keys(teams).map((team) => (
                  <div
                    key={team}
                    style={{
                      alignContent: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <p
                      onClick={() => {
                        updateRankingTeam(team);
                      }}
                      style={{
                        color: team in getBucket() ? "#CBAF86" : null,
                      }}
                    >
                      {teams[team].team_name}
                    </p>
                    <hr />
                  </div>
                ))}
              </>
            )}
          </div>
          {category === "Teams" ? null : (
            <div
              className="nextButton"
              onClick={() => {
                if (category === "Region") {
                  setCategory("League");
                } else if (category === "League") {
                  setCategory("Teams");
                }
              }}
              alt="next"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default TeamSelector;
