import React from "react";
const skillList = [
  "React",
  "HTML",
  "CSS",
  "SCSS",
  "Tailwind",
  "JavaScript",
  "Node.js",
  "Figma",
  "Github",
  "Firebase",
  "Zustand",
];
function SkillItem({ name }) {
  return (
    <div className="border border-gray-400 rounded-lg p-4">
      <div className="flex flex-col gap-3  justify-between items-center ">
        <span className="text-lg font-medium">{name}</span>
      </div>
    </div>
  );
}
export default function Skills() {
  return (
    <section className="py-16" id="skills">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">My Skills&Tools</h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
        {skillList.map((skill) => (
          <SkillItem
            key={skill}
            name={skill}
          />
        ))}
      </div>
    </section>
  );
}
