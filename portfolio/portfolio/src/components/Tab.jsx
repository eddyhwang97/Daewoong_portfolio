import React, { useEffect } from "react";
import $ from "jquery";
import "./css/tab.scss";

const TAB = ["ABOUT ME", "INTERVIEW", "SKILL & TOOLS", "PROJECT"];

export default function Tab() {

  
  return (
      <div className="tab-menu">
        <ul className="menu">
          {TAB.map((tab, index) => (
            <li className={index===0 ? "tab active" : "tab"} key={index}>
              {tab}
            </li>
          ))}
        </ul>
      </div>
  );
}
