import React from "react";
import About from "../Components/About";
import Landing from "../Components/Landing";
import Services from "../Components/Services";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";

const Home = () => {
  return (
    <div className="bg-primary h-fit">
      <NavBar />
      <Landing />
      <About />
      <Services />
      <Footer />
    </div>
  );
};

export default Home;
