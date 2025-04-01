import React, { useEffect } from "react";
import $ from "jquery";
import "./App.scss";
import "./css/common/_core.scss";
import "./css/common/_grid.scss";

import InfoSection from "@components/InfoSection";
import SideBar from "./components/SideBar";
import Content from "./components/Content";
import Interview from "./components/Interview";
import SkillTools from "./components/SkillTools";

function App() {
  return (
    <>
      <div className="cont-box">
        <SideBar />
        <section className="col-9">
          <InfoSection />
          <Interview />
          <SkillTools/>
          <Content />
        </section>
      </div>
    </>
  );
}

export default App;
