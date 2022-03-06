import React from "react";
import HeroContent from "../components/HeroContent";
import Navbar from "../components/Navbar";
import SectionView from "../components/SectionView";
import Users from "../components/UsersProfile";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroContent />
      <SectionView />
      <Users />
    </div>
  );
};

export default Home;
