import React from "react";
// import "./quantity.css";

const Quantity = ({ quantityVal, increaseValue, decreaseValue }) => {
  return (
    <div id="Quantity">
      <div
        className="value-button btn btn-info"
        id="decrease"
        onClick={decreaseValue}
        title="Decrease Value"
      >
        <strong>-</strong>
      </div>
      <input
        type="number"
        id="number"
        value={quantityVal}
        onChange={() => {}}
      />
      <div
        className="value-button btn btn-info"
        id="increase"
        onClick={increaseValue}
        title="Increase Value"
      >
        <strong>+</strong>
      </div>
    </div>
  );
};

export default Quantity;
