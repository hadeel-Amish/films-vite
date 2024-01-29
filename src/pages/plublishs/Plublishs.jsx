import React from "react";
import NavBar from "../../components/nav/NavBar";
import Footer from "../../components/footer/Footer";

function Plublishs() {
  return (
    <div className="main" style={{ paddingTop: "150px" }}>
      <NavBar
        menu={[
          { title: "Home", path: "/" },
          { title: "Subscribe ", path: "/Subscribe" },
          { title: "News", path: "/News" },
          { title: "Plublishs", path: "/Plublishs" },
        ]}
      />
      <h1 style={{ textAlign: "center" }}>Plublishs</h1>
      <Footer />
    </div>
  );
}

export default Plublishs;
