import React from "react";

const OurAssurance = ({ ourAssuranceList }) => {
  // console.log(ourAssuranceList);
  return (
    <div className="py-3 w-75 mx-auto pl-4 pl-md-0">
      {/* <div className="row">
        <div className="col-1 ">
          <img
            className="p-lg-5"
            src={require("../../images/ListingPage/shield.png")}
            alt="Assurance shield icon"
          />
        </div>
        <div className="col-10">
          <h3 className="font-weight-bold pt-lg-5 pl-5 mt-2">Our Assurance </h3>
        </div>
      </div> */}
      <div className="row p-1">
        <div className="col-1" style={{ float: "right" }}>
          <img
            style={{ float: "right" }}
            className="pt-2"
            src={require("../../images/ListingPage/shieldnew.png")}
            alt="Assurance shield icon"
          />
        </div>
        <div className="col-10" style={{ marginLeft: "0", paddingLeft: "0" }}>
          <h3 className="font-weight-bold pt-4">Our Assurance</h3>
        </div>
      </div>
      {ourAssuranceList.map((item, index) => {
        return (
          <div className="row" key={index}>
            <div className="col-1" style={{ float: "right" }}>
              <img
                style={{ float: "right" }}
                className=""
                src={require("../../images/ListingPage/ticknew.png")}
                alt="Assurance tick icon"
              />
            </div>
            <div
              className="col-10"
              style={{ marginLeft: "0", paddingLeft: "0" }}
            >
              <h6 className="pt-3">{item}</h6>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default OurAssurance;
