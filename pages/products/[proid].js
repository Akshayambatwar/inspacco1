import { useRouter } from "next/router";
// import { useEffect } from 'react'
import { ProductPages } from "../../components/MainPages/productPage/data";
import ProductPage from "../../components/MainPages/productPage";
const Post = ({ pagearray }) => {
  // const router = useRouter()
  // const { proid} = router.query
  // const getDetailsPage = (proid) => {
  //     return ProductPages.filter((page)=>page.link === proid);
  // }

  // console.log(page);
  //   return <p>{pid}</p>
  //   if (pagearray.length > 0) {
  let page = pagearray[0];
  // return
  return (
    <ProductPage
      name={page.name}
      description={page.description}
      SEO={page.SEO}
      Pricing={page.Pricing}
      information={page.information}
      images={page.images}
      faqs={page.faqs}
    />
  );
  //   }
};

export async function getStaticProps(context) {
  // Fetch data from external API
  const { proid } = context.params;
  const pagearray = ProductPages.filter((page) => page.link === proid);

  // Pass data to the page via props
  return { props: { pagearray } };
}

export async function getStaticPaths() {
  let paramsArray = ProductPages.map((productpage) => {
    return {
      params: { proid: productpage.link },
    };
  });
  return {
    paths: paramsArray,
    fallback: false, // See the "fallback" section below
  };
}

export default Post;
