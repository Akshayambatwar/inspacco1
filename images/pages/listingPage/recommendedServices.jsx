import React from "react";
// import { Link } from "react-router-dom";
import Link from 'next/link'
import { routeMapping } from "../../helpers/routing";

const RecommendedServices = ({ recommendationList }) => {
  return (
    <div
      className="fluid-container py-5"
      style={{ backgroundColor: "#f4f7ff" }}
    >
      <div style={{ width: "80%", margin: "0 auto" }}>
        <h3 className="font-weight-bold mb-5">
          Other services you might be interested in
        </h3>
        <div className="row">
          {recommendationList.map((service, index) => (
            <div className="col-lg-3 col-md-4 col-sm-6 py-2" key={index}>
              <Link
                href={`/${routeMapping.get(service.name)}`}
                className="btn d-flex shadow rounded bg-white btn-block"
                style={{
                  backgroundColor: "#f4f7ff",
                  border: "1px solid #daeafc",
                }}
              >
                <a>
                <img
                  src={service.path}
                  alt=""
                  className="img-fluild"
                  style={{ height: "45px" }}
                  loading="lazy"

                />
                <h6
                  className="pl-4 pt-2 align-self-center"
                  style={{ textAlign: "center" }}
                >
                  {service.name}
                </h6>
                </a>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecommendedServices;
