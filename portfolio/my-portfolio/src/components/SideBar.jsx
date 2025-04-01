import React, { useEffect } from "react";
import "../css/components/sidebar.scss";
import $ from "jquery";

function SideBar() {
  useEffect(() => {
    const sidebar = $(".sidebar");
    const floatPosition = parseInt($(sidebar).css("top"));

    const followSidebar = () => {
      $(window).on("scroll", function () {
        let currentTop = $(window).scrollTop();
        let sidebarTop = currentTop + floatPosition + "px";

        $(sidebar).stop().animate({
          top: sidebarTop,
        });
      });
    };
    followSidebar();
  }, []);
  return (
    <div className="col-3 " id="sidebar">
      <div className="sidebar">
        <div className="button myinfo">myinfo</div>
        <div className="button interview">interview</div>
        <div className="button interview">Skill & Tolls</div>
        <div className="button project">project</div>
      </div>
    </div>
  );
}

export default SideBar;
