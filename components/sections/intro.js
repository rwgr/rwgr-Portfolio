import { introduction } from "../../content/index.js";
import Image from "next/image.js";
import Link from "next/link.js";
import SectionWrapper from "../SectionWrapper.js";
import SectionIntro from "../SectionIntro.js";
import Tilt from "react-parallax-tilt";

function Intro() {
  return (
    <SectionWrapper bgColour="bg-secondaryBlue" background="" elementId="about">
      <SectionIntro
        subHeading="Introduction"
        section="About Me"
        introduction={introduction.intro}
      />

      <div className=" bg-primaryBlue gap-6 py-4 items-center text-xl font-medium sm:font-semibold max-h-[400px] max-w-[900px] mx-auto shadow-xl -mt-10 border-4 border-highlightGreen relative">
        <Image
          src="./about.svg"
          width={350}
          height={350}
          className="illustration -top-80 -right-[225px] "
        />
        <ul className="list-none mx-4 py-2 px-6  grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-10 content-between">
          <Tilt scale="1.2">
            <li className="flex gap-2 items-center">
              <Image
                src="/user.svg"
                alt="User Icon"
                title="My Name"
                width={50}
                height={50}
                className="object-contain"
              />

              <span>Robin Wilschere-Green</span>
            </li>
          </Tilt>
          <Tilt scale="1.2">
            <li className="flex gap-2 items-center">
              <Image
                src="/location.svg"
                alt="Location Icon"
                title="My Location"
                width={50}
                height={50}
                className="object-contain"
              />
              <span>Devon, England</span>
            </li>
          </Tilt>
          <Tilt scale="1.2">
            <li className="flex gap-2 items-center">
              <Link href="mailto:rlinden91@gmail.com" target="_blank">
                <Image
                  src="/email.svg"
                  alt="Email Icon"
                  title="My Email"
                  width={50}
                  height={50}
                  className="infoIcon"
                />
              </Link>
              <span>rlinden91@gmail.com</span>
            </li>
          </Tilt>
          <Tilt scale="1.2">
            <li className="flex gap-2 items-center">
              <Link href="https://github.com/rwgr" target="_blank">
                <Image
                  src="/github.svg"
                  alt="GitHub Icon"
                  title="My GitHub"
                  width={50}
                  height={50}
                  className="infoIcon"
                />
              </Link>
              <span>github.com/rwgr</span>
            </li>
          </Tilt>
        </ul>
      </div>
    </SectionWrapper>
  );
}

export default Intro;
