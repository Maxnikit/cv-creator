import { useState } from "react";
import Input from "./Input";

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
      <input
        type="text"
        value={title}
        placeholder="Job Title"
        onChange={(e) => onChange("title", e.target.value)}
      />
      <input
        type="text"
        value={companyName}
        placeholder="Company Name"
        onChange={(e) => onChange("companyName", e.target.value)}
      />
      <input
        type="text"
        value={companyLocation}
        placeholder="Location"
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
      <textarea
        value={description}
        placeholder="Job Description"
        onChange={(e) => onChange("description", e.target.value)}
      />
    </div>
  );
}

export default Job;
