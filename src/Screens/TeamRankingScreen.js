import React, { useEffect, useState } from "react";
import "./Styles.css";
import TeamSelector from "../Components/TeamSelector/TeamSelector";
import Bucket from "../Components/Bucket/Bucket";
import CustomList from "../Components/CustomList/CustomList";

const TeamRankingScreen = () => {
  const [rankingTeam, setRankingTeam] = useState({});
  const [teamList, setTeamList] = useState([]);
  const [readyList, setReadyList] = useState([]);

  const setBucket = (team) => {
    setRankingTeam({ ...team });
  };

  const getBucket = () => {
    return rankingTeam;
  };

  const formData = () => {
    const arr = [];
    Object.keys(rankingTeam).forEach((key) => {
      console.log(rankingTeam[key].team_name);
      arr.push({
        id: key,
        team_name: rankingTeam[key].team_name,
        rank: rankingTeam[key].rank,
      });
    });
    setTeamList(arr);
  };

  const sortBucket = () => {
    const arr = teamList;
    arr.sort((a, b) => {
      if (a.rank < b.rank) return -1;
      if (a.rank > b.rank) return 1;
      return 0;
    });
    console.log(arr);
    setReadyList(arr);
  };

  useEffect(() => {
    formData();
  }, [rankingTeam]);

  return (
    <div className="teamRankingScreen">
      <div className="leaderBoard">
        <h1 className="title-teamRanking">Team Ranking</h1>
        <div className="list-Container">
          <CustomList allItems={readyList} itemsPerPage={5} />
        </div>
      </div>
      <div className="teamRankingInput">
        <TeamSelector setBucket={setBucket} getBucket={getBucket} />
        <Bucket
          getBucket={getBucket}
          setBucket={setBucket}
          ready={sortBucket}
        />
      </div>
    </div>
  );
};

export default TeamRankingScreen;
