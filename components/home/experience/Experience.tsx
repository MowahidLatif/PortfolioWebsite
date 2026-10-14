import { SectionHeader } from "@/components/utils/SectionHeader";
import { ExperienceItem } from "./ExperienceItem";

export const Experience = () => {
  return (
    <section className="section-wrapper" id="experience">
      <SectionHeader title="Experience" dir="l" />
      {experience.map((item) => (
        <ExperienceItem key={item.title} {...item} />
      ))}
    </section>
  );
};

const experience = [
  {
    title: "Bold Commerce Inc",
    position: "Intermediate Software Developer (Integrations/Backend)",
    time: "April 2026 - October 2026",
    location: "Winnipeg, MB",
    description: [
      "Enabled thousands of Shopify merchants to automate marketing from their store data by building a Klaviyo integration that syncs customer data into their Klaviyo accounts through the Shopify and Klaviyo REST APIs.",
      "Extended Klaviyo beyond its built-in options by building custom UI elements that the integration adds as reusable templates, which merchants use to test and run campaigns.",
      "Gave merchants in-app control of their plans, billing, subscriptions, customer data, and analytics by integrating Mantle into rePete and delivered Intercom integrations for clients who requested its customer messaging features.",
    ],
    tech: ["Shopify", "Klaviyo", "REST APIs", "Intercom", "Mantle"],
  },
  {
    title: "FloraTrack AI",
    position: "Senior Software Engineer",
    time: "July 2023 - May 2026",
    location: "Ottawa, ON",
    description: [
      "Delivered AI-generated scouting summaries and priority scoring for 600+ clients by gathering client requirements and architecting a Flask service layer that integrates the Claude API with pest-scouting data in MariaDB.",
      "Scaled a React.js web application to 10,000+ monthly active users by engineering a modular component architecture and implementing automated CI/CD deployment pipelines.",
      "Cut API response times from 750ms to 150ms by refactoring RESTful endpoint queries and payload structures in Python/Flask.",
      "Mentored 12+ engineers through PR reviews, one-on-one pairing, and architecture walkthroughs while managing priorities across client requests at a fast-paced startup.",
    ],
    tech: ["React.js", "Python", "Flask", "MariaDB", "Claude API", "CI/CD"],
  },
  {
    title: "Indigpro Inc",
    position: "Full Stack Software Developer",
    time: "December 2022 - April 2023",
    location: "Winnipeg, MB",
    description: [
      "Boosted user engagement with dynamic interfaces, increasing user activity and satisfaction.",
      "Developed 6+ large web applications, streamlining authentication, payment systems, and databases.",
      "Created CI/CD processes with the aim of reducing deployment times, reducing errors, and improving code reliability.",
      "Applied SaaS solutions for location-based analytics, driving innovation and efficiency.",
    ],
    tech: [
      "React.js",
      "Next.js",
      "Python",
      "Javascript",
      "Typescript",
      "Git",
      "GitHub",
      "Node.js",
      "Tailwind",
      "CSS",
      "AWS",
      "Docker",
      "Kubernetes",
      "GraphQL",
    ],
  },
  {
    title: "Smartrend Manufacturing Group",
    position: "ERP Developer",
    time: "May 2022 - September 2022",
    location: "Winnipeg, MB",
    description: [
      "Established a single source of truth across 3 Odoo ERP modules by gathering requirements from Sales, Marketing, and Manufacturing and designing the API integration architecture and PostgreSQL schema they read and write through.",
      "Saved 200 hours/month and halved data-entry errors by leading an Agile project to build Python REST APIs with built-in validation that unified company-wide data and gave teams real-time access to payment data.",
    ],
    tech: ["Python", "PostgreSQL", "Odoo", "REST APIs"],
  },
  {
    title: "Poisson Consulting",
    position: "Software Engineer Intern",
    time: "October 2021 - December 2021",
    location: "Vancouver, BC",
    description: [
      "Designed data analysis tools, improving efficiency in data processing by 30%.",
      "Developed secure user interfaces, enhancing data visualization and user interaction.",
      "Implemented advanced searching and sorting algorithms, significantly improving data organization and ensuring consistent, readable data structures.",
      "Collaborated on secure interfaces such as Slack and Jira, showcasing effective teamwork, updating info, and development skills.",
    ],
    tech: ["Python", "R", "Java"],
  },
  {
    title: "Shared Health-Soins Communs",
    position: "Full Stack Developer Intern",
    time: "July 2021 - September 2021",
    location: "Toronto, ON",
    description: [
      "Developed mobile applications with Flutter/React focusing on improving front-end readability for elderly folks.",
      "Managed daily operations such as Code Reviews and Pull Requests, improving the overall codebase with consistent code.",
      "Led backend tasks such as storing machine learning data, images, and other personal info into Firebase, ensuring safe storage.",
      "Contributed to seamless project execution with Github Actions, ensuring all bugs and errors are caught before production.",
    ],
    tech: [
      "React",
      "Flutter",
      "Firebase",
      "Javascript",
      "Typescript",
      "Node.js",
    ],
  },
];
