import React from "react";
import "../css/components/infosection.scss"

export default function InfoSection() {
  return (
    <div className="my-info">
      <section >
        <img src="./public/image/mimo.png" alt="it's me!" />
      </section>
      <section>
        <strong>황대웅</strong>
        <span>FRONT-END DEVELOPER</span>
      </section>
    </div>
  );
}
