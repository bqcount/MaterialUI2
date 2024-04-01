import React from 'react';
import { Button, Card, CardActions, CardContent, CardHeader, InputAdornment, TextField, Typography } from '@mui/material';
import { Email, Key } from '@mui/icons-material';
import { teal } from '@mui/material/colors';
// backgroundColor: teal[100]
function LoginForm() {
  return (
    <Card sx={{ maxWidth: "700px" }}>
      <CardHeader title="Login"></CardHeader>
      <CardContent>
        <Typography component="h2" variant='h2'>Esto es una Card</Typography>
        <TextField
          label="Email:"
          variant="outlined"
          fullWidth={true}
          margin='normal'
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Email />
              </InputAdornment>
            )
          }}
        />
        <TextField
      
          id="outlined-basic"
          label="Password:"
          variant="outlined"
          type='password'
          fullWidth
          margin='normal'
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Key />
              </InputAdornment>
            )
          }}
        />
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "center" }}>
        <Button variant="outlined" color='primary'>Login</Button>
      </CardActions>
    </Card>
  );
}

export default LoginForm;
