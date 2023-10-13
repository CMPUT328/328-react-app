/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getRegion = /* GraphQL */ `
  query GetRegion($id: ID!) {
    getRegion(id: $id) {
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
export const listRegions = /* GraphQL */ `
  query ListRegions(
    $filter: ModelRegionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRegions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getLeague = /* GraphQL */ `
  query GetLeague($id: ID!) {
    getLeague(id: $id) {
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
export const listLeagues = /* GraphQL */ `
  query ListLeagues(
    $filter: ModelLeagueFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLeagues(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        league_name
        createdAt
        updatedAt
        regionLeaguesId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getTournament = /* GraphQL */ `
  query GetTournament($id: ID!) {
    getTournament(id: $id) {
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
export const listTournaments = /* GraphQL */ `
  query ListTournaments(
    $filter: ModelTournamentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTournaments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        tournament_name
        tournament_name_partial
        createdAt
        updatedAt
        leagueTournamentsId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getTeam = /* GraphQL */ `
  query GetTeam($id: ID!) {
    getTeam(id: $id) {
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
export const listTeams = /* GraphQL */ `
  query ListTeams(
    $filter: ModelTeamFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTeams(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        team_name
        acronym
        createdAt
        updatedAt
        tournamentTeamsId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getPlayer = /* GraphQL */ `
  query GetPlayer($id: ID!) {
    getPlayer(id: $id) {
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
export const listPlayers = /* GraphQL */ `
  query ListPlayers(
    $filter: ModelPlayerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPlayers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        role
        createdAt
        updatedAt
        teamPlayersId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
