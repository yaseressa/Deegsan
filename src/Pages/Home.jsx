import React from "react";
import About from "../components/About";
import Landing from "../components/Landing";
import Services from "../components/Services";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

const Home = () => {
  return (
    <div className="bg-primary h-fit pb-10">
      <NavBar />
      <Landing />
      <About />
      <Services />
      <Footer />
    </div>
  );
};

export default Home;
