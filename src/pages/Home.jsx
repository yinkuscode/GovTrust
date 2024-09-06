import React from "react";
import Header from "../Components/Header/Header";
import Hero from "../Components/Header/Hero"
import Sec1 from "../Components/main/Sec1";
import Sec2 from "../Components/main/Sec2";
import Sec3 from "../Components/main/Sec3";
import Sec4 from "../Components/main/Sec4";
import Submit from "../Components/main/Submit";
import Illiteracy from "../Components/main/illiteracy";
import Contact from "../Components/main/Contact";
import Footer from "../Components/Footer/Footer";
import Blog from "../Components/main/Blog";

function Home() {
  return (
    <div>
      <Header />
      <Hero/>
      <Sec1 />
      <Sec2 />
      <Sec3 />
      <Sec4 />
      <Submit />
      <Illiteracy />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
