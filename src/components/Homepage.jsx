import Image from "next/image";

import doodlesImg from "../assets/doodles-mixed-round.svg";
import manLaptopImg from "../assets/man-laptop.svg";

import { ChevronRight, Download } from "lucide-react";

import { Link } from "react-scroll";

export default function Homepage() {
  return (
    <main name="Home" className="h-screen bg-sky-950 md:pt-24">
      <div className="max-w-screen-lg mx-auto flex flex-col justify-center items-center px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full max-w-md">
          <h2 className="text-4xl sm:text-7xl mt-20 font-bold text-white">
            I&apos;M A <span className="text-teal-500">FRONT-END</span> DEVELOPER
          </h2>

          <div className="flex justify-start items-center gap-4">
            <Link
              to="Projetos"
              smooth
              duration={500}
              className="group bg-teal-500 text-white w-fit px-4 py-2 my-10 flex items-center rounded-full cursor-pointer"
            >
              Projects
              <span className="group-hover:rotate-90 duration-300">
                <ChevronRight size={20} className="pl-2" />
              </span>
            </Link>
            <a href="/Currículo.pdf" download="Currículo.pdf" className="flex justify-center items-center gap-2 w-fit bg-slate-600 text-white rounded-full px-4 py-2">Download CV <Download size={20} /></a>
          </div>
        </div>

        <div className="w-2/3 md:w-full relative">
          <Image src={doodlesImg} width={500} alt="" className="absolute -top-28 right-0" />
          <Image src={manLaptopImg} width={350} alt="" className="absolute top-0 right-28" />
        </div>
      </div>
    </main>
  );
}
