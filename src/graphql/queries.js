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
        image_url
        region_id
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const leaguesByRegion_id = /* GraphQL */ `
  query LeaguesByRegion_id(
    $region_id: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelLeagueFilterInput
    $limit: Int
    $nextToken: String
  ) {
    leaguesByRegion_id(
      region_id: $region_id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        league_name
        image_url
        region_id
        createdAt
        updatedAt
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
        league_id
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const tournamentsByLeague_id = /* GraphQL */ `
  query TournamentsByLeague_id(
    $league_id: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelTournamentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    tournamentsByLeague_id(
      league_id: $league_id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        tournament_name
        tournament_name_partial
        league_id
        createdAt
        updatedAt
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
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getTournamentTeamConnection = /* GraphQL */ `
  query GetTournamentTeamConnection($id: ID!) {
    getTournamentTeamConnection(id: $id) {
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
export const listTournamentTeamConnections = /* GraphQL */ `
  query ListTournamentTeamConnections(
    $filter: ModelTournamentTeamConnectionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTournamentTeamConnections(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        tournamentID
        teamID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const tournamentTeamConnectionsByTournamentID = /* GraphQL */ `
  query TournamentTeamConnectionsByTournamentID(
    $tournamentID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelTournamentTeamConnectionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    tournamentTeamConnectionsByTournamentID(
      tournamentID: $tournamentID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        tournamentID
        teamID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const tournamentTeamConnectionsByTeamID = /* GraphQL */ `
  query TournamentTeamConnectionsByTeamID(
    $teamID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelTournamentTeamConnectionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    tournamentTeamConnectionsByTeamID(
      teamID: $teamID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        tournamentID
        teamID
        createdAt
        updatedAt
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
      team_id
      createdAt
      updatedAt
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
        team_id
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const playersByTeam_id = /* GraphQL */ `
  query PlayersByTeam_id(
    $team_id: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelPlayerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    playersByTeam_id(
      team_id: $team_id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        username
        role
        team_id
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
