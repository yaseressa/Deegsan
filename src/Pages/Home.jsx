import React from "react";
import About from "../components/About";
import Landing from "../components/Landing";
import Services from "../components/Services";

const Home = () => {
  return (
    <div className="bg-primary h-fit pb-10">
      <Landing />
      <About />
      <Services />
    </div>
  );
};

export default Home;
