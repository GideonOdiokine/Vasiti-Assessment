import React from "react";
import HeroContent from "../components/HeroContent";
import Navbar from "../components/Navbar";
import CustomerView from "../components/CustomerView";
import Users from "../components/UsersProfile";
import VendorView from "../components/VendorView";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroContent />
      <CustomerView />
      <Users />
      <VendorView />
      <Users />
      <Footer />
    </div>
  );
};

export default Home;
