import { useRouter } from "next/router";
import { backendRoute } from "../../../helpers/backendRoute";
import { toTitleCase } from "../../../helpers/toTiltleCase";
// import { useEffect } from 'react'
import { ProductPages } from "../../../components/MainPages/productPage/data";
import { getProductPageArray } from "../../../components/MainPages/productPage/datawithLocality";

import ProductPage from "../../../components/MainPages/productPage";

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
  const { city, proid } = context.params;
  let splitSID = proid.split("-");
  let service = "";
  let flag = 0;
  let locality = "";
  for (let i = 0; i < splitSID.length; i++) {
    // const element = array[i];
    if (flag === 0) {
      if (splitSID[i] !== "in") {
        service = service.concat(splitSID[i]);
        service = service.concat("-");
      } else {
        flag = 1;
      }

      if (flag !== 0) {
        // service = service.concat("-");
        service = service.substr(0, service.length - 1);
      }
      // console.log(flag);
      // console.log(service);
    } else {
      locality = locality.concat(splitSID[i]);
      locality = locality.concat(" ");
    }
  }
  if (flag == 0) {
    // service = service.concat("-");
    service = service.substr(0, service.length - 1);
  }
  const pagearray = getProductPageArray(
    toTitleCase(city),
    service,
    toTitleCase(locality)
  );

  // Pass data to the page via props
  return { props: { pagearray } };
}

export async function getStaticPaths() {
  let localities = await fetch(backendRoute + "/api/localities");
  localities = await localities.json();
  let paramsArray = [];
  const cities = [...new Set(localities.map((locality) => locality.city))];

  ProductPages.map((productpage) => {
    localities.map((locality) => {
      paramsArray.push({
        params: {
          city: locality.city.toLowerCase(),
          proid:
            productpage.link +
            "-in-" +
            locality.area.toLowerCase().replace(/ /g, "-"),
        },
      });
    });
    // return {
    //   params: {city :  proid: productpage.link },
    // };
  });
  ProductPages.map((productpage) => {
    cities.map((city) => {
      paramsArray.push({
        params: { city: city.toLowerCase(), proid: productpage.link },
      });
    });
    // return {
    //   params: {city :  proid: productpage.link },
    // };
  });
  return {
    paths: paramsArray,
    fallback: false, // See the "fallback" section below
  };
}

export default Post;
