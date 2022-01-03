import React, { useEffect } from "react";
// import "./faqs.scss";

const FAQs = ({ faqs }) => {
  useEffect(() => {
    // Fetch all details element
    const details = Array.from(document.querySelectorAll("details"));

    // Add onclick listeners
    details.forEach((targetDetail) => {
      targetDetail.addEventListener("click", () => {
        // Close all details that are not targetDetail
        details.forEach((detail) => {
          if (detail !== targetDetail) {
            detail.removeAttribute("open");
          }
        });
      });
    });
  }, []);
  return (
    <div className="container-fluid my-5 py-5" id="FAQs">
      <div className="row">
        <div className="col-10 offset-1">
          <h3 className="font-weight-bold">Frequently Asked Questions</h3>
          <br />
          {faqs.map((faq, index) => (
            <details key={index}>
              <summary className="h6 font-weight-bold">{faq.ques}</summary>
              <p className="mx-3">{faq.ans}</p>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQs;
