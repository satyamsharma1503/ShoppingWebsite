import React from "react";
import Marquee from "react-fast-marquee";

function Marquees() {
  const skills = [
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "JavaScript",
    "Tailwind CSS",
    "Next.js",
    "TypeScript",
    "Redux",
  ];

  return (
    <div className="w-full">
      <Marquee
        speed={60}
        gradient={false}
        pauseOnHover={true}
        className="bg-[#069f1a] py-1 cursor-grab active:cursor-grabbing"
      >
        {skills.map((skill, i) => (
          <span key={i} className="text-white text-md font-semibold mx-8">
            {skill}
          </span>
        ))}
      </Marquee>
    </div>
  );
}

export default Marquees;
