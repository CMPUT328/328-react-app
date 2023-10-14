import React, { useEffect } from "react";
import "@aws-amplify/ui-react/styles.css";
import { API } from "aws-amplify";
import {
  createRegion,
  createLeague,
  createTournament,
  createTournamentTeamConnection,
  createTeam,
  createPlayer,
} from "./graphql/mutations";

const region_data = require("./league_data/region_league.json");
const league_data = require("./league_data/league_tournament.json");
const tournament_data = require("./league_data/tournament_team.json");
const team_data = require("./league_data/team_player.json");
const player_data = require("./league_data/player_role.json");

const DataPush = () => {
  // pushing region
  async function pushRegion() {
    for (const region in region_data) {
      try {
        const region_input = {
          id: region,
        };
        const result = await API.graphql({
          query: createRegion,
          variables: { input: region_input },
        });
        console.log("Region pushed:", result);
      } catch (error) {
        console.error("Error pushing region:", error);
      }
    }
  }

  async function pushLeague() {
    for (let i = 0; i < league_data.length; i++) {
      let key = Object.keys(league_data[i])[0];
      try {
        const league_input = {
          id: key,
          league_name: league_data[i][key].league_name,
          image_url: league_data[i][key].image,
          region_id: league_data[i][key].region_name,
        };
        const result = await API.graphql({
          query: createLeague,
          variables: { input: league_input },
        });
        console.log("League pushed:", result);
      } catch (error) {
        console.error("Error pushing league:", error);
      }
    }
  }

  async function pushTeam() {
    for (let i = 0; i < team_data.length; i++) {
      let key = Object.keys(team_data[i])[0];
      try {
        const team_input = {
          id: key,
          team_name: team_data[i][key].team_name,
          acronym: team_data[i][key].acronym,
        };
        const result = await API.graphql({
          query: createTeam,
          variables: { input: team_input },
        });
        console.log("Team pushed:", result);
      } catch (error) {
        console.error("Error pushing team:", error);
      }
    }
  }

  async function pushTournament() {
    for (let i = 0; i < tournament_data.length; i++) {
      let key = Object.keys(tournament_data[i])[0];
      try {
        const tournament_input = {
          id: key,
          tournament_name: tournament_data[i][key].tournament_name,
          tournament_name_partial:
            tournament_data[i][key].tournament_name_partial,
          league_id: tournament_data[i][key].league_id,
        };
        const result = await API.graphql({
          query: createTournament,
          variables: { input: tournament_input },
        });
        // push tournament team connection
        for (let j = 0; j < tournament_data[i][key].teams.length; j++) {
          try {
            const tournamentTeamConnection_input = {
              tournamentID: key,
              teamID: tournament_data[i][key].teams[j],
            };
            const result = await API.graphql({
              query: createTournamentTeamConnection,
              variables: { input: tournamentTeamConnection_input },
            });
            console.log("connection pushed:", result);
          } catch (error) {
            console.error("Error pushing connection:", error);
          }
        }

        console.log("Tournament pushed:", result);
      } catch (error) {
        console.error("Error pushing tournament:", error);
      }
    }
  }

  async function pushPlayer() {
    for (let i = 0; i < player_data.length; i++) {
      let key = Object.keys(player_data[i])[0];
      try {
        const player_input = {
          id: key,
          username: player_data[i][key].username,
          role: player_data[i][key].role,
          team_id: player_data[i][key].team_id,
        };
        const result = await API.graphql({
          query: createPlayer,
          variables: { input: player_input },
        });
        console.log("Player pushed:", result);
      } catch (error) {
        console.error("Error pushing player:", error);
      }
    }
  }

  useEffect(() => {
    // pushRegion();
    // pushLeague();
    // pushTournament();
    // pushTeam();
    pushPlayer();
  });

  return <></>;
};

export default DataPush;
