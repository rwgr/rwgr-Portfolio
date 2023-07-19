import { skillsList } from "../../content/index.js";
import Image from "next/image";
import SectionWrapper from "../SectionWrapper.js";
import SectionIntro from "../SectionIntro.js";
import { skillsSectionIntro, training } from "../../content/index.js";
import linkIcon from "../../assets/icons/linkIcon.svg";
import Link from "next/link.js";
import skillsIllustration from "../../assets/illustrations/personal-info.svg";
import { motion } from "framer-motion";

function isOdd(num) {
  return num % 2;
}

function Skills() {
  return (
    <SectionWrapper
      bgColour="bg-shadeGreen"
      background="bg-skills"
      elementId="training"
    >
      <SectionIntro
        subHeading="Training"
        section="Skills."
        introduction={skillsSectionIntro.intro}
      />
      <div className="flex flex-col lg:flex-row gap-16 lg:gap-5 relative">
        <Image
          src={skillsIllustration}
          width={500}
          height="auto"
          alt="Personal information illustration"
          className="illustration -top-96 -right-16"
        />
        <ul className="grid grid-cols-3 md:grid-cols-4 gap-10 mx-auto shadow-2xl p-4 items-start">
          {skillsList.map((skill, index) => {
            return (
              <motion.li
                key={index}
                id="skill"
                className="flex flex-col items-center justify-between gap-2 cursor-grab"
                drag
                dragConstraints={{
                  top: -50,
                  left: -50,
                  right: 50,
                  bottom: 50,
                }}
              >
                <p className="font-semibold text-lg text-center">
                  {skill.name}
                </p>
                <Image
                  src={skill.icon.src}
                  alt={skill.name}
                  width={60}
                  height={60}
                  className="ghost-remove"
                />
              </motion.li>
            );
          })}
        </ul>
        <div className="p-0 sm:p-5 shadow-2xl  ">
          <h2 className="uppercase text-xl font-semibold tracking-wider text-end mb-4 lg:mb-0">
            Completed Courses
          </h2>
          <ul className="flex flex-col justify-evenly h-full gap-4 lg:gap-0">
            {training.map((course, index) => {
              return (
                <Link href={course.link} target="_blank" key={index}>
                  <motion.li
                    initial={{ x: 10, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.4 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href={course.link}
                    target="_blank"
                    className={`flex gap-5 items-center rounded-lg p-2 w-full border-b-2 border-highlightGreen ${
                      isOdd(index) ? "bg-primaryBlue" : " bg-primaryBlue"
                    } hover:border-white hover:border-b-4  cursor-pointer  `}
                  >
                    <Image
                      src={linkIcon}
                      width={40}
                      height={40}
                      alt="Link icon"
                      className="hover:scale-90 rounded-lg p-1 hover:bg-highlightGreen transition duration-300 ease-in-out"
                    />

                    <p className=" text-base font-semibold">{course.title}</p>
                  </motion.li>
                </Link>
              );
            })}
          </ul>
        </div>
      </div>
    </SectionWrapper>
  );
}

export default Skills;
