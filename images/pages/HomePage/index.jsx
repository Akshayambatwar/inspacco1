import React, { lazy, Suspense } from "react";
// import { Helmet } from "react-helmet";
import Banner from "../../components/banner";
import TopCategories from "../../components/categories/categories1";
// import Packages from "../../components/packages";
import OfferBanner from "../../components/offerBanner";
// import Testimonial from "../../components/testimonial";
// import LogoSection from "../../components/clientsLogos";
// import SubCategory from "../../components/subcategories";
// import WhyInspacco from "../../components/whyInspacco";
// import EnquiryForm from "../../components/EnquiryForm";
import Header from "../../components/Header";
import WeServe from "./weServe";
import LazyLoader from "../../helpers/lazyLoader";

const Packages = lazy(() => import("../../components/packages"));
const Testimonial = lazy(() => import("../../components/testimonial"));
const WhyInspacco = lazy(() => import("../../components/whyInspacco"));
const EnquiryForm = lazy(() => import("../../components/EnquiryForm"));
const LogoSection = lazy(() => import("../../components/clientsLogos"));
const SubCategory = lazy(() => import("../../components/subcategories"));

const HomePage = ({ SEO }) => {
  return (
    <>
      {/* <Helmet>
        <title data-react-helmet="true">{SEO.title}</title>
        <meta name="description" content={SEO.description} />
      </Helmet> */}

      <Header />
      <Banner />
      <WhyInspacco />
      <TopCategories />
      <OfferBanner />
      <WeServe />
      <Suspense fallback={<LazyLoader />}>
        <Packages />
        <SubCategory />
        <LogoSection />
        <Testimonial />
        
        <EnquiryForm />
      </Suspense>
    </>
  );
};

export default HomePage;
