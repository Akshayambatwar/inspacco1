// import { useRouter } from 'next/router'
import DetailsPages from "../../../components/MainPages/detailsPage/data";
import DetailsPage from "../../../components/MainPages/detailsPage";
import NotFound from "../../../components/NotFound";
import { backendRoute } from "../../../helpers/backendRoute";
import { detailSEO } from "../../../helpers/detailSEO";

const Post = ({ pagearray, pageSEOArray }) => {
  // const router = useRouter()

  if (
    typeof pagearray === "undefined" ||
    pagearray === null ||
    pagearray.length < 1
  )
    return <NotFound />;

  // if(pagearray.length > 0){
  let page = pagearray[0];
  let pageSEO = pageSEOArray[0];
  // console.log(pageSEO);

  // return <p>Page is  : {page.link}</p>
  return (
    <DetailsPage
      SEO={{ title: pageSEO.title, description: pageSEO.description }}
      name={page.name}
      bredCrumb={page.bredCrumb}
      bannerImage={page.bannerImage}
      bannerDetails={page.bannerDetails}
      qualityAssurance={page.qualityAssurance}
      inclusions={page.inclusions}
      stepData={page.stepData}
      faqs={page.faqs}
      //   today={today}
    />
  );
  // }
  // else{
  //     return <p>Not found</p>
  // }
};

// This gets called on every request
export async function getStaticProps(context) {
  // Fetch data from external API
  const { pid, sid } = context.params;
  const pagearray = DetailsPages.filter(
    (page) => page.link === pid + "/" + sid
  );
  const pageSEOArray = detailSEO.filter(
    (page) => page.route === "/" + pid + "/" + sid
  );
  //   let today;
  //   await fetch(backendRoute + "/api/detailspage-data/" + pid + "/" + sid)
  //     .then((res) => res.json())
  //     .then((res) => {
  //       today = res.time;
  //     })
  //     .catch((e) => {
  //       console.log(e);
  //     });

  // Pass data to the page via props
  return { props: { pagearray, pageSEOArray } };
}

export async function getStaticPaths() {
  let paramsArray = detailSEO.map((detailpage) => {
    let splitted = detailpage.route.split("/");
    return {
      params: { pid: splitted[1], sid: splitted[2] },
    };
  });
  return {
    paths: paramsArray,
    fallback: false, // See the "fallback" section below
  };
}

export default Post;
