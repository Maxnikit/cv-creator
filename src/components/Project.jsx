import { TextInput, Textarea } from "@mantine/core";

function Project({ formData, onChange }) {
  // Destructure the jobData for easier access to properties
  const { id, name, summary, description } = formData;

  return (
    <div className="job" key={id}>
      <TextInput
        type="text"
        value={name}
        label="Project Name:"
        placeholder="CV-Creator"
        onChange={(e) => onChange("name", e.target.value)}
      />
      <TextInput
        type="text"
        value={summary}
        placeholder="App for creating beautiful CVs"
        label="Summary:"
        onChange={(e) => onChange("summary", e.target.value)}
      />
      <Textarea
        value={description}
        placeholder="React app that takes info from user and making a CV in .pdf format"
        label="Description:"
        onChange={(e) => onChange("description", e.target.value)}
        autosize={true}
        minRows={2}
        maxLength={80}
      />
    </div>
  );
}

export default Project;
