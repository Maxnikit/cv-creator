import { TextInput } from "@mantine/core";
import { MonthPickerInput } from "@mantine/dates";
function Job({ formData, onChange }) {
  // Destructure the jobData for easier access to properties
  const {
    id,
    title,
    companyName,
    companyLocation,
    dateStart,
    dateEnd,
    description,
  } = formData;

  return (
    <div className="job" key={id}>
      <TextInput
        type="text"
        value={title}
        label="Job Title"
        placeholder="Frontend Developer"
        onChange={(e) => onChange("title", e.target.value)}
      />
      <TextInput
        type="text"
        value={companyName}
        placeholder="Google"
        label="Company Name"
        onChange={(e) => onChange("companyName", e.target.value)}
      />
      <TextInput
        type="text"
        value={companyLocation}
        placeholder="Mountain View, CA"
        label="Company Location"
        onChange={(e) => onChange("companyLocation", e.target.value)}
      />
      <div>Start date:</div>
      <MonthPickerInput
        name="dateStart"
        value={dateStart}
        placeholder="2020 January"
        onChange={(newValue) => onChange("dateStart", newValue)}
      />
      <div>End date:</div>
      <MonthPickerInput
        name="dateStart"
        value={dateEnd}
        placeholder="2022 February"
        onChange={(newValue) => onChange("dateEnd", newValue)}
      />
      <TextInput
        value={description}
        placeholder="Collaborate with designers, optimize applications, develop features."
        label="Job Description"
        multiline
        onChange={(e) => onChange("description", e.target.value)}
      />
    </div>
  );
}

export default Job;
