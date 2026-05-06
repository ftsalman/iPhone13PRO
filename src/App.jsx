import React from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Highlights } from "./components/Highlights";
import { Model } from "./components/Model";
import { Testing } from "./components/tutorials/Testing";
import { Features } from "./components/Features";
import { HowItWorks } from "./components/HowItWorks";
import { Footer } from "./components/Footer";

export const App = () => {
  return (
    <>
      <div className=" bg-black">
        <Navbar />
        <Hero />
        <Highlights />
        <Model />
        <Features />
        <HowItWorks />
      </div>
      <Footer />
    </>
  );
};
