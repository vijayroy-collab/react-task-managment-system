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
  createTheme
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import React from "react";
import { ThemeProvider } from "@emotion/react";
import { Link } from "react-router-dom";
import routeRules from "../../routes/routeRules";

const Index = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#1bbd7e',
      },
      
    },
  })
  const [alignment, setAlignment] = React.useState("web");

  const handleChange = (
    event,
    newAlignment
  ) => {
    setAlignment(newAlignment);
  };
  const paperStyle = {
    padding: 20,
    height: "80vh",
    width: 500,
    margin: "6em auto",
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
                LOG IN
              </Typography>
          </Grid>

          <Stack
            spacing={6}
            style={styleInputGroup}
            justifyContent="center"
            alignItems="center"
          >
            <ToggleButtonGroup
              color="primary"
              value={alignment}
              exclusive
              onChange={handleChange}
            >
              <ToggleButton value="mentor">Mentor</ToggleButton>
              <ToggleButton value="employee">Employee</ToggleButton>
            </ToggleButtonGroup>
            <TextField
              label="UserName"
              placeholder="Enter UserName"
              variant="standard"
              fullWidth
              required
            />
            <TextField
              label="Pasword"
              placeholder="Password"
              type="password"
              variant="standard"
              fullWidth
              required
            />
              </Stack>
              <Stack direction='row' spacing={2} justifyContent="center"
            alignItems="center">
            <Button variant="contained" sx={{color: 'white'}} endIcon={<LoginOutlinedIcon />}>
              signin
            </Button>
            <Link to={routeRules.signUp}>
            <Button variant="outlined"  endIcon={<LoginOutlinedIcon />}>
              signup
            </Button>
            </Link>
           
            </Stack>
        </Paper>
      </Box>
    </div>
    </ThemeProvider>
  );
};

export default Index;
