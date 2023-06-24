import { MyLinks } from "@/components/nav/components/MyLinks";
import { Reveal } from "@/components/utils/Reveal";
import { SectionHeader } from "@/components/utils/SectionHeader";
import styles from "./about.module.scss";
import { Stats } from "./Stats";
import { AiOutlineArrowRight } from "react-icons/ai";

export const About = () => {
  return (
    <section id="about" className="section-wrapper">
      <SectionHeader title="About" dir="l" />
      <div className={styles.about}>
        <div>
          <Reveal>
            <p className={`${styles.aboutText} ${styles.highlightFirstLetter}`}>
              Hey! I&apos;m Mowahid Latif, if you haven&apos;t already gathered that by
              now. I&apos;m a Software Engineer from Winnipeg, 
              Manitoba. I specialize in the frontend, primarily React.js and Next.js, but
              love building with whatever tools are right for the job.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
            I like to get things done, and I'm a thoughtful person yet very hands-on. 
            I'm are not afraid of trying out new tools, dealing with new requests, and getting over them.  
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              Outside of work, I enjoy reading. I try to workout as much as i can, and 
              I enjoy nature walks and boxing! I like the thrill of learning a new skill, and for
              that reason, im persuing a career in devops, as im taking a course for that right now!
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              I'm a keen learner and there is almost nothing that i wont try to learn more about. I 
              try to read as much as i can and i do monthly sprints, about specific topics, weather 
              that be business or neurochemistry. Knowledge is the greatest tool we have and of course, 
              knowledge is power!
            </p>
          </Reveal>
          <Reveal>
            <div className={styles.links}>
              <div className={styles.linksText}>
                <span>My links</span>
                <AiOutlineArrowRight />
              </div>
              <MyLinks />
            </div>
          </Reveal>
        </div>
        <Stats />
      </div>
    </section>
  );
};
