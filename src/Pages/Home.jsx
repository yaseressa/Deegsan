import React from "react";
import About from "../components/About";
import Landing from "../components/Landing";
import Services from "../components/Services";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";

export const Home = () => {
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
