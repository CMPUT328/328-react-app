/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateRegion = /* GraphQL */ `
  subscription OnCreateRegion($filter: ModelSubscriptionRegionFilterInput) {
    onCreateRegion(filter: $filter) {
      id
      leagues {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateRegion = /* GraphQL */ `
  subscription OnUpdateRegion($filter: ModelSubscriptionRegionFilterInput) {
    onUpdateRegion(filter: $filter) {
      id
      leagues {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteRegion = /* GraphQL */ `
  subscription OnDeleteRegion($filter: ModelSubscriptionRegionFilterInput) {
    onDeleteRegion(filter: $filter) {
      id
      leagues {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateLeague = /* GraphQL */ `
  subscription OnCreateLeague($filter: ModelSubscriptionLeagueFilterInput) {
    onCreateLeague(filter: $filter) {
      id
      league_name
      image_url
      region_id
      tournaments {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateLeague = /* GraphQL */ `
  subscription OnUpdateLeague($filter: ModelSubscriptionLeagueFilterInput) {
    onUpdateLeague(filter: $filter) {
      id
      league_name
      image_url
      region_id
      tournaments {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteLeague = /* GraphQL */ `
  subscription OnDeleteLeague($filter: ModelSubscriptionLeagueFilterInput) {
    onDeleteLeague(filter: $filter) {
      id
      league_name
      image_url
      region_id
      tournaments {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateTournament = /* GraphQL */ `
  subscription OnCreateTournament(
    $filter: ModelSubscriptionTournamentFilterInput
  ) {
    onCreateTournament(filter: $filter) {
      id
      tournament_name
      tournament_name_partial
      league_id
      teams {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateTournament = /* GraphQL */ `
  subscription OnUpdateTournament(
    $filter: ModelSubscriptionTournamentFilterInput
  ) {
    onUpdateTournament(filter: $filter) {
      id
      tournament_name
      tournament_name_partial
      league_id
      teams {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteTournament = /* GraphQL */ `
  subscription OnDeleteTournament(
    $filter: ModelSubscriptionTournamentFilterInput
  ) {
    onDeleteTournament(filter: $filter) {
      id
      tournament_name
      tournament_name_partial
      league_id
      teams {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateTeam = /* GraphQL */ `
  subscription OnCreateTeam($filter: ModelSubscriptionTeamFilterInput) {
    onCreateTeam(filter: $filter) {
      id
      team_name
      acronym
      rank
      tournaments {
        nextToken
        __typename
      }
      players {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateTeam = /* GraphQL */ `
  subscription OnUpdateTeam($filter: ModelSubscriptionTeamFilterInput) {
    onUpdateTeam(filter: $filter) {
      id
      team_name
      acronym
      rank
      tournaments {
        nextToken
        __typename
      }
      players {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteTeam = /* GraphQL */ `
  subscription OnDeleteTeam($filter: ModelSubscriptionTeamFilterInput) {
    onDeleteTeam(filter: $filter) {
      id
      team_name
      acronym
      rank
      tournaments {
        nextToken
        __typename
      }
      players {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateTournamentTeamConnection = /* GraphQL */ `
  subscription OnCreateTournamentTeamConnection(
    $filter: ModelSubscriptionTournamentTeamConnectionFilterInput
  ) {
    onCreateTournamentTeamConnection(filter: $filter) {
      id
      tournamentID
      teamID
      tournament {
        id
        tournament_name
        tournament_name_partial
        league_id
        createdAt
        updatedAt
        __typename
      }
      team {
        id
        team_name
        acronym
        rank
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateTournamentTeamConnection = /* GraphQL */ `
  subscription OnUpdateTournamentTeamConnection(
    $filter: ModelSubscriptionTournamentTeamConnectionFilterInput
  ) {
    onUpdateTournamentTeamConnection(filter: $filter) {
      id
      tournamentID
      teamID
      tournament {
        id
        tournament_name
        tournament_name_partial
        league_id
        createdAt
        updatedAt
        __typename
      }
      team {
        id
        team_name
        acronym
        rank
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteTournamentTeamConnection = /* GraphQL */ `
  subscription OnDeleteTournamentTeamConnection(
    $filter: ModelSubscriptionTournamentTeamConnectionFilterInput
  ) {
    onDeleteTournamentTeamConnection(filter: $filter) {
      id
      tournamentID
      teamID
      tournament {
        id
        tournament_name
        tournament_name_partial
        league_id
        createdAt
        updatedAt
        __typename
      }
      team {
        id
        team_name
        acronym
        rank
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreatePlayer = /* GraphQL */ `
  subscription OnCreatePlayer($filter: ModelSubscriptionPlayerFilterInput) {
    onCreatePlayer(filter: $filter) {
      id
      username
      role
      team_id
      rank_2023
      rank_2020
      rank_2021
      rank_2022
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdatePlayer = /* GraphQL */ `
  subscription OnUpdatePlayer($filter: ModelSubscriptionPlayerFilterInput) {
    onUpdatePlayer(filter: $filter) {
      id
      username
      role
      team_id
      rank_2023
      rank_2020
      rank_2021
      rank_2022
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeletePlayer = /* GraphQL */ `
  subscription OnDeletePlayer($filter: ModelSubscriptionPlayerFilterInput) {
    onDeletePlayer(filter: $filter) {
      id
      username
      role
      team_id
      rank_2023
      rank_2020
      rank_2021
      rank_2022
      createdAt
      updatedAt
      __typename
    }
  }
`;
