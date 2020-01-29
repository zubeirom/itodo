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
import { IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

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
  onClick: () => void;
  onDelete: () => void;
}

const Todo: React.FC<TodoProps> = TodoProps => {
  const classes = useStyles();

  const { title, completed, onClick, onDelete } = TodoProps;

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
          <Fab color="primary" size="small" onClick={onClick}>
            <DoneOutlineIcon />
          </Fab>
        ) : (
          <Fab color="secondary" size="small" onClick={onClick}>
            <CloseOutlinedIcon />
          </Fab>
        )}
        <IconButton aria-label="share" onClick={onDelete}>
          <DeleteIcon color="error" />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Todo;
