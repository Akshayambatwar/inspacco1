import React from "react";
import Head from "next/head";
import Header from "../components/commons/Header/newNav";
import Footer from "../components/commons/footer/footer";

const PrivacyPolicy = () => {
  return (
    <>
      <Head>
        <title>Inspacco | Privacy Policy</title>
        <meta name="description" content="Inspacco Tech Privacy Policy Page" />
      </Head>
      <div className="sticky-top">
        <Header />
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="w-75 my-5 mx-auto">
        <h3 className="font-weight-bold mb-3">Privacy Policy</h3>
        <div className="Rectangle-Copy-14 mb-4"></div>
        <h6>
          This Privacy policy is subject to the terms of the Site Policy (User
          agreement) of Inspacco. This policy is effective from the date and
          time a user registers with Inspacco by filling up the Registration
          form and accepting the terms and conditions laid out in the Site
          Policy. To extend this personalized experience Inspacco may track the
          IP address of a user’s computer and save certain information on your
          system in the form of cookies. A user has the option of accepting or
          declining the cookies of this website by changing the settings of your
          browser. The personal information provided by the users to Inspacco
          will not be provided to third parties without previous consent of the
          user concerned. Information of a general nature may however be
          revealed to external parties Every effort will be made to keep the
          information provided by users in a safe manner, the information that
          will be displayed on the website will be done so only after obtaining
          consent from the users. Any user browsing the site generally is not
          required to disclose his identity or provide any information about
          him/her, it is only at the time of registration that you will be
          required to furnish the details in the registration form. A full user
          always has the option of not providing the information which is not
          mandatory. You are solely responsible for maintaining confidentiality
          of the User password and user identification and all activities and
          transmission performed by the User through his user identification and
          shall be solely responsible for carrying out any online or off-line
          transaction involving credit cards / debit cards or such other forms
          of instruments or documents for making such transactions and Inspacco
          assumes no responsibility or liability for their improper use of
          information relating to such usage of credit cards / debit cards used
          by the subscriber online / off-line. Inspacco fully complies with all
          applicable Indian Laws. Inspacco shall always cooperated with law
          enforcement inquires. Inspacco may disclose all or part of your
          personal details in response to a request from the law enforcement
          authorities or in a case of bonafide requirement to prevent an
          imminent breach of the law. We are grateful to freepik and flaticon
          for their amazing free collection of images and icons.
        </h6>
      </div>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
