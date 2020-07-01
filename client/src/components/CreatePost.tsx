import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useRef } from "react";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexWrap: "wrap",
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: "25ch",
    },
  })
);

export default function Create(props: any) {
  const classes = useStyles();
  const Text = useRef<HTMLInputElement>(null);

  const Submit = async () => {
    const response = await fetch("http://localhost:5000/posts", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        title: Text.current?.value,
      }),
    });
    console.log(response);
    props.set((props.num as number) + 1);
  };

  return (
    <div className={classes.root}>
      <h1>MY BLOG</h1>
      <br />
      {/* <h2>CREATE A POST</h2> */}
      <TextField
        id="filled-full-width"
        label="Create Post"
        style={{ margin: 8 }}
        placeholder="Placeholder"
        helperText="Full width!"
        fullWidth
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
        variant="filled"
        inputRef={Text}
      />
      <Button variant="contained" color="primary" onClick={() => Submit()}>
        SUBMIT POST
      </Button>
    </div>
  );
}
