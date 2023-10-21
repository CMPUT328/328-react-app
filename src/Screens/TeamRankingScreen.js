import React, { useState } from "react";
import "./Styles.css";
import TeamSelector from "../Components/TeamSelector/TeamSelector";
import Bucket from "../Components/Bucket/Bucket";
import CustomList from "../Components/CustomList/CustomList";

const allItems = [
  "Item 1",
  "Item 2",
  "Item 3",
  "Item 4",
  "item 5",
  "item 6",
  "item 7",
  "item 8",
];

const TeamRankingScreen = () => {
  const [rankingTeam, setRankingTeam] = useState({});

  const setBucket = (team) => {
    setRankingTeam({ ...team });
  };

  const getBucket = () => {
    return rankingTeam;
  };

  return (
    <div className="teamRankingScreen">
      <div className="leaderBoard">
        <h1 className="title-teamRanking">Team Ranking</h1>
        <div className="list-Container">
          <CustomList allItems={allItems} itemsPerPage={5} />
        </div>
      </div>
      <div className="teamRankingInput">
        <TeamSelector setBucket={setBucket} getBucket={getBucket} />
        <Bucket getBucket={getBucket} setBucket={setBucket} />
      </div>
    </div>
  );
};

export default TeamRankingScreen;
