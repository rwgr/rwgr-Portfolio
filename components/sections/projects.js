import { projectsList, projectSectionIntro } from "../../content/index.js";
import ProjectCard from "../ProjectCard.js";
import SectionWrapper from "../SectionWrapper.js";
import SectionIntro from "../SectionIntro.js";
import Image from "next/image.js";
import projectIllustration from "../../assets/illustrations/programming.svg";
import { useContext, useEffect } from "react";
import ActiveContext from "../../store/activeContext.js";
import { useInView } from "react-intersection-observer";

function Projects() {
  /* Highlights section in navbar when in view */
  const activeCtx = useContext(ActiveContext);

  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });

  useEffect(() => {
    if (inView) {
      activeCtx.setActive("Experience");
    }
  }, [inView]);

  return (
    <div ref={ref}>
      <SectionWrapper
        bgColour="bg-secondaryBlue"
        background="bg-projects"
        elementId="projects"
      >
        <SectionIntro
          subHeading="Experience"
          section="Projects."
          introduction={projectSectionIntro.intro}
        />
        <div className="relative">
          <Image
            src={projectIllustration}
            width={350}
            height={350}
            alt="Programming illustration"
            className="illustration -top-96 right-0"
          />
          <ul className="mx-auto flex gap-32 flex-wrap justify-center ">
            {projectsList.map((project) => {
              return <ProjectCard key={project.id} project={project} />;
            })}
          </ul>
        </div>
      </SectionWrapper>
    </div>
  );
}

export default Projects;
