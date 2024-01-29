import React from "react";
import hero from "./../../assets/images/book.png";
import "./Hero.css";
function Hero() {
  return (
    <div className="main">
      <div className="perint">
        <div className="texts">
          <div className="btn-1">
            <a href="">Author of august</a>
          </div>
          <h1 className="title">Eric-Emanuel Schmitt</h1>
          <p className="para">
            Eric-Emmanuel Schmitt has been awarded more than 20 literary prizes
            and distinctions, and in 2001 he received the title of Chevalier des
            Arts et des Lettres. His books have been translated into over 40
            languages.
          </p>
          <div className="btn-2">
            <a href="">View his boooks</a>
          </div>
        </div>
        <div className="imges">
          <img src={hero} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
