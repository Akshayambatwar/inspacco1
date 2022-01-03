import React from 'react';
import Header from "../components/commons/Header/newNav";
import Footer from "../components/commons/footer/footer";
import Head from 'next/head';

import EnquiryForm from "../components/EnquiryForm/index";
// import NumberSection from "../../components/whyInspacco/numberSection";

const AboutUs = () => {

    return (
        <>
            <div className="sticky-top">
                <Header />
            </div>
            <br /><br /><br /><br /><br />
            <div className="w-75 my-5 mx-auto">
                <h3 className="font-weight-bold mb-3"> About Us </h3>
                <div className="Rectangle-Copy-14 mb-4"></div>
                <h6>
                    Inspacco was founded in 2019 and is led by IIM Alumni and Armed Forces professionals to provide affordable improvement and maintenance services.
                    We are one stop solution for all residential, commercial and industrial establishments. We gained trust of more than 100+ large customers in the span of one year.
            </h6>
                <br /><br />
                <h3 className="font-weight-bold mb-3"> Our Mission </h3>
                <div className="Rectangle-Copy-14 mb-4"></div>
                <h6>
                    Our mission is to provide highest quality products and services in the improvement and maintenance portfolio for residential, commercial and industrial spaces at affordable prices
            </h6>
                <br /><br />
                <h3 className="font-weight-bold mb-3">Our Vision  </h3>
                <div className="Rectangle-Copy-14 mb-4"></div>
                <h6>
                    Our vision is to become a leader in the improvement and maintenance related services by delivering superior value to our customers
            </h6>

                <br /><br />
                <h3 className="font-weight-bold mb-3">Our Presence</h3>
                <div className="Rectangle-Copy-14 mb-4"></div>

                <div
                    className="why-inspacco-wrap"

                >
                    <div className="row text-center">
                        <div className="why-inspacco-box col-lg-3 col-md-3 col-sm-6">
                            <h5>
                                <b>10000+</b>
                            </h5>
                            <h6>Happy Clients</h6>
                        </div>
                        <div className="why-inspacco-box col-lg-3 col-md-3 col-sm-6">
                            <h5>
                                <b>500+</b>
                            </h5>
                            <h6>Verified Professionals</h6>
                        </div>
                        <div className="why-inspacco-box col-lg-3 col-md-3 col-sm-6">
                            <h5>
                                <b>24</b>
                            </h5>
                            <h6>States Covered</h6>
                        </div>
                        <div className="why-inspacco-box col-lg-3 col-md-3 col-sm-6">
                            <h5>
                                <b>160+</b>
                            </h5>
                            <h6>Cities Served</h6>
                        </div>
                    </div>
                </div>

            </div>
            {/* <NumberSection/> */}
            <EnquiryForm />
            <Footer />
        </>
    )
}

export default AboutUs;