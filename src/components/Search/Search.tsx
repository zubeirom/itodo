import React from "react";
import TextField from "@material-ui/core/TextField";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > *": {
        width: 800
      }
    },
    textField: {}
  })
);

export interface SearchProps {
  input?: String;
  onChange: (event: any) => void;
}

const Search: React.SFC<SearchProps> = SearchProps => {
  const classes = useStyles();
  const { onChange, input } = SearchProps;

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField
        id="outlined-basic"
        label="Search by title"
        variant="outlined"
        className={classes.textField}
        onChange={onChange}
        value={input}
      />
    </form>
  );
};

export default Search;
