import React from 'react';
import {Button, Card, CardContent, CardMedia, Typography} from '@mui/material';
import {Competition} from "@/src/types/Football";
import MatchCard from "@/src/components/MatchCard";
import Grid2 from "@mui/material/Unstable_Grid2";

const cardMediaStyle = {
  width: 120,
  height: 120,
  marginRight: '16px',
  alignSelf: 'center',
};

const cardContentStyle = {
  display: 'flex',
  width: '100%',
  flexDirection: 'column',
}

const matchesContainerStyle = {
  display: 'flex',
  width: '100%',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'center',
}

const buttonStyle = {
  margin: '1rem',
  width: '15rem'
}

const CompetitionInfo = ({competition, type, onRemove}: {
  competition: Competition,
  type: string,
  onRemove?: Function
}) => {

  const [viewMatches, setViewMatches] = React.useState(false);
  const [matches, setMatches] = React.useState([]);

  const toggleViewMatches = async () => {
    if (matches.length === 0) {
      const response = await fetch(`/api/library/matches?competition-code=${competition.code}`)
      const data = await response.json()
      setMatches(data);
      setViewMatches(true);
    } else {
      setViewMatches(!viewMatches);
    }
  }

  const handleAddToLibrary = async () => {
    const response = await fetch('/api/library', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        competitionId: competition.id,
      })
    })
    const data = await response.json()
    console.log(data)
  }

  const handleRemoveFromLibrary = async () => {
    const response = await fetch(`/api/library?competition-id=${competition.id}`, {
      method: 'DELETE',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        competitionId: competition.id,
      })
    })
    const data = await response.json()
    console.log(data)
    if (onRemove) {
      onRemove(competition.id);
    }
  }

  return (
    <Card style={{display: 'flex', marginBottom: '16px', width: '100%'}}>
      <CardMedia style={cardMediaStyle} image={competition.emblem} title={competition.name}/>
      <CardContent style={cardContentStyle}>
        <Typography variant="h6">{competition.name}</Typography>
        <Typography variant="body1">Current Season: {competition.currentSeason.id}</Typography>
        <Typography variant="body1">Current Matchday: {competition.currentSeason.currentMatchday}</Typography>
        <Typography variant="body1">Area: {competition.area.name}</Typography>
        {type === 'add' && <Button onClick={handleAddToLibrary} variant={"contained"} style={buttonStyle}>Add to Library</Button>}
        {type === 'remove' &&
          <Button onClick={handleRemoveFromLibrary} variant={"contained"} style={buttonStyle}>Remove from Library</Button>}
        {type === 'remove' && !viewMatches &&
          <Button onClick={toggleViewMatches} variant={"contained"} style={buttonStyle}>View Matches</Button>}
        {type === 'remove' && viewMatches &&
          <Button onClick={toggleViewMatches} variant={"contained"} style={buttonStyle}>Hide Matches</Button>}
        {viewMatches && matches.length > 0 ? <Grid2 xs={12} container>
          {matches.map((match: any) => (
            <Grid2 key={match.id} xs={4}>
              <MatchCard match={match}/>
            </Grid2>
          ))} </Grid2> : null}
      </CardContent>
    </Card>
  );
};

export default CompetitionInfo;
