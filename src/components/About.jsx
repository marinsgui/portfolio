import Image from "next/image";

import manChairImg from "../assets/man-chair.png";

export default function About() {
  return (
    <div name="Sobre" className="w-full h-screen bg-sky-950 text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center items-center md:items-start w-full">
        <div className="pb-4">
          <p className="text-6xl font-bold">
            About <span className="text-teal-500">me</span>
          </p>
        </div>
        <div className="flex justify-center items-center gap-10">
          <div className="w-1/2">
            <p>
              Front End Developer. I have knowledge in React, Next, TypeScript
              and other web technologies. I am passionate about design and UX,
              and I always seek to create attractive and user-friendly
              solutions. I have strong teamwork skills and am able to
              collaborate with backend developers to deliver high quality
              projects on time.
            </p>
            <br />
            <p>
              I am currently working on a open-source project called Routinely
              with the following techs: React, TypeScript, Styled Components. I
              am always looking to update myself and learn from the latest
              trends and technologies in the market.
            </p>
          </div>
          <Image src={manChairImg} width={500} alt="" />
        </div>
      </div>
    </div>
  );
}
