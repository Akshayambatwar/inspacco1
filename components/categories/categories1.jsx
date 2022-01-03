import React from "react";
// import { Link } from "react-router-dom";
import Link from "next/link";
import { routeMapping } from "../../helpers/routing";
// import "./category1.css";

const categories = [
  {
    name: "Disinfection",
    logo: require("../../images/DisinfectionIcon.png"),
  },
  {
    name: "House-Keeping",
    logo: require("../../images/houseKeepingIcon.png"),
  },
  {
    name: "Repairs",
    logo: require("../../images/electricianIcon.png"),
  },
  {
    name: "Maintenance (AMC)",
    logo: require("../../images/maintainanceIcon.png"),
  },
  {
    name: "Inspection",
    logo: require("../../images/inspection.png"),
  },
  {
    name: "Interiors",
    logo: require("../../images/interior.png"),
  },
  {
    name: "Fabrication",
    logo: require("../../images/fabricationIcon.png"),
  },
  {
    name: "Civil Work",
    logo: require("../../images/renovationIcon.png"),
  },
  {
    name: "Water Proofing",
    logo: require("../../images/Waterproofing.png"),
  },
];

const products = [
  // {
  //   name: "Pulse Oximeter",
  //   logo: require("../../images/PulseOximeter.png"),
  // },
  {
    name: "Infrared Thermometer",
    logo: require("../../images/InfraredThermometer.png"),
  },
  {
    name: "Sanitizing Mats",
    logo: require("../../images/SanitizingMat.png"),
  },
  {
    name: "Foot Operated Sanitizing Stand",
    logo: require("../../images/FootOperatedsanitizingStand.png"),
  },
  {
    name: "PPE Kit",
    logo: require("../../images/PPEKIT.png"),
  },
];
const TopCategories = () => {
  return (
    <div className="my-5 py-3 service-24 features" id="features">
      <div className="container">
        {/* <h3 className="mb-4 font-weight-bold text-center">Categories</h3> */}
        <h2 className="mb-3 font-weight-bold" style={{color:'#04032d'}}>SERVICES</h2>
        <div className="Rectangle-Copy-14 mb-4"></div>
        <div className="row wrap-service-24">
          {categories.map((category, index) => (
            <React.Fragment key={index}>
              <div
                className="col-lg-4 col-md-4"
                key={index}
                style={{ marginBottom: "5px" }}
              >
                <div
                  className="row icon-box"
                  data-aos="zoom-in"
                  data-aos-delay="50"
                  style={{margin:'0.5px'}}
                >
                  <div className="col-lg-2 col-md-2" style={{padding:'0px'}}>
                  <img
                    src={category.logo}
                    alt={category.name}
                    className="img-fluid"
                    style={{ color: "#ffbb2c" }}
                  ></img></div>
                   <div className="col-lg-10 col-md-10">
                  <h3>
                    <a href={`/services/${routeMapping.get(category.name)}`}>
                      {category.name}
                    </a>
                  </h3>
                  </div>
                </div>
              </div>
            </React.Fragment>
            // <React.Fragment key={index}>
            //   {/* { === 5 ? (
            //   // <>
            //   //     <div className="col-lg-2 d-none d-lg-block"></div>
            //   //   </>
            //   ) : (
            //       ""
            //     )} */}
            //   {/* {index === 0 ? (
            //     <>
            //       <div className="col-lg-1 d-none d-lg-block"></div>
            //     </>
            //   ) : (
            //       ""
            //     )} */}
            //   <div
            //     className="hover-bg col-lg-4 col-md-4 col-sm-6 mb-3 py-2 px-2"
            //     key={index}
            //     style={{ borderRadius: "20px" }}
            //   >
            //     <div
            //       className="category-card category-card-shadow"
            //       style={{
            //         backgroundImage: `url(${category.logo})`,
            //         backgroundRepeat: "no-repeat",
            //         backgroundPosition: "right",
            //         backgroundSize: "80px",
            //         backgroundColor:'honeydew'
            //       }}
            //     >
            //       <Link
            //         href={`/services/${routeMapping.get(category.name)}`}
            //         // className="text-center d-block rounded"
            //         // style={{
            //         //   textDecoration: "none",
            //         //   textDecorationColor: "none",
            //         // }}
            //       >
            //         <a
            //           className="text-center d-block rounded"
            //           style={{
            //             textDecoration: "none",
            //             textDecorationColor: "none",
            //           }}
            //         >
            //           {/* <span>
            //             <img
            //               // style={{

            //               // }}
            //               src={category.logo}
            //               alt={category.name}
            //               className="img-fluid mt-3"
            //             />
            //           </span> */}
            //           <p
            //             className="mt-3 text-dark mb-0"
            //             style={{ fontWeight: "600" }}
            //           >
            //             {category.name}
            //           </p>
            //         </a>
            //       </Link>
            //     </div>
            //   </div>p
            // </React.Fragment>
          ))}
        </div>
            {/* <br />
            <br /> */}
        {/* <h2 className="mb-3 font-weight-bold" style={{color:'#04032d'}}>PRODUCTS</h2>
        <div className="Rectangle-Copy-14 mb-4"></div>
        <div className="row wrap-service-24">
          {products.map((category, index) => (
            <React.Fragment key={index}>
            <div
              className="col-lg-3 col-md-4"
              key={index}
              style={{ marginBottom: "5px" }}
            >
              <div
                className="row icon-box"
                data-aos="zoom-in"
                data-aos-delay="50"
                style={{margin:'0.5px'}}
              >
                <div className="col-lg-2 col-md-2" style={{padding:'0px'}}>
                <img
                  src={category.logo}
                  alt={category.name}
                  className="img-fluid"
                  style={{ color: "#ffbb2c" }}
                ></img></div>
                 <div className="col-lg-10 col-md-10">
                <h3>
                  <a href={`/services/${routeMapping.get(category.name)}`}>
                    {category.name}
                  </a>
                </h3>
                </div>
              </div>
            </div>
          </React.Fragment>
            
            ))}
        </div>
      */}
      </div>
    </div>
  );
};

export default TopCategories;
