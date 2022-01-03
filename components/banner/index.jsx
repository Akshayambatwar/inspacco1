import React from "react";
import styles from "./banner.module.css";
// import {HashLink} from "react-router-hash-link";
import Link from "next/link";
import { Button, withWidth } from "@material-ui/core";
import imgMobile from "../../images/hero-img6.png";
// import imgMobile1 from "../../images/home2.png";
// import imgMobile2 from "../../images/Ellipse.png";
const Banner = () => {
  return (
    <section id="hero" 
    // style={{backgroundColor:"#DBDADA" }}
     >
      <div className="container"  >
        <div className="row justify-content-between" >
          <div className="col-lg-6  pt-5 pt-lg-0 order-2 order-lg-1 d-flex  ">
            <div data-aos="zoom-out">
              <h1 style={{fontSize:"35px", lineHeight: "45px"}}>
                Redefining the <br/>Gated Community services <br/>with Technology.
              </h1>
              <h6 className="mt-4 mb-4" style={{color: "rgba(255, 255, 255, 0.8)",fontWeight:"400"}}>Our platform delivers Professional, Reliable and Insured <br/>Services at your convenience.</h6>
              <h2 style={{fontWeight:"500"}}>
                Housing Societies | Corporates
              </h2>
              
              <div className="text-left text-lg-start Explore">
                <Link href="/services">
                <a  className="btn-get-started scrollto" style={{background: "transparent linear-gradient(180deg, #8CE659 0%, #25C349 100%) 0% 0% no-repeat padding-box", cursor:"pointer"}}>
                  Explore
                </a>
                </Link>
                
                
              </div>
           </div>
          </div>
          
          <div
            className="col-lg-6  order-1 order-lg-2 hero-img" 
            data-aos="zoom-out"
            data-aos-delay="300" 
          >
            
             {/* <img src={imgMobile2} className="img-fluid img2 " alt="" style={{position:"relative"}} /> */}
            <img src={imgMobile}  className="img-fluid animated" alt="Inspacco_services"  />
            {/* <img src={imgMobile1} className="img-fluid img1 " alt="" style={{position:"absolute"}} /> */}
            

            
          </div>
        </div>
      </div>

      {/* <svg
        className="hero-waves"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 24 150 28 "
        preserveAspectRatio="none"
      >
        <defs>
          <path
            id="wave-path"
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
          />
        </defs>
        <g className="wave1">
          <use
            xlinkHref="#wave-path"
            x="50"
            y="3"
            fill="rgba(255,255,255, .1)"
          />
        </g>
        <g className="wave2">
          <use
            xlinkHref="#wave-path"
            x="50"
            y="0"
            fill="rgba(255,255,255, .2)"
          />
        </g>
        <g className="wave3">
          <use xlinkHref="#wave-path" x="50" y="9" fill="#fff" />
        </g>
      </svg> */}
     
    </section>
    

    // <div classNameName={`${styles.bgCover}`} style={{ color: "#062654" }}>
    //   <div classNameName="container my-5">
    //     <div style={{ marginTop: "0px", zIndex: "20" }}>
    //       <div classNameName={`${styles.Welcometo} `}>Welcome to</div>
    //       <div classNameName={`${styles.inspacco} `}>inspacco</div>
    //       <br />
    //       <h5 classNameName=" mb-4 mt-2" style={{ color: "white" }}>
    //         One Stop Solution for all facility maintenance
    //         <br /> and improvement requirements!
    //       </h5>
    //     </div>
    //     <Link href="/#EnquiryForm">
    //       <a>
    //         <Button
    //           variant="contained"
    //           style={{
    //             borderRadius: "17px",
    //             backgroundColor: "white",
    //             textTransform: "none",
    //             height: "40px",
    //             width: "130px",
    //           }}
    //           value="Get Quote"
    //         >
    //           <div classNameName={`${styles.GetQuote}`}>
    //             <div>Get Quote</div>
    //           </div>
    //         </Button>

    //         {/* <div classNameName={`${styles.Rectanglelo} `} style={{ cursor: "pointer" }}>
    //       <div classNameName="m-4 pt-2">
    //           <div classNameName={`${styles.GetQuote}`}>

    //           <div >
    //             Get Quote
    //           </div>

    //         </div>
    //       </div>
    //     </div> */}
    //       </a>
    //     </Link>

    //     <div style={{ height: "120px" }}></div>
    //     {/* <div>
    //       <a
    //         href="#"
    //         role="button"
    //         classNameName="btn btn-primary px-5 font-weight-bold"
    //         >
    //         Get Quote
    //       </a>
    //     </div> */}
    //   </div>
    // </div>
  );
};

export default Banner;
