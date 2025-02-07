import React, { useState } from "react";
import "./TogglePassword.css";
import { assets } from "../../assets/Assets";
const TogglePassword = () => {
  const [set, setset] = useState(true)
  const change=()=>{
    setset(!set);
  }
  return (
    <div>
      <div className="password">
        <span>
          {set? <input type="password" placeholder="Enter Password"/>:  <input type="text" />}
          <span  onClick={change} className="clicked">
          {set ? <img src={assets.show} alt="" />: <img  src={assets.hide}  alt="" />}
          </span>
        </span>
      </div>
    </div>
  );
};

export default TogglePassword;
