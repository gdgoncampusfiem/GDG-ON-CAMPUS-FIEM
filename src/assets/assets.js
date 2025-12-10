import {
  FaLightbulb,
  FaPaintBrush,
  FaCode,
  FaReact,
  FaServer,
  FaMobileAlt,
  FaTools,
} from "react-icons/fa";

import heropic from "./heropic.jpg";

// import logo from "../images/logo.png";


export const assets = {
  profileimg,
};

export const aboutinfo = [
  {
    icon: FaLightbulb,
    title: "About Me",
    description:
      "I am a passionate developer with a knack for creating efficient and scalable web applications. With a strong foundation in both front-end and back-end technologies, I strive to deliver seamless user experiences.",
    color: "text-purple",
  },
  {
    icon: FaPaintBrush,
    title: "Design",
    description:
      "I have a keen eye for design and enjoy crafting visually appealing and user-friendly interfaces. My design philosophy centers around simplicity, usability, and aesthetics.",
    color: "text-pink",
  },
  {
    icon: FaCode,
    title: "Development",
    description:
      "Proficient in a variety of programming languages and frameworks, I specialize in building robust web applications. I am committed to writing clean, maintainable code and following best practices.",
    color: "text-blue",
  },
];


export const skills = [
  {
    title: "Front-End Development",
    icon: FaReact,
    description:
      "Experienced in building responsive and dynamic user interfaces using React, HTML, CSS, and JavaScript.",
    tags: ["React", "JavaScript", "HTML", "CSS"],
  },
  {
    title: "Back-End Development",
    icon: FaServer,
    description:
      "Skilled in server-side development with Node.js, Express, and database management using MongoDB and SQL.",
    tags: ["Node.js", "Firebase"],
  },
];


export const projects = [
  {
    title: "Realtime Todo App",
    description:
      "A realtime todo application that allows users to create, update, and delete tasks with instant synchronization across devices.",
    tags: ["React", "Firebase", "CSS"],
    image: projimg1,
    link: "https://realtime-to-do-list.netlify.app/",
    tech: ["React", "Firebase", "CSS"],
  },
];

export const workdata =[
    {
        description: "Recent engineering graduate from Future Institute of Engineering and Management with a passion for software development and technology innovation. Strong foundation in programming (C++, Python) and front-end technologies (HTML, CSS, React). Enthusiastic about learning new tools, collaborating in teams, and building meaningful digital solutions.",
        color: "purple",
    }
]
