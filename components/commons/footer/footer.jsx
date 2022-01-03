import React from "react";
import {
    // faTwitter,
    faFacebook,
    faInstagram,
    faLinkedin,
    // faGoogle,
} from "@fortawesome/free-brands-svg-icons";
import Logo from "../../../images/logowhite1.png";
import QR from "../../../images/QR.png";
import google from "../../../images/google.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import "./footer.css";
// import { Link } from "react-router-dom";
import Link from "next/link";
import { listingPages } from "../../MainPages/listingPage/data";

// import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
// import { HashLink } from "react-router-hash-link";
// import {Link as HashLink}  from 'next/link';

const Footer = (allPages) => {
    return (
        <>
            <div style={{ backgroundColor: "#F6F8FA" }}>
                <div
                    className="py-4 row pl-5"
                    style={{ width: "90%", margin: "0 auto" }}
                >
                    {listingPages.map((page, index) => (
                        <div
                            className="col-6 col-sm-6 col-md-4 col-lg"
                            key={index}
                        >
                            <div className="py-3 row">
                                <Link href={"/services/" + page.link}>
                                    <a>
                                        {" "}
                                        <b
                                            style={{

                                                color: "#3C3D41",
                                            }}
                                        >
                                            {page.name}
                                        </b>
                                    </a>
                                </Link>
                            </div>
                            <div className="row">
                                <div className="" style={{ color: "#3C3D41" }}>
                                    {page.subcategories.map((sub, index) => (
                                        <div className="px-1" key={index}>
                                            <Link
                                                href={"/services" + sub.route}
                                            >
                                                <a
                                                    style={{
                                                        color: "#3C3D41",
                                                        fontSize: "14px",
                                                    }}
                                                >
                                                    {sub.name}
                                                </a>
                                            </Link>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <footer
                className="bg-light text-dark"
                style={{ backgroundColor: "#28305c" }}
            >
                <div style={{ backgroundColor: "#28305c" }}>
                    <div
                        className="container py-3"
                        style={{ backgroundColor: "#28305c" }}
                    >
                        <div className="row py-4">
                            <div className="col-lg-4 col-md-6 mb-4 mb-lg-0 pr-3">
                                {/* <h6 className="text-uppercase font-weight-bold mb-4">
              Social Presence
            </h6> */}
                                <a
                                    className="navbar-brand font-weight-bold"
                                    href="/"
                                >
                                    <img
                                        src={Logo}
                                        alt="Inspacco Logo"
                                        className="img-fluid w-50"
                                    />
                                </a>
                                <p
                                    className="font-italic mt-2"
                                    style={{ color: "white" }}
                                >
                                    Redefining the
                                    Gated Community services
                                    with Technology.
                                </p>
                                <ul className="list-inline mt-2">
                                    {/* <li className="list-inline-item">
                <a href="#" target="_blank" title="twitter">
                
                  <FontAwesomeIcon icon={faTwitter} size="2x" />
                </a>
              </li> */}
                                    <li className="list-inline-item m-1">
                                        <a
                                            href="https://www.facebook.com/Inspacco/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            title="facebook"
                                        >
                                            <FontAwesomeIcon
                                                icon={faFacebook}
                                                size="2x"
                                                color="white"
                                            />
                                        </a>
                                    </li>
                                    <li className="list-inline-item m-1">
                                        <a
                                            href="https://www.instagram.com/inspacco_/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            title="instagram"
                                        >
                                            <FontAwesomeIcon
                                                icon={faInstagram}
                                                size="2x"
                                                color="white"
                                            />
                                        </a>
                                    </li>
                                    <li className="list-inline-item m-1">
                                        <a
                                            href="https://www.linkedin.com/company/inspacco-disinfection-services"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            title="Linkedin"
                                        >
                                            <FontAwesomeIcon
                                                icon={faLinkedin}
                                                size="2x"
                                                color="white"
                                            />
                                        </a>
                                    </li>
                                    {/* <li className="list-inline-item">
                <a href="#" target="_blank" title="vimeo">
                  <FontAwesomeIcon icon={faGoogle} size="2x" />
                </a>
              </li> */}
                                </ul>
                            </div>

                            <div className="col-lg-2 col-md-6 mb-4 mb-lg-0 px-3 pt-3">
                                <h6
                                    className="text-uppercase font-weight-bold mb-4"
                                    style={{ color: "white" }}
                                >
                                    Company
                                </h6>
                                <ul className="list-unstyled mb-0">
                                    <li className="mb-2">
                                        <Link href="/about-us">
                                            <a style={{ color: "white" }}>
                                                About Us
                                            </a>
                                        </Link>
                                    </li>
                                    <li className="mb-2">
                                        <Link href="/contact-us">
                                            <a style={{ color: "white" }}>
                                                Contact Us
                                            </a>
                                        </Link>
                                    </li>
                                    <li className="mb-2">
                                        <Link href="/ourTeam">
                                            <a style={{ color: "white" }}>
                                                Our Team
                                            </a>
                                        </Link>
                                    </li>
                                    <li className="mb-2">
                                        <Link href="/partner-with-us">
                                            <a style={{ color: "white" }}>
                                                Partner with Us
                                            </a>
                                        </Link>
                                    </li>
                                    <li className="mb-2">
                                        {/* HashLink */}
                                        <Link href="/ourClient">
                                            <a style={{ color: "white" }}>
                                                Our Clients
                                            </a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-2 col-md-6 mb-4 mb-lg-0 pt-3">
                                <h6
                                    className="text-uppercase font-weight-bold mb-4"
                                    style={{ color: "white" }}
                                >
                                    Policy
                                </h6>
                                <ul className="list-unstyled mb-0">
                                    <li className="mb-2">
                                        <a
                                            href="/Privacy-Policy"
                                            style={{ color: "white" }}
                                        >
                                            Privacy Policy
                                        </a>
                                    </li>
                                    <li className="mb-2">
                                        <a
                                            href="/Terms-of-use"
                                            style={{ color: "white" }}
                                        >
                                            Terms & Conditions
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-4 col-md-6 mb-lg-0 pl-lg-5 pt-3">
                                <h6
                                    className="text-uppercase font-weight-bold mb-4"
                                    style={{ color: "white" }}
                                >
                                    Address
                                </h6>
                                <ul className="list-unstyled mb-0">
                                    <li className="mb-2">
                                        <p
                                            className="mb-4"
                                            style={{ color: "white" }}
                                        >
                                            Inspacco Technologies Pvt Ltd,
                                            <br />
                                            Baner, Pune - 411045,
                                            <br />
                                            Maharashtra, India
                                        </p>



                                    </li>
                                    <div style={{ display: "flex" }}>
                                        <img src={QR} alt="QR Code" width="30%" height="30%" />


                                        <a href="https://play.google.com/store/apps/details?id=com.inspacco.mobile" target="_blank">
                                            <img src={google} alt="Inspacco on Play Store" className="githubIcon" width="80%" height="60%" style={{ marginLeft: "20px" }} />
                                        </a>
                                    </div>
                                </ul>

                                {/* <div className="p-1 rounded border">
              <div className="input-group">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  aria-describedby="button-addon1"
                  className="form-control border-0 shadow-0"
                />
                <div className="input-group-append">
                  <Button
                    id="button-addon1"
                    type="submit"
                    className="btn btn-link"
                  >
                    <FontAwesomeIcon icon={faPaperPlane} />
                  </Button>
                </div>
              </div>
            </div> */}
                            </div>
                        </div>
                        <div
                            className="text-white row"
                            style={{ backgroundColor: "#28305c" }}
                        >
                            {/* <div
                className="container "
                style={{ backgroundColor: "#0049b2" }}
              > */}
                            {/* <p className="" style={{ fontSize: "14px" }}>
                Website made By{" "}
                <a
                  className="text-white"
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://www.linkedin.com/in/aashish-shirgave/"
                >
                  Aashish Shirgave
                </a>{" "}
                and{" "}
                <a
                  className="text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/shripadmhetre/"
                >
                  Shripad Mhetre
                </a>
              </p> */}
                            <p>Copyright@Inspacco Technologies 2021</p>
                            {/* </div> */}
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
