import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Overview from "./components/Overview";
import RAContent from "./components/RAContent";
import TreatmentComparison from "./components/TreatmentComparison";
import Stats from "./components/Stats";
import AboutUs from "./components/AboutUs";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import FAQ from "./components/FAQ";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Overview />
      <RAContent />
      <TreatmentComparison />
      <Stats />
      <AboutUs />
      <Features />
      <HowItWorks />
      <FAQ />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
