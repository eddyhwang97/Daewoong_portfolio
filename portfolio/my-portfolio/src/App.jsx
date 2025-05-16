import { useEffect, useState } from "react";
import "./App.css";
import ProjectDetail from "./components/ProjectDetail";

function App() {
  const [projects, setProjects] = useState(false);
  useEffect(() => {
    if (projects) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [projects]);
  return (
    <>
      <div className="container">
        <section className="section section-1">
          <div className="intro-title">
            <p>배우는게 즐겁고, 끊임없이 개선하는</p>
            <p>개발자 황대웅 입니다.</p>
          </div>
          <div className="profile">
            <div className="profile-image">
              <img src="" alt="" />
            </div>
            <div className="profile-info">
              <h1 className="profile-name">황대웅</h1>
              <p className="profile-email">Email : hwangdw97@gmail.com</p>
              <div className="profile-contacts">
                <a href="https://github.com/eddyhwang97" target="_blank" rel="noreferrer noopener">
                  GitHub
                </a>
                <a href="https://velog.io/@eddyhwang97/posts" target="_blank" rel="noreferrer noopener">
                  Velog
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="section section-2">
          <div>내가 가진 기술 스택</div>
        </section>
        <section className="section section-3">
          <div>PROJECT</div>
          <div className="projects">
            <article className="project" onClick={() => setProjects(true)}>
              <div className="project-thumbnail">
                <img src="" alt="썸네일" />
              </div>
              <h2 className="project-title">프로젝트 제목</h2>
            </article>
            <article className="project" onClick={() => setProjects(true)}>
              <div className="project-thumbnail">
                <img src="" alt="썸네일" />
              </div>
              <h2 className="project-title">프로젝트 제목</h2>
            </article>
            <article className="project" onClick={() => setProjects(true)}>
              <div className="project-thumbnail">
                <img src="" alt="썸네일" />
              </div>
              <h2 className="project-title">프로젝트 제목</h2>
            </article>
            <article className="project" onClick={() => setProjects(true)}>
              <div className="project-thumbnail">
                <img src="" alt="썸네일" />
              </div>
              <h2 className="project-title">프로젝트 제목</h2>
            </article>
          </div>
          {projects === true && <ProjectDetail projects={projects} setProjects={setProjects} />}
        </section>
      </div>
    </>
  );
}

export default App;
