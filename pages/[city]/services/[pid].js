// import { useRouter } from 'next/router'
// import { useEffect } from 'react'
import { listingPages } from "../../../components/MainPages/listingPage/data";
import ListingPage from "../../../components/MainPages/listingPage/";
import NotFound from "../../../components/NotFound";

const Post = ({ pagearray }) => {
  // const router = useRouter()
  // const { pid } = router.query

  // const getListingPage = (pid) => {
  //     return listingPages.filter((page) => page.link === pid);
  // }

  if (
    typeof pagearray === "undefined" ||
    pagearray === null ||
    pagearray.length < 1
  )
    return <NotFound />;
  // // // useEffect()
  // let pagearray = getListingPage(pid);
  // // console.log(page);
  //   return <p>{pid}</p>
  // if (pagearray.length > 0) {
  let page = pagearray[0];
  // return <p>Page is  : {page.link}</p>
  return (
    <ListingPage
      name={page.name}
      SEO={page.SEO}
      recommendedList={page.recommendedList}
      subcategories={page.subcategories}
      description={page.description}
      ourAssuranceList={page.ourAssuranceList}
      bannerImage={page.bannerImage}
    />
  );
  // } else {
  //     return <p>Not found</p>
  // }
};

// / This gets called on every request
export async function getStaticProps(context) {
  // Fetch data from external API
  const { pid } = context.params;
  const pagearray = listingPages.filter((page) => page.link === pid);

  // Pass data to the page via props
  return { props: { pagearray } };
}

export async function getStaticPaths() {
  let paramsArray = listingPages.map((listingpage) => {
    return {
      params: { city : "pune", pid: listingpage.link },
    };
  });
  return {
    paths: paramsArray,
    fallback: false, // See the "fallback" section below
  };
}

export default Post;
