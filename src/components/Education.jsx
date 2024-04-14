import { useState } from "react";

import { TextInput, Checkbox } from "@mantine/core";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { MonthPickerInput } from "@mantine/dates";

function Education({ formData, onChange }) {
  const { school, degree, city, dateStart, dateEnd } = formData;
  const [isChecked, setIsChecked] = useState(true);
  const handleCheckboxChange = () => {
    onChange("dateEnd", null);

    setIsChecked(!isChecked);
  };

  return (
    <div className="education section">
      <h2>Education</h2>
      <TextInput
        type="text"
        name="school"
        label="School:"
        value={school}
        placeholder="School"
        onChange={(e) => onChange("school", e.target.value)}
      />
      <TextInput
        type="text"
        name="degree"
        label="Degree:"
        value={degree}
        placeholder="Degree"
        onChange={(e) => onChange("degree", e.target.value)}
      />
      <TextInput
        type="text"
        name="city"
        label="City:"
        value={city}
        placeholder="City"
        onChange={(e) => onChange("city", e.target.value)}
      />
      <div>Start date:</div>

      <MonthPickerInput
        name="dateStart"
        value={dateStart}
        placeholder="2000 May"
        onChange={(newValue) => onChange("dateStart", newValue)}
      />
      <div className="checkboxContainer">
        <Checkbox
          onChange={handleCheckboxChange}
          checked={isChecked}
          id="checkbox"
        />{" "}
        <label htmlFor="checkbox">Up to current time</label>
      </div>
      {!isChecked && (
        <>
          <div>End date:</div>
          <MonthPickerInput
            name="dateEnd"
            value={dateEnd}
            placeholder="2005 September"
            onChange={(newValue) => onChange("dateEnd", newValue)}
          />
        </>
      )}
    </div>
  );
}

export default Education;
