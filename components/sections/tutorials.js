import { tutorialsSectionIntro } from "../../content/index.js";
import SectionWrapper from "../SectionWrapper.js";
import SectionIntro from "../SectionIntro.js";

function Tutorials() {
  return (
    <SectionWrapper>
      <SectionIntro
        subHeading="Experience"
        section="Tutorials"
        introduction={tutorialsSectionIntro.intro}
      />
    </SectionWrapper>
  );
}

export default Tutorials;
