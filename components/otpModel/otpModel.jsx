import React from "react";
import Button from "@material-ui/core/Button";
// import { makeStyles } from '@material-ui/core/styles';
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Slide from "@material-ui/core/Slide";
import OtpInput from "react-otp-input";
import LazyLoader from "../../helpers/lazyLoader";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

// const useStyles = makeStyles({
//   minSize: {
//     minWidth: "300px"
//   },
// });

const OTPModel = ({
  handleClose,
  handleOTPInput,
  loading,
  open,
  otp,
  sendOTP,
  resetOTP,
  handleVerifySubmit,
}) => {

  const resendOTPHandler = () => {
    resetOTP();
    sendOTP();
  }

  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-labelledby="alert-dialog-slide-title"
      aria-describedby="alert-dialog-slide-description"
    >
      {loading ? (
        <div className="p-5">
          <LazyLoader />
        </div>
      ) : (
        <>
          <DialogTitle id="alert-dialog-slide-title">
            Please enter the OTP sent on provided mobile number
          </DialogTitle>
          <DialogContent className="mx-auto">
            <OtpInput
              value={otp}
              onChange={handleOTPInput}
              inputStyle={{ width: "42px", height: "40px"}}
              numInputs={4}
              separator={<i className="mx-2 h5">&#8594;</i>}
              isInputNum={true}
            />
          </DialogContent>
          <DialogActions className="mx-auto my-2">
            <Button onClick={resendOTPHandler} color="primary" variant="contained">
              Resend OTP
            </Button>
            {/* <Button onClick={handleClose} color="secondary">
              Cancel
            </Button> */}
            <Button onClick={handleVerifySubmit} style={{ color: "white", backgroundColor: "#239023"}} variant="contained">
              Verify
            </Button>
          </DialogActions>
        </>
      )}
    </Dialog>
  );
};

export default OTPModel;
