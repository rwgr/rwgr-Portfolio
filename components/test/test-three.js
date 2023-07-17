import React from "react";

import BallCanvas from "./CubeCanvas.js";
import { skillsList } from "../../content/index.js";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {skillsList.map((skill) => (
        <div className="w-28 h-28" key={skill.name}>
          <BallCanvas icon={skill.icon} />
        </div>
      ))}
    </div>
  );
};

export default Tech;
