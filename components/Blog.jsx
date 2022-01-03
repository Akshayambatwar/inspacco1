import React from 'react'
// import '../styles/Blog.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
function Blog() {





    return (
        <div >
            <div className="container mt-5 mb-4 " style={{
                background: "rgb(149,193,235)",
                background: "linear-gradient(90deg, rgba(149,193,235,1) 17%, rgba(255,255,255,1) 72%)"
            }}>

                <div className="row blog2 " style={{ boxShadow: "2px 10px 10px 10px #D0D0D0" }}>
                    <div className="col-lg-6 col-md-6 col-12">

                        <Carousel autoPlay width="auto" className='mt-2 mb-5' >
                            <div>
                                <img alt="Swimming Pool Services" src="https://media-exp1.licdn.com/dms/image/C4E12AQGcCnxUBOFF7w/article-cover_image-shrink_720_1280/0/1632209115316?e=1645056000&v=beta&t=Sm9YJxZ0Pt48C1bg-xcwsD-lAySr2U0K_KvRFGB6jfU" />
                                <p className="legend" ><a style={{ textDecoration: "none", color: "white" }} href='https://www.linkedin.com/pulse/cleaning-maintaining-swimming-pool-your-society-inspacco?trk=organization-update-content_share-article' target="_blank">Cleaning and maintaining swimming pool in your society. </a></p>
                            </div>
                            <div>
                                <img alt="Pest Control" src="https://media-exp1.licdn.com/dms/image/C5612AQFE5EU84BL-ug/article-cover_image-shrink_600_2000/0/1630137116346?e=1645056000&v=beta&t=NmpZGoeoqV4TSQ2Kw3JjBdjs1141B1K2zklJARp58t8" />
                                <p className="legend"><a style={{ textDecoration: "none", color: "white" }} href='https://www.linkedin.com/pulse/8-tips-keep-pests-out-your-society-inspacco?trk=organization-update-content_share-article' target="_blank">8 tips to keep pests out of your society.</a></p>
                            </div>
                            <div>
                                <img alt="Gradening" src="https://media-exp1.licdn.com/dms/image/C5612AQHk7gzeycXfzg/article-cover_image-shrink_720_1280/0/1629451333568?e=1645056000&v=beta&t=kNPo468BiFinS9hE1dBdIcyDat0YzYd92iaeb3K0O20" />
                                <p className="legend"><a style={{ textDecoration: "none", color: "white" }} href='https://www.linkedin.com/pulse/how-you-can-grow-more-less-space-vertical-gardening-inspacco?trk=organization-update-content_share-article' target="_blank">How you can grow more in less space with vertical gardening.</a></p>
                            </div>
                            <div>
                                <img alt="Ev Charging Station" src="https://media-exp1.licdn.com/dms/image/C4E12AQHkm7Ys3Q7rWA/article-cover_image-shrink_720_1280/0/1632385182851?e=1645056000&v=beta&t=HU9YTWgOd7pCooch5MtrtWjb20hGxeASAAvd41ChUvM" />
                                <p className="legend"><a style={{ textDecoration: "none", color: "white" }} href='https://www.linkedin.com/pulse/electric-vehicle-charging-stations-housing-societies-building-?trk=organization-update-content_share-article' target="_blank">Electric Vehicle Charging Stations in Housing Societies- Building a futuristic infrastructure with inspacco</a></p>
                            </div>

                        </Carousel>

                    </div>
                    <div className="col-lg-6 col-md-6 col-12 mt-2 " >
                        <h5 style={{ textAlign: "center", fontSize: "25px", marginBottom: "30px", fontWeight: "700" }}>Our Expertise</h5>

                        <div className="row mb-3 " style={{ textAlign: "center" }} >
                            <div className="col-lg-3 col-md-3 col-sm-3 col-3 box1">
                                <img
                                    src={require("../images/Experts/New14.png")}
                                    alt="Realtionship Manager"
                                    width="60px"
                                    height="60px"
                                    loading="lazy"
                                    className="mb-1"
                                />
                                <p style={{ fontSize: "10px", fontWeight: "600" }}>Relationship Manager</p>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-3 col-3 box1">
                                <img
                                    src={require("../images/Experts/New15.png")}
                                    alt="Regular Visits"
                                    width="60px"
                                    height="60px"
                                    loading="lazy"
                                    className="mb-1"

                                />
                                <p style={{ fontSize: "10px", fontWeight: "600" }}>Regular Visits</p>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-3 col-3 box1">
                                <img
                                    src={require("../images/Experts/New11.png")}
                                    alt="Inspection"
                                    width="60px"
                                    height="60px"
                                    loading="lazy"
                                    className="mb-1"
                                />
                                <p style={{ fontSize: "10px", fontWeight: "600" }}>Quality Checks</p>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-3 col-3 box1">
                                <img
                                    src={require("../images/Experts/New16.png")}
                                    alt="Escalation Matrix"
                                    width="60px"
                                    height="60px"
                                    loading="lazy"
                                    className="mb-1"
                                />
                                <p style={{ fontSize: "10px", fontWeight: "600" }}>Escalation Matrix</p>
                            </div>
                            
                           


                        </div>


                        <div className="row" style={{ textAlign: "center" }}>
                            <div className="col-lg-1"></div>
                            <div className="col-lg-3 col-md-3 col-sm-3 col-3 box1">
                                <img
                                    src={require("../images/Experts/New12.png")}
                                    alt="Gardening Expert"
                                    width="60px"
                                    height="60px"
                                    loading="lazy"
                                    className="mb-1"
                                />
                                <p style={{ fontSize: "10px", fontWeight: "600" }}>Gardening Expert</p>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-3 col-3 box1">
                                <img
                                    src={require("../images/Experts/New13.png")}
                                    alt="Night QTR Team"
                                    width="60px"
                                    height="60px"
                                    loading="lazy"
                                    className="mb-1"
                                />
                                <p style={{ fontSize: "10px", fontWeight: "600" }}>Night QTR Team</p>
                            </div>
                            
                            <div className="col-lg-3 col-md-3 col-sm-3 col-3 box1">
                                <img
                                    src={require("../images/Experts/New17.png")}
                                    alt="Monthly Presentation"
                                    width="60px"
                                    height="60px"
                                    loading="lazy"
                                    className="mb-1"
                                />
                                <p style={{ fontSize: "10px", fontWeight: "600" }}>Monthly Presentation</p>
                            </div>
                            <div className="col-lg-1"></div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Blog
