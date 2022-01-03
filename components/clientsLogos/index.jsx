import dynamic from "next/dynamic";
// import OwlCarousel from "react-owl-carousel";

const OwlCarousel = dynamic(
  () => {
    return import("react-owl-carousel");
  },
  { ssr: false }
);

// import "owl.carousel/dist/assets/owl.carousel.css";
// import "owl.carousel/dist/assets/owl.theme.default.css";
// import "./logoSection.css";

// window.fn = OwlCarousel;

const clientLogos = [
  require("../../images/clientLogos/new/group-73.png"),
  require("../../images/clientLogos/new/group-80.png"),
  require("../../images/clientLogos/new/group-81.png"),
  require("../../images/clientLogos/new/group-76.png"),
  require("../../images/clientLogos/new/group-77.png"),
  require("../../images/clientLogos/new/group-78.png"),
  require("../../images/clientLogos/new/group-83.png"),
  require("../../images/clientLogos/new/group-82.png"),
  require("../../images/clientLogos/new/group-74.png"),
  require("../../images/clientLogos/new/group-86.png"),
  require("../../images/clientLogos/new/group-85.png"),
  require("../../images/clientLogos/new/group-84.png"),
  require("../../images/clientLogos/new/group-87.png"),
  require("../../images/clientLogos/new/group-79.png"),
  require("../../images/clientLogos/new/group-75.png"),
];

const LogoSection = () => {
  let options = {
    loop: true,
    nav: false,
    dots: true,
    // autoHeight: true,
    autoWidth: true,
    autoplay: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 2,
      },
      768: {
        item: 3,
      },
      1024: {
        items: 4,
      },
    },
  };
  return (
    <div
      className="testimonial3 py-5"
      style={{ backgroundColor: "#f7fafd" }}
      id="ClientSection"
    >
      {/* <br /> */}
      <div className="w-75 mx-auto">
      <h2 className="mb-3 font-weight-bold" style={{ color: "#04032d" }}>
          OUR CLIENTS
        </h2>
        <div className="Rectangle-Copy-14 mb-4"></div>

        <OwlCarousel
          className="owl-carousel owl-theme testi3 mt-4"
          loop
          {...options}
          // margin={10}
          nav
        >
          {clientLogos.map((client, index) => (
            <div
              className="item d-block d-md-flex align-items-center justify-content-center"
              key={index}
              style={{ height: "100px" }}
            >
              <div className="card-body d-block d-md-flex align-items-center justify-content-center">
                <span>
                  <img
                    src={client}
                    alt="wrapkit"
                    className="clientLogoImage owl-height"
                  />
                </span>
              </div>
            </div>
          ))}
        </OwlCarousel>
      </div>
      {/* <br />
      <br />
      <br /> */}
    </div>
  );
};

export default LogoSection;
