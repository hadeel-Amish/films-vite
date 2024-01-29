import React from "react";
import NavBar from "../../components/nav/NavBar";
import Footer from "../../components/footer/Footer";

function News() {
  return (
    <div className="main" style={{ paddingTop: "80px" }}>
      <NavBar
        menu={[
          { title: "Home", path: "/" },
          { title: "Subscribe ", path: "/Subscribe" },
          { title: "News", path: "/News" },
          { title: "Plublishs", path: "/Plublishs" },
        ]}
      />
      <h1 style={{ textAlign: "center", padding: "70px 0" }}>news</h1>
      <Footer />
    </div>
  );
}

export default News;
