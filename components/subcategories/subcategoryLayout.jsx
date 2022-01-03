import React from "react";
// import "./subcategory.css";
// import { Link } from "react-router-dom";
import Link from 'next/link'
import Ellipse2 from './Ellipse2.png'
import Ellipse3 from './Ellipse2.png'
import { withThemeCreator } from "@material-ui/styles";

const SubCategoryLayout = ({ categoryTitle, SubCategories }) => {

  
  return (
    // <div className="container mt-4">
    //   {/* <div className="card"> */}
    //   <div className="py-5 mb-4 subcategories" style={{ boxShadow: "10px 25px 26px 30px rgb(0 0 0 / 8%)", fontFamily: "'Nunito', sans-serif" }}>
    //     {/* <img src={Ellipse2} style={{position:"absolute", width:"150px",left:"-15px",opacity:"0.2"}}/> */}

    //     <div className="w-75 mx-auto">

    //       <h3 className="font-weight-bold mb-3" style={{ color: "black", textAlign: "center", letterSpacing: "1px" }}>{categoryTitle}</h3>
    //       {/* <div className="Rectangle-Copy-14 mb-4"></div> */}

    //       <div className="row" >

    //         {SubCategories.map((subcategory, index) => (

    //           <div className="col-lg-3 col-6 square" key={index}>


    //             <div
    //               className="subcategory-card mb-5 "
    //               style={{



    //                 width: "80px",
    //                 height: "70px",
    //                 justifyContent: "center",

    //               }}
    //             >
    //               <Link href={'/services' + subcategory.route}>
    //                 <a style={{ textDecoration: "none" }}>
    //                   <img
    //                     className="rounded img-fluid mt-3 "
    //                     src={subcategory.path}
    //                     alt="wrappixel kit"

    //                     loading="lazy" style={{ width: "60%", height: '60%', alignItems: "center", marginLeft: "58px" }}
    //                   />
    //                   <h6
    //                     className="mt-3"
    //                     style={{ color: "black", textDecoration: "none", textAlign: "center", marginLeft: "58px" }}
    //                   >
    //                     {subcategory.name}
    //                   </h6>
    //                   <div>

    //                   </div>

    //                 </a>
    //               </Link>

    //             </div>
    //           </div>

    //         ))}
    //         {/* <div className="col-md-12 mt-3 text-center">
    //         <a className="btn btn-info-gradiant btn-md border-0 text-white">
    //           <span>View Details</span>
    //         </a>
    //       </div> */}
    //       </div>
    //     </div>
    //   </div>

    //   {/* </div> */}
    // </div>





    <div className="container-fluid " >
      <div className="card mb-1" style={{ backgroundColor: "#03386A", borderRadius:"25px", boxShadow:"5px 5px 5px #E8E8E8" }}>
      <div className="py-3  subcategories" style={{
        //  boxShadow: "10px 25px 26px 30px rgb(0 0 0 / 8%)",
        fontFamily: "'Nunito', sans-serif"
      }}>
        <img src={Ellipse2} style={{ position: "absolute", width: "150px",  opacity: "0.1" }} />

        <div className="w-75 mx-auto">

          <h3 className="font-weight-bold mb-5" style={{ color: "white", textAlign: "center", letterSpacing: "1px" }}>{categoryTitle}</h3>
          {/* <div className="Rectangle-Copy-14 mb-4"></div> */}

          <div className="row"  >

            {SubCategories.map((subcategory, index) => (
              

              
              <div className="col-lg-2 col-md-4 col-6 mb-4" key={index} >


                <div
                  className="subcategory-card mb-4 "
                  style={{
                    backgroundColor: "white",
                    borderRadius: "15%",
                    // border:"2px solid white",
                    width: "125px",
                    height: "100px",
                    justifyContent: "center",
                    
                  }}
                >
                  <Link href={'/services' + subcategory.route}>
                    <a style={{ textDecoration: "none", marginLeft: "12px" }}>
                      <img
                        className="rounded img-fluid mt-3 ml-4 "
                        src={subcategory.path}
                        alt="Services for Societies"

                        loading="lazy" style={{ width: "40%", height: '45%', alignItems: "center" }}
                      />
                      <h6
                        className="mt-2"
                        style={{ color: "black", textDecoration: "none", textAlign: "center" }}
                      >
                        {subcategory.name}
                      </h6>


                      <div>

                      </div>

                    </a>
                  </Link>

                </div>
              </div>
              
            ))}
            {/* <div className="col-md-12 mt-3 text-center">
      <a className="btn btn-info-gradiant btn-md border-0 text-white">
        <span>View Details</span>
      </a>
    </div> */}
          </div>
        </div>
      </div>
      
      </div>
    </div>


    



  );
};

export default SubCategoryLayout;
