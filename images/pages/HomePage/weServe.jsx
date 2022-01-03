import React from "react";
import "./weServe.css";
import societiesLogo from "../../images/weServe/we-serve-5.png";
import homesLogo from "../../images/weServe/we-serve-6.png";
import corporatesLogo from "../../images/weServe/we-serve-7.png";
import commercialLogo from "../../images/weServe/we-serve-8.png";
import bankLogo from "../../images/weServe/bank.png";
import hospitalLogo from "../../images/weServe/hospital.png";

const WeServe = () => {
  return (
    <div className="we-serve w-75 mx-auto mt-5">
      <h3 className="font-weight-bold mb-3">We Serve</h3>
      <div className="Rectangle-Copy-14 mb-4"></div>
      <div className="row wrap-we-serve">
        <div className="col-lg col-md-4 col-sm-6 col-xs-6">
          <div className="card-shadow border-0 mb-4">
            {/* <a
              href="javascript:void(0)"
              className="py-2 text-center d-block rounded"
            > */}
            <span className="py-2 text-center d-block rounded">
              <img src={societiesLogo} alt="" className="img-fluid" loading="lazy"/>

              <h6 className="mt-2">Societies</h6>
            </span>
            {/* </a> */}
          </div>
        </div>
        <div className="col-lg col-md-4 col-sm-6 col-xs-6">
          <div className="card-shadow border-0 mb-4">
            {/* <a
              href="javascript:void(0)"
              className="py-2 text-center d-block rounded"
            > */}
            <span className="py-2 text-center d-block rounded">
              <img src={homesLogo} alt="" className="img-fluid" loading="lazy"/>

              <h6 className="mt-2">Homes</h6>
            </span>
            {/* </a> */}
          </div>
        </div>
        <div className="col-lg col-md-4 col-sm-6 col-xs-6">
          <div className="card-shadow border-0 mb-4">
            {/* <a
              href="javascript:void(0)"
              className="py-2 text-center d-block rounded"
            > */}
            <span className="py-2 text-center d-block rounded">
              <img src={corporatesLogo} alt="" className="img-fluid" loading="lazy"/>

              <h6 className="mt-2">Corporates</h6>
            </span>
            {/* </a> */}
          </div>
        </div>
        <div className="col-lg col-md-4 col-sm-6 col-xs-6">
          <div className="card-shadow border-0 mb-4">
            {/* <a
              href="javascript:void(0)"
              className="py-2 text-center d-block rounded"
            > */}
            <span className="py-2 text-center d-block rounded">
              <img src={commercialLogo} alt="" className="img-fluid" loading="lazy"/>

              <h6 className="mt-2">Commercial spaces</h6>
            </span>
            {/* </a> */}
          </div>
        </div>
        <div className="col-lg col-md-4 col-sm-6 col-xs-6">
          <div className="card-shadow border-0 mb-4">
            {/* <a
              href="javascript:void(0)"
              className="py-2 text-center d-block rounded"
            > */}
            <span className="py-2 text-center d-block rounded">
              <img src={hospitalLogo} alt="" className="img-fluid" loading="lazy"/>

              <h6 className="mt-2">Hospitals</h6>
            </span>
            {/* </a> */}
          </div>
        </div>
        <div className="col-lg col-md-4 col-sm-6 col-xs-6">
          <div className="card-shadow border-0 mb-4">
            {/* <a
              href="javascript:void(0)"
              className="py-2 text-center d-block rounded"
            > */}
            <span className="py-2 text-center d-block rounded">
              <img src={bankLogo} alt="" className="img-fluid" loading="lazy"/>

              <h6 className="mt-2">Banks</h6>
            </span>
            {/* </a> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeServe;
