/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Naga",
  title: "Hi all, I'm J.Nagarjun ",
  subTitle: emoji("A passionate Full Stack Developer 🚀 having experience in building modern web applications using Next.js, TypeScript, JavaScript, Node.js, GraphQL, Prisma, and PostgreSQL along with other modern libraries and frameworks. I enjoy creating clean user experiences and continuously learning modern technologies"),
  resumeLink:
    "https://drive.google.com/file/d/1CONxWiE6O3Fv-oWOW1jm09IhwlUjJyO2/view?usp=drivesdk", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/saadpasta",
  linkedin: "https://www.linkedin.com/in/saadpasta/",
  gmail: "nagrjunvkm1@gmail.com",
  // instagram:  "ttps://www.linkedin.com/in/saadpasta",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Build responsive front-end applications using React, Next.js, TypeScript, HTML, CSS, and JavaScript."
    ),
    emoji("⚡ Collaborate with backend teams to design, consume, and optimize APIs for scalable applications"),
    emoji(
      "⚡ Basic knowledge of Azure DevOps, CI/CD pipelines, and deployment workflows."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

softwareSkills: [
  {
    skillName: "html-5",
    fontAwesomeClassname: "fab fa-html5"
  },
  {
    skillName: "css3",
    fontAwesomeClassname: "fab fa-css3-alt"
  },
  {
    skillName: "Typescript",
    fontAwesomeClassname: "fab fa-js"
  },
  {
    skillName: "reactjs",
    fontAwesomeClassname: "fab fa-react"
  },
  {
    skillName: "nextjs",
    fontAwesomeClassname: "fas fa-code"
  },
  {
    skillName: "nodejs",
    fontAwesomeClassname: "fab fa-node-js"
  },
  {
    skillName: "npm",
    fontAwesomeClassname: "fab fa-npm"
  },
  {
    skillName: "graphql",
    fontAwesomeClassname: "fas fa-project-diagram"
  },
  {
    skillName: "postgres-database",
    fontAwesomeClassname: "fas fa-database"
  },
  {
    skillName: "azure",
    fontAwesomeClassname: "fab fa-microsoft"
  },
  {
    skillName: "java",
    fontAwesomeClassname: "fab fa-java"
  }
],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
 schools: [
    {
      schoolName:
        "Thiyagarajar College of Arts and Science (Affiliated to Madurai Kamaraj University)",
      logo: require("./assets/images/thiagarajarLogo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "2021 – 2023",
      desc: "CGPA: 9.15/10",
      descBullets: [
        "Graduated with a strong academic record in Computer Science.",
        "Studied core subjects including Data Structures, Algorithms, Database Management Systems, Web Technologies, and Software Engineering."
      ]
    },
     {
      schoolName:
        "Qspider Software Training Organization",
      logo: require("./assets/images/Qspiderlogo.png"),
      subHeader: "Full stact development",
      duration: "2023 – 2024",
      descBullets: [
        "Completed Full Stack Developer course at QSpiders Academy, gaining knowledge of frontend and backend development concepts, programming fundamentals, database management, web technologies, and software development practices. Studied subjects including HTML, CSS, JavaScript, Java, SQL, React.js, and related full-stack development concepts."
      ]
    },
    {
      schoolName: "SASTRA Deemed University",
      logo: require("./assets/images/sastraLogo.jpg"),
      subHeader: "Master of Computer Applications (MCA)",
      duration: "2024 – 2026",
      desc: "CGPA: 9.0/10",
      descBullets: [
        "Pursuing Master of Computer Applications with a strong academic record.",
        "Focused on Full Stack Development, Web Technologies, Databases, and Software Engineering."
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Backend",
      progressPercentage: "90%"
    },
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "70%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Programming",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section

  experience: [
    {
      role: "Software Developer",
      company: "Tata Consultancy Services (TCS)",
      companylogo: require("./assets/images/Tcslogo.png"),
      date: "December 2024 – Present",
      desc: "Software Developer at Tata Consultancy Services (TCS) with 1.5+ years of experience in building dynamic, scalable, and high-performance web applications. Currently working on developing modern financial technology solutions for Finnar, focusing on responsive user interfaces and efficient backend integrations.",
      descBullets: [
        "Developed dynamic and scalable web applications using Next.js, GraphQL JavaScript, and TypeScript.",
        "Integrated GraphQL APIs and implemented modern frontend development practices.",
        "Built responsive and user-friendly interfaces for financial technology solutions.",
        "Collaborated with cross-functional teams to deliver high-performance and maintainable applications."
      ]
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

// const bigProjects = {
//   title: "Big Projects",
//   subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
//   projects: [
//     {
//       image: require("./assets/images/saayaHealthLogo.webp"),
//       projectName: "Saayahealth",
//       projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
//       footerLink: [
//         {
//           name: "Visit Website",
//           url: "http://saayahealth.com/"
//         }
//         //  you can add extra buttons here.
//       ]
//     },
//     {
//       image: require("./assets/images/nextuLogo.webp"),
//       projectName: "Nextu",
//       projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
//       footerLink: [
//         {
//           name: "Visit Website",
//           url: "http://nextu.se/"
//         }
//       ]
//     }
//   ],
//   display: true // Set false to hide this section, defaults to true
// };

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
   
    {
      title: "Microsoft Certified: Azure Fundamentals",
      subtitle:
        "Earned the Microsoft Certified: Azure Fundamentals (AZ-900) certification, demonstrating foundational knowledge of cloud concepts, Azure services, and Azure management and governance.",
      image: require("./assets/images/microsoftazurelogo.jpg"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Microsoft Azure Fundamentals",
          url: "https://assistant.google.com/"
        }
      ]
    },

    
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "paste the url here"
  ],
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-6381241006",
  email_address: "nagrjunvkm1@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  // bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
