import React from "react";
import { CardWrapper } from "./ui/CardWrapper";

function ServiceCard({ title, description, keywords }) {
  return (
    <CardWrapper className="hover:border-primary/40 transition-colors">
      <div className="text-xl font-semibold text-[var(--primary)] mb-4">{keywords}</div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </CardWrapper>
  );
}
export default function Services() {
  return (
    <section className="py-16" id="services">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Who Am I</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ServiceCard
          keywords="책임,협력,성장"
          title="나를 표현하는 세가지 키워드"
          description="프로젝트 내에서 제가 맡은 부분은 책임지고 마무리하고 해결되지 않는 부분은 끝까지 시도합니다. 팀과 협력하며 일하는 것을 좋아하며, 모든 과정에서 배우며 성장하는 것을 즐깁니다."
        />
        <ServiceCard
          keywords="돌파,인정"
          title="일하는 자세"
          description="어려운 과정은 피하지 않고 돌파하며, 제가 실수한 부분은 인정하고 책임지고 해결합니다."
        />
        <ServiceCard
          keywords="계획,탐구"
          title="지향하는 것"
          description="본래 즉흥적인 편이나 일할 때는 일의 우선순위를 정해 계획적으로 하려 노력하며, 끝없이 탐구하여 더 나은 결과물을 도출하려합니다. "
        />
      </div>
    </section>
  );
}
