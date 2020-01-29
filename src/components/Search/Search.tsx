import React, { useState } from "react";
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
  setSearchString: (value: string) => void;
}

const Search: React.SFC<SearchProps> = ({ setSearchString }) => {
  const classes = useStyles();
  const [input, setInput] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
    setSearchString(e.target.value);
  };

  return (
    <form
      className={classes.root}
      noValidate
      autoComplete="off"
      onSubmit={e => e.preventDefault()}
    >
      <TextField
        id="outlined-basic"
        label="Search by title"
        variant="outlined"
        className={classes.textField}
        onChange={handleChange}
        value={input}
      />
    </form>
  );
};

export default Search;
