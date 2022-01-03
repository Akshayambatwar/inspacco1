import React from "react";
// import { Link } from "react-router-dom";
import Link from 'next/link'
import { makeStyles } from "@material-ui/core/styles";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
// import Typography from "@material-ui/core/Typography";
// import Link from "@material-ui/core/Link";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function Breadcrumb({ parent, name }) {
  const classes = useStyles();
  if (typeof window != 'undefined') {
    var pathname = new URL(window.location.href).pathname;

  }
  else {
    pathname = " "
  }
  return (
    <div className={`${classes.root} mb-3`}>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
        style={{ fontSize: "15px" }}
      >
        <Link href="/"><a>Home</a></Link>
        {typeof parent !== "undefined" ?
          (<Link href={"/services" + parent.link}><a>{parent.text}</a></Link>) :
          ("")
        }

        {/* <Typography color="textPrimary">{name}</Typography> */}
        <span>{name}</span>
      </Breadcrumbs>
    </div>
  );
}
