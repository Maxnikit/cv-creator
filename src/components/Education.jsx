import { useState } from "react";
import Button from "./Button";
import Input from "./Input";
import Example from "./Example";

function Education() {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    school: "Harward University",
    city: "Boston, MA",
    degree: "Bachelor's",
    fullDate: "September 2020 - April 2024",
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
  function computeFullDate() {
    if (selectedDateStart.monthName && isChecked) {
      setFormData({
        ...formData,
        fullDate:
          selectedDateStart.monthName +
          " " +
          selectedDateStart.year +
          " - " +
          "Present",
      });
    } else if (selectedDateStart.monthName && selectedDateEnd.monthName) {
      console.log("IF TRIGGERED");
      setFormData({
        ...formData,
        fullDate:
          selectedDateStart.monthName +
          " " +
          selectedDateStart.year +
          " - " +
          selectedDateEnd.monthName +
          " " +
          selectedDateEnd.year,
      });
    }
  }
  console.log(selectedDateStart);
  console.log(selectedDateEnd);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const saveChanges = () => {
    computeFullDate();
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
          name="degree"
          value={formData.degree}
          placeholder="Degree"
          onChange={handleInputChange}
        />
        <Input
          type="text"
          name="city"
          value={formData.city}
          placeholder="City"
          onChange={handleInputChange}
        />
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
          />
          <label htmlFor="checkbox">Up to current time</label>
          {!isChecked && (
            <Example
              selectedMonthData={selectedDateEnd}
              setSelectedMonthData={setSelectedDateEnd}
            />
          )}
        </div>
        <Button text="Confirm" onClick={saveChanges} />
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
      </p>{" "}
      <p className="outputContainer">
        <strong>City:</strong> {formData.city}
      </p>
      <p className="outputContainer">
        <strong>Date:</strong> {formData.fullDate}
      </p>
      <Button text="Edit" onClick={toggleEdit} />
    </div>
  );
}

export default Education;
