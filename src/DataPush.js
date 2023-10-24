import React, { useEffect } from "react";
import "@aws-amplify/ui-react/styles.css";
import { API, graphqlOperation } from "aws-amplify";
import {
  createRegion,
  createLeague,
  createTournament,
  createTournamentTeamConnection,
  createTeam,
  createPlayer,
  updateTeam,
} from "./graphql/mutations";

const region_data = require("./league_data/region_league.json");
const league_data = require("./league_data/league_tournament.json");
const tournament_data = require("./league_data/tournament_team.json");
const team_data = require("./league_data/team_player.json");
const player_data = require("./league_data/player_role.json");
const team_rank = require("./league_data/rank.json");

const player_ranks = [];

player_ranks[0] = require("./league_data/ranking_players_2020.json");
player_ranks[1] = require("./league_data/ranking_players_2021.json");
player_ranks[2] = require("./league_data/ranking_players_2022.json");
player_ranks[3] = require("./league_data/ranking_players_2023.json");

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

  async function updateTeamRank() {
    team_rank.forEach((element) => {
      // update team
      try {
        const team_input = {
          id: element.teamId,
          rank: element.Combined_Rank,
        };
        const result = API.graphql({
          query: updateTeam,
          variables: { input: team_input },
        });
        console.log("Team updated:", result);
      } catch (error) {
        console.error("Error updating team:", error);
      }
    });
  }

  async function updatePalayerRank() {
    const fields = ["rank_2020", "rank_2021", "rank_2022", "rank_2023"];
    for (let i = 4; i < 5; i++) {
      // get the player id
      let j = 4;
      Object.keys(player_ranks[i][j]).forEach(async (key) => {
        try {
          const query = `
          mutation MyMutation {
            updatePlayer(input: {id: ${key}, ${fields[i]}: ${player_ranks[i][j][key]}}) {
              id
              ${fields[i]}
            }
          }
           `;
          const result = API.graphql(graphqlOperation(query));
          console.log("Player updated:", result);
        } catch (error) {
          console.error("Error updating", player_ranks[i][j][key]);
        }
      });
    }
  }
  useEffect(() => {
    // pushRegion();
    // pushLeague();
    // pushTournament();
    // pushTeam();
    // pushPlayer();
    updateTeamRank();
    // updatePalayerRank();
  });

  return <></>;
};

export default DataPush;
