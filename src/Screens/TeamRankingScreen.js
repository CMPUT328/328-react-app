import React, { useState } from "react";
import "./Styles.css";
import TeamSelector from "../Components/TeamSelector";

const TeamRankingScreen = () => {
  const [team, setTeam] = useState([]);
  return (
    <div className="teamRankingScreen">
      <div className="leaderBoard">hi</div>
      <div className="teamRankingInput">
        <TeamSelector />
      </div>
    </div>
  );
};

export default TeamRankingScreen;
