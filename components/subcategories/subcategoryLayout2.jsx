import React,{useEffect} from "react";
// import "./subcategory2.css";
// import { Link } from "react-router-dom";
import Link from 'next/link'

const SubCategoryLayout2 = ({ categoryTitle, SubCategories }) => {

  useEffect(() => {
    document.title = 'Services'
}, []);
    return (

        <div className="container-fluid"style={{ backgroundColor: "white" }} >
      
      <div className="py-4  subcategories2" style={{
        //  boxShadow: "10px 25px 26px 30px rgb(0 0 0 / 8%)",
        fontFamily: "'Nunito', sans-serif"
      }}>
        

        <div className="w-75 mx-auto">

          <h3 className="font-weight-bold mb-5" style={{ color: "black", textAlign: "center", fontSize:"24px"}}>{categoryTitle}</h3>
          {/* <div className="Rectangle-Copy-14 mb-4"></div> */}

          <div className="row"  >

            {SubCategories.map((subcategory, index) => (
              

              
              <div className="col-lg-4 col-12 " key={index} style={{borderLeft:"1px dotted #D3D3D3"}} >


                <div
                  className="subcategory-card2 mb-4 "
                  style={{
                   
                    
                    // border:"2px solid white",
                    width: "270px",
                    height: "67px",
                    justifyContent: "center",
                    
                    
                  }}
                >
                  <Link href={'/services' + subcategory.route}>
                    
                    <a style={{ textDecoration: "none"}}>
                      <div style={{borderRadius:"20px"}}>
                      <img
                        className=" img-fluid   "
                        src={subcategory.path}
                        alt="Inspacco Services"

                        loading="lazy" style={{ width: "25%", height: '25%', backgroundColor:"#F0F0F0", float:"left", padding:"10px", borderRadius:"15px" }}
                      />
                      </div>
                      <div>
                      <h6
                        className="cate"
                        style={{ color: "black", textDecoration: "none", lineHeight: "67px", fontSize:"17px" }}
                      >
                        {subcategory.name}
                      </h6>
                      </div>
                        
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
    


    



  );
};

export default SubCategoryLayout2;
