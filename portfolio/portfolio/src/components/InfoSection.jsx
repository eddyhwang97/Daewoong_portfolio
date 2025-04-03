import React from "react";
import "./css/infosection.scss";

export default function InfoSection() {
  return (
    <div className="content">
      <div className="infosection">
        <section className="my-info">
          <p className="name">
            프론트엔드 개발자 <strong>황대웅</strong> 입니다.
          </p>
          <p>간단한 한줄소개</p>
          <p>간단한 한줄소개</p>
        </section>
        <section className="mimo">
          <img src="/image/mimo.png" alt="" />
        </section>
      </div>
    </div>
  );
}
