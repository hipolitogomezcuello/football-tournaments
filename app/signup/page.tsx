"use client"

import Grid from "@mui/system/Unstable_Grid";
import {Button, Container, Paper, TextField, Typography} from "@mui/material";
import {useState} from "react";
import HeaderNavigationBar from "@/src/components/HeaderNavigatorBar";

export default function Signup() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault()
    console.log('Logging in with: ', email, password)
    const response = await fetch('/api/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    })
    const { user } = await response.json()
    console.log(user)
  }
  return (
    <main>
      <HeaderNavigationBar/>
      <Grid container spacing={2}>
        <Grid xs={12}>
          <Container maxWidth="xs">
            <Paper elevation={3} style={{ padding: '20px', margin: '100px 0px' }}>
              <Typography variant="h4" align="center" gutterBottom>
                Sign Up
              </Typography>
              <form onSubmit={handleSubmit}>
                <TextField
                  label="Email"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  value={email}
                  onChange={handleEmailChange}
                />
                <TextField
                  label="Password"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  type="password"
                  value={password}
                  onChange={handlePasswordChange}
                />
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                  style={{ marginTop: '10px' }}
                >
                  Login
                </Button>
              </form>
            </Paper>
          </Container>
        </Grid>
      </Grid>
    </main>
  )
}