import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
// import Typography from '@material-ui/core/Typography';
// import TextField from '@material-ui/core/TextField';
import Divider from "@material-ui/core/Divider";
// import "./sidedata.css";
import DatePicker from "react-datepicker";
import Slide from "@material-ui/core/Slide";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import "react-datepicker/dist/react-datepicker.css";
import OTPModel from "../../otpModel/otpModel";
import { backendRoute } from "../../../helpers/backendRoute";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
    },
    button: {
        marginTop: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
    actionsContainer: {
        marginBottom: theme.spacing(2),
    },
    resetContainer: {
        padding: theme.spacing(3),
    },
}));

// function getSteps() {
//   return [
//     "Select Category",
//     "Select property size",
//     "Select Date",
//     "Select from available time slot",
//     "Contact Details",
//   ];
// }

// function getStepContent(step) {
//   switch (step) {
//     case 0:
//       return `For each ad campaign that you create, you can control how much
//               you're willing to spend on clicks and conversions, which networks
//               and geographical locations you want your ads to show on, and more.`;
//     case 1:
//       return 'An ad group contains one or more ads which target a shared set of keywords.';
//     case 2:
//       return `Try out different ad text to see what brings in the most customers,
//               and learn how to enhance your ads using features like ad extensions.
//               If you run into any problems with your ads, find out how to tell if
//               they're running and how to resolve approval issues.`;
//     default:
//       return 'Unknown step';
//   }
// }

export default function VerticalLinearStepper({ name, stepData }) {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const [buttonStyle, setButtonStyle] = React.useState(-1);
    const [buttonStyle2, setButtonStyle2] = React.useState(-1);
    const [buttonStyle3, setButtonStyle3] = React.useState(-1);
    const [username, setUserName] = React.useState("");
    const [mobileNumber, setMobileNumber] = React.useState("");
    const [todayTime, setTodayTime] = React.useState(0);
    const [societyname, setsocietyname] = React.useState("");
    const [address, setaddress] = React.useState("");
    const [today, setToday] = React.useState(new Date());
    // const [open, setOpen] = React.useState(false);
    const [alertText, setAlertText] = React.useState();

    useEffect(async () => {
        let url = window.location.href;
        let splitdata = url.split("/");
        let link =
            splitdata[splitdata.length - 2] +
            "/" +
            splitdata[splitdata.length - 1];
        await fetch(backendRoute + "/api/detailspage-data/" + link)
            .then((res) => res.json())
            .then((res) => {
                // today = res.time;
                setToday(res.time);
            })
            .catch((e) => {
                console.log(e);
            });
    }, []);

    // const handleClickOpen = () => {
    //   setOpen(true);
    // };

    // const handleClose = () => {
    //   setOpen(false);
    // };

    const steps = stepData.titles;

    // const handleNext = () => {
    //   setActiveStep((prevActiveStep) => prevActiveStep + 1);
    // };

    // const handleBack = () => {
    //   setActiveStep((prevActiveStep) => prevActiveStep - 1);
    // };
    const calculateToday = (date) => {
        let dateTime = new Date(today);
        let dd = String(dateTime.getDate()).padStart(2, "0");
        let mm = String(dateTime.getMonth() + 1).padStart(2, "0"); //January is 0!
        let yyyy = dateTime.getFullYear();

        let todayDate = dd + "/" + mm + "/" + yyyy;

        dd = String(date.getDate()).padStart(2, "0");
        mm = String(date.getMonth() + 1).padStart(2, "0"); //January is 0!
        yyyy = date.getFullYear();

        let selectedDate = dd + "/" + mm + "/" + yyyy;
        // console.log(todayDate);
        // console.log(selectedDate)
        if (selectedDate !== todayDate) {
            setTodayTime(0);
            return;
        }
        let currhour = dateTime.getHours();
        // console.log(currhour)
        let ans;
        if (currhour <= 12) {
            ans = currhour + 1;
        } else if (currhour < 15) {
            ans = currhour - 12 + 20;
        } else {
            ans = currhour - 15 + 30;
        }
        // console.log(ans)
        setTodayTime(ans);
    };
    const handleReset = () => {
        setActiveStep(0);
        setStartDate(null);
        setButtonStyle(-1);
        setButtonStyle2(-1);
        setButtonStyle3(-1);
        setUserName("");
        setMobileNumber("");
    };

    const allFormData = [];
    const stepOneOnClick = (index, text) => {
        allFormData["step1"] = {
            index: index,
            text: text,
        };
        setButtonStyle(index);
        setButtonStyle2(-1);

        setActiveStep(1);

        // console.log(allFormData);
    };
    const stepTwoOnClick = (index, text) => {
        allFormData["step2"] = {
            index: index,
            text: text,
        };
        setButtonStyle2(index);

        setActiveStep(2);

        // console.log(allFormData);
    };
    const stepFourOnClick = (index, text, add) => {
        allFormData["step4"] = {
            index: index,
            text: text,
        };
        setButtonStyle3(add + index);

        setActiveStep(4);

        // console.log(allFormData);
    };
    const stepFormDetails = (index, activeStep) => {
        // const today = new Date();
        //   const getButtonStyle = (ind, a, allFormDat)=>{
        //     //   setButtonStyle()
        //     console.log(allFormDat)
        //     if(allFormDat["step1"] != null){
        //         if(allFormDat["step1"]["index"] === ind){
        //             console.log("different data sent")
        //             return { borderRadius: 20, backgroundColor : "#ffffff"}
        //         }
        //         else{
        //             console.log("same data sent")

        //             return { borderRadius: 20, backgroundColor : "#eff1f4"}
        //         }
        //     }
        //     else{
        //         console.log("ss data sent")

        //         return { borderRadius: 20, backgroundColor : "#eff1f4"}
        //     }
        // }
        if (index === 0) {
            return (
                <>
                    <div className="row pl-2">
                        {stepData.step0.list.map((text, ind) => (
                            <div className="p-1" key={ind}>
                                {/* {console.log(ind, buttonStyle)} */}
                                <Button
                                    // buttonStyle={{ borderRadius: 25 }}
                                    style={
                                        buttonStyle === ind
                                            ? {
                                                  borderRadius: 20,
                                                  backgroundColor: "#d0e0f0",
                                                  borderStyle: "solid",
                                                  borderColor: "#186bff",
                                              }
                                            : {
                                                  borderRadius: 20,
                                                  backgroundColor: "#eff1f4",
                                              }
                                    }
                                    onClick={() => stepOneOnClick(ind, text)}
                                    // labelColor={'#FFFFFF'}
                                    // backgroundColor="#eff1f4"
                                    variant={
                                        buttonStyle === ind ? "outlined" : ""
                                    }
                                    borderStyle={1}
                                >
                                    <div
                                        className="FormsDetailsTextINButtons px-2"
                                        style={{ textTransform: "none" }}
                                    >
                                        {text}
                                    </div>
                                </Button>
                            </div>
                        ))}
                    </div>
                </>
            );
        } else if (index === 1) {
            let stepTwoData;
            if (buttonStyle === 0 && stepData.step1.isResidential === true) {
                stepTwoData = stepData.step1.listResidential;
            } 
            else {
                stepTwoData = stepData.step1.list;
            }
            return (
                <>
                    <div className="row pl-2">
                        {stepData.step1.isText === true ? (
                            <>
                                <div className="form-group col-lg-12">
                                    <textarea
                                        type="text"
                                        className="form-control"
                                        id="message"
                                        name="message"
                                        onChange={(text) => {
                                            setButtonStyle2(text.target.value);
                                            // console.log(buttonStyle2);
                                        }}
                                    />
                                </div>
                            </>
                        ) : (
                            <>
                                {stepTwoData.map((text, ind) => (
                                    <div className="p-1" key={ind}>
                                        {/* {console.log(ind, buttonStyle)} */}
                                        <Button
                                            // buttonStyle={{ borderRadius: 25 }}
                                            style={
                                                buttonStyle2 === ind
                                                    ? {
                                                          borderRadius: 20,
                                                          backgroundColor:
                                                              "#d0e0f0",
                                                          borderStyle: "solid",
                                                          borderColor:
                                                              "#186bff",
                                                      }
                                                    : {
                                                          borderRadius: 20,
                                                          backgroundColor:
                                                              "#eff1f4",
                                                      }
                                            }
                                            onClick={() =>
                                                stepTwoOnClick(ind, text)
                                            }
                                            // labelColor={'#FFFFFF'}
                                            // backgroundColor="#eff1f4"
                                            variant={
                                                buttonStyle2 === ind
                                                    ? "outlined"
                                                    : ""
                                            }
                                            borderStyle={1}
                                        >
                                            <div
                                                className="FormsDetailsTextINButtons"
                                                style={{
                                                    textTransform: "none",
                                                }}
                                            >
                                                {text}
                                            </div>
                                        </Button>
                                    </div>
                                ))}
                            </>
                        )}
                    </div>
                </>
            );
        } else if (index === 2) {
            return (
                <div className="pl-2">
                    <form className={classes.container}>
                        {/* <TextField
                      id="date"
                      label=""
                      type="date"
                      format={'DD/MM/YYYY'}
                      defaultValue={today}
                      InputProps={{inputProps : {min : {today} }}}
                      // onChange={}
                      // minDate={today}
                      className={classes.textField}
                      InputLabelProps={{
                          shrink: true,
                      }}
                    /> */}
                        <DatePicker
                            label="Preferred Date"
                            selected={startDate}
                            onChange={(date) => {
                                calculateToday(date);
                                setStartDate(date);
                            }}
                            minDate={new Date()}
                            dateFormat="dd/MM/yyyy"
                            placeholderText="Select Preferred Date"
                            // timeInputLabel="Time:"
                            // maxDate={addMonths(new Date(), 5)}
                            showDisabledMonthNavigation
                        />
                    </form>
                </div>
            );
        } else if (index === 3) {
            return (
                <div className="pl-2">
                    <div className="row">
                        <div className="col-1">
                            <img
                                style={{ float: "right" }}
                                className="pl-2 pt-2"
                                src={require("../../../images/detailsPage/dawn.png")}
                                alt="dawn"
                            />
                        </div>
                        <div className="col-3 pt-2">
                            <div className="DetailsPageMorningInFormData">
                                MORNING
                            </div>
                        </div>
                        <div className="col-8">
                            <div className="row ">
                                {["10:00 AM", "11:00 AM", "12:00 AM"].map(
                                    (text, ind) => (
                                        <div className="p-1" key={ind}>
                                            {/* {console.log(ind, buttonStyle)} */}
                                            <Button
                                                // buttonStyle={{ borderRadius: 25 }}
                                                style={
                                                    buttonStyle3 === 10 + ind
                                                        ? {
                                                              borderRadius: 20,
                                                              backgroundColor:
                                                                  "#d0e0f0",
                                                              borderStyle:
                                                                  "solid",
                                                              borderColor:
                                                                  "#186bff",
                                                          }
                                                        : {
                                                              borderRadius: 20,
                                                              backgroundColor:
                                                                  "#eff1f4",
                                                          }
                                                }
                                                onClick={() =>
                                                    stepFourOnClick(
                                                        ind,
                                                        text,
                                                        10
                                                    )
                                                }
                                                // labelColor={'#FFFFFF'}
                                                // backgroundColor="#eff1f4"
                                                variant={
                                                    buttonStyle3 === ind + 10
                                                        ? "outlined"
                                                        : ""
                                                }
                                                borderStyle={1}
                                                disabled={todayTime > ind + 10}
                                            >
                                                <div
                                                    className="FormsDetailsTextINButtons"
                                                    style={
                                                        todayTime > ind + 10
                                                            ? {
                                                                  textTransform:
                                                                      "none",
                                                                  color:
                                                                      "#bbbdc0",
                                                              }
                                                            : {
                                                                  textTransform:
                                                                      "none",
                                                              }
                                                    }
                                                >
                                                    {text}
                                                </div>
                                            </Button>
                                        </div>
                                    )
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-1">
                            <img
                                style={{ float: "right" }}
                                className="pl-2 pt-2"
                                src={require("../../../images/detailsPage/afternoon.png")}
                                alt="dawn"
                            />
                        </div>
                        <div className="col-3 pt-2">
                            <div className="DetailsPageMorningInFormData">
                                AFTERNOON
                            </div>
                        </div>
                        <div className="col-8">
                            <div className="row ">
                                {["1:00 PM", "2:00 PM", "3:00 PM"].map(
                                    (text, ind) => (
                                        <div className="p-2" key={ind}>
                                            {/* {console.log(ind, buttonStyle)} */}
                                            <Button
                                                // buttonStyle={{ borderRadius: 25 }}
                                                style={
                                                    buttonStyle3 === ind + 20
                                                        ? {
                                                              borderRadius: 20,
                                                              backgroundColor:
                                                                  "#d0e0f0",
                                                              borderStyle:
                                                                  "solid",
                                                              borderColor:
                                                                  "#186bff",
                                                          }
                                                        : {
                                                              borderRadius: 20,
                                                              backgroundColor:
                                                                  "#eff1f4",
                                                          }
                                                }
                                                onClick={() =>
                                                    stepFourOnClick(
                                                        ind,
                                                        text,
                                                        20
                                                    )
                                                }
                                                // labelColor={'#FFFFFF'}
                                                // backgroundColor="#eff1f4"
                                                variant={
                                                    buttonStyle3 === ind + 20
                                                        ? "outlined"
                                                        : ""
                                                }
                                                borderStyle={1}
                                                disabled={todayTime > ind + 20}
                                            >
                                                <div
                                                    className="FormsDetailsTextINButtons"
                                                    style={
                                                        todayTime > ind + 20
                                                            ? {
                                                                  textTransform:
                                                                      "none",
                                                                  color:
                                                                      "#bbbdc0",
                                                              }
                                                            : {
                                                                  textTransform:
                                                                      "none",
                                                              }
                                                    }
                                                >
                                                    {text}
                                                </div>
                                            </Button>
                                        </div>
                                    )
                                )}
                            </div>
                        </div>
                        <div className="col-3"></div>
                    </div>
                    <div className="row">
                        <div className="col-1">
                            <img
                                style={{ float: "right" }}
                                className="pl-2 pt-2"
                                src={require("../../../images/detailsPage/evening.png")}
                                alt="dawn"
                            />
                        </div>
                        <div className="col-3 pt-2">
                            <div className="DetailsPageMorningInFormData">
                                EVENING
                            </div>
                        </div>
                        <div className="col-8">
                            <div className="row ">
                                {["4:00 PM", "5:00 PM", "6:00 PM"].map(
                                    (text, ind) => (
                                        <div className="p-2" key={ind}>
                                            {/* {console.log(ind, buttonStyle)} */}
                                            <Button
                                                // buttonStyle={{ borderRadius: 25 }}
                                                style={
                                                    buttonStyle3 === ind + 30
                                                        ? {
                                                              borderRadius: 20,
                                                              backgroundColor:
                                                                  "#d0e0f0",
                                                              borderStyle:
                                                                  "solid",
                                                              borderColor:
                                                                  "#186bff",
                                                          }
                                                        : {
                                                              borderRadius: 20,
                                                              backgroundColor:
                                                                  "#eff1f4",
                                                          }
                                                }
                                                onClick={() =>
                                                    stepFourOnClick(
                                                        ind,
                                                        text,
                                                        30
                                                    )
                                                }
                                                // labelColor={'#FFFFFF'}
                                                // backgroundColor="#eff1f4"
                                                variant={
                                                    buttonStyle3 === ind + 30
                                                        ? "outlined"
                                                        : ""
                                                }
                                                borderStyle={1}
                                                disabled={todayTime > ind + 30}
                                            >
                                                <div
                                                    className="FormsDetailsTextINButtons"
                                                    style={
                                                        todayTime > ind + 30
                                                            ? {
                                                                  textTransform:
                                                                      "none",
                                                                  color:
                                                                      "#bbbdc0",
                                                              }
                                                            : {
                                                                  textTransform:
                                                                      "none",
                                                              }
                                                    }
                                                >
                                                    {text}
                                                </div>
                                            </Button>
                                        </div>
                                    )
                                )}
                            </div>
                        </div>
                        <div className="col-3"></div>
                    </div>
                </div>
            );
        } else if (index === 4) {
            return (
                <div className="pl-2">
                    <form className={classes.container}>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="inputEmail4" className="h6">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="inputEmail4"
                                    required
                                    value={username}
                                    onChange={(text) => {
                                        setUserName(text.target.value);
                                        // console.log(username);
                                    }}
                                />
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="inputPhone4" className="h6">
                                    Contact Number
                                </label>
                                <input
                                    type="tel"
                                    pattern="^(\+\d{1,3}[- ]?)?\d{10}$"                      
                                    className="form-control"
                                    id="inputPhone4"
                                    maxLength="10"
                                    required
                                    value={mobileNumber}
                                    onChange={(text) => {
                                        setMobileNumber(text.target.value);
                                        // console.log(mobileNumber);
                                    }}
                                />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-12">
                                <label htmlFor="inputEmail4" className="h6">
                                Society Name / Organization Name
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="inputEmail4"
                                    required
                                    value={societyname}
                                    onChange={(text) => {
                                        setsocietyname(text.target.value);
                                        // console.log(username);
                                    }}
                                />
                            </div>
                            
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-12">
                                <label htmlFor="inputEmail4" className="h6">
                                    Address
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="inputEmail4"
                                    required
                                    value={address}
                                    onChange={(text) => {
                                        setaddress(text.target.value);
                                        // console.log(username);
                                    }}
                                />
                            </div>
                            
                        </div>
                    </form>
                </div>
            );
        }
    };
    const [startDate, setStartDate] = useState(null);

    /** OTP and submit handling START */
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
            body: JSON.stringify({ mobileNo: mobileNumber, otp }),
        })
            .then((res) => res.json())
            .then((res) => {
                /** Aashish's handleSubmit Code */
                let category = [
                    "Residential",
                    "Shop",
                    "Office",
                    "Hospital",
                    "Bank",
                ][buttonStyle];
                let homeType;
                // console.log(category);
                if (stepData.step1.isText === true) {
                    homeType = buttonStyle2;
                } else {
                    let stepTwoData;
                    if (
                        buttonStyle === 0 &&
                        stepData.step1.isResidential === true
                    ) {
                        stepTwoData = stepData.step1.listResidential;
                    } else {
                        stepTwoData = stepData.step1.list;
                    }
                    homeType = stepTwoData[buttonStyle2];
                }

                // console.log(homeType);
                // console.log(startDate);
                let timeSlot;
                let timeslotnumber = buttonStyle3;
                if (timeslotnumber === 10) {
                    timeSlot = "10:00 AM";
                } else if (timeslotnumber === 11) {
                    timeSlot = "11:00 AM";
                } else if (timeslotnumber === 12) {
                    timeSlot = "12:00 AN";
                } else if (timeslotnumber === 20) {
                    timeSlot = "01:00 PM";
                } else if (timeslotnumber === 21) {
                    timeSlot = "02:00 PM";
                } else if (timeslotnumber === 22) {
                    timeSlot = "03:00 PM";
                } else if (timeslotnumber === 30) {
                    timeSlot = "04:00 PM";
                } else if (timeslotnumber === 31) {
                    timeSlot = "05:00 PM";
                } else if (timeslotnumber === 32) {
                    timeSlot = "06:00 PM";
                }
                if (
                    buttonStyle === -1 ||
                    buttonStyle2 === -1 ||
                    buttonStyle3 === -1 ||
                    startDate === null ||
                    !mobileNumber ||
                    !username
                ) {
                    // console.log("Something wrong");
                    setAlertText("Kindly provide all required details");
                    setLoading(false);
                    setUnauthorized(false);
                    setOTPModel(false);
                    setFormSubmitModel(true);
                } else {
                    let temp = {
                        serviceName: name,
                        category: category,
                        homeType: homeType,
                        date: startDate.toString(),
                        timeSlot: timeSlot,
                        name: username,
                        phoneNo: mobileNumber,
                    };
                    // console.log(JSON.stringify(temp));
                    fetch(backendRoute + "/api/booking-enquiry", {
                        method: "post",
                        headers: {
                            "Content-Type": "application/json",
                            authorization: "Bearer " + res.token,
                        },
                        body: JSON.stringify(temp),
                    })
                        .then((response) => {
                            // console.log(response);
                            if (response.status === 200) {
                                setAlertText(
                                    "Enquiry Sucessfully Submitted. Our customer service executive will contact you."
                                );
                                setLoading(false);
                                setUnauthorized(false);
                                setOTPModel(false);
                                setFormSubmitModel(true);
                            }
                            handleReset();
                        })
                        .catch((e) => console.log("BookingForm Error:", e));
                }

                // console.log(timeSlot);
            })
            .catch((e) => {
                // console.log("Verify Error: ", e)
                setAlertText("Wrong OTP entered...");
                setLoading(false);
                setUnauthorized(true);
                resetOTP();
                setOTPModel(false);
                setFormSubmitModel(true);
                //clearing form inputs
                handleReset();
            });
    };

    const handleFormSubmitModelClose = () => {
        setFormSubmitModel(false);
    };

    const handleOTPInput = (input) => {
        setOtp(input);
    };

    const sendOTP = () => {
        setLoading(true);
        fetch(backendRoute + "/api/mobile-otp-verification/sendOTP", {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ mobileNo: mobileNumber }),
        })
            .then((res) => res.json())
            .then((res) => {
                console.log(res);
                setLoading(false);
            });
    };

    const handleBookNowButtonClick = () => {
        let category = ["Residential", "Shop", "Office", "Hospital", "Bank"][
            buttonStyle
        ];
        let homeType;
        // console.log(category);
        if (stepData.step1.isText === true) {
            homeType = buttonStyle2;
        } else {
            let stepTwoData;
            if (buttonStyle === 0 && stepData.step1.isResidential === true) {
                stepTwoData = stepData.step1.listResidential;
            } else {
                stepTwoData = stepData.step1.list;
            }
            homeType = stepTwoData[buttonStyle2];
        }

        // console.log(homeType);
        // console.log(startDate);
        let timeSlot;
        let timeslotnumber = buttonStyle3;
        if (timeslotnumber === 10) {
            timeSlot = "10:00 AM";
        } else if (timeslotnumber === 11) {
            timeSlot = "11:00 AM";
        } else if (timeslotnumber === 12) {
            timeSlot = "12:00 AN";
        } else if (timeslotnumber === 20) {
            timeSlot = "01:00 PM";
        } else if (timeslotnumber === 21) {
            timeSlot = "02:00 PM";
        } else if (timeslotnumber === 22) {
            timeSlot = "03:00 PM";
        } else if (timeslotnumber === 30) {
            timeSlot = "04:00 PM";
        } else if (timeslotnumber === 31) {
            timeSlot = "05:00 PM";
        } else if (timeslotnumber === 32) {
            timeSlot = "06:00 PM";
        }
        if (
            buttonStyle === -1 ||
            buttonStyle2 === -1 ||
            buttonStyle3 === -1 ||
            startDate === null ||
            !mobileNumber ||
            !username
        ) {
            // console.log("Something wrong");
            setAlertText("Kindly provide all required details");
            setLoading(false);
            setUnauthorized(false);
            setOTPModel(false);
            setFormSubmitModel(true);
        } else {
            /** */
            setOTPModel(true);
            sendOTP();
            /** */
        }
    };
    useEffect(() => {
        handleReset();
    }, [name]);
    return (
        <div
            className={classes.root}
            style={{
                backgroundColor: "#f8f8fa",
                borderStyle: "solid",
                borderWidth: "0.5px",
                borderColor: "#dee3ec",
                borderRadius: "7px",
            }}
        >
            <div
                className="row mx-2 "
                style={{ backgroundColor: "#f8f8fa", alignContent: "right" }}
            >
                <div
                    className="p-4"
                    style={{ float: "right", backgroundColor: "#f8f8fa" }}
                >
                    <div className="BookNowPestCont">Book Now : {name} </div>
                </div>
            </div>
            {/* {console.log(startDate)} */}
            <Divider light />

            <Stepper
                activeStep={activeStep}
                orientation="vertical"
                style={{ backgroundColor: "#f8f8fa" }}
            >
                {steps.map((label, index) => (
                    <Step key={label}>
                        <StepLabel>
                            <div className="col">
                                <div className="FormDetailsTitleStep p-2">
                                    {label}
                                </div>
                                {/* {activeStep} */}
                                {stepFormDetails(index, activeStep)}
                            </div>
                        </StepLabel>
                        <StepContent>
                            {/* <Typography>{getStepContent(index)}</Typography> */}
                            <div className={classes.actionsContainer}>
                                {/* {stepFormDetails(index, activeStep)} */}

                                {/* <div className = "row">

                  </div> */}
                                <div>
                                    {/* {activeStep != 0 ? 
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.button}
                  >
                    Back
                  </Button> : ("")} */}

                                    {/* {activeStep === 2  ? 
                  (
                    <div className="pl-4">
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleNext}
                        className={classes.button}
                    >
                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                    </Button></div> ) : ("")} */}
                                </div>
                            </div>
                        </StepContent>
                    </Step>
                ))}
            </Stepper>
            <Divider light />
            <div
                className="row mx-2 "
                style={{ backgroundColor: "#f8f8fa", alignContent: "right" }}
            >
                <div className="col-8" style={{ backgroundColor: "#f8f8fa" }}>
                    {activeStep > -1 && (
                        <Paper
                            square
                            elevation={0}
                            className={classes.resetContainer}
                            style={{ backgroundColor: "#f8f8fa" }}
                        >
                            <Button
                                onClick={handleReset}
                                className={classes.button}
                            >
                                Reset
                            </Button>
                        </Paper>
                    )}
                </div>
                <div
                    className="p-4"
                    style={{ float: "right", backgroundColor: "#f8f8fa" }}
                >
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleBookNowButtonClick}
                    >
                        <b>Book Now</b>
                    </Button>
                </div>

                <OTPModel
                    loading={loading}
                    open={OTPModelOpen}
                    handleOTPInput={(input) => handleOTPInput(input)}
                    handleClose={() => handleOTPModelClose()}
                    otp={otp}
                    resetOTP={() => resetOTP()}
                    sendOTP={() => sendOTP()}
                    handleVerifySubmit={() => handleVerifySubmit()}
                />

                <Dialog
                    open={formSubmitModel}
                    TransitionComponent={Transition}
                    onClose={handleFormSubmitModelClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title"></DialogTitle>
                    <DialogContent>
                        {unauthorized ? (
                            <DialogContentText
                                id="alert-dialog-description"
                                className="h5 text-warning"
                            >
                                {alertText}
                            </DialogContentText>
                        ) : (
                            <DialogContentText
                                id="alert-dialog-description"
                                style={{ color: "black" }}
                            >
                                {/* Our customer service executive will contact you. */}
                                {alertText}
                            </DialogContentText>
                        )}
                    </DialogContent>
                    <DialogActions>
                        {/* <Button onClick={handleClose} color="primary">
            Disagree
          </Button> */}
                        <Button
                            onClick={handleFormSubmitModelClose}
                            color="primary"
                            autoFocus
                        >
                            OK
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        </div>
    );
}
