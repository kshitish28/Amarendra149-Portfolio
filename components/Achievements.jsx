import React from "react";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

const certifications = [
  {
    title: "NPTEL DBMS Course",
    description: "Awarded for excellence in software development.",
    year: "2022",
    certificateLink: "https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL22CS91S3307002510189447",
  },
  {
    title: "NPTEL DSE Course",
    description: "Completed Data Science course for engineering applications.",
    year: "2023",
    certificateLink: "https://archive.nptel.ac.in/content/noc/NOC23/SEM2/Ecertificates/106/noc23-cs97/Course/NPTEL23CS97S3514036710027096.pdf",
  },
  {
    title: "Python for Data Science",
    description: "Completed Python course for data science applications.",
    year: "2023",
    certificateLink: "https://archive.nptel.ac.in/content/noc/NOC23/SEM2/Ecertificates/106/noc23-cs99/Course/NPTEL23CS99S4514013910027096.pdf",
  },
  {
    title: "Event Coordinator & Social Media Head",
    description: "Managed events and social media for NIST CAT Club.",
    year: "2023",
  },
  {
    title: "Python Programming",
    description: "Completed Python programming course for data analysis.",
    year: "2024",
    certificateLink: "https://drive.google.com/file/d/1wUK4J0lv2IM2ynhB0TvOYxS_FXmYKlMW/view?usp=sharing",
  },
  {
    title: "Data Analysis Intern",
    description: "Completed internship as a Data Analysis Intern.",
    year: "2025",
    certificateLink: "https://drive.google.com/file/d/1KCvCSb1PRUkWbMR6eyek5XckZHpF7o-_/view?pli=1",
  },
  {
    title: "Power BI Intern",
    description: "Completed internship as a Power BI Intern.",
    year: "2025",
    certificateLink: "https://drive.google.com/file/d/1obUuSGsbCMNUwqU_zLtSqCjAaGTaMaxt/view?pli=1",
  },
];

function Achievements() {
  return (
    <section className="xl:my-36 md:mx-36 p-8" id="certifications">
      <motion.div
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <h3 className="sectionHeadText">Insights & Certifications</h3>
      </motion.div>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
        {certifications.map((certification, index) => (
          <motion.div
            key={index}
            variants={fadeIn("up", "spring", index * 0.5, 0.75)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="flex flex-col justify-center items-center dark:bg-bgSecondaryDark bg-bgSecondaryLight p-8 rounded-lg shadow-lg w-full max-w-[370px]" // Adjusted width
          >
            <h3 className="text-xl font-bold text-center">{certification.title}</h3>
            <p className="text-sm mt-2 text-center">{certification.description}</p>
            <p className="mt-2 text-center text-gray-500">{certification.year}</p>
            <a
              href={certification.certificateLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 text-blue-500 hover:underline flex items-center"
            >
              <span>Certificate</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="ml-2 w-4 h-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 10l4.293-4.293a1 1 0 011.414 1.414L17 12M15 10l-6 6M15 10h6M5 12h7"
                />
              </svg>
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Achievements;
