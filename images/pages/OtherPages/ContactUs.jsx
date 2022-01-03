import React from "react";
import Header from "../../components/commons/Header/newNav";
import EnquiryForm from "../../components/EnquiryForm/index";

const PrivacyPolicy = () => {
  return (
    <>
      <div className="sticky-top">
        <Header />
      </div>
      <br />
      <br />
      <br />
      <br />
      <div className="mx-lg-5 mt-5">
        <div className="row mx-5">
          <div className="col-lg-1"> </div>

          <div className="col-lg-5 col-md-6 col-sm-12">
            <h2>
              <b>Contact Us</b>
            </h2>
            <div className="Rectangle-Copy-14 mb-5"></div>
            {/* <br/> */}
            <h6 style={{ textJustify: "inter-word", textAlign: "justify" }}>
              We are happy to answer any questions you have or provide you an
              estimate. Just send us a message in the form below and we will get
              in touch with you
            </h6>
          </div>

          <div className="col-lg-5 col-md-6 col-sm-12">
            <br />

            <img
              src={require("../../images/contactus/contactus.png")}
              width="94%"
              alt="Contact us logo"
            />
          </div>
          <div className="col-lg-1 "> </div>
        </div>
      </div>
      <EnquiryForm />
      <br />
    </>
  );
};

export default PrivacyPolicy;
