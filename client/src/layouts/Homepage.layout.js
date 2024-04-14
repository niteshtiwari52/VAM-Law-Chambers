import React from "react";
import Navbar from "../components/NavbarComponent/Navbar";

const HomepageLayout =
  (Components) =>
  ({ ...props }) => {
    return (
      <>
        {/* commmon component or content thaat we have to render multiple pages 
            for e.g  navbar & footer would be common for most of the pages
        */}
        <div className="w-screen container mx-auto ">
          <Navbar />
          <Components {...props} />
        </div>

        {/* <Footer /> */}
      </>
    );
  };

export default HomepageLayout;
