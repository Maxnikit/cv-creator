import { TextInput, Textarea } from "@mantine/core";
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
        label="Job Title:"
        placeholder="Frontend Developer"
        onChange={(e) => onChange("title", e.target.value)}
      />
      <TextInput
        type="text"
        value={companyName}
        placeholder="Google"
        label="Company Name:"
        onChange={(e) => onChange("companyName", e.target.value)}
      />
      <TextInput
        type="text"
        value={companyLocation}
        placeholder="Mountain View, CA"
        label="Company Location:"
        onChange={(e) => onChange("companyLocation", e.target.value)}
      />
      <MonthPickerInput
        name="dateStart"
        value={dateStart}
        label="Start date:"
        placeholder="January 2022"
        onChange={(newValue) => onChange("dateStart", newValue)}
      />
      <MonthPickerInput
        name="dateStart"
        value={dateEnd}
        label="End date:"
        placeholder="February 2022"
        onChange={(newValue) => onChange("dateEnd", newValue)}
      />
      {/* TODO add a character limit to all Inputs */}
      <Textarea
        value={description}
        placeholder="Collaborate with designers, optimize applications, develop features."
        label="Job Description:"
        onChange={(e) => onChange("description", e.target.value)}
        autosize={true}
        minRows={4}
        maxLength={80}
      />
    </div>
  );
}

export default Job;
