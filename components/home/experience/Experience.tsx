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
    time: "January 2022 - July 2023",
    location: "Winnipeg, MB",
    description: [
      "In my role as a software developer, I undertook meticulous research and selected robust tools that were instrumental in the development, enhancement, and management of over six complex projects. These initiatives not only catered to our clients' needs but also served the company's internal operations. My efforts in making these judicious choices played a significant role in driving business growth and fostering a culture of creativity. I was also involved in the strategic planning and complete overhaul of more than ten client websites and applications. In doing so, I leveraged various frontend and backend frameworks and utilized cloud storage services such as AWS, Firebase, and Azure.",
      "I was particularly successful in enhancing the performance of client websites by implementing best practices in React.js and Next.js. This led to a substantial 60% reduction in load time and a 20% improvement in responsiveness. Furthermore, I integrated AWS services to streamline CI/CD processes, effectively utilizing Docker and Kubernetes for the deployment, scalability, and security of applications. This integration resulted in a 20% increase in the project completion rate. To improve the efficiency of our development processes, I designed and implemented a custom agile setting for troubleshooting and debugging code. This setting expedited the code shipment by 30% and significantly reduced the time spent on code reviews, making debugging more effective."
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
      "At Smartrend Manufacturing Group, I had the opportunity to lead the integration of C# and Python software into custom OEM hardware. This initiative not only improved the existing product lineup but also resulted in a 30% acceleration of the overall development timeline. My role as a spearhead allowed me to effect significant changes in the production process and positively impacted the final output.",
      "In a collaborative effort with our clients, I designed and engineered user-friendly interfaces for customer-electronic products using Python, which enhanced the usability and reliability of the hardware. This client-oriented approach was pivotal in developing solutions that were tailored to the end-users' needs and in turn increased product satisfaction. In addition to these, I took on the task of developing and maintaining extensive software documentation. This initiative enriched our code library, paving the way for future developments to be expedited by 25%. Not only did this systematic documentation provide a solid foundation for future projects, but it also led to a significant 60% performance boost in certain hardware units, underscoring the crucial role of comprehensive documentation in efficient software development.",
    ],
    tech: ["React.js", "Node.js", "C#", "Python", "Postgres", "NoSQL", "SQL"],
  },
  {
    title: "Poisson Consulting",
    position: "Software Engineer Intern",
    time: "October 2020 - December 2020",
    location: "Winnipeg, MB",
    description: [
      "At my previous role, I engineered a Python-based Slack API Stack Bot that significantly enhanced workflow automation, alert monitoring, and responsive communication. This innovation was instrumental in improving our team's productivity and responsiveness to emergent issues. I also applied my Python skills to develop data analysis tools and used React.js to create intuitive client interfaces, contributing to better data representation and system performance.",
      "In my pursuit of optimizing processes, I successfully streamlined the data pipeline, leading to a 15% reduction in data processing time. This optimization resulted in a more efficient workflow, enabling us to deliver results faster to our clients. Additionally, my implementation of Python-based data processing scripts substantially improved script quality by 30% and minimized coding errors, further enhancing the efficiency of our operations. To further elevate our client interaction, I developed an error-resistant, user-friendly GUI for the company website. I also utilized Google APIs, including Google Charts, Sheets, and Data Studio, to present data effectively to clients. This holistic approach to client interaction not only improved their experience but also enabled them to comprehend our data more effectively.",
    ],
    tech: [
      "Python",
      "R",
      "Java",
    ],
  },
  {
    title: "Healthcare Systems Research & Analytics",
    position: "Full Stack Software Developer Intern",
    time: "July 2020 - September 2020",
    location: "Winnipeg, MB",
    description: [
      "In my previous role, I exploited the capabilities of React and Flutter to build sturdy applications. These tools allowed me to embed user-centric functionalities and utilize Machine Learning, enabling improved predictions of customer health. In a bid to boost coding efficacy, I developed a strategy for code reuse in resolving bugs and reprogramming tasks, thereby enhancing our system's scalability and responsiveness to evolving demands and client specifications.",
      "A significant accomplishment during my tenure involved employing Firebase to speed up the processing of biometric data. This initiative dramatically improved our ability to manage large data volumes in real-time. In a collaborative effort, my team and I developed efficient and visually appealing analytical dashboards for our clients, providing a comprehensive and user-friendly data overview. In tandem with these efforts, I implemented Python-based data processing scripts that notably improved script quality by 30% and reduced coding errors.",
      "In a constant endeavor to improve client interactions, I developed a robust and user-friendly Graphical User Interface (GUI) for our company website. To present data to clients more effectively, I integrated Google APIs, including Google Charts, Sheets, and Data Studio. All these measures were aimed at ensuring a smooth and engaging client experience."    ],
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
