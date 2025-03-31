import React from "react";
import "./App.scss";
import "./css/common/_grid.scss";
import InfoSection from "@components/InfoSection";
import SideBar from "./components/SideBar";

function App() {
  return (
    <>
      <div className="cont-box">
        <SideBar />
        <div className="content">
          <InfoSection />
          
        </div>
      </div>
    </>
  );
}

export default App;
