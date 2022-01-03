import React from "react";

const WhyInspaccoSection = () => {
  return (
    <div className="why-inspacco py-5" id="WhyInspacco">
      <div className="w-75 mx-auto">
        <h3 className="mb-3 font-weight-bold">Why Inspacco</h3>
        <div className="Rectangle-Copy-14 mb-4"></div>
        <div className="why-inspacco-wrap">
          <div className="row">
            <div className="col-lg-6 ">
              <div className="row ">
                <div className="col-1">
                  <img
                    src={require("../../images/whyInspacco/group-13@3x.png")}
                    // className="img-thumbnail"
                    alt="why us"
                  />
                </div>

                <div className="col-11 ">
                  <h6 className="my-3 WhyInspaccoText float-left col ">
                    No hassle of managing multiple vendors
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row ">
                <div className="col-1">
                  <img
                    src={require("../../images/whyInspacco/whyin2.png")}
                    // className="img-thumbnail"
                    alt="why us"
                  />
                </div>
                <div className="col-11">
                  <h6 className="my-3 WhyInspaccoText float-left col">
                    Raise Enquiry for multiple quotations
                  </h6>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6 ">
              <div className=" row ">
                <div className="col-1">
                  <img
                    src={require("../../images/whyInspacco/whyin3.png")}
                    // className="img-thumbnail"
                    alt="why us"
                  />
                </div>

                <div className="col-11">
                  <h6 className="my-3 WhyInspaccoText float-left col">
                    Raise Enquiry for multiple quotations
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row ">
                <div className="col-1">
                  <img
                    src={require("../../images/whyInspacco/whyin4.png")}
                    // className="img-thumbnail"
                    alt="why us"
                  />
                </div>
                <div className="col-11">
                  <h6 className="my-3 WhyInspaccoText float-left col">
                    One Stop Solution for real estate requirements
                  </h6>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6 ">
              <div className="row ">
                <div className="col-1">
                  <img
                    src={require("../../images/whyInspacco/whyin5.png")}
                    // className="img-thumbnail"
                    alt="why us"
                  />
                </div>

                <div className="col-11">
                  <h6 className="my-3 WhyInspaccoText float-left col">
                    Trained & Trusted Professionals
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className=" row ">
                <div className="col-1">
                  <img
                    src={require("../../images/whyInspacco/whyin6.png")}
                    // className="img-thumbnail"
                    alt="why us"
                  />
                </div>
                <div className="col-11">
                  <h6 className="my-3 WhyInspaccoText float-left col">
                    Tech platform for regular updates and reports
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyInspaccoSection;
