import React from "react";
import warranty from "../../images/Products/1year.png";
import onTimeDelivery from "../../images/Products/delivery.png";
import noContact from "../../images/Products/noContact.png";

const DeliveryLogos = () => {
  return (
    <div className="row mt-5">
      <div className="col">
        <img
          src={noContact}
          className="img-fluid"
          alt="No contact delivery of product"
        />
        <p className="text-info text-center"><b>No Contact Delivery</b></p>
      </div>
      <div className="col">
        <img
          src={onTimeDelivery}
          className="img-fluid"
          alt="on time delivery"
        />
        <p className="text-info text-center"><b>On Time Delivery</b></p>
      </div>
      <div className="col">
        <img
          src={warranty}
          className="img-fluid"
          alt="one year product warranty"
        />
        <p className="text-info text-center"><b>1 Year Warranty</b></p>
      </div>
    </div>
  );
};

export default DeliveryLogos;
