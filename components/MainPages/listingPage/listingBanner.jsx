import React from "react";
import Breadcrumb from "../../breadcrumb/breadcrumb"
const ListingBanner = ({ name, description, bannerImage }) => {
  return (
    <div
      className="fluid-container py-5"
      style={{ backgroundColor: "#f4f7ff" }}
    >
      <div className="w-75 mx-auto">
        <div className="row">
          <div className="col-sm-12 col-md-10 col-lg-10 align-self-center">
            <Breadcrumb  name={name} />
            <br/>
            <h3 className="font-weight-bold mb-3">{name}</h3>

            <ul style={{ listStylePosition: "inside", padding: "0" }}>
              {description.map((text, index) => (
                <h6 key={index}>
                  <li>{text}</li>
                </h6>
              ))}
            </ul>
          </div>
          <div className="col-sm-12 col-md-2 col-lg-2 align-self-center">
            <img
              src={bannerImage}
              // alt="service banner"
              className="img-fluid float-right"
              loading="lazy"

            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingBanner;
