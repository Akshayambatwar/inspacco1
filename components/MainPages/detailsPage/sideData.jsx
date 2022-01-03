import React from "react";
import Divider from "@material-ui/core/Divider";
// import "./sidedata.css";
// import { text } from "@fortawesome/fontawesome-svg-core";
import Steps from "./steps";

const sideData = ({ qualityAssurance, inclusions }) => {
  // console.log(ourAssuranceList);
  //   const quality = ["Certified and Safe Pest Control", "Trained Professionals with assurance on quality of work","Hasslefree service at yor place, at your time"];
  //   const inclusions2 = ["Complete elimination of Cockroaches, bugs, mosquitos, Termites", "30 Days warranty in case of cockroaches", "Do provide ventilation during the service", "Usage of government permitted chemicals", "Re-assessment within a week if not satisfied"]

  return (
    <div className="col">
      <div>
        <div>
          <div className="DetailsPageSideDataTile pb-4" style={{marginLeft:"-20px"}}>
            Platform Benefits
          </div>
        </div>
        <ul
          className="CheckPoint "
        // style={{ lineHeight: "1.5" }}
        >
          {qualityAssurance.map((text, index) => (
            <div key={index}>
              <li className="DetailsPageText ">{text}</li> <br />
            </div>
          ))}
        </ul>
        <Divider variant="middle" />
      </div>
      {/* <div>
        <div>
          <div className="DetailsPageSideDataTile pl-4 py-4"> Inclusions</div>
        </div>
        <ul
          className="GoldBullets text-dark text-left" */}
        {/* // style={{ lineHeight: "1.5" }} */}
        {/* > */}
          {/* {inclusions.map((text, index) => (
            <div key={index}>
              <li className="DetailsPageText ">{text}</li> <br />
            </div>
          ))}
        </ul>
        <Divider variant="middle" />
      </div> */}
      <div>
        <div>
          <div className="DetailsPageSideDataTile   pt-4" style={{marginLeft:"-20px"}}>
            How it Works ?
          </div>
        </div>
        <Steps />
      </div>
    </div>
  );
};

export default sideData;
