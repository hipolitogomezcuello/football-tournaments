import React, {useEffect} from 'react';
import {AppBar, Toolbar, Button, Container} from '@mui/material';
import {useRouter} from "next/navigation";
import {Properties} from "csstype";

const styles = {
  leftHeaders: {
    flexGrow: 1,
  },
  middleHeaders: {
    flexGrow: 1,
    textAlign: 'center',
  },
  rightHeaders: {
    flexGrow: 1,
    textAlign: 'right',
  }
}

const HeaderNavigationBar = () => {
  const [username, setUsername] = React.useState('')
  const { push } = useRouter()

  useEffect(() => {
    setUsername(localStorage.getItem('username') || '')
  }, [])


  return (
    <AppBar position="static">
      <Container maxWidth="md">
        <Toolbar>
          <div style={styles.leftHeaders}>
            <Button onClick={() => push('/library')} color="inherit">
              My library
            </Button>
            <Button onClick={() => push('/')} color="inherit">
              Browse
            </Button>
          </div>
          <div style={styles.middleHeaders as Properties}>
            {username !== '' ? `Welcome ${username}` : null}
          </div>
          <div style={styles.rightHeaders as Properties}>
            <Button onClick={() => push('/login')} color="inherit">
              Log In
            </Button>
            <Button onClick={() => push('/signup')} color="inherit">
              Sign Up
            </Button>
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default HeaderNavigationBar;
