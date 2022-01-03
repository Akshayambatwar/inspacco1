import '../styles/globals.css';
import '../styles/category1.css';
import '../styles/faqs.scss'
import '../styles/footer.css'
import '../styles/logoSection.css'
import '../styles/navbar.css'
import '../styles/offerBanner.css'
import '../styles/packages.css'
import '../styles/quantity.css'
import '../styles/sidedata.css'
import '../styles/subcategory.css'
import '../styles/testimonial.css'
import '../styles/weServe.css'
import '../styles/client.css'
import '../styles/whyInspacco.css'
import '../styles/subcategory2.css'
import '../styles/ourTeam.css'
import '../styles/ourclient.css'
import '../styles/banner.css'
import "react-image-gallery/styles/css/image-gallery.css"
import "bootstrap/dist/css/bootstrap.min.css";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

library.add(fab, far, fas)

function MyApp({ Component, pageProps }) {
    return <Component {...pageProps }
    />
}

export default MyApp