import React, { useState, useEffect } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { listTournaments } from "../../graphql/queries";

const TeamSelector = ({ setBucket, getBucket }) => {
  const [tournaments, setTournaments] = useState([]);
  const [tournamentChoice, setTournamentChoice] = useState("");

  const fetchTournaments = async () => {
    const regionData = await API.graphql(graphqlOperation(listTournaments));
    setTournaments(regionData.data.listTournaments.items);
  };

  useEffect(() => {
    fetchTournaments();
  }, []);

  return (
    <div className="frame-container">
      <div alt="frame" className="responsive-image" id="frame">
        <div className="content-container">
          <div className="content">
            {tournaments.forEach((tournament) => (
              <div key={tournament.id}>
                <p
                  onClick={() => {
                    setTournamentChoice(tournament.id);
                  }}
                  style={{
                    color:
                      tournamentChoice === tournament.id ? "#CBAF86" : null,
                  }}
                >
                  {tournament.id}
                </p>
                <hr />
              </div>
            ))}
          </div>
          <div className="nextButton" onClick={() => {}} alt="next" />
        </div>
      </div>
    </div>
  );
};

export default TeamSelector;
