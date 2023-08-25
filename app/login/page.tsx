"use client"

import {useState} from "react";
import Grid from "@mui/system/Unstable_Grid";
import {Button, Container, Paper, TextField, Typography} from "@mui/material";
import {redirect, useRouter} from "next/navigation";
import HeaderNavigationBar from "@/src/components/HeaderNavigatorBar";

export default function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { push } = useRouter()

  const handleEmailChange = (event: any) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: any) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event: any) => {
    try {
      event.preventDefault()
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({email, password})
      })
      const user = await response.json()
      localStorage.setItem('username', user.email)
      push('/')
    } catch (e) {
      console.error(e)
    }
  }
  return (
    <main>
      <HeaderNavigationBar/>
      <Grid container spacing={2}>
        <Grid xs={12}>
          <Container maxWidth="xs">
            <Paper elevation={3} style={{ padding: '20px', margin: '100px 0px' }}>
              <Typography variant="h4" align="center" gutterBottom>
                Log In
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