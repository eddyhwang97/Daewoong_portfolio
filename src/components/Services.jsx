import React from "react";
import { CardWrapper } from "./ui/CardWrapper";

function ServiceCard({ title, description, keywords }) {
  return (
    <CardWrapper className="bg-[#ffffff05] shadow-[5px_5px_0px_0px_#fff]">
      <div className="text-xl font-semibold text-[var(--primary)] mb-4">{keywords}</div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-200">{description}</p>
    </CardWrapper>
  );
}
export default function Services() {
  return (
    <section className="py-16" id="services">
      <div className="flex flex-col gap-8">
        <ServiceCard
          keywords="책임감, 협력, 그리고 성장에 대한 열정"
          title="나를 표현하는 세가지 키워드"
          description="주어진 과업에 대해 강한 책임감을 바탕으로, 맡은 부분은 끝까지 완수하며 해결되지 않는 문제에도 포기하지 않고 도전합니다. 또한, 팀원들과의 적극적인 협력을 통해 시너지를 창출하고, 모든 업무 과정에서 끊임없이 배우고 발전하며 성장하는 것을 지향합니다."
        />
        <ServiceCard
          keywords="돌파와 인정"
          title="도전을 두려워하지 않는 자세"
          description="어려운 상황에 직면했을 때 주저하지 않고 정면으로 돌파하며 문제 해결에 집중합니다. 또한, 업무 과정에서 발생한 실수에 대해서는 솔직하게 인정하고, 그에 대한 책임을 다하여 신속하게 해결하는 것을 원칙으로 삼습니다"
        />
        <ServiceCard
          keywords="계획적인 접근과 깊이 있는 탐구를 통한 성과 창출"
          title=""
          description="개인의 성향과 무관하게 업무에 있어서는 항상 명확한 목표를 설정하고, 효율적인 업무 진행을 위해 우선순위를 고려한 체계적인 계획 수립을 중요하게 생각합니다. 끊임없이 깊이 탐구하고 분석하여 기존의 방식을 개선하고, 항상 더 나은 결과물을 도출하기 위해 노력합니다."
        />
      </div>
    </section>
  );
}
