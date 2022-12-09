import React from "react";
import { About } from "./About";
import { Contact } from "./Contact";
import Footer from "./Footer";
import { Header } from "./Header";
import { HowItWork } from "./HowItWork";
import { Testimonial } from "./Testimonial";

export const Home = () => {
  return (
    <div>
      <Header />
      <About />
      <HowItWork />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
};
