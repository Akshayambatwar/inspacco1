// import { useRouter } from 'next/router'
import DetailsPages from "../../../../components/MainPages/detailsPage/data";
import DetailsPage from "../../../../components/MainPages/detailsPage";
import NotFound from "../../../../components/NotFound";
import { backendRoute } from "../../../../helpers/backendRoute";
import { getPageSEOWithLocalities } from "../../../../helpers/detailsSEOLocalities";
import { detailSEO } from "../../../../helpers/detailSEO";
import { toTitleCase } from "../../../../helpers/toTiltleCase";


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
  const { city, pid, sid } = context.params;
  
  let splitSID = sid.split("-");
  let service = "";
  let flag = 0;
  let locality = "";
  for (let i = 0; i < splitSID.length; i++) {
    // const element = array[i];
    if(flag === 0){
      if(splitSID[i] !== "in"){
        service = service.concat(splitSID[i]);
        service = service.concat("-");
        
    }
      else{
        flag = 1;
      }
      
      
      
      if(flag !== 0){
        // service = service.concat("-");
        service = service.substr(0, service.length - 1)    
    }
    //   console.log(flag);
    // console.log(service);
    }
    else{
      locality = locality.concat(splitSID[i]);
      locality = locality.concat(" ");
    } 
    
  }
  if(flag == 0){
    service = service.substr(0, service.length - 1)
  }
  const pagearray = DetailsPages.filter(
    (page) => page.link === pid + "/" + service 
  );
  const pageSEOArray = getPageSEOWithLocalities(toTitleCase(city), pid, service, toTitleCase(locality));
  // console.log(service);
  // console.log(locality);
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
  let localities = await fetch(backendRoute + "/api/localities")
  localities = await localities.json();
  // console.log(localities)
  let paramsArray  = [];
 
  const cities = [...new Set(localities.map(locality => locality.city))]

  detailSEO.map((detailpage) => {
    let temp = localities.map((locality)=>{
      let splitted = detailpage.route.split("/");
      paramsArray.push({
        params: {city : locality.city.toLowerCase() , pid: splitted[1], sid: splitted[2] + "-in-" + locality.area.toLowerCase().replace(/ /g, '-') },
      });
    })
  //  (temp);
    // return {...temp};
  });
  detailSEO.map((detailpage) => {
    let temp = cities.map((city)=>{
      let splitted = detailpage.route.split("/");
      paramsArray.push({
        params: {city : city.toLowerCase() , pid: splitted[1], sid: splitted[2] },
      });
    })
  //  (temp);
    // return {...temp};
  });
  // console.log(paramsArray[0])
  return {
    paths: paramsArray,
    fallback: false, // See the "fallback" section below
  };
}

export default Post;
