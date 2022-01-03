import dynamic from "next/dynamic";
import { useEffect } from "react";

const OwlCarousel = dynamic(
    () => {
        return import("react-owl-carousel");
    },
    { ssr: false }
);

const data = [
    {
        name: "Aqua Marina Co-Operative Housing Society",
        image: require("../../images/clientLogos/Aqua-marina.png"),
        description:
            "We Aqua Marina Co-operative housing society are extremely delighted to recommend you the exemplary quality services of Inspacco, we are using Security services for the past 2 months in our society They provide prompt and efficient services. ",
    },
    {
        name: "Costa Blanca Co-Op Hsg Society Ltd.",
        image: require("../../images/clientLogos/costa-blanca.png"),
        description:
            "M/s Prophandy Technologies Pvt Ltd, Pune and their team, ensure the quality raw material (Asian Paints) and the best of manpower for the workmanship and the Paint finish and post completion cleaning.",
    },
   
    // {
    //     name: "Clean And Green Services",
    //     image: require("../../images/clientLogos/clean-green.png"),
    //     description:
    //         "We have been working with INSPACCO since long. We are providing General Pest Control, Bed Bug Control, Rodent Control and Sanitization Service with following the SOPS provided from INSPACCO We are getting great business from INSPACCO.",
    // },
    {
        name: "Sai Vista Co-Op Housing Society Ltd",
        image: require("../../images/clientLogos/ND-tower.png"),
        description:
            " Inspacco has started their Security service in February 2021 and we both have been working for the past 7 months and will continue the same.Inspacco is a company having an expert and experienced team, which is dedicated and hardworking as well.",
    },
    {
        name: "Nea Co-Opearative Housing Society",
        image: require("../../images/clientLogos/NEA.png"),
        description:
            " We Nea Co-operative housing society, Baner using the Housekeeping services of Inspacco from the past 7 months and have been completely satisfied with their performance. They do excellent jobs, are always punctual and offer the most competitive rates in town.",
    },
    {
        name: "Costa Blanca Co-Op Hsg Society Ltd.",
        image: require("../../images/clientLogos/costa-blanca.png"),
        description:
            "I'd like to compliment and thank INSPACO team for excellent services being provided to us since the Feb 2021.We are Happy with the service we receive from INSPACcO team. And we would like to thank your team for the same.",
    },
    {
        name: "Sarisha Co-operative Housing Society Ltd.",
        image: require("../../images/clientLogos/ND-tower.png"),
        description:
            "  We Sarisha Co-operative housing society Ltd, Punawale, started with Inspacco's first service Property Manager in April 2021. In iast 5 months, we have offered 4 services to Inspacco and enjoying benefis of their one stop solution for residential communities.",
    },
    {
        name: "THE WAVE CO. OP. HOUSING SOCIETY LTD.",
        image: require("../../images/clientLogos/The-wave.png"),
        description:
            "  We The wave Co-operative housing society. Wakad. started with inspacco's first service housekeeping in January 2021. In last 7 months, we have offered 2 services to Inspacco and enjoying benefits of their one stop solution for residential communities.",
    },
    {
        name: "N D Tower Co-operative housing society",
        image: require("../../images/clientLogos/ND-tower.png"),
        description:
            "  We N D Tower Co-operative housing society are writing this with immense gratitude towards your company on how well you guys accomplished all your duties.",
    },
    {
        name: "Shiddhashila terra co op housing society ltd",
        image: require("../../images/clientLogos/Terra.png"),
        description:
            "  It's really great how easily you managed all facility maintenance, Improvement and met all the necessary requirements as we are using service Housekeeping for the past 3 months in our society.",
    },
];

const Testimonial = () => {
    useEffect(() => {
        window.jQuery = require("../../public/jquery.min");
    }, []);

    let options = {
        loop: true,
        margin: 30,
        nav: false,
        dots: true,
        autoplay: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 2,
            },
            1024: {
                items: 3,
            },
        },
    };
    return (
        <>
            <div className="w-75 mx-auto my-3 ">
            <h3 className='font-weight-bold ' style={{ textAlign: 'center', color: "black" }}>
                    Check what our Customers are Saying
                </h3>

            </div>
            <div className="testimonial3 py-5 testimonials" >
                
                <div className="mx-5">
                    <OwlCarousel
                        className="owl-carousel owl-theme testi3"
                        loop
                        {...options}
                        nav
                    >
                        {data.map((testimony, index) => (
                            <div className="item" key={index}>
                                <div style={{ borderRadius: "2.25rem" }} className="card  card-shadow border-0">
                                    <div className="card-body ">

                                        <span className="thumb-img ">
                                            <img
                                                src={testimony.image}
                                                alt="Societies"
                                                style={{ height: "40%", width:"30%", marginLeft: "35%" }}
                                            />
                                        </span>

                                        <h6
                                            className="mt-4 card-test "
                                            style={{ height: "100px" }}
                                        >
                                            {testimony.description}
                                        </h6>
                                        {/* <br />
                  <br />
                  <br /> */}
                                        <div
                                            className="d-block d-md-flex align-items-center  mt-2 mt-lg-1"
                                            style={{
                                                height: "100px",
                                                float: "inline-end",
                                            }}
                                        >
                                               <hr/>
                                            <div className="mt-5"  >
                                                <h6 className="mb-0  customer" style={{ textAlign: "center", fontWeight: "600", fontSize:"13px" }}>
                                                    {testimony.name}
                                                </h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </OwlCarousel>
                </div>
            </div>
        </>
    );
};

export default Testimonial;
