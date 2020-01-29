import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import DoneOutlineIcon from "@material-ui/icons/DoneOutline";
import CloseOutlinedIcon from "@material-ui/icons/CloseOutlined";
import Fab from "@material-ui/core/Fab";

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    border: "2px black solid"
  },
  media: {
    height: 140
  },
  title: {
    fontSize: 18
  }
});

export interface TodoProps {
  userId: number;
  id: number;
  title: String;
  completed: Boolean;
}

const Todo: React.SFC<TodoProps> = TodoProps => {
  const classes = useStyles();

  const { title, completed } = TodoProps;

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            className={classes.title}
          >
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {completed ? (
          <Fab color="primary" size="small">
            <DoneOutlineIcon />
          </Fab>
        ) : (
          <Fab color="secondary" size="small">
            <CloseOutlinedIcon />
          </Fab>
        )}
      </CardActions>
    </Card>
  );
};

export default Todo;
