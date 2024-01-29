import React, { useEffect, useState } from "react";
import "./Selected.css";
import CardSelected from "./CardSelected";
function Selected() {
  const apiurl = "https://example-data.draftbit.com/books?_limit=16";
  // const apiurl = "https://example-data.draftbit.com/books?_limit=8";
  const [books, setBooks] = useState([]);
  const getBooks = () => {
    fetch(apiurl)
      .then((res) => res.json())
      .then((data) => setBooks(data));
  };
  useEffect(() => {
    getBooks();
  }, []);
  return (
    <>
      <h1
        className="main"
        style={{
          fontSize: "40px",
          fontWeight: "600",
          lineHeight: "50px",
          textTransform: "capitalize",
          padding: "40px 30px",
        }}
      >
        slected for you
      </h1>

      <div
        className="selected"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
        }}
      >
        {console.log(books)}
        {books.map((book) => {
          return (
            <div className="childBooks" key={book.id}>
              <CardSelected book={book} />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Selected;
