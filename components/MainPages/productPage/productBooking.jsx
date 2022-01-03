import React, { useState } from "react";
import Alert from "@material-ui/lab/Alert";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import Quantity from "./quantity";
import OTPModel from "../../otpModel/otpModel";
import { backendRoute } from "../../../helpers/backendRoute";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ProductBooking = ({ productName }) => {
  const [formData, updateFormData] = useState({});

  //OTP states
  const [formSubmitModel, setFormSubmitModel] = useState(false);
  const [OTPModelOpen, setOTPModel] = useState(false);
  const [loading, setLoading] = useState(false);
  const [otp, setOtp] = useState("");
  const [unauthorized, setUnauthorized] = useState(false);
  const [alertMessage, setAlertMessage] = useState(
    "Please enter values properly..."
  );

  // Quantity
  const [quantityVal, setQuantityVal] = useState(0);
  const increaseValue = () => {
    setQuantityVal(quantityVal + 1);
  };
  const decreaseValue = () => {
    quantityVal > 0 ? setQuantityVal(quantityVal - 1) : setQuantityVal(0);
  };

  // OTP, dialog and submit handlers START
  const handleOTPModelClose = () => {
    console.log("inside close....");
    setOTPModel(false);
    setOtp("");
  };

  const resetOTP = () => {
    setOtp("");
  }

  const handleVerifySubmit = () => {
    setLoading(true);
    fetch(backendRoute + "/api/mobile-otp-verification/verifyOTP", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ mobileNo: formData.phoneNo, otp }),
    })
      .then((res) => res.json())
      .then((res) => {
        fetch(backendRoute + "/api/product-booking", {
          method: "post",
          headers: {
            authorization: "Bearer " + res.token,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...formData,
            Quantity: quantityVal,
            productName: productName,
          }),
        })
          .then((response) => {
            if (response.status === 200) {
              // console.log(response);
              setLoading(false);
              setUnauthorized(false);
              setOTPModel(false);
              setFormSubmitModel(true);
            }
          })
          .catch((e) => console.log(e.message));
      })
      .catch((e) => {
        // console.log("Verify Error: ", e);
        setLoading(false);
        setUnauthorized(true);
        resetOTP();
        setOTPModel(false);
        setFormSubmitModel(true);
      });
  };

  const handleFormSubmitModelClose = () => {
    setFormSubmitModel(false);
  };

  const handleOTPInput = (input) => {
    setOtp(input);
  };

  const changeHandler = (e) => {
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });
  };

  const sendOTP = () => {
    setLoading(true);
    fetch(backendRoute + "/api/mobile-otp-verification/sendOTP", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ mobileNo: formData.phoneNo }),
    })
      .then((res) => res.json())
      .then((res) => {
        setLoading(false);
      });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    e.persist();
    if (quantityVal < 1) {
      setFormSubmitModel(true);
      setUnauthorized(true);
      setAlertMessage("Quantity can't be zero!");
      return;
    }
    setOTPModel(true);
    sendOTP();
  };

  return (
    <div>
      <h6 className="mb-2">Quantity</h6>
      <Quantity
        quantityVal={quantityVal}
        increaseValue={() => increaseValue()}
        decreaseValue={() => decreaseValue()}
      />

      <h6 className="mt-4">Contact Details</h6>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="emailID">Full Name</label>
            <input
              type="text"
              className="form-control"
              id="FullName"
              name="FullName"
              onChange={changeHandler}
              required
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="contactNo">Contact Number</label>
            <input
              type="tel"
              pattern="^(\+\d{1,3}[- ]?)?\d{10}$"
              className="form-control"
              id="phoneNo"
              name="phoneNo"
              onChange={changeHandler}
              required
            />
          </div>
        </div>
        <button
          type="submit"
          className="btn btn-block btn-primary font-weight-bold"
        >
          Book Now
        </button>
      </form>

      <OTPModel
        loading={loading}
        open={OTPModelOpen}
        handleOTPInput={(input) => handleOTPInput(input)}
        handleClose={() => handleOTPModelClose()}
        otp={otp}
        sendOTP={() => sendOTP()}
        resetOTP={() => resetOTP()}
        handleVerifySubmit={() => handleVerifySubmit()}
      />

      <Dialog
        open={formSubmitModel}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleFormSubmitModelClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">
          {unauthorized ? (
            <Alert severity="warning">
              {/* <h5>Please enter values properly...</h5> */}
              <h5>{alertMessage}</h5>
            </Alert>
          ) : (
            <Alert severity="success">
              <h5>Booking Request submitted successfully!</h5>
            </Alert>
          )}
        </DialogTitle>
      </Dialog>
    </div>
  );
};

export default ProductBooking;
