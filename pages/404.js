// import Link from 'next/link'
import Head from 'next/head';
import Header from "../components/commons/Header/newNav";
import Footer from "../components/commons/footer/footer";

const NotFound = () => {
  return (
    <div>
      <Head>
        <title>Inspacco | Page Not Found</title>
        <meta name="description" content="Inspacco Tech" />
      </Head>
      <div className="sticky-top">
        <Header />
      </div>
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
