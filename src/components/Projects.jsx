import Project from "./Project";
function Projects({ formData, setter, onChange }) {
  return (
    <div className="projects section">
      <h2>Projects</h2>

      <div className="projects">
        {formData.map((project) => (
          <Project
            key={project.id}
            formData={project}
            onChange={(field, value) =>
              onChange(formData, setter, project.id, field, value)
            }
          />
        ))}
      </div>
    </div>
  );
}
export default Projects;
