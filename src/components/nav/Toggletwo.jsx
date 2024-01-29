import React from "react";
import "./ToggleTow.css";

function Toggle({ handelchange, ischecked, name, logo }) {
  return (
    <div className="togglee-container">
      <input
        type="checkbox"
        id="check"
        className="togglee"
        onChange={handelchange}
        checked={ischecked}
      />
      <label htmlFor="check">
        {/* {logo} */}
        {name}
      </label>
      {/* <label htmlFor="check">{isDark ? "dark" : " light"}</label> */}
    </div>
  );
}

export default Toggle;
