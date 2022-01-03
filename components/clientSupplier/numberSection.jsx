import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const NumberSection = () => {
  return (
    <section id="counts" className="counts">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css"></link>
      <div className="container">
        <div className="row" data-aos="fade-up">
          <div className="col-lg-3 col-md-6">
            <div className="count-box">
              <i className="bi bi-emoji-smile" alt="Inspacco Smiley"></i>
              <div>
                <span
                  style={{ display: "inline" }}
                  data-purecounter-start="0"
                  data-purecounter-end="25000"
                  data-purecounter-duration="1"
                  data-purecounter-once={false}
                  className="purecounter"
                >1000</span>
                <span style={{ display: "inline" }}> +</span>
              </div>
              <p style={{ fontWeight: "600" }}>Akshay</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mt-5 mt-md-0">
            <div className="count-box">
              <i className="bi bi-people"></i>
              <div>
                <span
                  style={{ display: "inline" }}
                  data-purecounter-start="0"
                  data-purecounter-end="1000"
                  data-purecounter-duration="1"
                  className="purecounter"
                  data-purecounter-once={false}
                ></span>
                <span style={{ display: "inline" }}> +</span>
              </div>
              <p style={{ fontWeight: "600" }}>Verified Professionals</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
            <div className="count-box">
              <i className="bi bi-geo-alt"></i>
              <span
                data-purecounter-start="0"
                data-purecounter-end="24"
                data-purecounter-duration="1"
                data-purecounter-once={false}
                className="purecounter"
              ></span>
              <p style={{ fontWeight: "600" }}>States Covered</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
            <div className="count-box">
              <i className="bi bi-diagram-2"></i>
              <div>
                <span
                  style={{ display: "inline" }}
                  data-purecounter-start="0"
                  data-purecounter-end="320"
                  data-purecounter-duration="1"
                  data-purecounter-once={false}
                  className="purecounter"
                ></span>
                <span style={{ display: "inline" }}> +</span>
              </div>
              <p style={{ fontWeight: "600" }}>Cities Served</p>
            </div>
          </div>
        </div>
      </div>
      <script src="https://cdn.jsdelivr.net/npm/@srexi/purecounterjs/dist/purecounter_vanilla.js"></script>
      {/* <script src={require("../../public/purecounter/purecounter.js")}></script> */}
    </section>
    // <div
    //   className="why-inspacco py-5"
    //   id="WhyInspacco"
    //   style={{ backgroundColor: "#f6f5ff" }}
    // >
    //   <div className="w-75 mx-auto">
    //     <div
    //       className="why-inspacco-wrap"
    //       style={{ backgroundColor: "#f6f5ff" }}
    //     >
    //       <div className="row text-center">
    //         <div className="why-inspacco-box col-lg-3 col-md-3 col-sm-6">
    //           <h5>
    //             <b>10000+</b>
    //           </h5>
    //           <h6>Happy Clients</h6>
    //         </div>
    //         <div className="why-inspacco-box col-lg-3 col-md-3 col-sm-6">
    //           <h5>
    //             <b>500+</b>
    //           </h5>
    //           <h6>Verified Professionals</h6>
    //         </div>
    //         <div className="why-inspacco-box col-lg-3 col-md-3 col-sm-6">
    //           <h5>
    //             <b>24</b>
    //           </h5>
    //           <h6>States Covered</h6>
    //         </div>
    //         <div className="why-inspacco-box col-lg-3 col-md-3 col-sm-6">
    //           <h5>
    //             <b>160+</b>
    //           </h5>
    //           <h6>Cities Served</h6>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default NumberSection;
