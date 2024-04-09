import { useState } from "react";
import Button from "./Button";
import Input from "./Input";

import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

function Education() {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    school: "",
    city: "",
    degree: "",
    fullDate: "",
  });
  const [selectedDateStart, setSelectedDateStart] = useState(null);
  const [selectedDateEnd, setSelectedDateEnd] = useState(null);
  const [isChecked, setIsChecked] = useState(true);
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  const getMonthByIndex = (index) => {
    return new Date(2000, index).toLocaleString("en", {
      month: "long",
    });
  };
  function computeFullDate() {
    if (selectedDateStart && selectedDateEnd) {
      const startMonth = getMonthByIndex(selectedDateStart.$M);
      const endMonth = getMonthByIndex(selectedDateEnd.$M);

      setFormData({
        ...formData,
        fullDate:
          startMonth +
          " " +
          selectedDateStart.$y +
          " - " +
          endMonth +
          " " +
          selectedDateEnd.$y,
      });
      console.log(formData.fullDate);
    } else if (selectedDateStart && selectedDateEnd === null) {
      const startMonth = getMonthByIndex(selectedDateStart.$M);
      setFormData({
        ...formData,
        fullDate: startMonth + " " + selectedDateStart.$y + " - " + "Present",
      });
      console.log(formData.fullDate);
    }
  }
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };
  const handleSubmit = () => {
    saveChanges();
  };
  const saveChanges = () => {
    computeFullDate();
    // TODO: logic to save changes
    setIsEditing(false);
    console.log("done");
  };

  return (
    <div className="education">
      <Accordion className="accordion">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <h2>Education</h2>
        </AccordionSummary>
        <AccordionDetails>
          {isEditing && (
            <form className="card-container" onSubmit={handleSubmit}>
              <Input
                type="text"
                name="school"
                label="School:"
                value={formData.school}
                placeholder="School"
                onChange={handleInputChange}
                required={true}
              />
              <Input
                type="text"
                name="degree"
                label="Degree:"
                value={formData.degree}
                placeholder="Degree"
                onChange={handleInputChange}
                required={true}
              />
              <Input
                type="text"
                name="city"
                label="City:"
                value={formData.city}
                placeholder="City"
                onChange={handleInputChange}
                required={true}
              />
              <div>Start date:</div>
              <DatePicker
                value={selectedDateStart}
                onChange={(newValue) => setSelectedDateStart(newValue)}
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
                    value={selectedDateEnd}
                    onChange={(newValue) => setSelectedDateEnd(newValue)}
                    views={["year", "month"]}
                  />
                </>
              )}

              <Button type="Submit" text="Confirm" />
            </form>
          )}
          {!isEditing && (
            <div className="card-container">
              <p className="outputContainer">
                <strong>School:</strong> {formData.school}
              </p>
              <p className="outputContainer">
                <strong>Degree:</strong> {formData.degree}
              </p>
              <p className="outputContainer">
                <strong>City:</strong> {formData.city}
              </p>
              <p className="outputContainer">
                <strong>Date:</strong> {formData.fullDate}
              </p>
              <Button text="Edit" onClick={toggleEdit} />
            </div>
          )}
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default Education;
