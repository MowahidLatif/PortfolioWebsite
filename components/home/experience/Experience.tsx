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
    title: "GrowDoc Inc",
    position: "Lead Software Developer",
    time: "January 2023 - Present",
    location: "Ottawa, ON",
    description: [
      "Led the creation and launch of a high-traffic React web app, attracting 10,000+ monthly visitors for both desktop and mobile.",
      "Enhanced user experience with 20+ custom features, significantly improving platform functionality and usability.",
      "Improved code quality by 25% through systematic code reviews and adherence to best practices for the purpose of consistency.",
      "Developed and managed 15+ RESTful APIs, improving data exchange and integration with external partners and services.",
    ],
    tech: ["React.js", "Node.js", "Flask", "MariaDB", "AWS", "RESTful APIs"],
  },
  {
    title: "Indigpro Inc",
    position: "Full Stack Software Developer",
    time: "January 2022 - October 2022",
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
    position: "ERP Software Engineer",
    time: "February 2021 - December 2021",
    location: "Winnipeg, MB",
    description: [
      "Created department-specific interfaces, resulting in improved user interaction, user experience, and specific features.",
      "Managed large-scale projects, ensuring timely completion, successful deployment, and client satisfaction.",
      "Improved internal software, resulting in fewer user complaints, simplifying the manufacturing process and saving time.",
      "Focused heavily on the quality of documentation, which improved the onboarding process and helped with development.",
    ],
    tech: ["React.js", "Node.js", "C#", "Python", "Postgres", "NoSQL", "SQL"],
  },
  {
    title: "Poisson Consulting",
    position: "Software Engineer Intern",
    time: "October 2020 - December 2020",
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
    time: "July 2020 - September 2020",
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
