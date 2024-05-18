import React from "react";
import HeroSection from "../components/BannerComponent/HeroSection";
// Layout
import HomeLayout from "../layouts/Homepage.layout";
import Reviews from "../components/ReviewsComponent/Reviews";
import Teams from "../components/TeamComponent/Teams";
import Services from "../components/ServicesComponent/Services";

const Home = () => {
  return (
    <>
      <HeroSection />
      <div className="w-4/5 container mx-auto my-16">
        <Teams />
        <Services />
        <Reviews />
      </div>
    </>
  );
};

export default HomeLayout(Home);
