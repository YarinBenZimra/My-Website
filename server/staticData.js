////////////ABOUT ME PAGE - MainHeader - Footer///////////////////////////////
export const userDetails = {
  firstName: "Yarin",
  lastName: "Benzimra",
  role: "Full Stack Developer",
  image: "",
  phone: "0546605500",
  email: "yarinbenzirma@gmail.com",
  address: "Rishon LetZion, Israel",
  aboutMeDescription:
    "I'm a Full Stack Developer with a passion for creating modern web applications and ensuring seamless user experiences. Let's build something amazing together.",
  linkdinUrl: "https://www.linkedin.com/in/yarin-benzimra",
  githubUrl: "https://github.com/YarinBenZimra",
  facebookUrl: "https://www.facebook.com/yarin.benzimra/",
};
//////////// RESUME PAGE //////////////////
const projectsList = [
  "Designed and developed a cross-platform educational tool for iOS and Android to help language learners select contextually appropriate near synonyms. Collected real-world sentence examples and analyzed them using Natural Language Processing (NLP) and Large Language Models (LLM) to compute perplexity and probability, ensuring accurate synonym selection. Technologies used: React Native, Node.js, OpenAI API.",
  "Developed an application that uses Facebook's API and realizes design patterns using Windows Forms as windows-based user interface.",
  "Created an environment that simulates Facebook in a console-based user interface in C++.",
  "Developed a full-stack project featuring a containerized HTTP server for a TODO app in JavaScript with integrated logging capabilities using Docker, complemented by a Flutter-based task management app for iOS and Android that serves as the client for the Node.js server.",
];
const armyExperienceList = [
  "Skillfully commanded and led a team of 15 soldiers.",
  "Completed Sergeant Course. Collaborated with senior military officer.",
  "Handle challenging field conditions and high-pressure situations with composure and efficiency.",
  "Excelled in executing special missions under tight deadlines.",
  "Promoted due to excellent service.",
];
const summaryData = [
  {
    id: 1,
    years: "",
    title: "",
    description: [
      "Aspiring software developer with a solid academic background in computer science and hands-on experience in Full Stack Development. Holding a B.Sc. in Computer Science. I possess a strong understanding of programming, algorithms, and system design, and I am eager to contribute to a dynamic team. I am well-prepared to make an immediate impact and enthusiastic about leveraging my skills to drive technical excellence.",
    ],
    descriptionType: "h3",
  },
];
const educationData = [
  {
    id: 1,
    years: "2015-2017",
    title: "Revivim High School",
    description: ["Matriculation Certificate"],
    descriptionType: "h3",
  },
  {
    id: 2,
    years: "2021-2024",
    title: "The Academic College of Tel Aviv-Yaffo",
    description: ["Bachelor’s Science Degree in Computer Science"],
    descriptionType: "h3",
  },
];
const projectsData = [
  {
    id: 1,
    years: "",
    title: "",
    description: projectsList,
    descriptionType: "ul",
  },
];
const experienceData = [
  {
    id: 1,
    years: "2023-2024",
    title: "Backend Engineer",
    description: [
      "Designed and developed a data migration service to integrate and encapsulate data from multiple backend services created by the team. I ensured seamless collaboration between services by standardizing data formats and creating a unified data flow. Additionally, I implemented a service layer to aggregate and standardize data responses, improving consistency and accessibility. Working closely with team members, I aligned the migration service with project goals, addressed integration challenges, and ensured the timely delivery of milestones, utilizing technologies such as JavaScript, Node.js, Express, and MongoDB.",
    ],
    descriptionType: "h3",
  },

  {
    id: 2,
    years: "2018-2021",
    title: "National Detective Unit",
    description: armyExperienceList,
    descriptionType: "ul",
  },
];
const skillsData = [
  {
    id: 1,
    years: "",
    title: "Programing Languages",
    description:
      "C , C++ , C# , Python , JavaScript/TypeScript, HTML, CSS, MySQL",
    descriptionType: "h3",
  },
  {
    id: 2,
    years: "",
    title: "Graduated Courses",
    description:
      "C++ Object Oriented Programing, Algorithms, Data Structures, Design Patterns, C# .NET",
    descriptionType: "h3",
  },
  {
    id: 3,
    years: "",
    title: "Certificate",
    description: "Udemy- Linux Administration",
    descriptionType: "h3",
  },
  {
    id: 4,
    years: "",
    title: "Soft Skills",
    description:
      "Team Collaboration, Ambitious, Problem Solver, Adaptability, Time Management, Creativity, Proactive",
    descriptionType: "h3",
  },
  {
    id: 5,
    years: "",
    title: "Technologies",
    description: "React, React Native, Node.js, Express.js, WinForms",
    descriptionType: "h3",
  },
];

export const resumeData = [
  {
    id: 1,
    title: "SUMMARY",
    direction: "column",
    items: summaryData,
  },
  {
    id: 2,
    title: "EDUCATION",
    direction: "row",
    items: educationData,
  },
  {
    id: 3,
    title: "PROJECTS",
    direction: "column",
    items: projectsData,
  },
  {
    id: 4,
    title: "EXPERIENCE",
    direction: "column",
    items: experienceData,
  },
  {
    id: 5,
    title: "SKILLS",
    direction: "row",
    items: skillsData,
  },
];
////////////////////////////////////////////////////////////////////

//////////////PROJECTS PAGE ////////////////////////////////////////
export const myProjects = [
  {
    name: "NEAR SYNONYMS",
    image:
      "https://yarinbenzimra-website-media.s3.eu-north-1.amazonaws.com/assets/projects/NearSynonyms/backgroundImg.png",
  },
  {
    name: "TODO APP",
    image:
      "https://yarinbenzimra-website-media.s3.eu-north-1.amazonaws.com/assets/projects/TODO/backgroundImg.png",
  },
  {
    name: "FACEBOOK",
    image: "../src/assets/projects-images/facebookProject.png",
  },
  {
    name: "GARAGE",
    image: "../src/assets/projects-images/garageProject.png",
  },
  {
    name: "Musicians-And-Musical-Instruments ",
    image: "../src/assets/projects-images/musicionsProject.png",
  },
];
//////////////PROJECT DETAILS PAGE ////////////////////////////////////////
export const projectsDetails = [
  {
    id: 1,
    name: "NEAR SYNONYMS",
    description:
      "The Synonym Selection Assistant project involves developing an application to assist language learners in selecting appropriate synonyms. The system consists of a React Native UI, a Node.js backend, an AWS database for storing data, and Python-trained NLP models for synonym evaluation. Key functionalities include user login, synonym quizzes, feedback on user choices, and result storage. The architecture emphasizes secure, scalable, and efficient interactions between the front end, backend, database, and NLP models, ensuring a user-friendly experience and robust performance.",
    video:
      "https://yarinbenzimra-website-media.s3.eu-north-1.amazonaws.com/assets/projects/NearSynonyms/video.mp4",
    images: [
      "https://yarinbenzimra-website-media.s3.eu-north-1.amazonaws.com/assets/projects/NearSynonyms/2.png",
      "https://yarinbenzimra-website-media.s3.eu-north-1.amazonaws.com/assets/projects/NearSynonyms/3.png",
      "https://yarinbenzimra-website-media.s3.eu-north-1.amazonaws.com/assets/projects/NearSynonyms/4.png",
      "https://yarinbenzimra-website-media.s3.eu-north-1.amazonaws.com/assets/projects/NearSynonyms/5.png",
      "https://yarinbenzimra-website-media.s3.eu-north-1.amazonaws.com/assets/projects/NearSynonyms/6.png",
      "https://yarinbenzimra-website-media.s3.eu-north-1.amazonaws.com/assets/projects/NearSynonyms/7.png",
      "https://yarinbenzimra-website-media.s3.eu-north-1.amazonaws.com/assets/projects/NearSynonyms/8.png",
      "https://yarinbenzimra-website-media.s3.eu-north-1.amazonaws.com/assets/projects/NearSynonyms/9.png",
      "https://yarinbenzimra-website-media.s3.eu-north-1.amazonaws.com/assets/projects/NearSynonyms/10.png",
      "https://yarinbenzimra-website-media.s3.eu-north-1.amazonaws.com/assets/projects/NearSynonyms/11.png",
    ],
    githubURL: "https://github.com/NearSynonyms/NearSynonymsProject",
  },
  {
    id: 2,
    name: "Task Management App",
    description:
      "A Flutter-based task management application that serves as a client for the Node.js-based Task Management Application server. This app allows users to interact with the server's endpoints for creating, updating, deleting, searching, and retrieving tasks.",
    video:
      "https://yarinbenzimra-website-media.s3.eu-north-1.amazonaws.com/assets/projects/TODO/video.mp4",
    images: [
      "https://yarinbenzimra-website-media.s3.eu-north-1.amazonaws.com/assets/projects/TODO/1.png",
      "https://yarinbenzimra-website-media.s3.eu-north-1.amazonaws.com/assets/projects/TODO/2.png",
      "https://yarinbenzimra-website-media.s3.eu-north-1.amazonaws.com/assets/projects/TODO/3.png",
      "https://yarinbenzimra-website-media.s3.eu-north-1.amazonaws.com/assets/projects/TODO/4.png",
      "https://yarinbenzimra-website-media.s3.eu-north-1.amazonaws.com/assets/projects/TODO/5.png",
      "https://yarinbenzimra-website-media.s3.eu-north-1.amazonaws.com/assets/projects/TODO/6.png",
      "https://yarinbenzimra-website-media.s3.eu-north-1.amazonaws.com/assets/projects/TODO/7.png",
      "https://yarinbenzimra-website-media.s3.eu-north-1.amazonaws.com/assets/projects/TODO/8.png",
      "https://yarinbenzimra-website-media.s3.eu-north-1.amazonaws.com/assets/projects/TODO/9.png",
      "https://yarinbenzimra-website-media.s3.eu-north-1.amazonaws.com/assets/projects/TODO/10.png",
      "https://yarinbenzimra-website-media.s3.eu-north-1.amazonaws.com/assets/projects/TODO/11.png",
      "https://yarinbenzimra-website-media.s3.eu-north-1.amazonaws.com/assets/projects/TODO/12.png",
    ],
    githubURL: "https://github.com/YarinBenZimra/Task-Management-Application",
  },
  // Add more projects as needed
];
