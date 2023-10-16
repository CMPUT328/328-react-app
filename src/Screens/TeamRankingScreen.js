import React, { useState } from "react";
import "./Styles.css";
import TeamSelector from "../Components/TeamSelector";
import Bucket from "../Components/Bucket";

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
      <div className="leaderBoard">hi</div>
      <div className="teamRankingInput">
        <TeamSelector setBucket={setBucket} getBucket={getBucket} />
        <Bucket getBucket={getBucket} setBucket={setBucket} />
      </div>
    </div>
  );
};

export default TeamRankingScreen;
