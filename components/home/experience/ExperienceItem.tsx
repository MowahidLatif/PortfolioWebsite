import { Reveal } from "@/components/utils/Reveal";
import styles from "./experience.module.scss";

interface Props {
  title: string;
  position: string;
  time: string;
  location: string;
  description: string[];
  tech: string[];
}

export const ExperienceItem = ({
  title,
  position,
  time,
  location,
  description,
  tech,
}: Props) => {
  return (
    <div className={styles.experience}>
      <div className={styles.heading}>
        <Reveal>
          <span className={styles.title}>{title}</span>
        </Reveal>
        <Reveal>
          <span>{time}</span>
        </Reveal>
      </div>

      <div className={styles.heading}>
        <Reveal>
          <span className={styles.position}>{position}</span>
        </Reveal>
        <Reveal>
          <span>{location}</span>
        </Reveal>
      </div>
      <Reveal>
        <div>
          {description?.map((desc: string) => (
            <p className={styles.description} key={desc}>{desc}</p>
          ))}
        </div>
      </Reveal>
      <Reveal>
        <div className={styles.tech}>
          {tech.map((item) => (
            <span key={item} className="chip">
              {item}
            </span>
          ))}
        </div>
      </Reveal>
    </div>
  );
};
