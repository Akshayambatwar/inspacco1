import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
// import "./sidedata.css"

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%"
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1)
  },
  actionsContainer: {
    marginBottom: theme.spacing(2)
  },
  resetContainer: {
    padding: theme.spacing(3)
  }
}));

function getSteps() {
  return ["Choose Service that you require. ", "Book the service by giving requirement details.", "Our representative will get in touch with you for further information.", "Hassle-free service experience."];
}

export default function VerticalLinearStepper() {
  const classes = useStyles();
  // const [activeStep, setActiveStep] = React.useState();
  const steps = getSteps();

  return (
    <div className={classes.root} style={{marginLeft:"-50px"}}>
      <Stepper activeStep={-1} orientation="vertical" nonLinear={true}>
        {steps.map((label, index) => (
          <Step active={true} key={index}>
            <StepLabel ><div className="DetailsPageText"> {label}</div></StepLabel>
          </Step>
        ))}


      </Stepper>
    </div>
  );
}
