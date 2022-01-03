import React from "react";
// import { Helmet } from "react-helmet";
import Header from "../../components/commons/Header/newNav";
import Breadcrumb from "../../components/breadcrumb/breadcrumb";
import FAQs from "../../components/FAQs";
import LeftSideData from "./leftSideData";
import ImageGalleryForInspacco from "./imageGallary";
import ProductPricing from "./ProductPricing";
import ProductBooking from "./productBooking";
import DeliveryLogos from "./deliveryLogos";

const ProductPage = ({
  name,
  description,
  Pricing,
  information,
  faqs,
  SEO,
  images,
}) => {
  // let name = "Product Name"
  return (
    <>
      {/* <Helmet>
        <title>{SEO.title}</title>
        <meta name="description" content={SEO.description} />
      </Helmet> */}
      <div className="sticky-top">
        <Header />
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />

      <div className="mx-auto" style={{ width: "80%" }}>
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-6">
            <Breadcrumb name={name} />
            <br />
            <h2 className="font-weight-bold mb-3" style={{ color: "#0049b2" }}>
              {name}
            </h2>
            <LeftSideData description={description} information={information} />
          </div>
          <div className="col-lg-2"></div>
          <div className="col-lg-4 col-md-12 col-sm-12">
            {/* 1234567890 */}
            {/* For image gallery */}
            <ImageGalleryForInspacco images={images} />
            <ProductPricing Pricing={Pricing} />
            <ProductBooking productName={name} />
            <DeliveryLogos />
          </div>
        </div>
      </div>
      <FAQs faqs={faqs} />
      {/* </div> */}
    </>
  );
};

export default ProductPage;
