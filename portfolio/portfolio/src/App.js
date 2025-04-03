import { useEffect } from "react";
import $ from "jquery";
import "./App.css";
import InfoSection from "./components/InfoSection";
import Interview from "./components/Interview";
import Project from "./components/Project";
import SkillTools from "./components/SkillTools";
import Tab from "./components/Tab";

import startSS from "./function/smoothScroll23.js";

function App() {
  // 탭 스크롤
  useEffect(() => {
    const content = $(".content");
    const tab = $(".tab");
    let isScrolling = false; // 스크롤 중인지 여부를 나타내는 플래그

    // 탭 클릭 이벤트
    tab.on("click", function (event) {
      event.preventDefault();
      const index = $(this).index();
      tab.removeClass("active");
      $(this).addClass("active");
      isScrolling = true; // 스크롤 중 플래그 활성화

      $("html, body").animate(
        {
          scrollTop: index === 0 ? 0 : content.eq(index).offset().top - 50,
        },
        400,
        () => {
          isScrolling = false; // 스크롤 애니메이션 완료 후 플래그 비활성화
        }
      );
    });

    // 스크롤 이벤트
    const handleScroll = () => {
      if (isScrolling) return; // 스크롤 중이면 이벤트 무시
      const scrollTop = $(window).scrollTop();
      content.each(function (index) {
        const offsetTop = $(this).offset().top;
        const offsetBottom = offsetTop + $(this).outerHeight();

        if (scrollTop >= offsetTop - 50 && scrollTop < offsetBottom) {
          tab.removeClass("active");
          tab.eq(index).addClass("active");
        }
      });
    };

    $(window).on("scroll", handleScroll);
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="App">
      <div className="container">
        <div className="background"></div>
        <section className="box">
          <div className="box-contents">
            <Tab />
            <InfoSection />
            <Interview />
            <SkillTools />
            <Project />
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
