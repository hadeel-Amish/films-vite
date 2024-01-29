import React from "react";
import "./Toggle.css";

function Toggle({ handelchange, ischecked, name, mode }) {
  return (
    <div className="toggle-container">
      <input
        type="checkbox"
        id="check"
        className="toggle"
        onChange={handelchange}
        checked={ischecked}
      />
      <label
        htmlFor="check"
        style={{ fontWeight: "600", fontSize: "20px", paddingRight: "50px" }}
      >
        {mode}
        {name}
      </label>
      {/* <label htmlFor="check">{isDark ? "dark" : " light"}</label> */}
    </div>
  );
}

export default Toggle;
