import React, { useEffect } from "react";
import $ from "jquery";
import "./App.scss";
import "./css/common/_grid.scss";

import InfoSection from "@components/InfoSection";
import SideBar from "./components/SideBar";
import Content from "./components/Content";

function App() {
  return (
    <>
      <div className="cont-box">
        <SideBar />
        <section className="col-9">
          <InfoSection />
          <Content />
        </section>
      </div>
    </>
  );
}

export default App;
