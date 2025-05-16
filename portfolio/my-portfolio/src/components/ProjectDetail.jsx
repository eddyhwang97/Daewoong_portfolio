import React, { useEffect } from "react";
import "./ProjectDetail.css";

export default function ProjectDetail({ projects, setProjects }) {

    useEffect(() => {
        document.querySelector(".dim").addEventListener("click", (e) => {
            if(projects) {
                setProjects(false);
            }else {
                setProjects(true);
            }
        });
    },[])
  return (
    <div className="project-container">
        <div className="dim"></div>
      <div className="project-box">
        <div className="project-box-title">프로젝트</div>
      </div>
    </div>
  );
}
