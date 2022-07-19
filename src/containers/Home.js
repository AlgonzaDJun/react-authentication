import { Box } from '@mui/material';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../config/firebase';

const Home = () => {
  const [user, loading, error] = useAuthState(auth);

  return (
    <Box sx={{ margin: 10 }}>
      Welcome to Mood Meter! <br />
      current use is : {user?.email}
    </Box>
  )
}

export default Home