import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import {Match} from "@/src/types/Football";
import {Properties} from "csstype";

const cardStyle = {
  display: 'flex',
  width: 300,
  marginBottom: '16px',
  margin: '2rem',
};

const mediaStyle = {
  width: 100,
  height: 100,
  marginRight: '16px',
};

const scoresStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  marginRight: '16px',
};

const getWinner = (match: Match) => {
  if (match.score.winner === 'HOME_TEAM') {
    return match.homeTeam.shortName;
  } else if (match.score.winner === 'AWAY_TEAM') {
    return match.awayTeam.shortName;
  } else {
    return 'Draw';
  }
}

const MatchCard = ({ match }: { match: Match}) => {
  return (
    <Card style={cardStyle}>
      <CardMedia style={mediaStyle} image={match.homeTeam.crest} title={match.homeTeam.name} />
      <CardContent>
        <Typography variant="subtitle1">
          {match.homeTeam.shortName} vs {match.awayTeam.shortName}
        </Typography>
        <Typography variant="body2">{new Date(match.utcDate).toLocaleString()}</Typography>
        <div style={scoresStyle as Properties}>
          <Typography variant="h6">
            {match.score.fullTime.home} - {match.score.fullTime.away}
          </Typography>
          <Typography variant="body2">Winner: {getWinner(match)}</Typography>
        </div>
      </CardContent>
      <CardMedia style={mediaStyle} image={match.awayTeam.crest} title={match.awayTeam.name} />
    </Card>
  );
};

export default MatchCard;
