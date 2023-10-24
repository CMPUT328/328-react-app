import React, { useEffect, useState } from "react";
import TournamentRanking from "../Components/TournamentRanking/TournamentRanking";
import CustomList from "../Components/CustomList/CustomList";
import { API, graphqlOperation } from "aws-amplify";
import { listTournaments } from "../graphql/queries";
import "./Styles.css";

const TournamentRankingScreen = () => {
  const [readyList, setReadyList] = useState([]);

  const handleReadyList = async (tid) => {
    const query = `
    query MyQuery {
      listTournaments(filter: {id: {eq: ${tid}}}) {
        items {
          teams {
            items {
              team {
                id
                rank
                team_name
              }
            }
          }
        }
      }
    }
    `;
    const result = await API.graphql(graphqlOperation(query));
    const arr = [];
    result.data.listTournaments.items[0].teams.items.forEach((element) => {
      arr.push(element.team);
    });
    arr.sort((a, b) => {
      if (a.rank < b.rank) return -1;
      if (a.rank > b.rank) return 1;
      return 0;
    });
    // remove duplicates from array
    const uniqueArray = arr.filter((thing, index) => {
      const _thing = JSON.stringify(thing);
      return (
        index ===
        arr.findIndex((obj) => {
          return JSON.stringify(obj) === _thing;
        })
      );
    });
    setReadyList(uniqueArray);
  };

  return (
    <div className="teamRankingScreen">
      <div className="leaderBoard">
        <h1 className="title-teamRanking">Tournament Ranking</h1>
        <div className="list-Container">
          <CustomList allItems={readyList} itemsPerPage={5} />
        </div>
      </div>
      <div className="teamRankingInput">
        <TournamentRanking getTeams={handleReadyList} />
      </div>
    </div>
  );
};

export default TournamentRankingScreen;
