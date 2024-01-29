import React from "react";
import "./CardSelected.css";
import { Link } from "react-router-dom";
import bookicon from "./../../assets/images/book-open-01.png";
import staricon from "./../../assets/images/Vector.png";
function CardSelected({ book }) {
  return (
    <div className="cardpearent">
      <div className="imges">
        <img src={book.image_url} alt="" />
      </div>
      <div className="texts">
        <h3>{book.title}</h3>
      </div>
      <div className="num">
        <div className="bookicon">
          <img src={bookicon} alt="" />
          <p>{book.num_pages}</p>
        </div>
        <div className="staricon">
          <img src={staricon} alt="" />
          <p>{book.rating}</p>
        </div>
      </div>
      <div className="btncard">
        <Link to={`/book/${book.id}`}>show Details</Link>
      </div>
    </div>
  );
}

export default CardSelected;
