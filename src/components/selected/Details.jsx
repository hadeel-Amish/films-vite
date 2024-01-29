import React, { useEffect, useState } from "react";
import "./Details.css";
import { useParams } from "react-router-dom";
import NavBar from "../nav/NavBar";
import Footer from "../footer/Footer";
import axios from "axios";

function Details() {
  const apiurl = "https://example-data.draftbit.com/books?_limit=16";
  const [bookDetails, setBookDetails] = useState([]);
  console.log(bookDetails);
  const { bookID } = useParams();

  useEffect(() => {
    axios
      .get(`${apiurl}/${bookID}`)
      .then((response) => {
        setBookDetails(response.data);
      })
      .catch((error) => {
        console.error("Error fetching book details:", error);
      });
  }, [bookID]);

  if (!Object.keys(bookDetails).length) {
    return <div> Loading...</div>;
  }
  console.log(`bookDetails ${bookDetails}`);

  const selectedBook = bookDetails.find(
    (book) => book.id === parseInt(bookID, 10)
  );

  return (
    <div>
      <div className="main" style={{ paddingTop: "80px" }}>
        <div className="detailscard">
          <NavBar
            menu={[
              { title: "Home", path: "/" },
              { title: "News", path: "/News" },
              { title: "Promotion ", path: "/Promotion" },
              { title: "Plublishs", path: "/Plublishs" },
              { title: "Subscribe ", path: "/Subscribe" },
            ]}
          />
          <div
            className="perantdetails"
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              // paddingTop: "100px",
              marginTop: "100px",
            }}
          >
            <div className="left">
              <img
                src={selectedBook.image_url}
                alt=""
                style={{
                  width: "100%",
                  height: "500px",
                  padding: "0 30px",
                }}
              />
            </div>
            <div
              className="right"
              style={{
                width: "60%",
              }}
            >
              <h1 style={{ fontSize: "35px" }}>{selectedBook.title}</h1>
              <p style={{ padding: "4px 0" }}>{selectedBook.authors}</p>
              <h1 style={{ padding: "4px 0", fontSize: "30px" }}>
                About Book:
              </h1>
              <p>{selectedBook.description}</p>
              <div className="btndetails">
                <button className="btn-1">
                  <a href="">Add To Cart</a>
                </button>
                <button className="btn-2">
                  <a href="">Favoraite</a>
                </button>
              </div>
              <hr />
              <div
                className="number"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "20px 0",
                }}
              >
                <div className="leftnum">
                  <p style={{ paddingBottom: "20px" }}>
                    <span>Pages Number: </span>
                    {selectedBook.num_pages} pages
                  </p>

                  <p>
                    <span>Review Count: </span>
                    {selectedBook.review_count}
                  </p>
                </div>
                <div className="rightnum">
                  <p style={{ paddingBottom: "44px" }}>
                    <span>Rating Count: </span> {selectedBook.rating_count}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Details;
