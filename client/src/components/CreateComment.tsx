import React, { useRef } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexWrap: "wrap",
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: "100%",
    },
  })
);

export default function CreateComment(props: any) {
  const classes = useStyles();
  const Text = useRef<HTMLInputElement>(null);

  const Submit = async () => {
    const response = await fetch(
      "http://localhost:5001/post/" + `${props.id}` + "/comments",
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          content: Text.current?.value,
        }),
      }
    );
    console.log(response);
  };
  return (
    <div className={classes.root}>
      <TextField
        id="filled-full-width"
        label="Create Comment"
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
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          Submit();
        }}
      >
        SUBMIT COMMENT
      </Button>
    </div>
  );
}
