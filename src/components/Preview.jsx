import styles from "../styles/Preview.module.css";
function Preview({ generalData, educationData, experienceData }) {
  const getFormattedDate = (date) => {
    if (date) {
      return date.toLocaleString("en", { year: "numeric", month: "long" });
    }
  };
  const computeDate = (dateStart, dateEnd) => {
    if (dateStart && dateEnd) {
      return `${getFormattedDate(dateStart)} - ${getFormattedDate(dateEnd)}`;
    }
    if (dateStart && !dateEnd) {
      return `${getFormattedDate(dateStart)} - Present`;
    }
  };
  const jobs = experienceData.map((job) => (
    <div key={job.id} className={styles.job}>
      <h3>{job.title}</h3>
      <p>{job.companyName}</p>
      <p>{job.companyLocation}</p>
      <p>{computeDate(job.dateStart, job.dateEnd)}</p>
      <p>{job.description}</p>
    </div>
  ));
  return (
    <div className={styles.preview}>
      <div className={styles.header}>
        {(generalData.firstName || generalData.lastName) && (
          <h1>
            {generalData.firstName} {generalData.lastName}
          </h1>
        )}
        {generalData.position && <h3>{generalData.position}</h3>}
        <div className={styles.contacts}>
          {generalData.email && (
            <p>
              <i className="fa-solid fa-envelope"></i>
              {generalData.email}
            </p>
          )}
          {generalData.phone && (
            <p>
              <i className="fa fa-phone" aria-hidden="true"></i>
              {generalData.phone}
            </p>
          )}
        </div>
      </div>
      <div className={styles.main}>
        <div className={styles.experience}>
          <h2>Experience</h2>
          {jobs}
        </div>
        <div className={styles.projects}>
          <h2>Projects</h2>
          {/* Placeholder */}
          <p>Project 1</p>
          <p>Project 2</p>
          <p>Project 3</p>
        </div>
        <div className={styles.education}>
          <h2>Education</h2>
          <h3>{educationData.degree}</h3>
          <h4>{educationData.school}</h4>
          <p>{educationData.city}</p>
          {educationData.dateStart && (
            <p className={styles.date}>
              <i className="fa fa-calendar" aria-hidden="true"></i>
              {computeDate(educationData.dateStart, educationData.dateEnd)}
            </p>
          )}
        </div>
      </div>
      <div className={styles.sidebar}>
        <div className={styles.philosophy}></div>
        <div className={styles.achievements}></div>
        <div className={styles.strengths}></div>
        <div className={styles.languages}></div>
      </div>
    </div>
  );
}
export default Preview;
