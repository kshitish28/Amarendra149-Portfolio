import GithubIcon from "./../public/assets/icons/github.svg";
import LinkedInIcon from "./../public/assets/icons/linkedin.svg";
import XIcon from "./../public/assets/icons/x.svg";
import InstagramIcon from "./../public/assets/icons/instagram.svg";
import FrontendIcon from "./../public/assets/icons/frontend.svg";
import LeaderShipIcon from "./../public/assets/icons/leadership.svg";
import ProblemSolvingIcon from "./../public/assets/icons/problem-solving.svg";
import FreelancerIcon from "./../public/assets/icons/freelance.svg";
import BackendIcon from "./../public/assets/icons/backend.svg";
import DataAnalystIcon from "./../public/assets/icons/data-analyst.svg";

const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "skills",
    title: "Skills",
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

const services = [
  {
    title: "Data Analyst",
    icon: <DataAnalystIcon />,
  },
  {
    title: "Problem Solving",
    icon: <ProblemSolvingIcon />,
  },
  {
    title: "Freelancer",
    icon: <FreelancerIcon />,
  },

];

const technologies = {
  tools: [
    {
      name: "Power BI Desktop",
      icon: "/assets/tech/power-bi-desktop.svg",
      link: "https://html.spec.whatwg.org/multipage/",
    },
    {
      name: "Power BI Service",
      icon: "/assets/tech/power-bi-service.svg",
      link: "https://www.w3.org/Style/CSS/Overview.en.html",
    },
    
  ],
  languages: [
    {
      name: "SQL",
      icon: "/assets/tech/sql.svg",
      link: "https://nextjs.org/",
    },
    {
      name: "DAX",
      icon: "/assets/tech/dax.svg",
      link: "https://tailwindcss.com/",
    },
    {
      name: "Python",
      icon: "/assets/tech/python.svg",
      link: "https://expressjs.com/",
    },

  ],
  databases: [
    {
      name: "MS SQL Server",
      icon: "/assets/tech/mysqlserver.svg",
      link: "https://react.dev/",
    },
    {
      name: "MySQL",
      icon: "/assets/tech/my-sql.png",
      link: "https://www.mysql.com/",
    },
    
  ],
  productivities: [
    {
      name: " MS Office Suite",
      icon: "/assets/tech/ms-office.png",
      link: "https://www.postman.com/",
    },
  ],
  versioncontrols: [
    {
      name: "Git",
      icon: "/assets/tech/git.svg",
      link: "https://git-scm.com/",
    },
    {
      name: "Github",
      icon: "/assets/icons/github.svg",
      link: "https://github.com/",
    },
    
  ],
};

const experiences = [
 
  {
    title: "Data Analyst Intern",
    company_name: "COGNIFYZ TECHNOLOGIES",
    icon: "/assets/company/cognifyz-logo.svg",
    iconBg: "#E6DEDD",
    date: "December 2024",
    points: [
      "Conducted in-depth analysis of restaurant datasets using Python, exploring city-based trends, price range distributions, and online delivery impacts to derive actionable insights.",
      "Developed interactive and geographic visualizations using Matplotlib, Seaborn, and Plotly to showcase patterns like restaurant clusters, cuisine combinations, and customer preferences.",
      "Analyzed customer reviews, ratings, and votes to identify correlations, trends, and key factors driving restaurant performance, aiding in data-driven decision-making.",
    ],
  },
  {
    title: "Power BI Intern",
    company_name: "COGNIFYZ TECHNOLOGIES",
    icon: "/assets/company/cognifyz-logo.svg",
    iconBg: "#E6DEDD",
    date: "December 2024",
    points: [
      "Conducted data exploration and visualization in Power BI, including summary statistics, gender-based analysis, and trend insights for investment preferences",
      "Designed and implemented interactive dashboards to present comprehensive insights, combining data from multiple analyses for user-friendly reporting.",
      "Analysed relationships between investment objectives, durations, and monitoring frequencies to derive actionable insights for stakeholders.",
    ],
  },
  
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Terrorism Interactive Dashboard Data Analysis Project Using Power BI",
    description:
      "To analyse and visualize global terrorism trends and patterns to provide actionable insights for policy-making and security measures.",
    tags: [
      {
        name: "Power BI",
        color: "blue-text-gradient",
      },
      {
        name: "Excel/CSV",
        color: "green-text-gradient",
      },
      {
        name: " Visualization Tools",
        color: "pink-text-gradient",
      },
      {
        name: "Bing Maps",
        color: "orange-text-gradient",
      },
      {
        name: "OpenStreetMap",
        color: "yellow-text-gradient",
      },
    ],
    image: "/assets/projects/Terrorism-Interactive.jpg",
    source_code_link: "https://github.com/amarendranayak149/Terrorism-Interactive-Dashboard-Data-Analysis-Project-Using-Power-BI.git",
  },
  {
    name: "Analyzed Ecommerce Sales Data Analysis and Creating an Interactive Dashboard Using Power BI",
    description:
      "To analyze e-commerce sales data and create an interactive Power BI dashboard that enhances decision-making and drives actionable insights.",
    tags: [
      {
        name: " Power BI",
        color: "blue-text-gradient",
      },
      {
        name: "Excel/CSV",
        color: "green-text-gradient",
      },
      {
        name: "DAX",
        color: "pink-text-gradient",
      },
      {
        name: "Advanced Power BI visualization",
        color: "orange-text-gradient",
      },
    ],
    image: "/assets/projects/Analyzed-Ecommerce.jpg",
    source_code_link: "https://github.com/amarendranayak149/Analyzed-Ecommerce-Sales-Data-Analysis-and-Creating-an-Interactive-Dashboard-Using-Power-BI-.git",
  },
  {
    name: "Adidas Sales Data Analysis for Strategic Insights Dashboard Using Power BI",
    description:
      "To analyses and visualize Adidas sales data to uncover actionable insights, enabling data-driven decisions in inventory management, marketing, and sales strategy optimization.",
    tags: [
      {
        name: " Power BI",
        color: "blue-text-gradient",
      },
      {
        name: "Excel/CSV",
        color: "green-text-gradient",
      },
      {
        name: "DAX",
        color: "pink-text-gradient",
      },
      {
        name: "Power BI visualization",
        color: "orange-text-gradient",
      },
    ],
    image: "/assets/projects/adidas-sale.jpg",
    source_code_link: "https://github.com/amarendranayak149/Adidas-Sales-Data-Analysis-for-Strategic-Insights-Dashboard-Using-Power-BI/",
  },
  {
    name: "Investment Insights and Interactive Dashboard Creation Using Power BI",
    description:
      "To analyze investment data and generate actionable insights through dynamic visualizations. The project emphasizes analyzing investment data, deriving insights, and creating an interactive dashboard using Power BI, fostering skills in data analysis, visualization, and storytelling",
    tags: [
      {
        name: " Power BI",
        color: "blue-text-gradient",
      },
      {
        name: "Excel/CSV",
        color: "green-text-gradient",
      },
      {
        name: "Power BI visualization",
        color: "pink-text-gradient",
      },
    ],
    image: "/assets/projects/investment-insight.jpg",
    source_code_link: "https://github.com/amarendranayak149/",
  },
  
];

const achievements = [
  {
    title: "Google Data Analytics Certification",
    description: "Earned the Google Data Analytics Certificate, demonstrating proficiency in data cleaning, visualization, SQL, and problem-solving using Google Sheets and Tableau.",
    issuedBy: "Google",
    date: "January 2025",
    certificateLink: "https://coursera.org/verify/google-data-analytics-cert"
  },
  {
    title: "Microsoft Certified: Power BI Data Analyst",
    description: "Achieved certification for Power BI, covering data modeling, visualization, and business intelligence strategies.",
    issuedBy: "Microsoft",
    date: "February 2025",
    certificateLink: "https://learn.microsoft.com/en-us/certifications/power-bi-data-analyst/"
  },
];


const socials = [
  {
    id: "github",
    icon: <GithubIcon />,
    link: "https://github.com/amarendranayak149",
  },
  {
    id: "linkedin",
    icon: <LinkedInIcon />,
    link: "https://www.linkedin.com/in/amarendranayak/",
  },
  {
    id: "instagram",
    icon: <InstagramIcon/>,
    link: "https://www.instagram.com/itz_amarendra_22/",
  },
  {
    id: "twitter",
    icon: <XIcon/>,
    link: "https://x.com/AmarendraN1409?t=GZkRLL44S4hoU5dkx8jCZA&s=08",
  }
];

const heroTexts = [
  "Data Analyst",
  500,
  "Power BI",
  500,
  "Problem solver",
  500,
];

export {
  navLinks,
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  socials,
  heroTexts,
  achievements,
};
