import React from "react";
import "./App.css";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Dashboard from "../Dashboard/Dashboard";
import Container from "@material-ui/core/Container";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Provider } from "react-redux";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import store from "../../store";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    menuButton: {
      marginRight: theme.spacing(2)
    },
    title: {
      flexGrow: 1
    }
  })
);

const App: React.FC = () => {
  const classes = useStyles();

  return (
    <Provider store={store}>
      <div className="App">
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            ></IconButton>
            <Typography variant="h6" className={classes.title}>
              Itodo
            </Typography>
          </Toolbar>
        </AppBar>
        <Container>
          <Dashboard />
        </Container>
      </div>
    </Provider>
  );
};

export default App;
