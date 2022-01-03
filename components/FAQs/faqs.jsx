import React, { useEffect } from "react";
// import "./faqs.scss";

const FAQs = ({ faqs }) => {
  useEffect(() => {
    const items = document.querySelectorAll(".accordion button");

    function toggleAccordion() {
      const itemToggle = this.getAttribute("aria-expanded");

      for (let i = 0; i < items.length; i++) {
        items[i].setAttribute("aria-expanded", "false");
      }

      if (itemToggle === "false") {
        this.setAttribute("aria-expanded", "true");
      }
    }

    items.forEach((item) => item.addEventListener("click", toggleAccordion));
  }, []);

  return (
    <div className="mx-auto py-5 my-5" style={{ width: "80%" }} id="FAQs">
      <h3 className="font-weight-bold">Frequently Asked Questions</h3>
      <div className="accordion">
        {faqs.map((faq, index) => (
          <div className="accordion-item">
            <button id="accordion-button-1" aria-expanded="false">
              <span className="accordion-title"> {faq.ques} </span>
              <span className="icon" aria-hidden="true"></span>
            </button>
            <div className="accordion-content">
              <p>{faq.ans}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
