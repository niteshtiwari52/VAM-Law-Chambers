import React from "react";
import HeroSection from "../components/BannerComponent/HeroSection";
// Layout
import HomeLayout from "../layouts/Homepage.layout";
import Reviews from "../components/ReviewsComponent/Reviews";

const Home = () => {
  return (
    <>
      <HeroSection />
      <Reviews />
    </>
  );
};

export default HomeLayout(Home);
