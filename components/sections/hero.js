import Image from "next/image";
import avatar from "../../assets/bird-transparent.png";
import SectionWrapper from "../SectionWrapper";
import { heroText } from "../../content/index.js";

function Hero() {
  return (
    <SectionWrapper elementId="hero">
      <div className=" py-40 min-h-[500px] flex items-center mx-auto max-w-[900px] relative">
        <div className="flex flex-col justify-center items-start h-28 mt-20 gap-5 px-8">
          <h1 className="text-5xl text-white font-extrabold leading-snug max-w-[600px] ">
            {heroText.subheading}
            <span className="text-primaryBlue">&nbsp;{heroText.name}</span>.
          </h1>
          <h2 className="text-2xl text-white font-bold w-full sm:w-2/3">
            {heroText.intro}
          </h2>
        </div>
        <div>
          <Image
            src={avatar}
            width={250}
            height={250}
            alt="Robin bird image"
            className="absolute top-80 lg:top-36  left-88 -right-10 lg:right-0 mx-auto my-auto -z-10 invisible sm:visible scale-75 md:scale-100 "
          />
        </div>
      </div>
    </SectionWrapper>
  );
}

export default Hero;
