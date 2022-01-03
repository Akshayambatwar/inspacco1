import React from 'react';
import {listingPages} from "../MainPages/listingPage/data"
import Header from "../commons/Header/newNav";
import Footer from "../commons/footer/footer";
import SubCategoryLayout2 from "../subcategories/subcategoryLayout2"

const AllInOne = ()=>{
    
    return (

        
        <>
            <div className="sticky-top">
                <Header/>
            </div>
            <br/><br/>
            {/* <h2 className="mb-3 font-weight-bold">Services</h2> */}
            {listingPages.map((page, index)=>(
                <SubCategoryLayout2 categoryTitle={page.name} SubCategories={page.subcategories} key={index}/>
            ))}
            <Footer/>
        </>
    )
}

export default AllInOne;