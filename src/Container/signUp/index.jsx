import {
  Avatar,
  Grid,
  Box,
  Stack,
  Paper,
  TextField,
  ToggleButtonGroup,
  ToggleButton,
  Button,
  Typography,
  MenuItem,
  createTheme,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import React from "react";
import { ThemeProvider } from "@emotion/react";

const userRoles = [
  {
    value: "mentor",
    label: "Mentor",
  },
  {
    value: "employee",
    label: "Employee",
  },
];

const Index = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#1bbd7e",
      },
    },
  });
  const [alignment, setAlignment] = React.useState("web");
  const [userRole, setUserRole] = React.useState("mentor");

  const handleDdChange = (event) => {
    setUserRole(event.target.value);
  };

  const handleChange = (
    event,
    newAlignment
  ) => {
    setAlignment(newAlignment);
  };
  const paperStyle = {
    padding: 20,
    height: "90vh",
    width: 500,
    margin: "2em auto",
  };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const styleInputGroup = { margin: "4em" };
  return (
    <ThemeProvider theme={theme}>
      <div className="container">
        <Box>
          <Paper elevation={10} style={paperStyle}>
            <Grid align="center" mt={3}>
              <Avatar style={avatarStyle}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography
                variant="h5"
                sx={{ fontWeight: "bold", color: "#1bbd7e", marginTop: "1em" }}
              >
                SIGN UP
              </Typography>
            </Grid>

            <Stack
              spacing={6}
              style={styleInputGroup}
              justifyContent="center"
              alignItems="center"
            >
              <TextField
                label="FullName"
                variant="standard"
                fullWidth
                required
              />
        
              <TextField
                label="Email"
                type="email"
                variant="standard"
                fullWidth
                required
              />
              <TextField
                label="Pasword"
                type="password"
                variant="standard"
                fullWidth
                required
              />
            <TextField
              id="standard-select-currency"
              select
              label="Select"
              value={userRole}
              onChange={handleDdChange}
              helperText="Please select your Role"
              variant="standard"
              sx={{width: '41vh',textAlign:'start'}}
            >
              {userRoles.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            </Stack>
            <Stack
              direction="row"
              spacing={2}
              justifyContent="center"
              alignItems="center"
            >
             
              <Button variant="contained" sx={{color:'white',width: '41vw',height:'5vh'}} endIcon={<LoginOutlinedIcon />}>
                signup
              </Button>
            </Stack>
          </Paper>
        </Box>
      </div>
    </ThemeProvider>
  );
};

export default Index;
