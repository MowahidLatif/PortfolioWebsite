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
    title: "Indigpro",
    position: "Full Stack Software Developer",
    time: "November 2022 - May 2023",
    location: "Winnipeg, MB",
    description: [
      "Performed research and wisely chose powerful tools to develop, improve, and manage 6+ complex projects for both clients and company usage thus greatly driving business expansion and creativity",
      "Collaborated on strategic plans, overhauled 10+ client websites and apps, leveraged frontend/backend frameworks, and used cloud storage like AWS, Firebase, and Azure.",
      "Reduced load-time by 60% and increased responsiveness 20% for client websites by implementing React.js and Next.js best practises.",
      "Integrated AWS services to streamline CI/CD processes which increased project completion rate by 20% by leveraging Docker/Kubernetes to proficiently handle application deployment, scalability, and security.",
      "Planned and created a custom agile setting involving troubleshooting/debugging code which resulted in a 30% faster shipment of code and reduced time in code review thus making debugging more effective.",
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
    time: "February 2022 - October 2022",
    location: "Winnipeg, MB",
    description: [
      "Spearheaded the integration of C# and Python software in custom OEM hardware, enhancing existing products and contributing to a 30% acceleration in overall development time.",
      "Collaborated with clients to design and engineer user-friendly interfaces using Python for customer-electronic products leading to increased hardware usability and reliability",
      "Developed and maintained comprehensive software documentation, fostering an enriched code library that expedited future developments by 25% and contributed to a significant performance boost of 60% in specific hardware units.",
    ],
    tech: ["React.js", "Node.js", "C#", "Python", "Postgres", "NoSQL", "SQL"],
  },
  {
    title: "Poisson Consulting",
    position: "Software Engineer",
    time: "October 2021 - December 2021",
    location: "Winnipeg, MB",
    description: [
      "Engineered a Python-based Slack API Stack Bot, enhancing workflow automation, alert monitoring, and responsive communication",
      "Leveraged Python to develop data analysis tools and create intuitive client interfaces using React.js, contributing to better data representation and system performance.",
      "Successfully optimized the data pipeline, resulting in a 15% reduction in data processing time.",
      "Implemented of Python-based data processing scripts significantly improved script quality by 30% and minimized coding errors.",
      "Enhanced client interaction by developing an error-resistant, user-friendly GUI for the company website. Further employed Google APIs, such as Google Charts, Sheets, and Data Studio, to effectively present data to clients.",
    ],
    tech: [
      "Python",
      "R",
      "Java",
    ],
  },
  {
    title: "Healthcare Systems R&A",
    position: "Full Stack Software Engineer",
    time: "July 2021 - September 2021",
    location: "Winnipeg, MB",
    description: [
      "Leveraged React and Flutter to architect robust applications, integrating user-focused features and Machine Learning to enhance customer health predictions.",
      "Enhanced coding efficiency through reusable code for bug resolution and reprogramming tasks, augmenting scalability.",
      "Accelerated biometric data processing using Firebase, and collaborated on the creation of efficient, visually engaging analytical dashboards for clients.",
      "Implemented of Python-based data processing scripts significantly improved script quality by 30% and minimized coding errors.",
      "Enhanced client interaction by developing an error-resistant, user-friendly GUI for the company website. Further employed Google APIs, such as Google Charts, Sheets, and Data Studio, to effectively present data to clients.",
    ],
    tech: [
      "React",
      "Flutter",
      "Firebase",
      "Javascript",
      "Typescript",
      "Node.js",
    ],
  }
];
