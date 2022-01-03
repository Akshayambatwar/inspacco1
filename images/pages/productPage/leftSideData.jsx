import React from "react";

const LeftSideProductData = ({ description, information }) => {
  return (
    <>
      <div>
        {description.map((data, index) => (
          <React.Fragment key={index}>
            <div>
              <h5 className="DetailsPageSideDataTile pt-4"> {data.title}</h5>
            </div>
            <ul className="pl-3" style={{ listStylePosition: "outside", padding: "0" }}>
              {data.details.map((text, index) => (
                <li key={index} className="DetailsPageText py-1" >{text}</li>
              ))}
            </ul>
          </React.Fragment>
        ))}
        <br />
        <h3 className="font-weight-bold my-3 " style={{ color: "#0049b2" }}>
          Product Information
        </h3>
        {information.map((data, index) => (
          <React.Fragment key={index}>
            <div>
              <div className="DetailsPageText" style={{lineHeight : 2.0}}>
                <b> {data.title}</b> : {data.details}
              </div>
            </div>
          </React.Fragment>
        ))}

        {/* <Divider variant="middle" /> */}
      </div>
    </>
  );
};

export default LeftSideProductData;
