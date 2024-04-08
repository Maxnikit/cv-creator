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
  let fullDate;
  if (formData.studyDateStart) {
    fullDate = formData.studyDateStart + " - " + formData.studyDateEnd;
  }

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
        <Input
          type="number"
          name="studyDateStart"
          value={formData.studyDateStart}
          placeholder="Start Date"
          onChange={handleInputChange}
        />
        {/* TODO: разобраться с Example: https://www.react-lite-month-picker.dev/ */}
        <Example />
        <Example />
        <Input
          type="text"
          name="studyDateEnd"
          value={formData.studyDateEnd}
          placeholder="End Date"
          onChange={handleInputChange}
        />
        <Button text="Save" onClick={saveChanges} />
      </div>
    );
  }
  return (
    <div className="education">
      <h2>Education</h2>
      <p>
        <strong>School:</strong> {formData.school}
      </p>
      <p>
        <strong>Degree:</strong> {formData.degree}
      </p>
      <p>
        <strong>Date:</strong> {fullDate}
      </p>
      <p>
        <strong>City:</strong> {formData.city}
      </p>
      <Button text="Edit" onClick={toggleEdit} />
    </div>
  );
}

export default Education;
