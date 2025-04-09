import { useState } from "react";
import "./App.scss";

const TAB = [
  ["A", "ABOUT ME"],
  ["I", "INTERVIEW"],
  ["P", "PROJECT"],
];
function App() {
  const [active, setActive] = useState([true, false, false]);
  return (
    <>
      <div id="tab">
        <ul>
          {TAB.map((tab, index) => (
            <li
              key={index}
              className={active[index] === true ? `tab tab${index + 1} active` : `tab tab${index + 1}`}
              onClick={(e) => {
                console.log(index);
                if (index === 0) {
                  setActive([true, false, false]);
                } else if (index === 1) {
                  setActive([false, true, false]);
                } else {
                  setActive([false, false, true]);
                }
              }}
            >
              <span>{active[index] === true ? tab[1] : tab[0]}</span>
            </li>
          ))}
        </ul>
      </div>
      <div id="aboutme" className="section section1">
        <span className="title">ABOUT ME</span>
        <div className="content content-left">
          <p>안녕하세요.</p>
          <p>끊임없이 배우고 도전하는 성장형 프론트엔드 개발자</p>
          <p>
            <strong>황대웅</strong> 입니다.
          </p>
        </div>
        <div className="content content-right"></div>
      </div>
      <div id="interview section" className="section section2">
        <span className="title">INTERVIEW</span>
        <div className="content content-left">
          <p>안녕하세요.</p>
          <p>끊임없이 배우고 도전하는 성장형 프론트엔드 개발자</p>
          <p>
            <strong>황대웅</strong> 입니다.
          </p>
        </div>
        <div className="content content-right"></div>
      </div>
      <div id="project section" className="section section3">
        <span className="title">PROJECT</span>
        <div className="content content-left">
          <p>안녕하세요.</p>
          <p>끊임없이 배우고 도전하는 성장형 프론트엔드 개발자</p>
          <p>
            <strong>황대웅</strong> 입니다.
          </p>
        </div>
        <div className="content content-right"></div>
      </div>
    </>
  );
}

export default App;
