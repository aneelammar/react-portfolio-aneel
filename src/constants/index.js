import doit from "../assets/projects/doit.jpg"
import BiteMe from "../assets/projects/BiteMe.jpg"

export const HERO_CONTENT = `Motivated Junior Software Engineer with a solid understanding of the development lifecycle, adept at designing and delivering efficient, high-quality code. Skilled in problem-solving, team collaboration, and adapting to complex technical challenges to ensure successful project outcomes on schedule.`;

export const ABOUT_TEXT = `I am a dedicated and versatile Software Engineer with a passion for creating efficient and user-friendly web applications. I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My expertise extends to low-level programming and embedded systems, with a strong foundation in Linux and its ecosystem. My journey in development began with a deep curiosity for how things work, and I thrive in collaborative environments where I can solve complex problems and deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2020 - 2023",
    role: "Instructor",
    company: "Heznek latid",
    description: `Taught courses on computing skills, operating systems, and software development in Java and C. 
                  Instructed diverse groups, including school/university students and national service volunteers.
                  Addressed technical issues and provided mentorship to enhance teamwork and collaboration.`,
    technologies: ["c", "Java" , "operating systems"],
  },

];

export const PROJECTS = [
  {
    title: "Dolt — Local services marketplace",
    image: doit,
    description:
      "Developed a cross-platform mobile application to optimize personal time and create additional revenue streams. Built a marketplace app featuring a recommendation engine to match service requests with providers based on user preferences.Enabled users to submit service requests and propose prices, allowing other users to supply services and earn money.",
    technologies: ["Flutter", "Firebase", "Google Maps API", "Android Studio", "Xcode"],
  },
  {
    title: "BiteMe — Food ordering system",
    image: BiteMe,
    description:
      "Designed and implemented an end-to-end solution for a food ordering system, Ensured proper system architecture and maintained high coding standards throughout the development process.",
    technologies: ["Java", "MySQL", "3-Tier Architecture", "OCSF Framework", "Eclipse"],
  },
  
];

export const CONTACT = {
  address: "Levinski 78, Tel Aviv ",
  phoneNo: "050-3081732",
  email: "aneelamar01@gmail.com",
};