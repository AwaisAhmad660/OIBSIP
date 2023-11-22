import React from "react";
import "font-awesome/css/font-awesome.min.css";
import Nav from "./components/landingPage/nav";
import Hero from "./components/landingPage/hero";
import Video from "./components/landingPage/video";
import Testimonials from "./components/landingPage/Testimonials";
import Pricing from "./components/landingPage/pricing";
import FAQ from "./components/landingPage/faq_section";
import Footer from "./components/landingPage/footer";



function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Video />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Footer />
    </>
  );
}

export default App;
