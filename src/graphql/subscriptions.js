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
      region {
        id
        createdAt
        updatedAt
        __typename
      }
      tournaments {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      regionLeaguesId
      __typename
    }
  }
`;
export const onUpdateLeague = /* GraphQL */ `
  subscription OnUpdateLeague($filter: ModelSubscriptionLeagueFilterInput) {
    onUpdateLeague(filter: $filter) {
      id
      league_name
      region {
        id
        createdAt
        updatedAt
        __typename
      }
      tournaments {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      regionLeaguesId
      __typename
    }
  }
`;
export const onDeleteLeague = /* GraphQL */ `
  subscription OnDeleteLeague($filter: ModelSubscriptionLeagueFilterInput) {
    onDeleteLeague(filter: $filter) {
      id
      league_name
      region {
        id
        createdAt
        updatedAt
        __typename
      }
      tournaments {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      regionLeaguesId
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
      league {
        id
        league_name
        createdAt
        updatedAt
        regionLeaguesId
        __typename
      }
      teams {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      leagueTournamentsId
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
      league {
        id
        league_name
        createdAt
        updatedAt
        regionLeaguesId
        __typename
      }
      teams {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      leagueTournamentsId
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
      league {
        id
        league_name
        createdAt
        updatedAt
        regionLeaguesId
        __typename
      }
      teams {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      leagueTournamentsId
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
      tournament {
        id
        tournament_name
        tournament_name_partial
        createdAt
        updatedAt
        leagueTournamentsId
        __typename
      }
      players {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      tournamentTeamsId
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
      tournament {
        id
        tournament_name
        tournament_name_partial
        createdAt
        updatedAt
        leagueTournamentsId
        __typename
      }
      players {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      tournamentTeamsId
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
      tournament {
        id
        tournament_name
        tournament_name_partial
        createdAt
        updatedAt
        leagueTournamentsId
        __typename
      }
      players {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      tournamentTeamsId
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
      team {
        id
        team_name
        acronym
        createdAt
        updatedAt
        tournamentTeamsId
        __typename
      }
      createdAt
      updatedAt
      teamPlayersId
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
      team {
        id
        team_name
        acronym
        createdAt
        updatedAt
        tournamentTeamsId
        __typename
      }
      createdAt
      updatedAt
      teamPlayersId
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
      team {
        id
        team_name
        acronym
        createdAt
        updatedAt
        tournamentTeamsId
        __typename
      }
      createdAt
      updatedAt
      teamPlayersId
      __typename
    }
  }
`;
