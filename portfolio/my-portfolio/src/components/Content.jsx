import React from "react";
import "../css/components/content.scss";
function Content() {
  return (
    <>
      <span className="title">PROJECT</span>
      <div className="content">
        <section className="project">
          <div className="first">
            first
            <div className="project-info">
              <article>썸네일</article>
              <section>
                <p>프로젝트이름</p>
                <div>소개</div>
                <div>내가 한일</div>
              </section>
            </div>
          </div>
          <div className="second">
            second
            <div className="project-info">
              <article>썸네일</article>
              <section>
                <p>프로젝트이름</p>
                <div>소개</div>
                <div>내가 한일</div>
              </section>
            </div>
          </div>
          <div className="third">
            third
            <div className="project-info">
              <article>썸네일</article>
              <section>
                <p>프로젝트이름</p>
                <div>소개</div>
                <div>내가 한일</div>
              </section>
            </div>
          </div>
        </section>
        <section className="contact">contact</section>
      </div>
    </>
  );
}

export default Content;
