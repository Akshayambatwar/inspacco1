// import { Helmet } from "react-helmet";
import Banner from "../../banner";
// import TopCategories from "../../categories/categories1";
// import Packages from "../../components/packages";
import OfferBanner from "../../offerBanner";
import Testimonial from "../../testimonial";
import LogoSection from "../../clientsLogos";
// import SubCategory from "../../components/subcategories";
// import WhyInspacco from "../../components/whyInspacco";
// import EnquiryForm from "../../components/EnquiryForm";
import Header from "../../Header";
import WeServe from "./weServe";
// import LazyLoader from "../../helpers/lazyLoader";
// import Blog from './components/Blog'
import Packages from "../../packages";
// import Testimonial from "../../components/testimonial";
import WhyInspacco from "../../whyInspacco";
import EnquiryForm from "../../EnquiryForm";
// import LogoSection from "../../components/clientsLogos";
import SubCategory from "../../subcategories";
import NumberSection from "./numberSection";
import Blog from '../../Blog';
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
            <SubCategory />
            
            {/* <NumberSection/> */}
            
            {/* <TopCategories /> */}
            {/* <WeServe /> */}
            <OfferBanner />
            <br />
            {/* <Suspense fallback={<LazyLoader />}> */}
            {/* <Packages /> */}
            
            {/* <LogoSection /> */}
            <Testimonial />

            <Blog/>
            <EnquiryForm />
            {/* </Suspense> */}
        </>
    );
};

export default HomePage;
