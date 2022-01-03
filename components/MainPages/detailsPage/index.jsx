import React from "react";
// import { Helmet } from "react-helmet";
import Head from "next/head";

import Header from "../../commons/Header/newNav";
import DetailBanner from "./banner";
import FAQs from "../../FAQs";
import StepForm from "./stepsform";
import SideData from "./sideData";

// import { render } from "@testing-library/react";
import PageNotFound from "../../NotFound";

// import { render } from "@testing-library/react";
import { backendRoute } from "../../../helpers/backendRoute";
import Footer from "../../commons/footer/footer";

class DetailsPage extends React.Component {
  name;
  bredCrumb;
  bannerImage;
  bannerDetails;
  qualityAssurance;
  inclusions;
  faqs;
  stepData;
  today;
  state = {
    loading: false,
    pageNotFound: false,
    today: "",
  };

  // componentDidMount() {
  //   this.setState({ loading: true });
  //   // name;
  //   // bredCrumb;
  //   // bannerImage;
  //   // bannerDetails;
  //   // qualityAssurance;
  //   // inclusions;
  //   // faqs;
  //   // stepData;
  //   // state = {
  //   //   loading: true,
  //   //   pageNotFound: false,
  //   // };

  //   // console.log(window.location.href);
  //   let url = window.location.href;
  //   let splitdata = url.split("/");

  //   let link =
  //     splitdata[splitdata.length - 2] + "/" + splitdata[splitdata.length - 1];
  //   // console.log(backendRoute + "/api/detailspage-data/" + link)
  //   fetch(backendRoute + "/api/detailspage-data/" + link)
  //     .then((res) => res.json())
  //     .then((res) => {
  //       // console.log(res)
  //       // let data = res.data;
  //       // console.log(data);
  //       // this.name = data.name;
  //       // this.bredCrumb = data.bredCrumb;
  //       // this.bannerImage = data.bannerImage;
  //       // this.bannerDetails = data.bannerDetails;
  //       // this.qualityAssurance = data.qualityAssurance;
  //       // this.inclusions = data.inclusions;
  //       // this.faqs = data.faqs;
  //       // this.stepData = data.stepData;
  //       // console.log(res.time)
  //       this.today = res.time;
  //       // let dateTime = new Date(res.time);
  //       // var dd = String(dateTime.getDate()).padStart(2, '0');
  //       // var mm = String(dateTime.getMonth() + 1).padStart(2, '0'); //January is 0!
  //       // var yyyy = dateTime.getFullYear();

  //       // let today = dd + '/' + mm + '/' + yyyy;
  //       // // document.write(today);
  //       // // const parts = dateTime.split(/[- :]/);
  //       // // const wanted = `${parts[2]}/${parts[1]}/${parts[0]} ${parts[3]}:${parts[4]}`;
  //       // console.log(today);
  //       // this.setState({
  //       //   today : date
  //       // })

  //       // console.log(this.name,this.bredCrumb,this.bannerImage, this.bannerDetails, this.qualityAssurance, this.inclusions, this.faqs)
  //       this.setState({ loading: false });
  //     })
  //     .catch((e) => {
  //       console.log(e);
  //     });
  // }
  render() {
    return (
      <>
        <Head>
          <title>{this.props.SEO.title}</title>
          <meta
            name="description"
            content={this.props.SEO.description}
            data-react-helmet="true"
          />
        </Head>
        <div className="sticky-top">
          <Header />
        </div>
        <br />
        <br />
        <br />
        {/* <br />
        <br /> */}
        {this.state.loading === true ? (
          <>
            <div>
              <img
                src={require("../../../images/logowithtext.png")}
                alt="inspacco logo"
                className="imageSpin my-5 py-5"
                style={{
                  display: "block",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
                width="15%"
              />
            </div>
          </>
        ) : // <PageNotFound/>
        this.state.pageNotFound === true ? (
          <PageNotFound />
        ) : (
          <>
            <DetailBanner
              name={this.props.name}
              bannerDetails={this.props.bannerDetails}
              bannerImage={this.props.bannerImage}
              bredCrumb={this.props.bredCrumb}
            />

            <div className="row mx-auto" style={{ width: "86%" }}>
              <div className="col-md-5 col-sm-12">
                <SideData
                  qualityAssurance={this.props.qualityAssurance}
                  // inclusions={this.props.inclusions}
                />
              </div>
              <div className="col-md-7 col-sm-12">
                <StepForm
                  name={this.props.name}
                  stepData={this.props.stepData}
                />
              </div>
            </div>
            <FAQs faqs={this.props.faqs} />
            <Footer />
          </>
        )}
      </>
    );
  }
}

export default DetailsPage;
