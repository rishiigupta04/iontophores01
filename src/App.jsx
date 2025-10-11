import React, { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProductPortfolio from "./components/ProductPortfolio";
import Overview from "./components/Overview";
import RAContent from "./components/RAContent";
import TreatmentComparison from "./components/TreatmentComparison";
import Stats from "./components/Stats";
import AboutUs from "./components/AboutUs";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import Gallery from "./components/Gallery";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import ContactForm from "./components/ContactForm";
import EveFlyersDetails from "./components/EveFlyersDetails";

function App() {
  const [activeProduct, setActiveProduct] = useState("ra-patch");

  const showProduct = (productId) => {
    setActiveProduct(productId);

    setTimeout(() => {
      const section = document.getElementById(`${productId}-details`);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 0); // Ensure state update propagates before scrolling
  };

  return (
    <div className="App">
      <Header showProduct={showProduct} />
      <Hero />
      <ProductPortfolio showProduct={showProduct} />
      <div
        id="ra-patch-details"
        className="product-details"
        style={{
          display: activeProduct === "ra-patch" ? "block" : "none",
        }}
      >
        <Overview />
        <RAContent />
        <TreatmentComparison />
        <Stats />
        <Features />
        <HowItWorks />
        {/* <Gallery /> */}
        <FAQ />
      </div>
      <EveFlyersDetails activeProduct={activeProduct} />
      <AboutUs />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;