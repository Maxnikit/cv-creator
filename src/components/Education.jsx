import { useState } from "react";

import Input from "./Input";

import { DatePicker } from "@mui/x-date-pickers/DatePicker";

function Education({ formData, onChange, onDateChange }) {
  const [isChecked, setIsChecked] = useState(true);
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="education">
      <h2>Education</h2>
      <Input
        type="text"
        name="school"
        label="School:"
        value={formData.school}
        placeholder="School"
        onChange={onChange}
        required={true}
      />
      <Input
        type="text"
        name="degree"
        label="Degree:"
        value={formData.degree}
        placeholder="Degree"
        onChange={onChange}
        required={true}
      />
      <Input
        type="text"
        name="city"
        label="City:"
        value={formData.city}
        placeholder="City"
        onChange={onChange}
        required={true}
      />
      <div>Start date:</div>
      <DatePicker
        name="dateStart"
        value={formData.dateStart}
        onChange={onDateChange("dateStart")}
        // onChange={(newValue) => setDateStart(newValue)}
        views={["year", "month"]}
      />
      <div className="checkboxContainer">
        <input
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={isChecked}
          id="checkbox"
        />
        <label htmlFor="checkbox">Up to current time</label>
      </div>
      {!isChecked && (
        <>
          <div>End date:</div>
          <DatePicker
            value={formData.dateEnd}
            onChange={onDateChange("dateEnd")}
            views={["year", "month"]}
          />
        </>
      )}
    </div>
  );
}

export default Education;
