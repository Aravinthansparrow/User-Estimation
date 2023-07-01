import React from 'react';
import { Button, TextField, Box, Typography } from '@mui/material';

const ForgotPassword = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems:"baseline",
        marginTop:"30px",
        flexDirection: 'column',
        maxWidth: 400,
        boxShadow: '0px 3px 10px rgba(0, 0, 0, 0.2)',
        transition: 'box-shadow 0.3s ease-in-out',
        p: 4,
        gap:"4px",
        m: '30px auto',
      }}
    >
        <Typography variant='h6'>Enter your email</Typography>
      <TextField  placeholder="Email" fullWidth />
      <Button variant="contained" color="primary" sx={{ mt: 2 }}>
        Send Link
      </Button>
    </Box>
  );
};

export default ForgotPassword;
