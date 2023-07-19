import Image from "next/image";
import avatar from "../../assets/bird-transparent.png";
import SectionWrapper from "../SectionWrapper";
import { heroText } from "../../content/index.js";
import { Link } from "react-scroll";

import { MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

function Hero() {
  return (
    <SectionWrapper elementId="hero">
      <div className=" py-40 min-h-[500px] flex items-center mx-auto max-w-[1200px] relative ">
        <div className="flex flex-col justify-center items-start h-28 mt-20 gap-5 px-8 ">
          <h1 className="text-5xl text-white font-extrabold leading-snug max-w-[600px] ">
            {heroText.subheading}
            <span className="text-highlightGreen">&nbsp;{heroText.name}</span>.
          </h1>
          <h2 className="text-2xl text-white font-bold w-full sm:w-2/3">
            {heroText.intro}
          </h2>

          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="cursor-pointer z-10 bg-highlightGreen text-white font-semibold px-8 text-xl py-3 rounded-full shadow-lg hover:bg-white hover:text-highlightGreen transform transition-all  duration-300 ease-in-out"
          >
            Contact Me
          </Link>
          <div className="absolute h-[300px] w-[280px] sm:h-[700px] sm:w-[700px] mx-auto left-0 sm:-left-44 md:-left-0">
            <Canvas
              camera={{ fov: 40, position: [0, 0, 5] }}
              className="-z-10 p-0 m-0 block box-border scale-110 sm:scale-100"
            >
              <OrbitControls enableZoom={false} />
              <ambientLight intesity={1} />
              <directionalLight position={[1, 2, 3]} />
              <Sphere args={[1, 100, 200]} scale={1.2}>
                <MeshDistortMaterial
                  color="#162234"
                  attach="material"
                  distort={0.6}
                  speed={2}
                />
              </Sphere>
            </Canvas>
          </div>
        </div>
        <div>
          <Image
            src={avatar}
            width={250}
            height={250}
            alt="Robin bird image"
            className="absolute top-48  right-[50px] -z-10 invisible lg:visible scale-75 md:scale-100  "
          />
        </div>
      </div>
    </SectionWrapper>
  );
}

export default Hero;
