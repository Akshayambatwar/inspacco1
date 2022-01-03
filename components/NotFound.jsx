import Footer from "./commons/footer/footer";
import Header from "./commons/Header/newNav";

const NotFound = () => {
  return (
    <div>
      <div className="sticky-top">
        <Header />
      </div>
      {/* <br />
      <br />
      <br /> */}
      <h1
        className="d-flex justify-content-center align-items-center"
        style={{ height: "70vh" }}
      >
        404 Not Found ...
      </h1>
      <Footer />
    </div>
  );
};

export default NotFound;
