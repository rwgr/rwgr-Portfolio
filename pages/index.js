import Image from "next/image";
import { Fragment } from "react";
import Head from "next/head";

import Hero from "../components/sections/hero";
import Intro from "../components/sections/intro";
import Skills from "../components/sections/skills";
import Projects from "@/components/sections/projects";
import Tutorials from "@/components/sections/tutorials";
import Contact from "@/components/sections/contact";
import TestThree from "@/components/test/test-three.js";
import Overlay from "@/components/ui/overlay.js";

import { useContext } from "react";
import ImageContext from "../store/imageContext.js";

function HomePage() {
  const imageCtx = useContext(ImageContext);

  const image = imageCtx.image;
  return (
    <Fragment>
      <Head>
        <title>Robin | Portfolio</title>
        <meta
          name="description"
          content="Welcome to my portfolio! I'm Robin, a full-stack web developer."
        />
      </Head>
      <div className="flex flex-col flex-grow">
        <Hero />
        <Intro />
        <Skills />
        <Projects />
        <Contact />
        {image && <Overlay />}
      </div>
    </Fragment>
  );
}

export default HomePage;
