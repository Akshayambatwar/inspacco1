import React from "react";
// import { Helmet } from "react-helmet";
import ListingBanner from "./listingBanner";
import SubCategoryLayout2 from "../../subcategories/subcategoryLayout2";
import OurAssurance from "./ourAssurance";
import RecommendedServices from "./recommendedServices";
import Header from "../../commons/Header/newNav";
import EnquiryForm from "../../EnquiryForm";
import Footer from "../../commons/footer/footer";
import Head from 'next/head'

const ListingPage = ({
  SEO,
  name,
  recommendedList,
  subcategories,
  description,
  ourAssuranceList,
  bannerImage,
}) => {
  return (
    <>
      <Head>
        <title>{SEO.title}</title>
        <meta name="description" content={SEO.description} />
      </Head>
      <div className="sticky-top">
        <Header />
      </div>
      <br />
      <br />
      <br />
      <ListingBanner
        name={name}
        description={description}
        bannerImage={bannerImage}
      />
      <br />
      <SubCategoryLayout2 categoryTitle={name} SubCategories={subcategories} />
      <OurAssurance ourAssuranceList={ourAssuranceList} />
      {/* <RecommendedServices recommendationList={recommendedList} /> */}
      <EnquiryForm />
      <Footer/>
    </>
  );
};

export default ListingPage;
