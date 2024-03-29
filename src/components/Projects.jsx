import Image from "next/image";

import moviesLib from "../assets/projects/movieslib.png";
import panelinha from "../assets/projects/panelinha.png";
import tasks from "../assets/projects/tasks.png";
import shopping from "../assets/projects/shop-ping.png";
import calculadoraImc from "../assets/projects/calculadoraimc.png";
import bodyfitImg from "../assets/projects/bodyfit.png";

export default function Projects() {
  const projects = [
    {
      id: 1,
      src: moviesLib,
      code: "https://github.com/marinsgui/movies-lib",
      project: "https://movies-lib-blond.vercel.app/",
    },
    {
      id: 2,
      src: bodyfitImg,
      code: "https://github.com/marinsgui/bodyfit",
      project: "https://bodyfit-gray.vercel.app/",
    },
    {
      id: 3,
      src: shopping,
      code: "https://github.com/marinsgui/shop-ping",
      project: "https://shop-ping.vercel.app/",
    },
    {
      id: 4,
      src: panelinha,
      code: "https://github.com/marinsgui/panelinha",
      project: "https://panelinha.vercel.app/",
    },
    {
      id: 5,
      src: tasks,
      code: "https://github.com/marinsgui/tasks",
      project: "https://tasks-tau-six.vercel.app/",
    },
    {
      id: 6,
      src: calculadoraImc,
      code: "https://github.com/marinsgui/calculadora-de-imc",
      project: "https://calculadora-de-imc-eta.vercel.app/",
    },
  ];

  return (
    <div
      name="Projetos"
      className='bg-sky-950 bg-[url("../assets/doodle-bg.svg")] w-full text-white md:h-screen'
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center items-center md:items-start w-full h-full">
        <div className="pb-8">
          <p className="text-6xl font-bold">Projects</p>
          <p className="text-xl py-6">Check out some of my projects:</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:p-0">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800/60 shadow-md shadow-gray-600 rounded-lg"
            >
              <Image
                src={project.src}
                alt="Projeto"
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex justify-center items-center">
                <a
                  href={project.project}
                  target="_blank"
                  rel="external"
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                >
                  Project
                </a>
                <a
                  href={project.code}
                  target="_blank"
                  rel="external"
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                >
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
