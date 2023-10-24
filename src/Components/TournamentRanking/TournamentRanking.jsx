import React, { useState, useEffect } from "react";
import { API, graphqlOperation } from "aws-amplify";
import "./TournamentRanking.css";

const TournamentRanking = ({ getTeams }) => {
  const [tournaments, setTournaments] = useState([]);
  const [tournamentChoice, setTournamentChoice] = useState("");

  const fetchTournaments = async () => {
    const query = ` query MyQuery {
            listTournaments(limit: 500) {
                items {
                id
                tournament_name
                }
            }
        }
        `;
    const regionData = await API.graphql(graphqlOperation(query));
    setTournaments(regionData.data.listTournaments.items);
  };

  useEffect(() => {
    fetchTournaments();
  }, []);

  return (
    <div className="container-tournament">
      <div
        className="content-tournament"
        style={{ maxHeight: "80%", marginTop: "40%" }}
      >
        {tournaments.map((tournament) => (
          <React.Fragment key={tournament.id}>
            <p
              onClick={() => {
                getTeams(tournament.id);
              }}
            >
              {tournament.tournament_name}
            </p>
            <hr />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default TournamentRanking;
