import { useState } from "react";
import Button from "./Button";
import Input from "./Input";
import Example from "./Example";

function Education() {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    school: "",
    city: "",
    degree: "",
    studyDateStart: "",
    studyDateEnd: "",
  });
  const [selectedDateStart, setSelectedDateStart] = useState({
    month: 9,
    year: 2020,
    monthName: "",
  });
  const [selectedDateEnd, setSelectedDateEnd] = useState({
    month: 4,
    year: 2024,
    monthName: "",
  });
  const [isChecked, setIsChecked] = useState(true);
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  let fullDate;
  if (selectedDateStart.monthName && selectedDateEnd.monthName) {
    fullDate =
      selectedDateStart.monthName +
      " " +
      selectedDateStart.year +
      " - " +
      selectedDateEnd.monthName +
      " " +
      selectedDateEnd.year;
  } else if (selectedDateStart.monthName && isChecked) {
    fullDate =
      selectedDateStart.monthName +
      " " +
      selectedDateStart.year +
      " - " +
      "Present";
  }
  console.log(selectedDateStart);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const saveChanges = () => {
    // TODO: logic to save changes
    setIsEditing(false);
  };
  if (isEditing) {
    return (
      <div className="education">
        <h2>Education</h2>
        <Input
          type="text"
          name="school"
          value={formData.school}
          placeholder="School"
          onChange={handleInputChange}
        />
        <Input
          type="text"
          name="city"
          value={formData.city}
          placeholder="City"
          onChange={handleInputChange}
        />
        <Input
          type="text"
          name="degree"
          value={formData.degree}
          placeholder="Degree"
          onChange={handleInputChange}
        />

        {/* TODO: разобраться с Example: https://www.react-lite-month-picker.dev/ */}
        <Example
          selectedMonthData={selectedDateStart}
          setSelectedMonthData={setSelectedDateStart}
        />
        <div>
          <input
            type="checkbox"
            onChange={handleCheckboxChange}
            checked={isChecked}
            id="checkbox"
          />{" "}
          <label htmlFor="checkbox">Up to current time</label>{" "}
          {!isChecked && (
            <Example
              selectedMonthData={selectedDateEnd}
              setSelectedMonthData={setSelectedDateEnd}
            />
          )}
        </div>

        <Button text="Save" onClick={saveChanges} />
      </div>
    );
  }
  return (
    <div className="education">
      <h2>Education</h2>
      <p className="outputContainer">
        <strong>School:</strong> {formData.school}
      </p>
      <p className="outputContainer">
        <strong>Degree:</strong> {formData.degree}
      </p>
      <p className="outputContainer">
        <strong>Date:</strong> {fullDate}
      </p>
      <p className="outputContainer">
        <strong>City:</strong> {formData.city}
      </p>
      <Button text="Edit" onClick={toggleEdit} />
    </div>
  );
}

export default Education;
