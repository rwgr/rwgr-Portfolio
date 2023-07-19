import { introduction } from "../../content/index.js";
import Image from "next/image.js";
import Link from "next/link.js";
import SectionWrapper from "../SectionWrapper.js";
import SectionIntro from "../SectionIntro.js";
import Tilt from "react-parallax-tilt";
import aboutIllustration from "../../assets/illustrations/about.svg";
import { myInfo, myCurrent } from "../../content/index.js";

function Intro() {
  return (
    <SectionWrapper
      bgColour="bg-primaryBlue"
      background="bg-intro"
      elementId="about"
    >
      <SectionIntro
        subHeading="About"
        section="About me."
        introduction={introduction.intro}
      />

      <div className="flex flex-col bg-secondaryBlue gap-6 py-4 items-center text-xl font-medium sm:font-semibold max-h-fit lg:max-h-[400px] max-w-[900px] mx-auto shadow-xl -mt-10 border-4 border-highlightGreen relative">
        <Image
          src={aboutIllustration}
          width={280}
          height="auto"
          alt="About me illustration"
          className="illustration -top-[200px] -right-[150px] "
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
                      width={60}
                      height={60}
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
                        width={60}
                        height={60}
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

        <div className="flex  content-between py-7  mx-auto sm:mx-4 px-4 lg:px-2 gap-5 lg:gap-10 border-t-4 border-highlightGreen align-middle justify-center">
          <h3 className="text-3xl">In Progress</h3>
          <div className="flex flex-col gap-4 w-4/6 text-lg">
            <p className="">{myCurrent.current}</p>
            <p>
              You can find the course{" "}
              <Link href={myCurrent.link} target="_blank">
                <span className="text-highlightGreen hover:text-primaryGreen transition-all transform duration:100">
                  on Udemy.
                </span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

export default Intro;
