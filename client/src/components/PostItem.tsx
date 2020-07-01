import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CreateComment from "./CreateComment";
import Typography from "@material-ui/core/Typography";

interface comment {
  id: string;
  content: string;
}

const comments: Array<comment> = [
  {
    content: "Nice",
    id: "2345",
  },
];

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    width: "75%",
    marginLeft: "12.5%",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function PostItem(props: any) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          POST {`${props.index}`}
        </Typography>
        <Typography variant="h5" component="h2">
          {props.content}
        </Typography>
      </CardContent>
      <ul style={{ textAlign: "left" }}>
        {comments.map((comm) => {
          return <h2>{comm.content}</h2>;
        })}
      </ul>
      <CreateComment id={props.pid} />
    </Card>
  );
}
