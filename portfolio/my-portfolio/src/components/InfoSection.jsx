import React from "react";

export default function InfoSection() {
  return (
    <div className="hero  ">
      <div className="hero-content flex-col lg:flex-row shadow-2xl mx-auto my-0">
        <img src="/public/image/mimo.png" className="max-w-sm rounded-lg " />
        <div>
          <h1 className="text-4xl font-bold">황대웅</h1>
          <h1 className="text-5xl font-bold">FRONT-EDN DEVELOPER!</h1>
          <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
}
