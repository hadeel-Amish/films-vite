import React from "react";
import NavBar from "./nav/NavBar";
import Hero from "./Hero/Hero";
import Footer from "./footer/Footer";
import Selected from "./selected/Selected";

function Home() {
  return (
    <div>
      <NavBar
        menu={[
          { title: "Home", path: "/" },
          { title: "Subscribe", path: "/Subscribe" },
          { title: "News", path: "/News" },
          { title: "Plublishs", path: "/Plublishs" },
        ]}
      />
      <Hero />
      <Selected />
      <Footer />
    </div>
  );
}

export default Home;
