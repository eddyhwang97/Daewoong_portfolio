import React from "react";
import { CardWrapper } from "./ui/CardWrapper";
import Button from "./ui/Button";
import { ExternalLink, Github } from "lucide-react";
function ProjectCard({
  title,
  description,
  stack,
  image,
  demoLink,
  githubLink,
}) {
  return (
    <CardWrapper className="overflow-hidden group flex flex-col justify-around ">
      <div className="relative h-48 mb-4 cursor-grab">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          fill="true"
          className="w-full h-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <h3 className="text-lg font-semibold group-hover:text-[var(--primary)] transition-colors mb-2">
        {title}
      </h3>
      <p className="text-gray-400 text-sm mb-4">{description}</p>
      <div className="mb-2">
        {stack.map((stack, index) => (
          <span
            key={index}
            className="text-xs text-gray-100 border border-gray-400 px-2 py-1 m-1 inline-block"
          >
            {stack}
          </span>
        ))}
      </div>
      <div className="flex gap-4">
        <Button
          variant="outline"
          size="sm"
          asChild
          className="text-[var(--primary)] border-[var(--primary)] hover:bg-[var(--primary)] hover:text-white active:bg-primary/90"
        >
          <a
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <ExternalLink size={16} /> Demo
          </a>
        </Button>
        <Button
          variant="outline"
          size="sm"
          asChild
          className="text-[var(--primary)] border-[var(--primary)] hover:bg-[var(--primary)] hover:text-white active:bg-primary/90"
        >
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <Github size={16} /> Code
          </a>
        </Button>
      </div>
    </CardWrapper>
  );
}

export default function Projects() {
  const projects = [
    {
      title: "Trip Picker-루트메이커",
      description: "여행루트 만들어주는 웹서비스",
      image: "/trippicker.png",
      demoLink: "https://trip-picker-steel.vercel.app/",
      githubLink: "https://github.com/eddyhwang97/TRIP-PICKER-PROJECT",
      stack: [
        "React",
        "HTML",
        "SCSS",
        "Javascript",
        "jquery",
        "ZUSTAND",
        "RESTFull API",
        "GoogleMap API",
        "Node.js",
        "Express",
        "Figma",
        "Github",
        "Notion",
        "Vercel",
      ],
    },
    {
      title: "7788-독립서점",
      description: "독립도서를 검색 및 대출할 수 있는 웹서비스",
      image: "/7788.png",
      demoLink: "eddyhwang97.github.io/FED-TEAM-7788/project/build",
      githubLink: "https://github.com/eddyhwang97/FED-TEAM-7788",
      stack: [
        "React",
        "HTML",
        "SCSS",
        "Javascript",
        "jquery",
        "ContextAPI",
        "React-Router-Dom ",
        "Node.js",
        "Figma",
        "Github",
        "Slack",
        "Notion",
      ],
    },
    {
      title: "템버린즈 리뉴얼 프로젝트",
      description: "Vue.js를 사용한 템버린즈 사이트 리뉴얼",
      image: "/tamberins.png",
      demoLink: "kimeming.github.io/FED-TEAM-6401/",
      githubLink: "https://github.com/kimeming/FED-TEAM-6401",
      stack: [
        "Vue",
        "HTML",
        "CSS",
        "Javascript",
        "jquery",
        "VueRouter",
        "Node.js",
        "Figma",
        "Github",
        "Notion",
      ],
    },
    {
      title: "현대카드 소개-개인프로젝트",
      description: "현대카드 소개 페이지",
      image: "/cardview.png",
      demoLink: "eddyhwang97.github.io/FED-Project-Daewoong/",
      githubLink: "https://github.com/eddyhwang97/FED-Project-Daewoong",
      stack: ["HTML", "CSS", "Javascript", "jquery", "Figma", "Github"],
    },
  ];
  return (
    <section className="py-16" id="works">
      <div className="text-center mb-12">
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}
