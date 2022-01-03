/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
// import { Link } from "react-router-dom";
import Link from 'next/link'
import AppBar from "@material-ui/core/AppBar";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";

import { fade, makeStyles } from "@material-ui/core/styles";
// import "./navbar.css";

import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import Logo from "../../../images/logoblue.png";
import Logowhite from "../../../images/logowhite.png";
// import useScrollTrigger from "@material-ui/core/useScrollTrigger";
// import { HashLink } from "react-router-hash-link";
// import {Link as HashLink}  from 'next/link';
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import clsx from "clsx";
import Drawer from "@material-ui/core/Drawer";
import { routeMapping } from "../../../helpers/routing";

import { useState, useEffect } from "react";

/** SEARCH BOX Imports */
import InputBase from "@material-ui/core/InputBase";
import { Information } from "../../Header/data";
import { Button } from "@material-ui/core";
/** SEARCH BOX Imports END*/

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    // marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: "none",
    color: "white",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    // color : 'white',
    // borderColor : "white",
    borderRadius: "20px",
    border: "solid 1px rgba(129, 149, 186, 0.2)",
    backgroundColor: fade(theme.palette.common.white, 0.25),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.55),
    },

    marginLeft: 0,
    width: "300px",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchBlack: {
    position: "relative",
    // color : 'white',
    // borderColor : "white",
    borderRadius: "20px",
    backgroundColor: fade(theme.palette.common.black, 0.1),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.black, 0.2),
    },

    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 1),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
    // color : 'white',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // color: "white",

    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(3)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
  },

  popover: {
    pointerEvents: "none",
  },
  paper: {
    padding: theme.spacing(1),
  },
}));

export default function SearchAppBar(props) {
  const { _, width } = useWindowDimensions();

  const classes = useStyles();
  // const { newClasses } = props;
  // const trigger = useScrollTrigger({
  //   disableHysteresis: true,
  //   threshold: 90,
  // });
  const trigger = true;
  const [state, setState] = React.useState({
    right: false,
  });
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  // const [anchorEl, setAnchorEl] = React.useState(null);

  // const handlePopoverOpen = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };

  // const handlePopoverClose = () => {
  //   setAnchorEl(null);
  // };

  // let productState = false;
  // const toggleProducts = () => {
  //   if (productState == true) {
  //     setState({});
  //     productState = false;
  //   } else {
  //     setState({});
  //     productState = true;
  //   }
  //   // console.log(productState);
  // };
  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      // onClick={toggleDrawer(anchor, false)}
      // onKeyDown={toggleDrawer(anchor, false)}
    >
      <div className={`${classes.searchBlack} mt-3`}>
        <div className={classes.searchIcon} style={{ color: "black" }}>
          <SearchIcon />
        </div>
        <InputBase
          placeholder="Search…"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          style={{ color: "black" }}
          onChange={(e) => searchSpace(e)}
          inputProps={{ "aria-label": "search" }}
        />
      </div>
      <div className="list-groupk bg-grey">{items}</div>

      <Divider />

      {/* <div>
        <List>
          <ListItem button key={"Products"}>
            <ListItemText primary={"Products"} style={{ fontWeight: "bold" }} />
          </ListItem>
          {[
            "Sanitizing Mat",
            "Sanitization Kit",
            "PPE Kit",
            "Pulse Oximeter",
          ].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon></ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </div>
      <Divider /> */}
      <div>
        <List>
          <ListItem button key={"Services"}>
            <ListItemText primary={"Services"} style={{ fontWeight: "bold" }} />
          </ListItem>
          {[
            "Disinfection",
            "House-Keeping",
            "Repairs",
            "Maintenance (AMC)",
            "Inspection",
            "Interiors",
            "Fabrication",
            "Civil Work",
          ].map((text, index) => (
            <Link
              href={`/${routeMapping.get(text)}`}
              key={index}
              style={{ textDecoration: "none" }}
            >
              <a>
              <ListItem button key={text}>
                <ListItemIcon></ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
              </a>
            </Link>
          ))}
        </List>
      </div>

      <Divider />
    </div>
  );
  /** SEARCH BOX START */
  const [search, setSearch] = useState(null);
  // const [listFlag, setListFlag] = useState(false);

  const searchSpace = (event) => {
    let keyword = event.target.value;
    setSearch(keyword);
  };

  let items = Information.filter((data) => {
    if (search === null || search === "") return null;
    else if (data.keyword.toLowerCase().includes(search.toLowerCase())) {
      return data;
    }
  }).map((data) => {
    return (
      <Link
        style={{ fontSize: "14px", width: "230px", marginLeft: "10px" }}
        className="list-group-item list-group-item-action"
        href={data.route}
        key={data.keyword}
      >
        <a>
        {data.keyword}
        </a>
      </Link>
    );
  });
  /** SEARCH BOX END */

  // const open = Boolean(anchorEl);
  // console.log(width, height);
  return (
    <div className={classes.root}>
      <AppBar
        // position="relative"
        style={
          trigger === false
            ? {
                background: "transparent",
                boxShadow: "1",
                zIndex: "100",
                top: "0",
                left: "0",
              }
            : {
                backgroundColor: "white",
                boxShadow: "3",
                zIndex: "100",
                top: "0",
                left: "0",
              }
        }
        elevation={trigger === true ? 4 : 0}
      >
        <div className="header2 ">
          <nav className="navbar navbar-expand-lg h2-nav row ">
            <div className="col-lg-5 col-md-5 col-sm-8 col-8">
              <Link className="navbar-brand font-weight-bold" href="/">
              <a>
                <img
                  src={trigger === true ? Logo : Logowhite}
                  height="2000px"
                  alt="Inspacco Logo"
                  className={`img-fluid ${
                    width > 992 ? "w-50" : width < 568 ? "w-100" : "w-75"
                  }`}
                />
                </a>
              </Link>
            </div>

            {width < 992 ? (
              <div
                className="pr-3"
                style={{ cursor: "pointer" }}
                onClick={toggleDrawer("right", true)}
              >
                <MenuIcon
                  style={
                    trigger === true ? { color: "black" } : { color: "white" }
                  }
                  // width="100px"
                />
              </div>
            ) : (
              ""
            )}
            <React.Fragment key={"right"}>
              {/* <Button onClick={toggleDrawer('right', true)}>{'right'}</Button> */}
              <Drawer
                anchor={"right"}
                open={state["right"]}
                onClose={toggleDrawer("right", false)}
              >
                {list("right")}
              </Drawer>
            </React.Fragment>
            <div
              style={{ float: "right" }}
              className="collapse navbar-collapse hover-dropdown center mr-3"
              // className="col-lg-2 col-sm-0 col-md-6"
              id="navbarCollapse"
            >
              <ul className="navbar-nav ml-auto ">
                <li className="nav-item dropdown position-relative">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="h2-dropdown"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    style={
                      trigger === false
                        ? { color: "white" }
                        : { color: "black" }
                    }
                  >
                    <div
                      className="Products pt-1"
                      style={
                        trigger === false
                          ? { color: "white" }
                          : { color: "black" }
                      }
                    >
                      Services
                    </div>
                    {/* <FontAwesomeIcon
                      icon={faArrowDown}
                      className="icon-arrow-down ml-1 font-12"
                    /> */}
                  </a>
                  <ul
                    className="dropdown-menu dropdown-menu-left"
                    style={{ fontFamily: `"Montserrat", sans-serif` }}
                  >
                    <li>
                      {/* <a className="dropdown-item" href="#"> */}
                      <Link href="/disinfection" className="dropdown-item">
                      <a>Disinfection</a>
                      </Link>
                      {/* </a> */}
                    </li>
                    <li>
                      <Link href="/house-keeping" className="dropdown-item">
                      <a>Housekeeping</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/repairs" className="dropdown-item">
                      <a>Repairs</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/maintenance" className="dropdown-item">
                      <a>Maintenance (AMC)</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/inspection" className="dropdown-item">
                      <a>Inspection</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/interiors" className="dropdown-item">
                      <a>Interiors</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/fabrication" className="dropdown-item">
                      <a>Fabrication</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/civil-work" className="dropdown-item">
                      <a>Civil Work</a>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown position-relative">
                  <a
                    className="nav-link dropdown-toggle"
                    href="/about-us"
                    id="h2-dropdown"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    style={
                      trigger === false
                        ? { color: "white" }
                        : { color: "black" }
                    }
                  >
                    <div
                      className="Products pt-1"
                      style={
                        trigger === false
                          ? { color: "white" }
                          : { color: "black" }
                      }
                    >
                      About Us
                    </div>
                  </a>
                </li>
                <ul className="mr-4 mt-2">
                  <div
                    className={
                      trigger === false ? classes.search : classes.searchBlack
                    }
                  >
                    <div
                      className={classes.searchIcon}
                      style={
                        trigger === false
                          ? { color: "white" }
                          : { color: "black" }
                      }
                    >
                      <SearchIcon />
                    </div>
                    <InputBase
                      placeholder="Search…"
                      classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                      }}
                      style={
                        trigger === false
                          ? { color: "white" }
                          : { color: "black" }
                      }
                      // onFocus={(e) => setListFlag(true)}
                      // onBlur={(e) => setListFlag(false)}
                      onChange={(e) => searchSpace(e)}
                      inputProps={{ "aria-label": "search" }}
                    />
                  </div>
                  <ClickAwayListener
                    onClickAway={(e) => {
                      if (width >= 992) setSearch("");
                    }}
                  >
                    <div
                      className="list-group"
                      style={{
                        position: "absolute",
                      }}
                    >
                      {items}
                    </div>
                  </ClickAwayListener>
                </ul>

                <li>
                  {/* HashLink */}
                  <Link
                    href="/#EnquiryForm"
                    style={{ textDecoration: "none" }}
                  >
                    <a>
                    <Button
                      className="mt-2"
                      variant="contained"
                      style={{
                        borderRadius: "17px",
                        backgroundColor: "white",
                        textTransform: "none",
                      }}
                    >
                      <div className="Enquire">
                        <div>Enquire Now</div>
                      </div>
                    </Button>
                    </a>
                  </Link>
                  {/* <div className="Rectanglelo2  mt-2 ">
                    <div className="Enquire pt-2 pl-3 pb-1">
                      <HashLink href="/#EnquiryForm" style={{ textDecoration: "none" }}>
                        Enquire Now
                      </HashLink>
                    </div>
                  </div> */}
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </AppBar>
    </div>
  );
}
