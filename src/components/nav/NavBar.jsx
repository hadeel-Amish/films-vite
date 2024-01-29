import React from "react";
import "./NavBar.css";
import { Link, NavLink } from "react-router-dom";
import logoLight from "./../../assets/images/Logo-Light.svg";
import logoDark from "./../../assets/images/Logo-Dark.svg";
import useLocalStorage from "use-local-storage";

import Toggletwo from "./Toggletwo";

function NavBar({ menu }) {
  const clickbutton = () => {
    document.getElementById("sidebar").style.display = "block";
    document.getElementById("bars").style.display = "none";
    document.getElementById("menu").style.display = "none";
    document.getElementById("logo").style.display = "none";
  };

  const clickexit = () => {
    document.getElementById("sidebar").style.display = "none";
    document.getElementById("bars").style.display = "block";
    document.getElementById("logo").style.display = "block";
    // document.getElementById("menu").style.display = "flex";
  };
  const preference = window.matchMedia("(prefers-color-scheme:dark)").matches;
  const [isDark, setDark] = useLocalStorage("isDark", preference);

  return (
    <>
      <nav>
        <div className="logo" id="logo">
          <img src={isDark ? logoDark : logoLight} />
        </div>
        <div id="iconbar" onClick={clickbutton}>
          <i className="fa-solid fa-bars" id="bars"></i>
        </div>

        <ul className="menu" id="menu">
          {menu.map((e, i) => {
            return (
              <li className="li" key={i}>
                <NavLink
                  className="menu-link"
                  activeClassName="active"
                  key={i}
                  to={e.path}
                >
                  {e.title}
                </NavLink>
              </li>
            );
          })}
        </ul>

        <div
          className="sidebar"
          id="sidebar"
          data-themee={isDark ? "dark" : "light"}
        >
          <div id="exit" onClick={clickexit}>
            <h3 className="exit">X</h3>
          </div>
          <ul className="sidemenu" id="sidemenu">
            {menu.map((e, i) => {
              return (
                <li className="li" key={i}>
                  <Link key={i} to={e.path}>
                    {e.title}
                  </Link>
                </li>
              );
            })}
          </ul>
          <hr style={{ marginTop: "25px" }} />
          <div
            className="sidemode"
            style={{
              width: "200px",
              height: "200px",
              position: "absolute",
            }}
          >
            <Toggletwo
              ischecked={isDark}
              handelchange={() => setDark(!isDark)}
              name={isDark ? "dark" : "light"}
            />
          </div>
        </div>
        {/* <div id="iconbar" onClick={clickbutton}>
          <i className="fa-solid fa-bars" id="bars"></i>
        </div> */}
      </nav>
    </>
  );
}

export default NavBar;
