import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > * + *": {
      marginLeft: theme.spacing(2),
    },
  },
}));

const LazyLoader = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CircularProgress className="mx-auto" />
    </div>
  );
};

export default LazyLoader;
