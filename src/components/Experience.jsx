import Job from "./Job";

function Experience({ formData, onChange }) {
  return (
    <div className="experience section">
      <h2>Experience</h2>
      <div className="jobs">
        {formData.map((job) => (
          <Job
            key={job.id}
            formData={job}
            onChange={(field, value) => onChange(job.id, field, value)}
          />
        ))}
      </div>
    </div>
  );
}

export default Experience;
