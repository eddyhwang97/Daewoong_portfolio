import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../css/components/infosection.scss";

export default function InfoSection() {
  return (
    <div className="infosection">
      <section className="my-image">
        <img src="/image/mimo.png" alt="미모티콘" />
      </section>
      <section className="my-info">
        <p className="name1">프론트앤드 개발자</p>
        <p className="name2">
          "<strong>황대웅</strong>" 입니다.
        </p>
        <p className="number">phonenumber</p>
        <p className="email">email</p>
        <ul>
          <li>
            <a href="">
              깃허브
            </a>
          </li>
          <li>
            <a href="">
            벨로그
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}
