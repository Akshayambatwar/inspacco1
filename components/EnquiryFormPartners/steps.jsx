import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";

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
  return ["Choose Service or Product you need ", "Book the service by calling us or by filling up the Enquiry form", "Our representative will get in touch with you for further information", "Hassel-free delivery or prompt service at your place"];
}

export default function VerticalLinearStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState();
  const steps = getSteps();

  return (
    <div className={classes.root}>
      <Stepper activeStep={-1} orientation="vertical" nonLinear= "true"> 
        {steps.map((label, index) => (
          <Step active = "true">
            <StepLabel><h6>{label}</h6></StepLabel>
          </Step>
        ))}
       
          
      </Stepper>
    </div>
  );
}
