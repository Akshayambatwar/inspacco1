import React, { useEffect } from 'react'
import Header from "../components/commons/Header/newNav";
import Footer from "../components/commons/footer/footer";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';
import team from "../pages/teamImg/team.jpg"
import team2 from "../pages/teamImg/team2.jpg"
import team3 from "../pages/teamImg/team3.jpg"
import sales from "../pages/teamImg/sales.jpg"
import management from "../pages/teamImg/management.jpg"
import EnquiryForm from "../components/EnquiryForm/index";

// import "./ourTeam1.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import linkedin from "./linkedin.svg"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import founder from "../pages/teamImg/founder.jpg"
import coFounder from "../pages/teamImg/co-founder.jpg"
import sanjay from "../pages/teamImg/sanjay.jpg"
import pravin from "../pages/teamImg/pravin.jpg"
import keshav from "../pages/teamImg/keshav.jpg"
import harshit from "../pages/teamImg/harshit1.jpg"
import tejas from "../pages/teamImg/tejas.jpg"
// import Slider from '../pages/Slider';
function ourTeam() {
    useEffect(() => {
        document.title = "Our Team ! Inspacco !"
    }, []);

  
    
   
    return (
        
        <div>
            <div className="sticky-top">
                <Header />
            </div>
            <br /><br />

            <div className="container-fluid">
                {/* <div className="top d-flex">
                    <div className="top-content">
                        <h1 className="invers">Meet Our Team</h1>
                        <FontAwesomeIcon icon={faQuoteLeft} style={{ color: 'grey', marginLeft: 30, fontSize: 40 }}></FontAwesomeIcon>
                        <p style={{ fontSize: 15, color: "white", textAlign: "center", marginLeft: 430, marginTop: 5 }}>The strength of the team is each individual member.<br /> The strength of each member is the team.</p>
                        <FontAwesomeIcon icon={faQuoteRight} style={{ color: 'grey', marginLeft: 750, marginTop: -5, fontSize: 40 }}></FontAwesomeIcon> */}
                {/* <p style={{fontSize:15,color:"white",textAlign:"center",marginLeft:400}}>Our company is dynamic, creative, and diverse,<br/> with people from different cities and national partners.</p> */}

                {/* </div>
                </div> */}
                <div className="row top">
                    <div className='col-lg-12'>
                        <h1 className="invers">Meet Our Team</h1>


                        <p style={{ fontSize: "16px", color: "white", textAlign: "center", marginTop: 5 }}><FontAwesomeIcon icon={faQuoteLeft} style={{ color: 'grey', fontSize: 40 }}></FontAwesomeIcon>&nbsp;&nbsp;&nbsp; The strength of the team is each individual member.<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; The strength of each member is the team. &nbsp;&nbsp;&nbsp;<FontAwesomeIcon icon={faQuoteRight} style={{ color: 'grey', fontSize: 40 }}></FontAwesomeIcon></p>

                    </div>
                </div>

                {/* <div className="row" id="leadership">
                    <div className="col-sm col-md-6">
                        <div className="display1">
                            <div className="card" id="c1">
                                <div className="img-box">
                                    <img src={founder} />
                                </div>
                                <div className="content">
                                    <div className="details">
                                        <h2>Sanket Nerker<br />
                                            <span>Founder</span><br />
                                        </h2>
                                        <ul className="sci">
                                            <li><a href="#"><img src={linkedin}></img></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm col-md-6">
                        <div className="display">
                            <div className="card" id="c1">
                                <div className="img-box">
                                    <img src={coFounder} />
                                </div>
                                <div className="content">
                                    <div className="details">
                                        <h2>Paresh Kotker<br />
                                            <span>Co-founder</span>
                                        </h2>
                                        <ul className="sci">
                                            <li><a href="#"><img src={linkedin}></img></a></li>
                                        </ul>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}



                <div className='row' id="leadership">
                    <div className='col-lg-6 col-sm col-md-6'>
                        <div className="display1">
                            <div className="card" id="c1">
                                <div className="img-box">
                                    <img src={founder} alt='sanket Nerkar' />
                                </div>
                                <div className="content" style={{marginTop:"40px"}}> 
                                    <div className="details">
                                        <h2>Sanket Nerker<br />
                                            <span>Founder</span><br />
                                        </h2>
                                        <ul className="sci">
                                            <li><a href="https://in.linkedin.com/in/sanket-nerkar-8947a916" target='_blank'><FontAwesomeIcon icon={faLinkedin} style={{ marginLeft: "40%", fontSize: 35, marginBottom: "54px" }} ></FontAwesomeIcon></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-6 col-sm col-md-6'>
                        <div className="display1">
                            <div className="card" id="c1">
                                <div className="img-box">
                                    <img src={coFounder} alt='Paresh Kotkar ' />
                                </div>
                                <div className="content " style={{marginTop:"40px"}}>
                                    <div className="details">
                                        <h2>Paresh Kotker<br />
                                            <span>Co-founder</span>
                                        </h2>
                                        <ul className="sci">
                                            <li><a href="https://in.linkedin.com/in/pareshkotkar" target='_blank'><FontAwesomeIcon icon={faLinkedin} style={{ marginLeft: "40%", fontSize: 35, marginBottom: "54px" }} ></FontAwesomeIcon></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div></div>
                </div>

                {/* <div className="row " >
                    <div className="col-sm col-md-1"></div>

                    <div className="col-sm col-md-2">
                        <div className="card" id="teams" style={{ width: "10rem", height: "15rem" }}>
                            <figure className="hover-box" >
                                <img src={harshit} alt="sq-sample14" />

                            </figure>
                            <div className="card-body">
                                <h5 className="card-title" id="member-name">Harshit Bajaj</h5>
                                <p className="card-text" id="member-desc">Strategic Planning</p>
                                <a href="">  <FontAwesomeIcon icon={faLinkedin} style={{ marginLeft: -12, fontSize: 25, marginBottom: "54px" }} ></FontAwesomeIcon> </a>

                            </div>
                        </div>
                    </div>


                    <div className="col-sm col-md-2">
                        <div className="card" id="teams" style={{ width: "10rem", height: "15rem" }}>
                            <figure className="hover-box">
                                <img src={keshav} alt="sq-sample14" />

                            </figure>
                            <div className="card-body">
                                <h5 className="card-title" id="member-name">Keshav Kumar</h5>
                                <p className="card-text" id="member-desc">Operations</p>
                                <a href="">  <FontAwesomeIcon icon={faLinkedin} style={{ marginLeft: -12, fontSize: 25, marginBottom: "54px" }} ></FontAwesomeIcon> </a>
                            </div>
                        </div>
                    </div>





                    <div className="col-sm col-md-2">
                        <div className="card" id="teams" style={{ width: "10rem", height: "15rem" }}>
                            <figure className="hover-box">
                                <img src={sanjay} alt="sq-sample14" />

                            </figure>
                            <div className="card-body">
                                <h5 className="card-title" id="member-name">Sanjay Singh</h5>
                                <p className="card-text" id="member-desc">Sales</p>
                                <a href="">  <FontAwesomeIcon icon={faLinkedin} style={{ marginLeft: -12, fontSize: 25, marginBottom: "54px" }} ></FontAwesomeIcon> </a>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm col-md-2">
                        <div className="card" id="teams" style={{ width: "10rem", height: "15rem" }}>
                            <figure className="hover-box">
                                <img src={tejas} alt="sq-sample14" />

                            </figure>
                            <div className="card-body">
                                <h5 className="card-title" id="member-name">Tejas Kothawade</h5>
                                <p className="card-text" id="member-desc">Corporate Sales</p>
                                <a href="">  <FontAwesomeIcon icon={faLinkedin} style={{ marginLeft: -12, fontSize: 25, marginBottom: "54px" }} ></FontAwesomeIcon> </a>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm col-md-2">
                        <div className="card" id="teams" style={{ width: "10rem", height: "15rem" }}>
                            <figure className="hover-box">
                                <img src={pravin} alt="sq-sample14" />

                            </figure>
                            <div className="card-body">
                                <h5 className="card-title" id="member-name">Pravin Shinde</h5>
                                <p className="card-text" id="member-desc">Customer Relations</p>
                                <a href="">  <FontAwesomeIcon icon={faLinkedin} style={{ marginLeft: -12, fontSize: 25, marginBottom: "54px" }} ></FontAwesomeIcon> </a>
                            </div>
                        </div>
                    </div>
                </div> */}
                {/* <br /><br />
                <div className="col-sm col-md-1"></div> */}


                {/* <div>
                        <Slider />
                    </div> */}

                <div className='row mb-3'>
                    <div className='col-lg-1'></div>
                    <div className='col-lg-2'><div className="card" id="teams" style={{ width: "14rem", height: "19rem" }}>
                        <figure className="hover-box">
                            <img src={sanjay} alt="Sanjay Singh" />

                        </figure>
                        <div className="card-body">
                            <h5 className="card-title" >Sanjay Singh</h5>
                            <p className="card-text" >Sales</p>
                            
                        </div>
                    </div></div>
                    <div className='col-lg-2'>
                        <div className="card" id="teams" style={{ width: "14rem", height: "19rem" }}>
                            <figure className="hover-box">
                                <img src={pravin} alt="Pravin Shinde"/>

                            </figure>
                            <div className="card-body">
                                <h5 className="card-title">Pravin Shinde</h5>
                                <p className="card-text" >Customer Relations</p>
                                
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-2'>
                        <div className="card" id="teams" style={{ width: "14rem", height: "19rem" }}>
                            <figure className="hover-box">
                                <img src={keshav} alt="Keshav Kumar" />

                            </figure>
                            <div className="card-body">
                                <h5 className="card-title" >Keshav Kumar</h5>
                                <p className="card-text" >Operations</p>
                                
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-2 '>
                        <div className="card" id="teams" style={{ width: "14rem", height: "19rem" }}>
                            <figure className="hover-box" >
                                <img src={harshit} alt="Harshit Bajaj" />

                            </figure>
                            <div className="card-body">
                                <h5 className="card-title" >Harshit Bajaj</h5>
                                <p className="card-text" >Strategy</p>
                               

                            </div>
                        </div>
                    </div>
                    
                   
                    <div className='col-lg-2'>
                        <div className="card" id="teams" style={{ width: "14rem", height: "19rem" }}>
                            <figure className="hover-box">
                                <img src={tejas} alt="Tejas Kothawade" />

                            </figure>
                            <div className="card-body">
                                <h5 className="card-title" >Tejas Kothawade</h5>
                                <p className="card-text">Corporate Sales</p>
                                
                            </div>
                        </div>
                    </div>
                    
                    <div className='col-lg-1'></div>
                </div>



            </div>
            {/* <Slider /> */}

            <div className='container' >
               
                {/* <Carousel autoPlay  >
                <div className="row col-lg-12 col-md-12 col-12" id="core-team">
                    <div className="c-hero ">
                        <div className="c-hero__background-wrapper">
                            <img src={team} alt="" className="c-hero__background" />
                        </div>

                        <img src={team} alt="" className="c-hero__image " />

                    </div>
                </div>
                <div className="row" id="core-team">
                    <div className="c-hero">
                        <div className="c-hero__background-wrapper">
                            <img src={team2} alt="" className="c-hero__background" />
                        </div>

                        <img src={team2} alt="" className="c-hero__image" />

                    </div>
                </div>
                <div className="row" id="core-team">
                    <div className="c-hero">
                        <div className="c-hero__background-wrapper">
                            <img src={team3} alt="" className="c-hero__background" />
                        </div>

                        <img src={team3} alt="" className="c-hero__image" />

                    </div>
                </div>
                <div className="row" id="core-team">
                    <div className="c-hero">
                        <div className="c-hero__background-wrapper">
                            <img src={management} alt="" className="c-hero__background" />
                        </div>

                        <img src={management} alt="" className="c-hero__image" />

                    </div>
                </div>
                
                <div className="row" id="core-team">
                    <div className="c-hero">
                        <div className="c-hero__background-wrapper">
                            <img src={sales} alt="" className="c-hero__background" />
                        </div>

                        <img src={sales} alt="" className="c-hero__image" />

                    </div>
                </div>

                </Carousel> */}

                





                </div>
           
            {/* <div data-mc-src="1747f6cf-3266-4b3e-8127-e70fc7d25114#instagram"></div> */}
            

            {/* <script
                src="https://cdn2.woxo.tech/a.js#61b98f84e6148a00161ab659"
                async data-usrc>
            </script> */}
            <Footer />
        </div >
    )
}

export default ourTeam
