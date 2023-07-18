import { introduction } from "../../content/index.js";
import Image from "next/image.js";
import Link from "next/link.js";
import SectionWrapper from "../SectionWrapper.js";
import SectionIntro from "../SectionIntro.js";
import Tilt from "react-parallax-tilt";
import aboutIllustration from "../../assets/illustrations/about.svg";
import { myInfo } from "../../content/index.js";

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
          src={aboutIllustration}
          width={350}
          height="auto"
          alt="About me illustration"
          className="illustration -top-80 -right-[225px] "
        />
        <ul className="list-none mx-0 sm:mx-4 py-2 px-6 grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-10 content-between">
          {myInfo.map((info, index) => {
            return (
              <Tilt scale="1.2" key={index}>
                <li className="flex gap-2 items-center">
                  {!info.link ? (
                    <Image
                      src={info.icon}
                      alt={info.alt}
                      title={info.title}
                      width={50}
                      height={50}
                      className={`object-contain ${
                        info.link ? "infoIcon " : null
                      }`}
                    />
                  ) : (
                    <Link href={info.link} target="_blank">
                      <Image
                        src={info.icon}
                        alt={info.alt}
                        title={info.title}
                        width={50}
                        height={50}
                        className={`object-contain ${
                          info.link ? "infoIcon " : null
                        }`}
                      />
                    </Link>
                  )}

                  <span>{info.text}</span>
                </li>
              </Tilt>
            );
          })}
        </ul>
      </div>
    </SectionWrapper>
  );
}

export default Intro;
