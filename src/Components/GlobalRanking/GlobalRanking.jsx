import React, { useState, useEffect } from "react";
import "./GlobalRanking.css";
import CustomList from "../CustomList/CustomList";
import { API, graphqlOperation } from "aws-amplify";
import { listTeams } from "../../graphql/queries";

const GlobalRanking = () => {
  const [teams, setTeams] = useState([]);
  const [selectedTeam, setSelectedTeam] = useState(null);

  async function fetchTeams() {
    const query = `
        query MyQuery {
            listTeams(limit: 800) {
                items {
                id
                rank
                team_name
                }
            }
        }
        `;
    try {
      const apiData = await API.graphql(graphqlOperation(query));
      let teams = apiData.data.listTeams.items;

      // if team in teams has rank field null then set rank to 99999
      teams = teams.map((team) => {
        if (team.rank === null) {
          team.rank = 999;
        }
        return team;
      });

      teams.sort((a, b) => {
        if (a.rank < b.rank) return -1;
        if (a.rank > b.rank) return 1;
        return 0;
      });
      console.log(teams);
      setTeams(teams);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchTeams();
  }, []);

  return (
    <div className="background-image">
      <h1 className="header"> Global Power Ranking</h1>
      <div className="list-and-info-container">
        <div className="list-wrapper">
          <CustomList
            allItems={teams}
            itemsPerPage={teams.length}
            onTeamSelect={setSelectedTeam}
          />
        </div>
      </div>
    </div>
  );
};

export default GlobalRanking;
