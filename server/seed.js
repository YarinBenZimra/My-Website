import mongoose from "mongoose";
import User from "./models/User.js";
import Resume from "./models/Resume.js";
import Project from "./models/Projects.js";

// MongoDB connection URI
const MONGO_URI = process.env.MONGO_URI;

// Data to seed
const userDetails = {
  firstName: "Yarin",
  lastName: "Benzimra",
  id: "207952052",
  role: "Full Stack Developer",
  image: "../../assets/profilePicture.jpeg",
  phone: "0546605500",
  email: "yarinbenzirma@gmail.com",
  address: "Rishon LetZion, Israel",
  aboutMeDescription:
    "I'm a Full Stack Developer with a passion for creating modern web applications and ensuring seamless user experiences. Let's build something amazing together.",
  linkedinUrl: "https://www.linkedin.com/in/yarin-benzimra",
  githubUrl: "https://github.com/YarinBenZimra",
  facebookUrl: "https://www.facebook.com/yarin.benzimra/",
};

const resumeData = [
  {
    title: "SUMMARY",
    direction: "column",
    items: [
      {
        years: "",
        title: "",
        description: [
          "Aspiring software developer with a solid academic background in computer science and hands-on experience in Full Stack Development. Holding a B.Sc. in Computer Science. I possess a strong understanding of programming, algorithms, and system design, and I am eager to contribute to a dynamic team. I am well-prepared to make an immediate impact and enthusiastic about leveraging my skills to drive technical excellence.",
        ],
        descriptionType: "h3",
      },
    ],
  },
  {
    title: "EDUCATION",
    direction: "row",
    items: [
      {
        years: "2015-2017",
        title: "Revivim High School",
        description: ["Matriculation Certificate"],
        descriptionType: "h3",
      },
      {
        years: "2021-2024",
        title: "The Academic College of Tel Aviv-Yaffo",
        description: ["Bachelor’s Science Degree in Computer Science"],
        descriptionType: "h3",
      },
    ],
  },
  {
    title: "PROJECTS",
    direction: "column",
    items: [
      {
        years: "",
        title: "",
        description: [
          "Designed and developed a cross-platform educational tool for iOS and Android to help language learners select contextually appropriate near synonyms. Collected real-world sentence examples and analyzed them using Natural Language Processing (NLP) and Large Language Models (LLM) to compute perplexity and probability, ensuring accurate synonym selection. Technologies used: React Native, Node.js, OpenAI API.",
          "Developed an application that uses Facebook's API and realizes design patterns using Windows Forms as windows-based user interface.",
          "Created an environment that simulates Facebook in a console-based user interface in C++.",
          "Developed a full-stack project featuring a containerized HTTP server for a TODO app in JavaScript with integrated logging capabilities using Docker, complemented by a Flutter-based task management app for iOS and Android that serves as the client for the Node.js server.",
        ],
        descriptionType: "ul",
      },
    ],
  },
  {
    title: "EXPERIENCE",
    direction: "column",
    items: [
      {
        years: "2023-2024",
        title: "Backend Engineer",
        description: [
          "Designed and developed a data migration service to integrate and encapsulate data from multiple backend services created by the team. I ensured seamless collaboration between services by standardizing data formats and creating a unified data flow. Additionally, I implemented a service layer to aggregate and standardize data responses, improving consistency and accessibility. Working closely with team members, I aligned the migration service with project goals, addressed integration challenges, and ensured the timely delivery of milestones, utilizing technologies such as JavaScript, Node.js, Express, and MongoDB.",
        ],
        descriptionType: "h3",
      },

      {
        years: "2018-2021",
        title: "National Detective Unit",
        description: [
          "Skillfully commanded and led a team of 15 soldiers.",
          "Completed Sergeant Course. Collaborated with senior military officer.",
          "Handle challenging field conditions and high-pressure situations with composure and efficiency.",
          "Excelled in executing special missions under tight deadlines.",
          "Promoted due to excellent service.",
        ],
        descriptionType: "ul",
      },
    ],
  },
  {
    title: "SKILLS",
    direction: "row",
    items: [
      {
        years: "",
        title: "Programing Languages",
        description: [
          "C , C++ , C# , Python , JavaScript/TypeScript, HTML, CSS, MySQL",
        ],
        descriptionType: "h3",
      },
      {
        years: "",
        title: "Graduated Courses",
        description: [
          "C++ Object Oriented Programing, Algorithms, Data Structures, Design Patterns, C# .NET",
        ],
        descriptionType: "h3",
      },
      {
        years: "",
        title: "Certificate",
        description: ["Udemy- Linux Administration"],
        descriptionType: "h3",
      },
      {
        years: "",
        title: "Soft Skills",
        description: [
          "Team Collaboration, Ambitious, Problem Solver, Adaptability, Time Management, Creativity, Proactive",
        ],
        descriptionType: "h3",
      },
      {
        years: "",
        title: "Technologies",
        description: ["React, React Native, Node.js, Express.js, WinForms"],
        descriptionType: "h3",
      },
    ],
  },
];

const projects = [
  {
    name: "NEAR SYNONYMS",
    image: "../src/assets/projects-images/nearSynonymsProject.png",
    description:
      "The Synonym Selection Assistant project involves developing an application to assist language learners in selecting appropriate synonyms.",
    githubUrl: "https://github.com/NearSynonyms/NearSynonymsProject",
    video: "/../src/assets/projectDetails/NearSynonyms/video.mp4",
    images: [
      "../src/assets/projectDetails/NearSynonyms/2.png",
      "../src/assets/projectDetails/NearSynonyms/3.png",
      "../src/assets/projectDetails/NearSynonyms/4.png",
      "../src/assets/projectDetails/NearSynonyms/5.png",
      "../src/assets/projectDetails/NearSynonyms/6.png",
      "../src/assets/projectDetails/NearSynonyms/7.png",
      "../src/assets/projectDetails/NearSynonyms/8.png",
      "../src/assets/projectDetails/NearSynonyms/9.png",
      "../src/assets/projectDetails/NearSynonyms/10.png",
      "../src/assets/projectDetails/NearSynonyms/11.png",
    ],
  },
  {
    name: "Task Management App",
    image: "../src/assets/projects-images/flutterImage.png",
    description:
      "A Flutter-based task management application that serves as a client for the Node.js-based Task Management Application server.",
    githubUrl: "https://github.com/YarinBenZimra/Task-Management-Application",
    video: "/../src/assets/projectDetails/TODO/video.mp4",
    images: [
      "../src/assets/projectDetails/TODO/1.png",
      "../src/assets/projectDetails/TODO/2.png",
      "../src/assets/projectDetails/TODO/3.png",
      "../src/assets/projectDetails/TODO/4.png",
      "../src/assets/projectDetails/TODO/5.png",
      "../src/assets/projectDetails/TODO/6.png",
      "../src/assets/projectDetails/TODO/7.png",
      "../src/assets/projectDetails/TODO/8.png",
      "../src/assets/projectDetails/TODO/9.png",
      "../src/assets/projectDetails/TODO/10.png",
      "../src/assets/projectDetails/TODO/11.png",
      "../src/assets/projectDetails/TODO/12.png",
    ],
  },
];

async function seedDatabase() {
  try {
    // Connect to MongoDB
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");

    // Clear existing data
    await User.deleteMany();
    await Resume.deleteMany();
    await Project.deleteMany();

    console.log("Existing data cleared");

    // Seed data
    await User.create(userDetails);
    console.log("User details seeded");

    await Resume.insertMany(resumeData);
    console.log("Resume data seeded");

    await Project.insertMany(projects);
    console.log("Project data seeded");

    console.log("Database seeding completed");
  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    mongoose.connection.close();
    console.log("MongoDB connection closed");
  }
}

seedDatabase();
