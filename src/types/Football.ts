export type CompetitionsResponse = {
  competitions: Competition[];
}

export type Competition = {
  id: number;
  area: Area;
  name: string;
  code: string;
  type: string;
  emblem: string;
  plan: string;
  currentSeason: CurrentSeason;
  numberOfAvailableSeasons: number;
  lastUpdated: Date;
}

export type Area = {
  id: number;
  name: string;
  code: string;
  flag: string;
}

export type CurrentSeason = {
  id: number;
  startDate: Date;
  endDate: Date;
  currentMatchday: number;
  winner: null;
}

export type Match = {
  area: Area;
  competition: Competition;
  season: Season;
  id: number;
  utcDate: Date;
  status: string;
  matchday: number;
  stage: string;
  group: null;
  lastUpdated: Date;
  homeTeam: Team;
  awayTeam: Team;
  score: Score;
  odds: Odds;
  referees: any[];
}

export type Team = {
  id: number;
  name: string;
  shortName: string;
  tla: string;
  crest: string;
}

export type Odds = {
  msg: string;
}

export type Score = {
  winner: string;
  duration: string;
  fullTime: Time;
  halfTime: Time;
}

export type Time = {
  home: number;
  away: number;
}

export type Season = {
  id: number;
  startDate: Date;
  endDate: Date;
  currentMatchday: number;
  winner: null;
}
