import localCrimeChecker from "../assets/projects/localCrimeChecker.png";
import bookCollectionManager from "../assets/projects/bookCollectionManager.png";
import ecoElectronics from "../assets/projects/ecoElectronics.png";
import fullStackForum from "../assets/projects/fullStackForum.png";
import coachFinder from "../assets/projects/coachFinder.png";
import vuePortfolio from "../assets/projects/vuePortfolio.png";
import findACoach from "../assets/projects/findACoach.png";
import natours from "../assets/projects/natours.png";
import forkify from "../assets/projects/forkify.png";
import omnifood from "../assets/projects/omnifood.png";

import css from "../assets/skills/css.svg";
import expressjs from "../assets/skills/expressjs.svg";
import firebase from "../assets/skills/firebase.svg";
import html from "../assets/skills/html.svg";
import javascript from "../assets/skills/javascript.svg";
import mongodb from "../assets/skills/mongodb.svg";
import nextjs from "../assets/skills/nextjs.svg";
import nodejs from "../assets/skills/nodejs.svg";
import pug from "../assets/skills/pug.svg";
import react from "../assets/skills/react.svg";
import sass from "../assets/skills/sass.svg";
import tailwind from "../assets/skills/tailwind.svg";
import threejs from "../assets/skills/threejs.svg";
import vitejs from "../assets/skills/vitejs.svg";
import vue from "../assets/skills/vue.svg";

import userIcon from "../assets/icons/userIcon.svg";
import emailIcon from "../assets/icons/emailIcon.svg";
import locationIcon from "../assets/icons/locationIcon.svg";
import githubIcon from "../assets/icons/githubIcon.svg";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "training",
    title: "Training",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];
export const skillsList = [
  {
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "React JS",
    icon: react,
  },
  {
    name: "Vue JS",
    icon: vue,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Express JS",
    icon: expressjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },

  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Sass",
    icon: sass,
  },
  {
    name: "HTML 5",
    icon: html,
  },

  {
    name: "Pug",
    icon: pug,
  },

  {
    name: "Vite JS",
    icon: vitejs,
  },
  {
    name: "Firebase",
    icon: firebase,
  },
];

export const heroText = {
  subheading: "Welcome to my portfolio, I'm",
  name: "Robin",
  intro:
    "I'm a full-stack web developer living in Devon currently looking for a junior position in a web development role.",
};

export const introduction = {
  subheading:
    "I'm a self-taught web developer currently looking for a junior position in this role.",
  intro:
    "I've completed a variety of Udemy courses providing me with a strong foundation in HTML, CSS, JavaScript, Vue, React, Next.js and Node.js. I have subsequently gained experience building responsive websites from scratch using these tools.",
};

export const skillsSectionIntro = {
  intro:
    "These are the technologies I've gained proficiency in during my web development journey. I'm passionate about learning cutting-edge tools, frameworks, and languages and as such am equipped to tackle diverse challenges and deliver high-quality web applications. Please also find a list of the Udemy courses I've completed.",
};

export const projectSectionIntro = {
  intro:
    "Welcome to the Projects section of my portfolio! Here, I present a collection of completed projects that demonstrate my web development skills. Each project represents a unique application of my knowledge in tools, frameworks, and languages. Each project contains a link to a video demonstration of the project, as well as a link to the project's GitHub repository.",
};

export const tutorialsSectionIntro = {
  intro:
    "As part of the various Udemy courses I've completed, I've finished a number of tutorial projects. These projects were included in the aforementioned course and have provided me with a solid foundation in the tools, frameworks, and languages I've used to build them. Each project contains a link to the project's GitHub repository.",
};

export const contactSectionIntro = {
  intro:
    "Please get in touch if you have any questions or would like to work together!",
};

export const myInfo = [
  {
    icon: userIcon,
    alt: "User Icon",
    text: "Robin Wilschere-Green",
    link: false,
  },
  {
    icon: emailIcon,
    alt: "Email Icon",
    text: "rlinden91@gmail.com",
    link: true,
  },
  {
    icon: locationIcon,
    alt: "Location Icon",
    text: "Devon, England",
    link: false,
  },
  {
    icon: githubIcon,
    alt: "Github Icon",
    text: "github.com/rwgr",
    link: true,
  },
];

export const training = [
  {
    title: "Next.js & React - The Complete Guide (incl. Two Paths!)",
    link: "https://www.udemy.com/course/nextjs-react-the-complete-guide/",
  },
  {
    title: "Vue - The Complete Guide (incl. Router & Composition API)",
    link: "https://www.udemy.com/course/vuejs-2-the-complete-guide/",
  },
  {
    title: "Node.js, Express, MongoDB & More: The Complete Bootcamp 2023",
    link: "https://www.udemy.com/course/nodejs-express-mongodb-bootcamp/",
  },
  {
    title: "The Complete JavaScript Course 2023: From Zero to Expert!",
    link: "https://www.udemy.com/course/the-complete-javascript-course/",
  },
  {
    title: "Build Responsive Real-World Websites with HTML and CSS",
    link: "https://www.udemy.com/course/design-and-develop-a-killer-website-with-html5-and-css3/",
  },
  {
    title: "Advanced CSS and Sass: Flexbox, Grid, Animations and More!",
    link: "https://www.udemy.com/course/advanced-css-and-sass/",
  },
];

export const projectsList = [
  {
    id: "1",
    title: "Local Crime Checker",
    description:
      "Web application utilising the UK Police public crime API. Allows a user to view crime data for an area, and offers comparisons with previous months or years allowing a user to see trends and changes in crime within the area specified.",
    image: localCrimeChecker,
    demo: "https://www.youtube.com/watch?v=iwf1tJdDMwc",
    code: "https://github.com/rwgr/Local-Crime-Checker",
    skills: [html, css, javascript, vue],
  },
  {
    id: "2",
    title: "Book Collection Manager",
    description:
      "Create Read Update & Delete (CRUD) application designed to simplify the organisation of a user's book collection. Utilising Vue Router for routing, Vuex for state management, Vuelidate for form validation and the Open Library API for adding books via their identifiers.",
    image: bookCollectionManager,
    demo: "https://www.youtube.com/watch?v=xIU1O3Cqcw4",
    code: "https://github.com/rwgr/Book-Collection-Manager",
    skills: [html, css, javascript, vue],
  },
  {
    id: "3",
    title: "ecoElectronics Store Front",
    description:
      "Mock-up of a store front for a conceptual environmentally friendly online computer retailer using modern web design principles.",
    image: ecoElectronics,
    demo: "https://www.youtube.com/watch?v=M_DW04ho_G4",
    code: "https://github.com/rwgr/ecoElectronics",
    skills: [html, css, javascript, vue],
  },
  {
    id: "4",
    title: "Full Stack Forum",
    description:
      "A basic full stack forum project. Users can sign-up and login allowing them to create posts and leave comments. Users can edit and delete their own posts and comments, change their password and view other users' posts and comments.",
    image: fullStackForum,
    demo: "https://www.youtube.com/watch?v=Q7wpximrd9Q",
    code: "https://github.com/rwgr/Full-Stack-Forum",
    skills: [nodejs, expressjs, mongodb, pug],
  },
  {
    id: "5",
    title: "Coach Finder",
    description:
      "Web application for facilitating contact between coaches advertising their services and their customers. Users can contact any coach via using the in-built messaging system. A user can also register as a coach, and receive messages themselves. (continued tutorial project,  originally started as part of a Udemy course, with added features).",
    image: coachFinder,
    demo: "https://www.youtube.com/watch?v=Vb4FmRDL3KA",
    code: "https://github.com/rwgr/Coach-Finder",
    skills: [html, css, javascript, vue],
  },
  {
    id: "6",
    title: "Vue Portfolio",
    description:
      "This portfolio project. Made using Vue, utilising Tailwind CSS for styling and Three.js to create the animated background that can be enabled in the sidebar.",
    image: vuePortfolio,
    demo: "https://www.youtube.com/watch?v=iwf1tJdDMwc",
    code: "https://github.com/rwgr/Local-Crime-Checker",
    skills: [vue, threejs, tailwind, javascript],
  },
];

export const tutorials = [
  {
    id: "1",
    title: "Find A Coach",
    description:
      "Tutorial project completed as part of Vue Udemy Course, Find A Coach web app. Project #4 above is an expanded, remade version of this tutorial project, with additional features added.",
    image: findACoach,
    code: "https://github.com/rwgr/Tutorial-Find-A-Coach",
  },
  {
    id: "2",
    title: "Natours",
    description:
      "Tutorial project completed as part of Node.js Udemy Course, a tour booking site. This is a RESTful API and web app with Node.js security and payments via Stripe. and Mongoose.",
    image: natours,
    code: "https://github.com/rwgr/Tutorial-Natours",
  },
  {
    id: "3",
    title: "Forkify",
    description:
      "Tutorial project completed as part of a JavaScript Udemy course. Web application connects to a Public API allowing users to search for recipes. Users can also upload their own recipes.",
    image: forkify,
    code: "https://github.com/rwgr/Tutorial-Forkify",
  },
  {
    id: "4",
    title: "Omnifood",
    description:
      "Tutorial project completed as part of HTML & CSS Udemy Course. This is a responsive webpage built using modern design JavaScript and CSS.",
    image: omnifood,
    code: "https://github.com/rwgr/Tutorial-Omnifood",
  },
];
