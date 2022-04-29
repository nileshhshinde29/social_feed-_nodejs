import React from 'react'
import { TextField, Box, Grid, Container, Typography, Button } from '@mui/material';
import { useState, useEffect } from 'react'
import validate from './ValidationLogin';

// import { Box, paper , Grid ,} from "@material-ui/core";



function Login() {

  const [formErrors, setformErrors] = useState({});
  let isSubmit = false
  const [data, setData] = useState({
  email: "",
  password: "",
   });
  
  

  function AddData(e, data) {
    e.preventDefault();

    isSubmit = true;

    const errors = validate(data);
    setformErrors(validate(data));

    if (Object.keys(errors).length == 0 && isSubmit) {
      console.log(data);
      console.log("hello");
      isSubmit=false
    }
  }




  return (
    <>
      <Box
        sx={{ display: "flex", margin: "40px 20% 0 20%", padding: "20px" }}
        border={1}
      >
        <form onSubmit={(e) => AddData(e, data)}>
          <Grid
            container
            alignItems={"center"}
            sx={{ marginLeft: "auto", marginRight: "auto" }}
            spacing={2}
            // xs={12}
          >
            <Grid item xs={12}>
              <Typography variant="h3" sx={{ fontWeight: "bold" }}>
                Login
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                onChange={(e) => setData({ ...data, email: e.target.value })}
                id="outlined-basic"
                label="Email"
                error={formErrors.email && true}
                helperText={formErrors.email}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="outlined-basic"
                onChange={(e) => setData({ ...data, password: e.target.value })}
                label="Password"
                type="password"
                error={formErrors.password && true}
                helperText={formErrors.password}
                variant="outlined"
              />
            </Grid>
            <Grid container item alignItems={"center"} spacing={2} xs={12}>
              <Grid item xs={12} sm={6}>
                <Button fullWidth variant="contained" type="submit">
                  {" "}
                  Login
                </Button>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Button fullWidth variant="contained">
                  {" "}
                  Sign up
                </Button>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Button fullWidth variant="outlined">
                {" "}
                Login With Google
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </>
  );
}

export default Login