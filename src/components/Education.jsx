import { useState } from "react";

import Input from "./Input";

import { DatePicker } from "@mui/x-date-pickers/DatePicker";

function Education({ formData, onChange, onDateChange }) {
  const { school, degree, city, dateStart, dateEnd } = formData;
  const [isChecked, setIsChecked] = useState(true);
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="education section">
      <h2>Education</h2>
      <Input
        type="text"
        name="school"
        label="School:"
        value={school}
        placeholder="School"
        onChange={onChange}
        required={true}
      />
      <Input
        type="text"
        name="degree"
        label="Degree:"
        value={degree}
        placeholder="Degree"
        onChange={onChange}
        required={true}
      />
      <Input
        type="text"
        name="city"
        label="City:"
        value={city}
        placeholder="City"
        onChange={onChange}
        required={true}
      />
      <div>Start date:</div>
      <DatePicker
        name="dateStart"
        value={dateStart}
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
            value={dateEnd}
            onChange={onDateChange("dateEnd")}
            views={["year", "month"]}
          />
        </>
      )}
    </div>
  );
}

export default Education;
