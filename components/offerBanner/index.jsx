import React from "react";
// import "./offerBanner.css";
// import offer2 from "../../images/offers/newoffer2.png";
// import offer1 from "../../images/offers/newoffer1.png";
import offer3 from "../../images/offers/Recently.png";
import offer4 from "../../images/offers/EV-coming1.jpg";
// import { HashLink } from "react-router-hash-link";
import Link from 'next/link';

const OfferBanner = () => {
  return (
    <div
      className="py-4 container-fluid"

      id="offer-section"
    >
      <div className="w-75 mx-auto">
        {/* <h2 className="mb-4 font-weight-bold" style={{ color: 'black', textAlign: 'center', fontSize: "32px", fontWeight: "700" }}>Best Offers</h2> */}
        {/* <div className="Rectangle-Copy-14 mb-4"></div> */}

        <div className="row" >
          {/* <div className="col-md-6 shadow-2" style={{ cursor: "pointer" }}>
            <div className="offer-card position-relative font-14 border-0 mb-5">
              <Link href="/#EnquiryForm">
                <a>
                  <img
                    className="card-img"
                    src={offer1}
                    alt="Card"
                    loading="lazy"
                  />
                </a>
              </Link>
            </div>
          </div> */}
          {/* <div className="col-md-6" style={{ cursor: "pointer" }}>
            <div className="offer-card position-relative font-14 border-0 mb-5">
              <Link href="/#EnquiryForm">
                <a>
                  <img
                    className="card-img"
                    src={offer2}
                    alt="Card"
                    loading="lazy"
                  />
                </a>
              </Link>
            </div>
          </div> */}
          <div className="row" style={{
            background: "rgb(247,247,247)",
            background: "linear-gradient(90deg, rgba(247,247,247,1) 0%, rgba(255,255,255,1) 100%, rgba(224,243,244,1) 100%, rgba(108,225,249,0.36738445378151263) 100%)", boxShadow: "2px 10px 10px 10px #D0D0D0"
          }}>
            <div className="col-md-6 mt-4" style={{ cursor: "pointer" }}>

              <img
                className="card-img"
                src={offer3}
                alt="Inspacco EV Solution"
                loading="lazy"
                style={{ width: "45%" }}
              />
              <div className="offer-card position-relative font-14 border-0 mb-5">


                <p className="mt-5" ><span style={{  fontSize: "17px" }}>Eager to know about EV charging solution for your community<br />
                  Contacts us today for more information..</span><br/>
                  <Link href="/#EnquiryForm">Know More </Link>
                </p>
              </div>

            </div>
            <div className="col-md-6 mt-5" style={{ cursor: "pointer" }}>
              <div className="offer-card position-relative font-14 border-0 mb-5">
                <Link href="/#EnquiryForm">
                  <a>
                    <img
                      className="card-img"
                      src={offer4}
                      alt="EV Solution"
                      loading="lazy"

                    />
                  </a>
                </Link>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferBanner;
