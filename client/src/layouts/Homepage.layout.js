import React from "react";
import Navbar from "../components/NavbarComponent/Navbar";
import Footer from "../components/FooterComponent/Footer";

const HomepageLayout =
  (Components) =>
  ({ ...props }) => {
    return (
      <>
        {/* commmon component or content thaat we have to render multiple pages 
            for e.g  navbar & footer would be common for most of the pages
        */}
        <Navbar />

        {/* <div className="w-screen container mx-auto "> */}
        <Components {...props} />
        {/* </div> */}
        <Footer />

        {/* <Footer /> */}
      </>
    );
  };

export default HomepageLayout;
