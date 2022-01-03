import React from "react";

const ProductPricing = ({
  Pricing: { MRP, dealPrice, savedMoney, savedPercentage, condition },
}) => {
  return (
    <div className="mt-3">
      <h5 className="text-success">In Stock</h5>
      <h6>
        M.R.P. : <i style={{ textDecoration: "line-through" }}>&#8377; {MRP}</i>
      </h6>
      <h6>
        Deal of the Day:{" "}
        <i className="text-primary font-weight-bold h5">&#8377; {dealPrice}</i>{" "}
      </h6>
      <p>(Free delivery + Inclusion of all taxes)</p>
      {condition ? (
        <p className="text-danger" style={{ fontSize: "12px" }}>
          Note&#42;: {condition}
        </p>
      ) : null}

      {/* <h6>
        You Save: &#8377; {savedMoney}
        {savedPercentage}
      </h6> */}
    </div>
  );
};

export default ProductPricing;
