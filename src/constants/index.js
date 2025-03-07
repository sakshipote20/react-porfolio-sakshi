import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate coder, full stack developer and AIML enthusiast.`;
export const ABOUT_TEXT = `I am a dedicated and versatile developer  with a knack for crafting robust and scalable applications. With hands-on experience in various domains, I have honed my skills in front-end technologies like React and back-end technologies like Node.js, MySQL, Django and MongoDB as well as deep learning frameworks like Pytorch and Tensorflow. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const EXPERIENCES = [
  {
    year: "2024 - Present",
    role: "AIML Intern",
    company: "Symbiosis Centre for Medical Image Analysis (SCMIA)",
    description: `Developed a deep learning tool to synthesize CT from MRI using Pytorch, FASTAPI, React and Python libraries. Implemented FAST APIs and integrated with a frontend UI. Collaborated with stakeholders and teammates to define project requirements and timelines.`,
    technologies: ["GenAI","PyTorch", "React.js", "FASTAPI", "HTML", "CSS",  "Jupyter"],
  },
  {
    year: "2023 - 2024",
    role: "Data Science Intern",
    company: "Fluid.Live Pvt Ltd",
    description: `Developed a automated web based face recognition system using Tensorflow, Flask, Javascript, CSS and HTML. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver and maintain a UI.`,
    technologies: ["Python", "Flask", "Tensorflow", "OpenCV","Javascript","CSS","HTML"],
  },
  {
    year: "2023 - Present",
    role: "Core member of Team Event management",
    company: "Information Technology Student's Association (ITSA)",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Communication", "Management", "Leadership", "Collaboration"],
  },
];

// export const PROJECTS = [
//   {
//     title: "Web based automated face recognition system",
//     image: project1,
//     description:
//       "A fully functional web based face recognition system with features like uploading multiple video files, option to download filtered videos and clear.",
//     technologies: ["HTML", "CSS", "Javascript", "Flask", "Tensorflow", "Pytorch"],
//   },
//   {
//     title: "A deep learning tool for MRI to CT synthesis",
//     image: project2,
//     description:
//       "A web based application that when given a input of MRI, outputs corresponding accurate and clinical quality CT images.",
//     technologies: ["HTML", "CSS", "React.js", "Pytorch","FastAPI"],
//   },
//   {
//     title: "Portfolio Website",
//     image: project3,
//     description:
//       "A personal portfolio website showcasing projects, skills, and contact information.",
//     technologies: ["HTML", "CSS", "React,js", "Tailwind"],
//   },
  
// ];

export const EDUCATION = [
  { program: "B.E. (Information Technology)", institution: "PVG’S College of Engineering & Technology, Pune", cgpa: "9.09/10", year: "2021-25" },
  { program: "H.S.C", institution: "Sir Parashurambhau College, Pune", cgpa: "93%", year: "2021" },
  { program: "C.B.S.E", institution: "Sinhgad Spring Dale School, Pune", cgpa: "95.40%", year: "2019" }
];

export const PROJECTS = [
  {
    title: "Web based automated face recognition system",
    description: "A fully functional web-based face recognition system with features like uploading multiple video files and downloading filtered videos.",
    image: project1,
    link: "https://github.com/sakshipote20/face-recognition-and-video-processing",
    technologies: ["HTML", "CSS", "JavaScript", "Flask", "TensorFlow", "Computer Vision"]
  },
  {
    title: "A deep learning tool for MRI to CT synthesis",
    description: "A web-based application that takes an MRI input and outputs corresponding accurate and clinical-quality CT images.",
    image: project2,
    link: "https://github.com/RajatRajSharma/MRI_to_CT_scan",
    technologies: ["HTML", "CSS", "React.js", "PyTorch", "FastAPI"]
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio website showcasing projects, skills, and contact information.",
    image: project3,
    link: "https://sakshi-pote.vercel.app",
    technologies: ["HTML", "CSS", "React.js", "Tailwind"]
  }
];




export const CONTACT = {
  address: "Pune, Maharashtra, India 411046 ",
  phoneNo: "+91 9168 7076 76 ",
  email: "sakshipote20@gmail.com",
};