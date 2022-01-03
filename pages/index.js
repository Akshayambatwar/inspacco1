import Head from "next/head";
import StartToTop from "../helpers/startToTop";
import HomePage from "../components/MainPages/HomePage";
import Footer from "../components/commons/footer/footer";
// import Blog from '../components/Blog';
import BackToTop from "../components/backToTop";
import Whatsapp from "../components/Whatsapp";
// import ListingPage from "../pages/listingPage";
// import { listingPages } from "../pages/listingPage/data";
// import { ProductPages } from "../pages/productPage/data";
// import { detailSEO } from "../helpers/detailSEO";
// import DetailsPage from "../pages/detailsPage";
// import PrivacyPolicy from "../pages/OtherPages/PrivacyPolicy";
// import TermsOfUse from "../pages/OtherPages/TermsOfUse";
// import AboutUs from "../pages/OtherPages/AboutUs";
// import ProductPage from "../pages/productPage";
// import PartnerWithUs from "../pages/OtherPages/partnerWithUs";
// import ContactUs from "../pages/OtherPages/ContactUs";

const SEO = {
    title:
        "INSPACCO - One stop solution for Facility Improvement and Maintenance services for Residential Societies Commercial Spaces in India",
    description:
        "Inspacco.com is a one stop solution for all your facility improvement and maintenance services. Housekeeping , Cleaning, Sanitization, Security , Disinfection, Waterproofing, Pest Control, Repair and Maintenance services by expert and verified professionals for Homes, Residential Societies, Commercial Spaces and Corporates. No need to manage multiple vendors",
};

function App() {
    return (
        // <Router>
        <>
            <Head>
                <title data-react-helmet="true">{SEO.title}</title>
                <meta name="description" content={SEO.description} />

                <script
                    type="text/javascript"
                    src="jquery-3.5.1.slim.min.js"
                ></script>
            </Head>
            <StartToTop />
            <HomePage SEO={SEO} />

           
            <Footer />
            <Whatsapp/>
            <BackToTop />
            
            {/* </Router> */}
            <style jsx global>{`
                html,
                body {
                    padding: 0;
                    margin: 0;
                    font-family: Montserrat;
                }

                * {
                    box-sizing: border-box;
                }
            `}</style>
        </>
    );
}

export default App;
