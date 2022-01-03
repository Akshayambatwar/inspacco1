import React from 'react'
import Header from "../components/commons/Header/newNav";
import Footer from "../components/commons/footer/footer";
import bom from "../pages/clientimg/maharashtra.png"
import cboi from "../pages/clientimg/centralbank.png"
import sbank from "../pages/clientimg/syn.png"
import bob from "../pages/clientimg/bankbaroda.png"
import boi from "../pages/clientimg/india.png"
import retail from "../pages/clientimg/retail.png"
import pnb from "../pages/clientimg/pnb.png"
import sbi from "../pages/clientimg/state.png"
import cipla from "../pages/clientimg/cipla.png"
import indiabulls from "../pages/clientimg/indiabulls.png"
import rbi from "../pages/clientimg/reserve.png"
import canara from "../pages/clientimg/canara.png"
import dyaa from "../pages/clientimg/dyaa.png"
import sun from "../pages/clientimg/sun.png"
import nabard from "../pages/clientimg/nabard.png"
import vista from "../pages/clientimg/vista.png"
import moglix from "../pages/clientimg/Moglix.png"
import mindseed from "../pages/clientimg/mindseed.png"
import { useEffect } from 'react';
import aqua from "../images/clientLogos/Aqua-marina.png"
import costa from "../images/clientLogos/costa-blanca.png"
import clean from "../images/clientLogos/clean-green.png"
import nea from "../images/clientLogos/NEA.png"
import wave from "../images/clientLogos/The-wave.png"
import ndtower from "../images/clientLogos/ND-tower.png"
import terra from "../images/clientLogos/Terra.png"
// import './ourclient.css'
export default function ourClient() {
    useEffect(() => {
        document.title = "Our Clients ! Inspacco !"
    }, []);
    return (
        <div>
            <div className="sticky-top">
                <Header />
            </div>
            <br /><br /><br />
            <div className='container'>

                <h5 className='mt-2 ' style={{ textAlign: "center" }}>Our Society Clients</h5>
                <hr className="new5" />
                
                <div className='row mt-1'>
                    <div className='col-lg-1'></div>
                    <div className='col-lg-2 col-6'>
                        <div className="card society">
                            {/* <img src={ndtower}
                            style={{ height:"40%", width:"50%", marginLeft:"50px"}}
                        /> */}
                            <p style={{ textAlign: "center", fontWeight: "600", fontSize: "18px" }}>Rohan Madhuban</p>
                        </div>
                    </div>
                    <div className='col-lg-2 col-6'>
                        <div className="card society" >
                            {/* <img src={terra}
                            style={{ paddingBottom: "20px", paddingTop: "23px" }}
                        /> */}
                            <p style={{ textAlign: "center", fontWeight: "600", fontSize: "18px" }}>Rohan Seher</p>
                        </div>
                    </div>
                    <div className='col-lg-2 col-6'>
                        <div className="card society" >
                            {/* <img src={clean}
                            style={{ height:"50%", width:"55%",marginLeft:"40px" }}
                        /> */}
                            <p style={{ textAlign: "center", fontWeight: "600", fontSize: "18px" }}>Vasant Vihar</p>
                        </div>
                    </div>
                    <div className='col-lg-2 col-6'>
                        <div className="card society" >
                            {/* <img src={nea}
                            style={{ height:"50%", width:"55%",marginLeft:"40px" }}
                        /> */}
                            <p style={{ textAlign: "center", fontWeight: "600", fontSize: "18px" }}>F Residency</p>
                        </div>
                    </div>
                    <div className='col-lg-2 col-6'>
                        <div className="card society" >
                            {/* <img src={wave}
                            style={{ height:"50%", width:"65%",marginLeft:"40px" }}
                        /> */}
                            <p style={{ textAlign: "center", fontWeight: "600", fontSize: "18px" }}>Kunal Aspire</p>
                        </div>
                    </div>
                    <div className='col-lg-1'></div>
                </div>

                <div className='row mt-1'>
                    <div className='col-lg-1'></div>
                    <div className='col-lg-2 col-6'>
                        <div className="card society">
                            {/* <img src={ndtower}
                            style={{ height:"40%", width:"50%", marginLeft:"50px"}}
                        /> */}
                            <p style={{ textAlign: "center", fontWeight: "600", fontSize: "18px" }}>Costa Blanca</p>
                        </div>
                    </div>
                    <div className='col-lg-2 col-6'>
                        <div className="card society" >
                            {/* <img src={terra}
                            style={{ paddingBottom: "20px", paddingTop: "23px" }}
                        /> */}
                            <p style={{ textAlign: "center", fontWeight: "600", fontSize: "18px" }}>Atlanta II</p>
                        </div>
                    </div>
                    <div className='col-lg-2 col-6'>
                        <div className="card society" >
                            {/* <img src={clean}
                            style={{ height:"50%", width:"55%",marginLeft:"40px" }}
                        /> */}
                            <p style={{ textAlign: "center", fontWeight: "600", fontSize: "18px" }}>Regency Cosmos</p>
                        </div>
                    </div>
                    <div className='col-lg-2 col-6'>
                        <div className="card society" >
                            {/* <img src={nea}
                            style={{ height:"50%", width:"55%",marginLeft:"40px" }}
                        /> */}
                            <p style={{ textAlign: "center", fontWeight: "600", fontSize: "18px" }}>Sukhwani Pacific</p>
                        </div>
                    </div>
                    <div className='col-lg-2 col-6'>
                        <div className="card society" >
                            {/* <img src={wave}
                            style={{ height:"50%", width:"65%",marginLeft:"40px" }}
                        /> */}
                            <p style={{ textAlign: "center", fontWeight: "600", fontSize: "18px" }}>Kumar Siddhachal</p>
                        </div>
                    </div>
                    <div className='col-lg-1'></div>
                </div>

                <div className='row mt-1'>
                    <div className='col-lg-1'></div>
                    <div className='col-lg-2 col-6'>
                        <div className="card society">
                            {/* <img src={ndtower}
                            style={{ height:"40%", width:"50%", marginLeft:"50px"}}
                        /> */}
                            <p style={{ textAlign: "center", fontWeight: "600", fontSize: "18px" }}>Kasturi Epitome</p>
                        </div>
                    </div>
                    <div className='col-lg-2 col-6'>
                        <div className="card society" >
                            {/* <img src={terra}
                            style={{ paddingBottom: "20px", paddingTop: "23px" }}
                        /> */}
                            <p style={{ textAlign: "center", fontWeight: "600", fontSize: "18px" }}>Kasturi Legacy</p>
                        </div>
                    </div>
                    <div className='col-lg-2 col-6'>
                        <div className="card society" >
                            {/* <img src={clean}
                            style={{ height:"50%", width:"55%",marginLeft:"40px" }}
                        /> */}
                            <p style={{ textAlign: "center", fontWeight: "600", fontSize: "18px" }}>Kasturi Balmoral</p>
                        </div>
                    </div>
                    <div className='col-lg-2 col-6'>
                        <div className="card society" >
                            {/* <img src={nea}
                            style={{ height:"50%", width:"55%",marginLeft:"40px" }}
                        /> */}
                            <p style={{ textAlign: "center", fontWeight: "600", fontSize: "18px" }}>Dreams Rhythm
</p>
                        </div>
                    </div>
                    <div className='col-lg-2 col-6'>
                        <div className="card society" >
                            {/* <img src={wave}
                            style={{ height:"50%", width:"65%",marginLeft:"40px" }}
                        /> */}
                            <p style={{ textAlign: "center", fontWeight: "600", fontSize: "18px" }}>Sayali Garden</p>
                        </div>
                    </div>
                    <div className='col-lg-1'></div>
                </div>


                <div className='row mt-1'>
                    <div className='col-lg-1'></div>
                    <div className='col-lg-2 col-6'>
                        <div className="card society">
                            {/* <img src={ndtower}
                            style={{ height:"40%", width:"50%", marginLeft:"50px"}}
                        /> */}
                            <p style={{ textAlign: "center", fontWeight: "600", fontSize: "18px" }}>Three Jewels</p>
                        </div>
                    </div>
                    <div className='col-lg-2 col-6'>
                        <div className="card society" >
                            {/* <img src={terra}
                            style={{ paddingBottom: "20px", paddingTop: "23px" }}
                        /> */}
                            <p style={{ textAlign: "center", fontWeight: "600", fontSize: "18px" }}>Silver Stone</p>
                        </div>
                    </div>
                    <div className='col-lg-2 col-6'>
                        <div className="card society" >
                            {/* <img src={clean}
                            style={{ height:"50%", width:"55%",marginLeft:"40px" }}
                        /> */}
                            <p style={{ textAlign: "center", fontWeight: "600", fontSize: "18px" }}>29 Gold Coast</p>
                        </div>
                    </div>
                    <div className='col-lg-2 col-6'>
                        <div className="card society" >
                            {/* <img src={nea}
                            style={{ height:"50%", width:"55%",marginLeft:"40px" }}
                        /> */}
                            <p style={{ textAlign: "center", fontWeight: "600", fontSize: "18px" }}>Kalpataru Regency</p>
                        </div>
                    </div>
                    <div className='col-lg-2 col-6'>
                        <div className="card society" >
                            {/* <img src={wave}
                            style={{ height:"50%", width:"65%",marginLeft:"40px" }}
                        /> */}
                            <p style={{ textAlign: "center", fontWeight: "600", fontSize: "18px" }}>Sun Sapphire</p>
                        </div>
                    </div>
                    <div className='col-lg-1'></div>
                </div>


                <hr />
                <h5 className='mt-4 ' style={{ textAlign: "center" }}>Our Corporate Clients</h5>
                <hr className="new5" />
                <div className='row'>
                    <div className='col-lg-1'></div>
                    <div className='col-lg-2 col-6'>
                        <div className="card corporate" style={{ backgroundColor: "#f8f8f8" }}>
                            <img src={rbi}
                            // style={{ paddingBottom: "20px", paddingTop: "23px" }}
                            />
                        </div>

                    </div>
                    <div className='col-lg-2 col-6'>
                        <div className="card corporate">
                            <img src={cboi}
                            // style={{ paddingBottom: "10px", paddingTop: "10px" }}
                            />
                        </div>
                    </div>
                    <div className='col-lg-2 col-6'>
                        <div className="card corporate">
                            <img src={sbank}
                            // style={{ paddingBottom: "10px", paddingTop: "10px" }}
                            />
                        </div>
                    </div>
                    <div className='col-lg-2 col-6'><div className="card corporate">
                        <img src={bob}
                        // style={{ paddingBottom: "19px", paddingTop: "19px" }}
                        />
                    </div>
                    </div>
                    <div className='col-lg-2 col-6'><div className="card corporate">
                        <img src={boi}

                        />
                    </div>
                    </div>
                    <div className='col-lg-1'></div>

                </div>
                <div className='row mt-1 '>
                    <div className='col-lg-1'></div>
                    <div className='col-lg-2 col-6'>
                        <div className="card corporate">
                            <img src={retail}
                                style={{ paddingBottom: "16px", paddingTop: "15px" }}
                            />
                        </div>
                    </div>
                    <div className='col-lg-2 col-6'>
                        <div className="card corporate">
                            <img src={pnb}
                                style={{ paddingBottom: "28px", paddingTop: "28px" }}
                            />
                        </div>
                    </div>
                    <div className='col-lg-2 col-6'>
                        <div className="card corporate">
                            <img src={sbi}
                            // style={{  marginTop:"-5px"}}
                            />
                        </div>
                    </div>
                    <div className='col-lg-2 col-6'><div className="card corporate">
                        <img src={cipla}
                        // style={{ paddingBottom: "5px", paddingTop: "5px" }}
                        />
                    </div>
                    </div>
                    <div className='col-lg-2 col-6'><div className="card corporate">
                        <img src={indiabulls}
                        // style={{ paddingBottom: "10px", paddingTop: "10px" }}
                        />
                    </div>
                    </div>
                    <div className='col-lg-1'></div>

                </div>
                <div className='row mt-1 '>
                    <div className='col-lg-1'></div>
                    <div className='col-lg-2 col-6'>
                        <div className="card corporate">
                            <img src={nabard}
                                style={{ width: "82px", marginLeft: "40px" }}

                            />
                        </div>
                    </div>
                    <div className='col-lg-2 col-6'>
                        <div className="card corporate">
                            <img src={canara}
                                style={{ paddingBottom: "20px", paddingTop: "20px" }}
                            />
                        </div>
                    </div>
                    <div className='col-lg-2 col-6'>
                        <div className="card corporate">
                            <img src={dyaa}
                                style={{ paddingBottom: "25px", paddingTop: "25px" }}
                            />
                        </div>
                    </div>
                    <div className='col-lg-2 col-6'><div className="card corporate">
                        <img src={sun}
                            style={{ paddingTop: "2px", width: "74px", marginLeft: '44px' }}

                        />
                    </div>
                    </div>
                    <div className='col-lg-2 col-6'>
                        <div className="card corporate">
                            <img src={bom}
                                style={{ paddingBottom: "16px", paddingTop: "16px" }}
                            />
                        </div>
                    </div>
                    <div className='col-lg-1'></div>

                </div>
                <div className='row mt-1 mb-5'>
                    <div className='col-lg-1'></div>
                    <div className='col-lg-2 col-6'>
                        <div className="card corporate">
                            <img src={vista}
                                style={{ width: "82px", marginLeft: "40px" }}

                            />
                        </div>
                    </div>
                    <div className='col-lg-2 col-6'>
                        <div className="card corporate">
                            <img src={moglix}
                                style={{ paddingBottom: "20px", paddingTop: "20px" }}
                            />
                        </div>
                    </div>
                    <div className='col-lg-2 col-6'>
                        <div className="card corporate">
                            <img src={mindseed}
                                style={{ paddingBottom: "25px", paddingTop: "25px" }}
                            />
                        </div>
                    </div>
                    {/* <div className='col-lg-2'><div className="card corporate">
                        <img src={sun}
                            style={{ paddingTop:"2px", width:"74px", marginLeft:'44px' }}
                            
                        />
                    </div>
                    </div> */}
                    {/* <div className='col-lg-2'>
                    <div className="card corporate">
                            <img src={bom}
                                style={{ paddingBottom: "16px", paddingTop: "16px" }}
                            />
                        </div>
                    </div> */}
                    <div className='col-lg-1'></div>

                </div>
            </div>

            <Footer />
        </div>
    )
}


