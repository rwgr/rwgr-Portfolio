import { motion } from "framer-motion";
import Image from "next/image.js";
import Link from "next/link.js";

import github from "../assets/icons/githubIcon.svg";
import youtube from "../assets/icons/youtubeIcon.svg";
import Tilt from "react-parallax-tilt";
import { useContext } from "react";
import ImageContext from "../store/imageContext.js";

function ProjectCard(props) {
  const imageCtx = useContext(ImageContext);

  return (
    <Tilt>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 1 }}
      >
        <li
          key={props.project.id}
          className="max-w-[400px]  p-4 sm:p-8 shadow-xl rounded-xl flex flex-col gap-6 justify-between mx-2 card bg-primaryBlue min-h-[600px]"
        >
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-1">
              <h4 className="uppercase text-xs font-semibold tracking-wide">
                Project #{props.project.id}
              </h4>
              <h2 className="text-2xl font-semibold">{props.project.title}</h2>
            </div>
            <div className="flex justify-between items-center">
              <ul className="flex gap-2">
                {props.project.skills.map((skill) => {
                  return (
                    <li key={skill.src} className="flex flex-row items-center">
                      <Image
                        src={skill.src}
                        alt="Skill icon"
                        width={35}
                        height={35}
                      />
                    </li>
                  );
                })}
              </ul>
              <div className="flex gap-4 items-center">
                <motion.div
                  whileHover={{ scale: 1.5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Link href={props.project.code} target="_blank">
                    <Image
                      src={github}
                      alt="GitHub icon"
                      width={35}
                      height={35}
                    />
                  </Link>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Link href={props.project.demo} target="_blank">
                    <Image
                      src={youtube}
                      alt="YouTube icon"
                      width={35}
                      height={35}
                    />
                  </Link>
                </motion.div>
              </div>
            </div>
            <p>{props.project.description}</p>
          </div>
          <motion.div whileHover={{ scale: 1.35 }} whileTap={{ scale: 0.9 }}>
            <Image
              src={props.project.image}
              alt={props.project.title}
              height={150}
              width={450}
              className="w-auto h-auto cursor-pointer "
              onClick={() => {
                imageCtx.showImage(props.project.title);
              }}
            />
          </motion.div>
        </li>
      </motion.div>
    </Tilt>
  );
}

export default ProjectCard;
