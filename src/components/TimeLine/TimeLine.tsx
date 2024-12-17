import styles from './TimeLine.module.css';

interface Certificate {
    date: string;
    title: string;
    institution: string;
    description?: string;
}

interface TimeLineProps {
    certificates: Certificate[];
}

const TimeLine: React.FC<TimeLineProps> = ({ certificates }) => {
    return (
        <div className={styles.timeline}>
        {certificates.map((certificate, index) => (
          <div key={index} className={styles.timelineItem}>
            <div className={styles.timelineDate}>{certificate.date}</div>
            <div className={styles.timelineContent}>
              <h3>{certificate.title}</h3>
              <h4>{certificate.institution}</h4>
              {certificate.description && <p>{certificate.description}</p>}
            </div>
          </div>
        ))}
      </div>
    );
  };

  export default TimeLine;