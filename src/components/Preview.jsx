import styles from "../styles/Preview.module.css";
function Preview({ generalData, educationData, experienceData, projectsData }) {
  const getFormattedDate = (date) => {
    if (date) {
      return date.toLocaleString("en", { year: "numeric", month: "short" });
    }
  };
  const computeDate = (dateStart, dateEnd) => {
    if (dateStart && dateEnd) {
      return `${getFormattedDate(dateStart)} - ${getFormattedDate(dateEnd)}`;
    }
    if (dateStart && !dateEnd) {
      return `${getFormattedDate(dateStart)} - Ongoing`;
    }
  };
  const jobs = experienceData.map((job, index) => (
    <>
      {job.title && (
        <div key={job.id} className={styles.job}>
          <h3 className={styles.jobTitle}>{job.title}</h3>
          <h4 className={styles.jobCompany}>{job.companyName}</h4>
          <div className={styles.jobDateLocation}>
            <p>
              <i className="fa fa-calendar" aria-hidden="true"></i>{" "}
              {computeDate(job.dateStart, job.dateEnd)}
            </p>
            <p>
              <i className="fa-solid fa-location-dot"></i> {job.companyLocation}
            </p>
          </div>

          <p>{job.description}</p>
        </div>
      )}

      {index !== experienceData.length - 1 && (
        <hr className={styles.lineContent} />
      )}
    </>
  ));
  const projects = projectsData.map((project, index) => (
    <>
      {project.name && (
        <div key={project.id} className={styles.project}>
          <h3 className={styles.projectTitle}>{project.name}</h3>
          <p className={styles.projectSummary}>{project.summary}</p>
          <p className={styles.projectDescription}>{project.description}</p>
        </div>
      )}
      {index !== experienceData.length - 1 && (
        <hr className={styles.lineContent} />
      )}
    </>
  ));
  return (
    <div className={styles.preview}>
      <div className={styles.header}>
        <div className={styles.headerTop}>
          {(generalData.firstName || generalData.lastName) && (
            <h1>
              {generalData.firstName.toUpperCase()}{" "}
              {generalData.lastName.toUpperCase()}
            </h1>
          )}
          {generalData.image && (
            <img src={generalData.image} className={styles.headerImage} />
          )}
        </div>
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
          <h2>EXPERIENCE</h2>
          <hr className={styles.lineHeader} />
          {jobs}
        </div>

        <div className={styles.projects}>
          <h2>PROJECTS</h2>
          <hr className={styles.lineHeader} />
          {projects}
        </div>
        <div className={styles.education}>
          <h2>EDUCATION</h2>
          <hr className={styles.lineHeader} />
          {educationData.degree && (
            <div className={styles.educationContent}>
              <h3 className={styles.degree}>{educationData.degree}</h3>
              <h4 className={styles.school}>{educationData.school}</h4>
              <div className={styles.educationDateLocation}>
                {educationData.dateStart && (
                  <p className={styles.date}>
                    <i className="fa fa-calendar" aria-hidden="true"></i>{" "}
                    {computeDate(
                      educationData.dateStart,
                      educationData.dateEnd
                    )}
                  </p>
                )}

                <p>
                  <i className="fa-solid fa-location-dot"></i>{" "}
                  {educationData.city}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className={styles.sidebar}>
        <div className={styles.philosophy}>
          <h2>MY LIFE PHILOSOPHY</h2>
          <hr className={styles.lineHeader} />
        </div>
        <div className={styles.achievements}>
          <h2>MOST PROUD OF</h2>
          <hr className={styles.lineHeader} />
        </div>
        <div className={styles.strengths}>
          <h2>STRENGTHS</h2>
          <hr className={styles.lineHeader} />
        </div>
        <div className={styles.languages}>
          <h2>LANGUAGES</h2>
          <hr className={styles.lineHeader} />
        </div>
      </div>
    </div>
  );
}
export default Preview;
