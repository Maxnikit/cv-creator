import { useState } from "react";
import Input from "./Input";
import Button from "./Button";
import Example from "./Example";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function Job({ setButtonVisible }) {
  const [isEditing, setIsEditing] = useState(true);
  const [formData, setFormData] = useState({
    title: "",
    companyName: "",
    companyLocation: "",
    fullDate: "",
    description: "",
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
  let startDate;
  let endDate;
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };
  function computeFullDate() {
    if (selectedDateStart.monthName && selectedDateEnd.monthName) {
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
  const handleSubmit = () => {
    saveChanges();
    setButtonVisible(true);
  };
  const saveChanges = () => {
    computeFullDate();
    // TODO: logic to save changes
    setIsEditing(false);
  };
  if (isEditing) {
    return (
      <form onSubmit={handleSubmit}>
        <div className="job">
          <Input
            type="text"
            name="title"
            label="Job title:"
            placeholder="Frontend Developer"
            value={formData.title}
            onChange={handleInputChange}
            required={true}
          />
          <Input
            type="text"
            name="companyName"
            label="Company name:"
            placeholder={"Google"}
            value={formData.companyName}
            onChange={handleInputChange}
          />
          <Input
            type="text"
            name="companyLocation"
            label="Company location:"
            placeholder={"Mountain View, CA"}
            value={formData.companyLocation}
            onChange={handleInputChange}
          />
          <Example
            text="Start date:"
            selectedMonthData={selectedDateStart}
            setSelectedMonthData={setSelectedDateStart}
          />
          <Example
            text="End date:"
            selectedMonthData={selectedDateEnd}
            setSelectedMonthData={setSelectedDateEnd}
          />
          <label htmlFor="description">Description:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
          />
          <Button type="submit" text="Confirm" />
        </div>
      </form>
    );
  }
  return (
    <div className="job">
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <h3>{formData.title}</h3>
        </AccordionSummary>
        <AccordionDetails>
          <p>
            <strong>Company Name:</strong> {formData.companyName}
          </p>
          <p>
            <strong>Company Location:</strong> {formData.companyLocation}
          </p>
          <p>
            <strong>Date:</strong> {formData.fullDate}
          </p>
          <p>
            <strong>Description:</strong> {formData.description}
          </p>
          <Button text="Edit" onClick={toggleEdit} />
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default Job;
