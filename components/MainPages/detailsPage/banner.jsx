import React from "react";
import Breadcrumb from "../../breadcrumb/breadcrumb";

const DetailBanner = ({ name, bannerDetails, bredCrumb, bannerImage }) => {
  return (
    <div className="mx-auto py-5" style={{ width: "80%" }}>
      <Breadcrumb 
      parent={bredCrumb}
      
      name={name} />
      <div className="row align-items-center">
        <div className="col-lg-8 py-5">
          <div className="DetailsPageMainTitle pb-5">{name}</div>
          {bannerDetails.map((text, index) => (
            <h6
              style={{ textJustify: "inter-word", textAlign: "justify" }}
              key={index}
            >
              {text}
            </h6>
          ))}
        </div>

        <div className="container col-lg-4">
          <div className="row">
            <div className="col">
              <img
                className="mx-auto d-block"
                src={bannerImage}
                alt="Services"
                loading="lazy"
              />
            </div>
          </div>
        </div>
        {/* <div className="col-lg-4 px-auto">
          <img
            src={bannerImage}
            alt="pest control banner"
          />
        </div> */}
      </div>
    </div>
  );
};

export default DetailBanner;
