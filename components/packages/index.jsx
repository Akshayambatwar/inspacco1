/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
// import "./packages.css";
import BlackRibbon from "./ribbons-1.png";
import GoldRibbon from "./ribbons-2.png";
// import Button from "@material-ui/core"
// import {HashLink} from "react-router-hash-link"
import Link from "next/link";

const Packages = () => {
  return (
    <section id="pricing" className="pricing">
      <div className="container">
        <h2 className="mb-3 font-weight-bold" style={{ color: "#04032d" }}>
          PACKAGES
        </h2>
        <div className="Rectangle-Copy-14 mb-4"></div>

        <div className="row" data-aos="fade-left">
          <div className="col-lg-4 col-md-6">
            <div className="box on-demand" data-aos="zoom-in" data-aos-delay="100" >
              <h3>On Demand Service</h3>
              {/* <h4>
                <sup>$</sup>0<span> / month</span>
              </h4> */}
              <ul className="PlatinumBullets text-dark  text-left">
                <li>Hassle-free service</li>
                <li>Trained & Trusted Professionals for Service Fulfillment</li>
                <li>Best & Affordable Pricing</li>
                <li>
                  Upto 1 year warranty on all products and repaired components
                </li>
              </ul>
              <div className="btn-wrap">
                <a href="/#EnquiryForm" className="btn-buy">
                  Book Now
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 mt-4 mt-md-0">
            <div className="box featured" data-aos="zoom-in" data-aos-delay="200">
              <h3>Platinum</h3>
              {/* <h4>
                <sup>$</sup>19<span> / month</span>
              </h4> */}
              <ul className="PlatinumBullets text-dark  text-left">
                <li>2 years’ service contract with Inspacco at same rate</li>
                <li>Free Quarterly inspection with Quality report</li>

                <li>
                  Free Janitor Services for flats in the society on Quarterly
                  basis
                </li>

                <li>
                  Upto 1 year warranty on products and repaired components
                </li>
              </ul>
              <div className="btn-wrap">
                <a href="/#EnquiryForm" className="btn-buy">
                  Book Now
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 mt-4 mt-lg-0">
            <div className="box gold" data-aos="zoom-in" data-aos-delay="300">
              <h3>Gold</h3>
              {/* <h4>
                <sup>$</sup>29<span> / month</span>
              </h4> */}
              <ul className="PlatinumBullets text-dark  text-left">
                <li>Yearly contract</li>

                <li>Free Half Yearly inspection from with Quality report</li>

                <li>
                  Free Janitor Services for flats in the society once per year
                </li>

                <li>
                  Upto 1 year warranty on products and repaired components
                </li>
              </ul>
              <div className="btn-wrap">
                <a href="/#EnquiryForm" className="btn-buy">
                  Book Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Packages;
