import React from "react";
import HomepageLayout from "../layouts/Homepage.layout";
import { useParams } from "react-router-dom";
import AboutUs from "../components/AboutComponent/AboutUs";
import Services from "../components/ServicesComponent/Services";
import Contact from "../components/ContactComponent/Contact";
import CustomPageLayout from "../layouts/CustomPage.Layout";

const CustomPage = () => {
  const { urlType } = useParams();
  const currentUrlType = urlType;

  let componentToRender;

  switch (currentUrlType) {
    case "about-us":
      componentToRender = <AboutUs />;
      break;
    case "contact-us":
      componentToRender = <Contact />;
      break;
    case "services":
      componentToRender = <Services />;
      break;
    default:
      componentToRender = null;
  }

  return (
    <>
      {/* <Header /> */}
      {componentToRender}
      {/* <Footer /> */}
    </>
  );
};

export default CustomPageLayout(CustomPage);
