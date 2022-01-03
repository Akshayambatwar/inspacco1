/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
// import { Link } from "react-router-dom";
import Link from 'next/link'
import AppBar from "@material-ui/core/AppBar";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";

import { fade, makeStyles } from "@material-ui/core/styles";
// import "./navbar.css";
// import { HashLink } from "react-router-hash-link";
// import {Link as HashLink}  from 'next/link';
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import Logo from "../../../images/logoblue1.png";
import Logowhite from "../../../images/logowhite.png";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";

import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import clsx from "clsx";
import Drawer from "@material-ui/core/Drawer";
import { routeMapping } from "../../../helpers/routing";

import { useState, useEffect } from "react";
import { listingPages } from "../../MainPages/listingPage/data";

/** SEARCH BOX Imports */
import InputBase from "@material-ui/core/InputBase";
import { Information } from "../../Header/data";
import { Button } from "@material-ui/core";
/** SEARCH BOX Imports END*/

function getWindowDimensions() {
  if (typeof window !== 'undefined') {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  }
  return {};
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
  //   threshold: 70,
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

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
    >
      <div className={"SearchHeader mt-3"}>
        <div className={"SearchHeaderIcon"} style={{ color: "black" }}>
          <SearchIcon />
        </div>
        <InputBase
          placeholder="Search…"
          classes={{
            root: "InputHeaderRoot",
            input: "InputHeaderInput",
          }}
          style={{ color: "black" }}
          onChange={(e) => searchSpace(e)}
          inputProps={{ "aria-label": "search" }}
        />
      </div>
      <div className="list-groupk bg-grey">{items}</div>
      <Divider />
      <div>
        <List>
          <ListItem button key={"Services"}>
            <ListItemText primary={"Services"} style={{ fontWeight: "bold" }} />
          </ListItem>
          {[
            "Regular Services",
            "Installation And AMC's",
            "One Time Services",
          ].map((text, index) => (
            <Link
              href={`/services/${routeMapping.get(text)}`}
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

      {/* <div>
        <List>
          <ListItem button key={"Products"}>
            <ListItemText primary={"Products"} style={{ fontWeight: "bold" }} />
          </ListItem>
          {[
            "Infrared Thermometer",
            "Sanitizing Mats",
            "Foot Operated Sanitizing Stand",
            "PPE Kit",
          ].map((text, index) => (
            <Link
              href={`/products/${routeMapping.get(text)}`}
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
      </div> */}


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
        // style={{ fontSize: "14px", width: "230px", marginLeft: "10px" }}
        // className="list-group-item list-group-item-action"
        href={data.route}
        key={data.keyword}
      >
        <a
          style={{ fontSize: "14px", width: "230px", marginLeft: "10px" }}
          className="list-group-item list-group-item-action"
        >
          {data.keyword}
        </a>
      </Link>
    );
  });
  /** SEARCH BOX END */

  return (
    <div>
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
            <div className="col-lg-3 col-md-5 col-sm-8 col-8">
              <Link className="navbar-brand font-weight-bold" href="/">
                <a>
                  <img
                    src={trigger === true ? Logo : Logowhite}
                    height="2000px"
                    alt="Inspacco Logo"
                    className={`img-fluid LogoHeaderSize`}
                  />
                </a>
              </Link>
            </div>

            {/* {width < 992 ? (
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
              )} */}
            <div className="d-lg-none">
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
            </div>
            <React.Fragment key={"right"}>
              <Drawer
                anchor={"right"}
                open={state["right"]}
                onClose={toggleDrawer("right", false)}
              >
                {list("right")}
              </Drawer>
            </React.Fragment>

            <div
              style={{ float: "right", height: "50%" }}
              className="collapse navbar-collapse hover-dropdown center mr-3 row col"
              // className="col-lg-2 col-sm-0 col-md-6"
              id="navbarCollapse"
            >
              <ul className="navbar-nav ml-auto ">
                <div
                  className="navbarmega"
                  style={{ float: "right", borderRadius: "14px" }}
                >
                  {/* <a href="#home">Home</a>
              <a href="#news">News</a> */}
                  <div
                    className="dropdownmega"
                    style={{ borderRadius: "14px" }}
                  >
                    {/* <button
                      className="dropbtnmega Products pt-3"
                      style={
                        trigger === true
                          ? {
                            fontWeight: "bold",
                            fontSize: "17px",
                            color: "black",
                          }
                          : {
                            fontWeight: "bold",
                            fontSize: "17px",
                            color: "white",
                          }
                      }
                    >
                      {" "}
                      Services */}
                      {/* <i class="fa fa-caret-down"></i> */}
                    {/* </button> */}
                    <div
                      className="dropdown-contentmega"
                      style={{ borderRadius: "14px" }}
                    >
                      {/* <div class="headermega">
                    <h2>Mega Menu</h2>
                  </div>    */}
                      <div className="row ">
                        {listingPages.map((page, index) => (
                          <div
                            className="columnmega col-3 pb-2"
                            style={
                              index % 2 === 0
                                ? {
                                  backgroundColor: "#f0f0f0",
                                }
                                : {
                                  backgroundColor: "#f7f7f7",
                                }
                            }
                            key={page.link}
                          >
                            <div className="hoverWhite">
                              <div className="row  pt-2 hoverWhite" style={{ textDecoration: "none" }}>
                                <Link href={"/services/" + page.link}>
                                  <a>
                                    <h6
                                      className="font-weight-bold"
                                      style={{ textAlign: "left", textDecoration: "none" }}
                                    >
                                      <div style={{ textDecoration: "none" }}>{page.name}</div>
                                    </h6>
                                  </a>
                                </Link>
                              </div>
                            </div>
                            {page.subcategories.map((sub, index) => (
                              <div className="hoverWhite" key={index}>
                                <div className="row " key={index}>
                                  <Link
                                    href={"/services" + sub.route}

                                  >
                                    <a
                                      style={{
                                        fontFamily: `Montserrat`,
                                        color: "#3C3D41",
                                        fontSize: "13.5px",
                                        float: "left",
                                        textAlign: "left",
                                        textDecoration: "none"
                                      }}
                                    >{sub.name}</a>
                                  </Link>
                                </div>
                              </div>
                            ))}
                          </div>
                        ))}

                        <div
                          className="columnmega col-3 pb-2"
                          style={
                            1 % 2 === 0
                              ? {
                                backgroundColor: "#f0f0f0",
                              }
                              : {
                                backgroundColor: "#f7f7f7",
                              }
                          }
                        >
                          <div className="row pl-2 pt-2">
                            {/* <Link> */}
                            <h6 className="font-weight-bold"></h6>
                            {/* </Link> */}
                          </div>
                        </div>
                        <div
                          className="columnmega col-3 pb-2"
                          style={
                            2 % 2 === 0
                              ? {
                                backgroundColor: "#f0f0f0",
                              }
                              : {
                                backgroundColor: "#f7f7f7",
                              }
                          }
                        >
                          <div className="row pl-2 pt-2">
                            {/* <Link> */}
                            <h6 className="font-weight-bold"></h6>
                            {/* </Link> */}
                          </div>
                        </div>
                        <div
                          className="columnmega col-3 pb-2"
                          style={
                            1 % 2 === 0
                              ? {
                                backgroundColor: "#f0f0f0",
                              }
                              : {
                                backgroundColor: "#f7f7f7",
                              }
                          }
                        >
                          <div className="row pl-2 pt-2">
                            {/* <Link> */}
                            <h6 className="font-weight-bold"></h6>
                            {/* </Link> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <li className="nav-item dropdown "> */}
                  {/* <a
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
                        trigger === true
                          ? {
                            fontWeight: "bold",
                            fontSize: "17px",
                            color: "black",
                          }
                          : {
                            fontWeight: "bold",
                            fontSize: "17px",
                            color: "white",
                          }
                      }
                    >
                      Products
                    </div>
                  </a> */}
                  {/* <ul
                    className="dropdown-menu dropdown-menu-left"
                    style={{
                      fontFamily: `"Montserrat", sans-serif`,
                      backgroundColor: "#f0f0f0",
                      width: "250px"
                    }}
                  > */}
                    {/* <li> */}
                      {/* <div className="hoverWhite px-3 ">
                        <div className="row " >
                          <Link
                            href="/products/trueview-infrared-thermometer"
                          >
                            <div className="pl-3 my-1" style={{
                              fontFamily: `Montserrat`,
                              color: "#3C3D41",
                              fontSize: "13.5px",
                              float: "left",
                              textAlign: "left",
                              textDecoration: "none",
                              cursor: "pointer"
                            }}>
                              Infrared Thermometer
                            </div>
                          </Link>
                        </div>
                      </div> */}
                      {/* <div className="dropdown-item">
                        <Link
                          to="/Trueview-Infrared-Thermometer"
                          className=""
                        >
                          Infrared Thermometer
                        </Link>
                      </div> */}
                    {/* </li> */}
                    {/* <li>
                      <div className="hoverWhite px-3 ">
                        <div className="row " >
                          <Link
                            href="/products/disinfectant-sanitizing-mats"


                          >
                            <div className="pl-3 my-1" style={{
                              color: "#3C3D41",
                              fontSize: "13.5px",
                              float: "left",
                              textAlign: "left",
                              textDecoration: "none",
                              cursor: "pointer"
                            }}>
                              Sanitizing Mats
                            </div>
                          </Link>
                        </div>
                      </div>
                    </li> */}
                    {/* <li>
                      <div className="hoverWhite px-3 ">
                        <div className="row " >
                          <Link
                            href="/products/foot-operated-sanitizing-stands"


                          >
                            <div className="px-3 my-1 " style={{
                              color: "#3C3D41",
                              fontSize: "13.5px",
                              float: "left",
                              textAlign: "left",
                              textDecoration: "none",
                              cursor: "pointer"
                            }}>
                              Foot Operated Sanitizing Stand
                            </div>
                          </Link>
                        </div>
                      </div>

                    </li> */}
                    {/* <li>
                      <div className="hoverWhite px-3 ">
                        <div className="row " >
                          <Link
                            href="/products/ppe-kit"

                          >
                            <div className="px-3 my-1" style={{
                              color: "#3C3D41",
                              fontSize: "13.5px",
                              float: "left",
                              textAlign: "left",
                              textDecoration: "none",
                              cursor: "pointer"
                            }}>
                              PPE Kit
                            </div>
                          </Link>
                        </div>
                      </div>
                    </li> */}
                  {/* </ul> */}
                {/* </li> */}
                <li className="nav-item dropdown position-relative">
                  <Link
                    className="nav-link dropdown-toggle"
                    href="/services"
                    id="h2-dropdown"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    style={
                      trigger === false
                        ? { color: "white", cursor: "pointer" }
                        : { color: "black", cursor: "pointer" }
                    }
                  >

                    <div
                      className="Products pt-3"
                      style={
                        trigger === true
                          ? {
                            fontWeight: "bold",
                            fontSize: "17px",
                            color: "black",
                            cursor: "pointer"
                          }
                          : {
                            fontWeight: "bold",
                            fontSize: "17px",
                            color: "white",
                            cursor: "pointer"
                          }
                      }
                    >
                      Services
                    </div>

                  </Link>
                </li>
                <li className="nav-item dropdown position-relative">
                  <Link
                    className="nav-link dropdown-toggle"
                    href="/about-us"
                    id="h2-dropdown"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    style={
                      trigger === false
                        ? { color: "white", cursor: "pointer" }
                        : { color: "black", cursor: "pointer" }
                    }
                  >

                    <div
                      className="Products pt-3"
                      style={
                        trigger === true
                          ? {
                            fontWeight: "bold",
                            fontSize: "17px",
                            color: "black",
                            cursor: "pointer"
                          }
                          : {
                            fontWeight: "bold",
                            fontSize: "17px",
                            color: "white",
                            cursor: "pointer"
                          }
                      }
                    >
                      About Us
                    </div>

                  </Link>
                </li>
                <ul className="mr-4 mt-2">
                  <div
                    className={
                      trigger === false ? "SearchHeader" : "SearchHeaderBlack"
                    }
                  >
                    <div
                      className={"SearchHeaderIcon"}
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
                        root: "InputHeaderRoot",
                        input: "InputHeaderInput",
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
                  >
                    <a style={{ textDecoration: "none" }}>
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
                          <div>Get In Touch</div>
                        </div>
                      </Button>
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </AppBar>
    </div>
  );
}
