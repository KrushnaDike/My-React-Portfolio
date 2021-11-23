/* Change this file to get your personal Porfolio */

/*
TODO:
1. Edit all the texts in Homepage, Education tab, contact me tab, projects tab, Experience tab.
2. Remove opensource tab
3. Remove git projects integration from projects tab
4. Add a component to display all my projects in card components, which will contain project name, description, live link & github link
5. Design the splash screen
6. Update resume link with updated resume
7. Update svg illustrations as I like
8. Play with theme color customizations
*/


// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Krushna's Portfolio",
  description:
    "A passionate Software Engineer. Skilled in designing, building & maintaining highly scalable and available software applications.",
  og: {
    title: "Krushna Dike Portfolio",
    type: "website",
    url: "https://krushnadike.com/",
  },
};

//Home Page
const greeting = {
  title: "Krushna Dike",
  logo_name: "KrushnaDike",
  nickname: "",
  subTitle:
    "A passionate Software Engineer. Skilled in designing, building & maintaining highly scalable and available software applications.",
  secondSubtitle: "Love to learn new technologies everyday and apply them through building new projects.",
  resumeLink:
    "https://drive.google.com/file/d/15auX3QnSaJ5XplI1aULcKEuC1LC66LYc/view?usp=drivesdk",
  portfolio_repository: "https://github.com/KrushnaDike",
};

const socialMediaLinks = [
  /* Your Social Media Link */

  {
    name: "Github",
    link: "https://github.com/KrushnaDike",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/krushnadike/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "YouTube",
    link: "https://www.youtube.com/channel/UCxqzwxKnQZVragKZRR8xuww",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },
  {
    name: "Gmail",
    link: "mailto:dikekrishna155@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Twitter",
    link: "https://twitter.com/KrushnaDike",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/krushna.dk.9/",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/krushna_dike_patil/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building resposive website front end using React-Redux",
        "⚡ Developing highly scalable and maintainable REST APIs using Microservice Architecture",
        "⚡ Creating application backend using Java, Spring Boot along with integration of databases such as Oracle SQL & MongoDB",
      ],
      softwareSkills: [
        {
          skillName: "Java",
          fontAwesomeClassname: "logos:java",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "SpringBoot",
          fontAwesomeClassname: "bx:bxl-spring-boot",
          style: {
            color: "#5CB230",
          },
        },
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "ant-design:console-sql-outlined",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#52A74B",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "BootStrap",
          fontAwesomeClassname: "logos:bootstrap",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "Maven",
          fontAwesomeClassname: "vscode-icons:file-type-maven",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining dynamic web applications, wordpress or static websites on virtual machine instances",
        "⚡ Setting up application backend in Firebase BaaS, Cloud Firestore",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "Cloud Firestore",
          fontAwesomeClassname: "vscode-icons:file-type-firestore",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
      ],
    },
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ As mentioned above, I like to learn new technologies and as a developer everyone should be familiar with latest trending tools & technologies. Data Science and Machine Learning is popular & trending nowadays, and I found it quite interesting.",
        "⚡ So far, I've done a few courses related to the same from Internshala, such as \"Python for Everybody Specialization\", \"Introduction to Data Science in Python\", and learned data computing & manipulating libraries such as Numpy & Pandas.",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "logos:python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Pandas",
          fontAwesomeClassname: "simple-icons:pandas",
          style: {
            backgroundColor: "transparent",
            color: "#130654",
          },
        },
        {
          skillName: "Numpy",
          fontAwesomeClassname: "logos:numpy",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    },
  ],
};

// Education Page

// const competitiveSites = {
//   competitiveSites: [
//     {
//       siteName: "HackerRank",
//       iconifyClassname: "simple-icons:hackerrank",
//       style: {
//         color: "#2EC866",
//       },
//       profileLink: "",
//     },
//     {
//       siteName: "Codechef",
//       iconifyClassname: "simple-icons:codechef",
//       style: {
//         color: "#5B4638",
//       },
//       profileLink: "",
//     },
//     {
//       siteName: "Codeforces",
//       iconifyClassname: "simple-icons:codeforces",
//       style: {
//         color: "#1F8ACB",
//       },
//       profileLink: "",
//     },
//     {
//       siteName: "Hackerearth",
//       iconifyClassname: "simple-icons:hackerearth",
//       style: {
//         color: "#323754",
//       },
//       profileLink: "",
//     },
//     {
//       siteName: "Kaggle",
//       iconifyClassname: "simple-icons:kaggle",
//       style: {
//         color: "#20BEFF",
//       },
//       profileLink: "",
//     },
//   ],
// };

const degrees = {
  degrees: [
    {
      title: "Marathwada Mitra Mandal's Institute of Technology",
      subtitle: "B.E in Computer Engineering",
      logo_path: "JGEC-logo.png",
      alt_name: "MMIT Logo",
      duration: "2021 - 2023",
      descriptions: [
        "⚡ Ongoing.",
        "⚡ I have studied basic software engineering subjects like Java, DS, Algorithms, Computer Architecture, Operating System, DBMS, Computer Network etc.",
        "⚡ Apart from this, I have done courses on Full Stack Development and Data Science.",
      ],
      website_link: "https://www.mmit.edu.in/",
    },
    {
      title: "Ajit Dada Pawar College of Polytechnic",
      subtitle: "Diploma in Computer Engg.",
      logo_path: "dumkal-polytech-logo.png",
      alt_name: "ADPPC Logo",
      duration: "2019 - 2020",
      descriptions: [
        "⚡ Graduated with First Class Distinction with a score of 93 Percentile.",
        "⚡ I have studied computer engineering subjects like Analog & Digital Electronics, Microprocessor, Communication Engineering and basic computer science subjects such as C Programming, Computer Network etc.",
        "⚡ Apart from this, I had made an Milk Distribution Software in my final year project.",
      ],
      website_link: "http://www.ajitdadapawarpoly.com/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "LGM Internship Certificate",
      subtitle: "- Aman Kesarwani",
      logo_path: "UC-San-Diego-logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1aaf-5rbgpjagL0hxIGhhu6Pg9VLRiK9s/view?usp=drivesdk",
      alt_name: "Lets Grow More",
      color_code: "#02447B",
    },
    {
      title: "Python for Data Science, AI & Development",
      subtitle: "- Sarvesh Agarwal",
      logo_path: "udemy-logo.png",
      certificate_link:
        "https://trainings.internshala.com/view_certificate/4CE141DC-32C3-A1CE-15DF-2CC4CFADEF23/A6C704B7-33F9-B40B-80E1-53E157532AFC",
      alt_name: "Internshala",
      color_code: "#FFB6C1",
    },
    {
      title: "Python & ML",
      subtitle: "- Harsh Akshit",
      logo_path: "google_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1ah4o1T4eqEHNb9-E_QdeYvKbiZm28_sQ/view?usp=drivesdk",
      alt_name: "Shape AI",
      color_code: "#0C9D5899",
    },
    
  ],
};

// Experience Page
const experience = {
  title: "Work Experience",
  subtitle: "",
  description:
    "I have worked with Lets Grow More IT company as a Web developer for one month Intership. Over these years I've worked on multiple large scale projects for different client companies.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work & Projects",
      experiences: [
        {
          title: "Web Devloper",
          company: "LetsGrowMore",
          company_url: "https://medium.com/@dikekrishna155",
          logo_path: "TCS-logo.png",
          duration: "September 2021 - October 2021",
          location: "Pune",
          description:
            "",
          color: "#0879bf",
          projects: [
            {
              projectName: "Milk Distribution System",
              clientName: "Client - S. A.Thorat",
              projectDescription: "The project was to build a milk distribution system, In this system we have made available various Modules such as Login, Milk Purchase, Distribute, Collect Amount etc. which helps the end user to maintain a daily record of his work. We have created this Project for a simple milk distributor and he still uses this software."
            },
            {
              projectName: "Flappy Bird Game",
              clientName: "Client - Own",
              projectDescription: "This project was to built a Flappy Bird Game, In this system I have made an application by using pygame module in python. Built the application from scratch, starting from creating RESTful APIs, writing unit testcases for those services, till application build and deployment."
            },
            {
              projectName: "Dance Website",
              clientName: "Client - LGM",
              projectDescription: "Dace Website is an intranet web application for Dance academy to register new customers or add new customers data. Built the application from scratch, starting from creating RESTful APIs, writing unit testcases for those services, till application build and deployment."
            },
          ]
        },
      ],
    },
    // {
    //   title: "Internships",
    //   experiences: [
    //     {
    //       title: "",
    //       company: "",
    //       company_url: "",
    //       logo_path: "",
    //       duration: "",
    //       location: "",
    //       description:
    //         "",
    //       color: "",
    //     },
    //     {
    //       title: "",
    //       company: "",
    //       company_url:
    //         "",
    //       logo_path: "intel_logo.jpg",
    //       duration: "",
    //       location: "",
    //       description:
    //         "",
    //       color: "#0071C5",
    //     },
    //   ],
    // },
    // {
    //   title: "Volunteerships",
    //   experiences: [
    //     {
    //       title: "",
    //       company: "",
    //       company_url: "",
    //       logo_path: "",
    //       duration: "",
    //       location: "",
    //       description:
    //         "",
    //       color: "",
    //     },
    //     {
    //       title: "",
    //       company: "",
    //       company_url: "",
    //       logo_path: "",
    //       duration: "",
    //       location: "",
    //       description:
    //         "",
    //       color: "",
    //     },
    //   ],
    // },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Full Stack Web Applications and deploy them to cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const projectsData = {
  myProjects: [
    {
      id: 1,
      name: "My Portfolio",
      description: "The complete portfolio website hosted using github pages (gh-pages). Visit the website here : ",
      createdAt: "2021-11-23",
      liveUrl: "https://www.krushnadike.com/",
      gitUrl: "https://github.com/KrushnaDike/My-React-Portfolio",
    },
    {
      id: 2,
      name: "Flappy Bird",
      description: "Flappy Bird is a game app made by using pygame, for playing.",
      createdAt: "2021-10-15",
      gitUrl: "https://github.com/KrushnaDike/Flappy-Bird",
    },
    {
      id: 3,
      name: "Food Delivery Service",
      description: "This project is a food delivery service web application for customers.",
      createdAt: "2021-05-06",
      liveUrl: "https://krushnadike.github.io/LetsGrowMore-Task1/",
      gitUrl: "https://github.com/KrushnaDike/LetsGrowMore-Task1",
    }
  ]
}

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "contactMail.png",
    description:
      "I am available on almost every social media. You can message me anytime, I will reply within 24 hours. I can help you with Java, React, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to write blogs to explain solutions of digital & technical problems in much simpler way.",
    link: "https://www.blogger.com/blog/posts/2093591142152538824",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "Newasa, Maharashtra, Ahemednagar, 414603",
    avatar_image_path: "address_image.svg",
    location_map_link: "",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+91 9325638959",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  //competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  projectsData,
  contactPageData,
};
