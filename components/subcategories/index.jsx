import React from "react";
import Client from "../clientSupplier/Client";
// import "./subcategory.css";
import SubCategoryLayout from "./subcategoryLayout";


const houseKeeping = [
  {
    name: "House Keeping",
    path: require("../../images/subCategories/houseKeeping/housekeeping1.png"),
    route: "/regular-services/housekeeping",
  },
  {
    name: "Security",
    path: require("../../images/subCategories/houseKeeping/security1.png"),
    route: "/regular-services/security",
  },
  {
    name: "Gardening",
    path: require("../../images/subCategories/houseKeeping/gardening1.png"),
    route: "/regular-services/gardening",
  },
  {
    name: "Society Manager",
    path: require("../../images/subCategories/houseKeeping/societymanager.png"),
    route: "/regular-services/society_manager",
  },
  {
    name: "CCTV Work",
    path: require("../../images/subCategories/houseKeeping/CCTV1.png"),
    route: "/annual-services/cctv",
  },
  {
    name: "Water Proofing",
    path: require("../../images/subCategories/houseKeeping/water.png"),
    route: "/one_time_services/waterproofing",
  },
  {
    name: "Painting",
    path: require("../../images/subCategories/houseKeeping/painting1.png"),
    route: "/one_time_services/painting",
  },
  {
    name: "EV Solution",
    path: require("../../images/subCategories/houseKeeping/Ev-station.png"),
    route: "/annual-services/ev-solution",
  },
  {
    name: "Swimming Pool",
    path: require("../../images/subCategories/houseKeeping/swimming.png"),
    route: "/annual-services/swimmingpool",
  },
  {
    name: "Solar Work",
    path: require("../../images/subCategories/houseKeeping/Solar.png"),
    route: "/annual-services/solar",
  },
  {
    name: "Deep Cleaning",
    path: require("../../images/subCategories/houseKeeping/deep-cleaning.png"),
    route: "/one_time_services/deep-cleaning",
  },
  {
    name: "Explore More",
    path: require("../../images/subCategories/houseKeeping/right-arrow.png"),
   route: "/",
  
  },
  // {
  //   name: "Sanitization",
  //   path: require("../../images/subCategories/houseKeeping/sanitization.png"),
  // },
];

/*const civilWork = [
  {
    name: "Fencing",
    path: require("../../images/subCategories/civil/fencing.png"),
    route: "/civil-work/fencing",
  },
  {
    name: "Grouting",
    path: require("../../images/subCategories/civil/grouting.png"),
    route: "/civil-work/grouting/",
  },
  {
    name: "Mason",
    path: require("../../images/subCategories/civil/mason.png"),
    route: "/civil-work/mason",
  },
  {
    name: "Tiling",
    path: require("../../images/subCategories/civil/tiling.png"),
    route: "/civil-work/tiling",
  },
];*/

const SubCategory = () => {

  
  return (
    <>
      <SubCategoryLayout
        categoryTitle="Services"
        SubCategories={houseKeeping}
         
      />
      
      
      <Client/>
      {/* <SubCategoryLayout categoryTitle="Civil Work" SubCategories={civilWork} /> */}
      
    </>
  );
};

export default SubCategory;
