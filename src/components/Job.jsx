import { TextField } from "@mui/material";

import { DatePicker } from "@mui/x-date-pickers/DatePicker";
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
      <TextField
        type="text"
        value={title}
        label="Job Title"
        placeholder="Frontend Developer"
        onChange={(e) => onChange("title", e.target.value)}
      />
      <TextField
        type="text"
        value={companyName}
        placeholder="Google"
        label="Company Name"
        onChange={(e) => onChange("companyName", e.target.value)}
      />
      <TextField
        type="text"
        value={companyLocation}
        placeholder="Mountain View, CA"
        label="Company Location"
        onChange={(e) => onChange("companyLocation", e.target.value)}
      />
      <div>Start date:</div>
      <DatePicker
        value={dateStart}
        onChange={(newValue) => onChange("dateStart", newValue)}
        views={["year", "month"]}
      />
      <div>End date:</div>
      <DatePicker
        value={dateEnd}
        onChange={(newValue) => onChange("dateEnd", newValue)}
        views={["year", "month"]}
      />
      <TextField
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
