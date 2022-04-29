import React, { useState } from 'react'
import { TextField, Box, Grid, Container, Typography, Button } from '@mui/material';
import validate from './SignUpValidation';




function Signup() {

  const [formErrors, setformErrors] = useState({});
  let isSubmit = false
  const [data, setData] = useState({
    Fname: "",
    Lname: "",
    email: "",
    password: "",
  });

 

 function  AddData (e, data ) {
     e.preventDefault();
     
        isSubmit = true
     
        const errors = validate(data);
        setformErrors(validate(data));
   
   
   if(Object.keys(errors).length == 0 && isSubmit)
    {
     console.log(data)
     
     isSubmit=false

    }
  }


  return (
    <>
      <Box
        sx={{ display: "flex", margin: "40px 20% 0 20%", padding: "40px" }}
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
                Sign up
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="outlined-basic"
                onChange={(e) => setData({ ...data, Fname: e.target.value })}
                label="First Name"
                variant="outlined"
                error={formErrors.firstName && true}
                helperText={formErrors.firstName}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                onChange={(e) => setData({ ...data, Lname: e.target.value })}
                id="outlined-basic"
                label="Last Name"
                variant="outlined"
                error={formErrors.lastName && true}
                helperText={formErrors.lastName}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                onChange={(e) => setData({ ...data, email: e.target.value })}
                id="outlined-basic"
                label="Email"
                variant="outlined"
                error={formErrors.email && true}
                helperText={formErrors.email}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                onChange={(e) => setData({ ...data, password: e.target.value })}
                id="outlined-basic"
                label="Password"
                variant="outlined"
                error={formErrors.password && true}
                helperText={formErrors.password}
              />
            </Grid>

            <Grid item xs={12}>
              <Button fullWidth variant="contained" type="submit">
                {" "}
                Sign up
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Button fullWidth variant="outlined">
                {" "}
                Already have account ?
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </>
  );
}

export default Signup