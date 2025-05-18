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
  useEffect(() => {
    const handleScroll = () => {
      const section1 = document.querySelector(".section-1");
      const video = section1.querySelector("video");
      const section1Bottom = section1.getBoundingClientRect().bottom; // section-1의 윈도우 하단과의 거리
      const windowHeight = window.innerHeight; // 윈도우 높이

      if (section1Bottom <= windowHeight && section1Bottom >= windowHeight / 2) {
        // section-1이 윈도우 하단에 닿고, 중간까지 스크롤될 때
        const progress = (windowHeight - section1Bottom) / (windowHeight / 2); // 진행 비율 (0 ~ 1)
        const newWidth = 100 - progress * 10; // 100%에서 90%로 줄어듦
        const newBorderRadius = progress * 15; // 0px에서 15px로 증가
        section1.style.width = `${newWidth}%`;
        video.style.borderRadius = `${newBorderRadius}px`;
      } else if (section1Bottom > windowHeight) {
        // section-1이 윈도우 하단에 닿기 전
        section1.style.width = "100%";
        video.style.borderRadius = "0px";
      } else if (section1Bottom < windowHeight / 2) {
        // section-1이 윈도우 중간을 지나면
        section1.style.width = "90%";
        video.style.borderRadius = "15px";
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <header className="header">
        <div className="header-icon">
          <img src="./assets/logo.png" alt="logo" />
        </div>
        <div className="header-menu">
          <span>About me</span>
          <span>Skills</span>
          <span>Project</span>
        </div>
      </header>
      <div className="container">
        <section className="section section-1">
          <video src="./assets/intro-video.mp4" autoPlay loop muted></video>
          <div className="intro-text">
            <h1>안녕하세요, 프론트엔드 개발자 황대웅 입니다.</h1>
            <span>어떤 형태로든 변하는 물처럼, </span>
            <span>환경과 상황에 맞게 유연하게 적응하며 흡수력 있게 성장하겠습니다.</span>
          </div>
        </section>
        <section className="section section-2">
          <h1>About Me!</h1>
          <div className="about-me">
            <div className="interview">
              <div className="interview-list">
                <div className="list">
                  <ul>
                    <li>
                      <h2 className="list-title">-개발자를 선택한 이유</h2>
                      <span className="list-content">
                        개발자를 알게된 계기는 카페에서 키오스크를 사용하면서 부터입니다.
                        <br />
                        키오스크를 사용하면서 복잡함에 불편함을 느껴 이런걸 만드려면 무엇을 해야할까? 라는 생각을 하게 되었고,
                        <br />
                        그때부터 개발에 관심을 가지게 되었습니다.
                      </span>
                    </li>
                    <li>
                      <h2 className="list-title">-성장이 주는 즐거움</h2>
                      <span className="list-content">
                        새로운 프로젝트를 들어가면서 전과는 다른 기술을 사용해보고
                        <br />
                        그 기술을 사용하면서 내가 성장하는 모습을 느끼는게 너무 좋습니다.
                        <br />
                        이런 것들이 바로 개발을 하며 느끼는 즐거움이 아닐까 생각합니다.
                      </span>
                    </li>
                    <li>
                      <h2 className="list-title">-협력의 중요성</h2>
                      <span className="list-content">
                        새로운 프로젝트를 들어가면서 전과는 다른 기술을 사용해보고
                        <br />
                        그 기술을 사용하면서 내가 성장하는 모습을 느끼는게 너무 좋습니다.
                        <br />
                        이런 것들이 바로 개발을 하며 느끼는 즐거움이 아닐까 생각합니다.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="profile">
              <div className="profile-image"></div>
              <div className="profile-info">
                <h1 className="profile-name">황대웅</h1>
                <p className="profile-email">Email : hwangdw97@gmail.com</p>
                <div className="profile-link">
                  <a href="https://github.com/eddyhwang97" target="_blank" rel="noreferrer noopener">
                    <img src="./assets/github.png" alt="github" />
                  </a>
                  <a href="https://velog.io/@eddyhwang97/posts" target="_blank" rel="noreferrer noopener">
                    <img src="./assets/velog.png" alt="velog" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section section-3">
          <h1>Skills</h1>
          <div>내가 가진 기술 스택</div>
        </section>
        <section className="section section-4">
          <h1>PROJECT</h1>
          <div className="projects">
            <article className="project" onClick={() => setProjects(true)}>
              <div className="project-thumbnail">{/* <img src="" alt="썸네일" /> */}</div>
              <h2 className="project-title">프로젝트 제목</h2>
            </article>
            <article className="project" onClick={() => setProjects(true)}>
              <div className="project-thumbnail">{/* <img src="" alt="썸네일" /> */}</div>
              <h2 className="project-title">프로젝트 제목</h2>
            </article>
            <article className="project" onClick={() => setProjects(true)}>
              <div className="project-thumbnail">{/* <img src="" alt="썸네일" /> */}</div>
              <h2 className="project-title">프로젝트 제목</h2>
            </article>
            <article className="project" onClick={() => setProjects(true)}>
              <div className="project-thumbnail">{/* <img src="" alt="썸네일" /> */}</div>
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
