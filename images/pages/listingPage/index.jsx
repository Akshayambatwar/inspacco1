import React from "react";
// import { Helmet } from "react-helmet";
import ListingBanner from "./listingBanner";
import SubCategoryLayout from "../../components/subcategories/subcategoryLayout";
import OurAssurance from "./ourAssurance";
import RecommendedServices from "./recommendedServices";
import Header from "../../components/commons/Header/newNav";
import EnquiryForm from "../../components/EnquiryForm";

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
      <ListingBanner
        name={name}
        description={description}
        bannerImage={bannerImage}
      />
      <br />
      <SubCategoryLayout categoryTitle={name} SubCategories={subcategories} />
      <OurAssurance ourAssuranceList={ourAssuranceList} />
      <RecommendedServices recommendationList={recommendedList} />
      <EnquiryForm />
    </>
  );
};

export default ListingPage;
