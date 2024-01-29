import React from "react";
import NavBar from "../../components/nav/NavBar";
import Footer from "../../components/footer/Footer";
import "./Subscribe.css";

function Subscribe() {
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
      <div
        className="subscribe"
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          marginTop: "80px",
        }}
      >
        <div className="leftsub" style={{ width: "50%" }}>
          <h1>Did you know us?</h1>
          <p>
            We are about books and our purpose is to show you the book who can
            chage your life or distract you from the real world în a better one.
            BWorld works with the must popular publishs just for your delight.
            If you are about books, you must to subscribe to our newsletter.
          </p>
          <form>
            <input type="text" placeholder="Your Name" />
            <br />
            <input type="email" placeholder=" Your Email" />

            <div className="btnsub">
              <a href="">Subscribe</a>
            </div>
          </form>
        </div>
        <div className="rightsub">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106456.35619848076!2d36.36529819724371!3d33.507591366969976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1518e6dc413cc6a7%3A0x6b9f66ebd1e394f2!2z2K_Zhdi02YLYjCDYs9mI2LHZitin!5e0!3m2!1sar!2s!4v1706514815639!5m2!1sar!2s"
            style={{
              width: "600",
              height: "450",
              style: "border:0;",
              allowfullscreen: "",
              loading: "lazy",
              referrerPolicy: "no-referrer-when-downgrade",
            }}
          ></iframe>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Subscribe;
