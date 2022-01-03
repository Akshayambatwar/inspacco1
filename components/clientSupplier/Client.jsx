import React from 'react'
import left from './left1.png'
import right from './right1.png'
import outline from './outline.png'
import NumberSection from "../MainPages/HomePage/numberSection"
import Ellip from './Ellip.png'
 const Para={
    width:"22px",
    color:"grey",
    height:"22px",
    color:"white"
 }





function Client() {
 




    return (
        <>
        <div className="container" style={{fontFamily: "'Nunito', sans-serif"}}  >

            <div className="row">
                <div className="col-lg-3 col-md-4">
                    
                    <img className="Client" src={left} alt="Inspacco Client" style={{ width: "95%", height: "90%", float: "left", margin: "30px 12px 3px 4px" }} />
                </div>
                <div className='col-lg-1 col-md-1'></div>
                <div className="col-lg-3 col-md-3 mt-5" >
                    <h6 className="mb-3  " style={{ fontSize: "1.75rem", fontWeight: "600", color:"black",marginTop:"50px"}} >Client</h6>
                    <div style={{ fontSize: "18px",color:"black" }}>
                        <p><img style={Para} src={outline}/>Digital on boarding</p>
                        <p><img style={Para} src={outline}/>Realtime attendance <span className='paragraph'>tracking</span> </p>
                        <p><img style={Para} src={outline}/>Realtime complaint <span className='paragraph'>management</span> </p>
                        <p><img style={Para} src={outline}/>Avail quotation digitally</p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-3 Menus " style={{marginTop:"90px"}}>
                    <div className=" Menus" style={{ fontSize: "18px",color:"black"}} >
                        <p><img style={Para} src={outline}/>Daily Activity Reports</p>
                        <p><img style={Para} src={outline}/>Staff Information</p>
                        <p><img style={Para} src={outline}/>Service order managemant</p>

                    </div>
                </div>
                <div className="col-lg-2 col-md-1">
                {/* <img src={Ellip} style={{marginLeft:"75px", position:"relative", opacity:"3"}} width="80%" height="80%" /> */}
                </div>
            </div>
            <hr/>
            
            <div className="row">
                <div className="col-lg-2 col-md-1">

                </div>
                <div className="col-lg-3 col-md-3">
                    <h6 className="mb-3" style={{ fontSize: "1.75rem", fontWeight: "600",color:"black" }} >Partner</h6>
                    <div style={{ fontSize: "18px",color:"black" }}>
                    <p><img style={Para} src={outline}/>Realtime attendance <span className='paragraph'>tracking of the staff</span> </p>
                        <p><img style={Para} src={outline}/>Receive new requirement <span className='paragraph'>through platform</span> </p>
                        <p><img style={Para} src={outline}/>Insurance to professional <span className='paragraph'>and its details</span> </p>

                    </div>
                </div>
                <div className="col-lg-3 col-md-3">
                    <div className="Menus2" style={{ fontSize: "18px",color:"black" }} >
                        <p><img style={Para} src={outline}/>Digital on boarding</p>
                        <p><img style={Para} src={outline}/>Realtime Complaint <span className='paragraph'>managemant</span> </p>
                        
                        <p><img style={Para} src={outline}/>An a option to provide the  <span className='paragraph' >quotation digitally</span> </p>
                    </div>
                </div>
                <div className='col-lg-1 col-md-1'></div>
                <div className="col-lg-3 col-md-4" >
                    <img src={right} className="supplier" alt="Inspacco Supplier" style={{ width: "95%", height: "96%", float: "right" }}  />

                </div>
            </div>
           
        </div>
        <NumberSection/>
        </>
    )
}

export default Client
