import React, { useState } from "react";
// import "./enquiryForm.css";
import Link from "next/link";

import Alert from "@material-ui/lab/Alert";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import enquiry from "../EnquiryForm/enquiry.svg"
import phoneLogo from "../../images/ListingPage/phone-logo.png";
import mailLogo from "../../images/ListingPage/mail-logo.png";
import mapLogo from "../../images/ListingPage/map-logo.png";
import { listingPages } from "../MainPages/listingPage/data";
import OTPModel from "../otpModel/otpModel";
import { backendRoute } from "../../helpers/backendRoute";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const EnquiryForm = () => {
    const [formData, updateFormData] = useState({});
    const [formSubmitModel, setFormSubmitModel] = useState(false);
    const [OTPModelOpen, setOTPModel] = useState(false);
    const [loading, setLoading] = useState(false);
    const [otp, setOtp] = useState("");
    const [unauthorized, setUnauthorized] = useState(false);

    const handleOTPModelClose = () => {
        setOTPModel(false);
        setOtp("");
    };

    const resetOTP = () => {
        setOtp("");
    };

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
                fetch(backendRoute + "/api/service-enquiry", {
                    method: "post",
                    headers: {
                        authorization: "Bearer " + res.token,
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData),
                })
                    .then((response) => {
                        if (response.status == 200) {
                            // console.log(response);
                            setLoading(false);
                            setUnauthorized(false);
                            setOTPModel(false);
                            setFormSubmitModel(true);
                        }
                    })
                    .catch((e) =>
                        console.log("Service Enquiry Error: ", e.message)
                    );
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
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        e.persist();
        // console.log(formData);
        setOTPModel(true);
        sendOTP();
        // updateFormData({})
    };
    return (
        <div className="container-fluid " style={{background: "rgb(255,255,255)",
            background: "linear-gradient(90deg, rgba(255,255,255,1) 23%, rgba(3,56,106,1) 99%)"}}  >
            <div className="w-75 mx-auto my-5" id="EnquiryForm" >
                <br />
                <br />
                <br />
                <br />
                <div className="row">
                    <div className="col-lg-4 col-md-12 mb-4 pr-5 mt-4">
                        <h4 className="font-weight-bold mb-4 "   >Contact Us Today !</h4>
                        <div className="d-flex align-items-start justify-content-start mb-3">
                            <img
                                src={phoneLogo}
                                alt="Contact phone logo"
                                className="img-fluid"
                            />
                            <h5 className="ml-3 text-primary"  >
                                <Link href="tel:+919370519120" >+91 9370519120</Link>
                            </h5>
                        </div>
                        <div className="d-flex align-items-start justify-content-start">
                            <img
                                src={mailLogo}
                                alt="Mailbox logo"
                                className="img-fluid"
                            />
                            <h5 className="ml-3 text-primary">
                                <Link href="mailto:email@inspacco.com">
                                    email@inspacco.com
                                </Link>
                            </h5>
                        </div>
                        <div className="d-flex align-items-start justify-content-start mt-3">
                            <img
                                src={mapLogo}
                                alt="Map logo"
                                className="img-fluid"
                                width="32px"
                                // style={{border:"2px solid blue", padding:"5px", borderRadius:"50%"}}
                            />
                            <h5 className="ml-3 text-primary">
                                <Link href="https://goo.gl/maps/3PCPQXPUEhhYpceHA" >
                                    <a target="_blank">
                                   Get Directions
                                   </a>
                                </Link>
                            </h5>
                        </div>
                        <br/>
                        <br/>
                        
                        
                        <div className="d-flex align-items-start justify-content-start">
                            <img
                                src={enquiry}
                                alt="Inspacco Contact Us"
                                className="img-fluid"
                            />
                           
                        </div>
                    </div>
                    <div
                        className="col-lg-8 col-md-12 border rounded py-4 shadow-1 px-5"
                        style={{
                            backgroundColor: "#f4f7ff",
                            border: "1px solid #daeafc",
                        }}
                    >
                        <form className="" onSubmit={handleSubmit}>
                            <div className="form-row">
                                <h4 className="font-weight-bold mb-5">Get In Touch Now</h4>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="fullName" className="h6">
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="fullName"
                                        name="name"
                                        onChange={changeHandler}
                                        // required
                                    />
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="contactNo" className="h6">
                                        Contact Number
                                    </label>
                                    <input
                                        type="tel"
                                        pattern="^(\+\d{1,3}[- ]?)?\d{10}$"
                                        className="form-control"
                                        id="contactNo"
                                        name="phoneNo"
                                        onChange={changeHandler}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="emailID" className="h6">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="emailID"
                                        name="emailID"
                                        onChange={changeHandler}
                                        // required
                                    />
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="inputState" className="h6">
                                        Service You Want
                                    </label>
                                    <select
                                        id="service"
                                        className="form-control"
                                        name="service"
                                        // value={serviceHandler}
                                        onChange={changeHandler}
                                        // required={true}
                                    >
                                        <option disabled selected></option>
                                        {listingPages.map((page) => {
                                            return page.subcategories.map(
                                                (service) => (
                                                    <option
                                                        value={service.name.replace(
                                                            /\s/g,
                                                            "-"
                                                        )}
                                                        key={service.name}
                                                    >
                                                        {service.name}
                                                    </option>
                                                )
                                            );
                                        })}
                                    </select>
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="pincode" className="h6">
                                        Pin code
                                    </label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        maxLength="6"
                                        id="pincode"
                                        name="pincode"
                                        onChange={changeHandler}
                                        // required
                                    />
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="city" className="h6">
                                        City
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="city"
                                        name="city"
                                        onChange={changeHandler}
                                        // required
                                    />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="address" className="h6">
                                        Address
                                    </label>
                                    <textarea
                                        type="text"
                                        className="form-control"
                                        id="address"
                                        name="address"
                                        onChange={changeHandler}
                                        // required
                                    />
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="message" className="h6">
                                        Message
                                    </label>
                                    <textarea
                                        type="text"
                                        className="form-control"
                                        id="message"
                                        name="message"
                                        onChange={changeHandler}
                                        // required
                                    />
                                </div>
                            </div>
                            <div
                                className="w-50 ml-auto rounded"
                                style={{ backgroundColor: "#0a50b5", marginRight:"140px" }}
                            >
                                <button
                                    type="submit"
                                    className="btn btn-block btn-primary"
                                >
                                    <span className="font-weight-bold">
                                        Send Enquiry
                                    </span>
                                </button>
                            </div>
                        </form>


                        <OTPModel
                            loading={loading}
                            open={OTPModelOpen}
                            resetOTP={() => resetOTP()}
                            handleOTPInput={(input) => handleOTPInput(input)}
                            handleClose={() => handleOTPModelClose()}
                            otp={otp}
                            sendOTP={() => sendOTP()}
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
                                        <h5>
                                            Please check your details properly...
                                        </h5>
                                    </Alert>
                                ) : (
                                    <Alert severity="success">
                                        <h5>Enquiry submitted successfully!</h5>
                                    </Alert>
                                )}
                            </DialogTitle>
                        </Dialog>
                    </div>
                </div>

            </div>
           
           
                <br />
                


        </div>
    );
};

export default EnquiryForm;
