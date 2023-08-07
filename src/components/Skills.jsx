import htmlImg from "../assets/html.png";
import cssImg from "../assets/css.png";
import javascriptImg from "../assets/javascript.png";
import typescriptImg from "../assets/typescript.jpg";
import reactImg from "../assets/react.png";
import tailwindImg from "../assets/tailwind.png";
import nextjsImg from "../assets/nextjs.png";
import githubImg from "../assets/github.png";
import materialUiImg from "../assets/material-ui.png";
import styledImg from "../assets/styled-components.png";

import Image from "next/image";

export default function Skills() {
  const skills = [
    {
      id: 1,
      src: htmlImg,
      title: "HTML",
      style: "border-orange-500",
    },
    {
      id: 2,
      src: cssImg,
      title: "CSS",
      style: "border-blue-500",
    },
    {
      id: 3,
      src: javascriptImg,
      title: "JavaScript",
      style: "border-yellow-500",
    },
    {
      id: 4,
      src: typescriptImg,
      title: "TypeScript",
      style: "border-blue-500",
    },
    {
      id: 5,
      src: reactImg,
      title: "React",
      style: "border-blue-400",
    },
    {
      id: 6,
      src: tailwindImg,
      title: "TailwindCSS",
      style: "border-sky-400",
    },
    {
      id: 7,
      src: nextjsImg,
      title: "NextJS",
      style: "border-white",
    },
    {
      id: 8,
      src: githubImg,
      title: "Github",
      style: "border-gray-400",
    },
    {
      id: 9,
      src: materialUiImg,
      title: "Material UI",
      style: "border-blue-600",
    },
    {
      id: 10,
      src: styledImg,
      title: "Styled Components",
      style: "border-pink-200",
    },
  ];

  return (
    <div
      name="Habilidades"
      className='bg-sky-950 bg-[url("../assets/doodle-bg.svg")] w-full h-screen py-24'
    >
      <div
        className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center
            items-center md:items-start w-full h-full text-white"
      >
        <div>
          <p className="text-6xl font-bold">Skills</p>
          <p className="text-xl py-6">These are the techs i use:</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {skills.map((skill) => (
            <div
              key={skill.id}
              className={`bg-gray-800/50 hover:scale-105 border duration-500 p-4 rounded-lg ${skill.style}`}
            >
              <Image
                src={skill.src}
                alt="Tecnologia"
                className="w-20 mx-auto"
              />
              <p className="mt-4">{skill.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
