import { useState } from "react";
import Input from "./Input";
import Button from "./Button";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PropTypes from "prop-types";

import { DatePicker } from "@mui/x-date-pickers/DatePicker";
// TODO возможно, заменить DatePicker на вариант от materialUI. потому что текущий работает как Submit при валидации. Но от Material UI медленный. Найти способ ускорить
function Job({ setButtonVisible, removeJob, key }) {
  const [isEditing, setIsEditing] = useState(true);
  const [formData, setFormData] = useState({
    title: "",
    companyName: "",
    companyLocation: "",
    fullDate: "",
    description: "",
  });
  const [selectedDateStart, setSelectedDateStart] = useState(null);
  const [selectedDateEnd, setSelectedDateEnd] = useState(null);
  //   let startDate;
  //   let endDate;
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const toggleEdit = () => {
    setIsEditing(!isEditing);
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
    }
  }
  const handleSubmit = () => {
    saveChanges();
    setButtonVisible(true);
  };
  const handleCancel = () => {
    setIsEditing(false);
    setButtonVisible(true);
    removeJob(key);
  };
  const saveChanges = () => {
    computeFullDate();
    // TODO: logic to save changes
    setIsEditing(false);
  };
  if (isEditing) {
    return (
      <form className="card-container" onSubmit={handleSubmit}>
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
            required={true}
          />
          <Input
            type="text"
            name="companyLocation"
            label="Company location:"
            placeholder={"Mountain View, CA"}
            value={formData.companyLocation}
            onChange={handleInputChange}
            required={true}
          />
          <div>Start date:</div>
          <DatePicker
            value={selectedDateStart}
            onChange={(newValue) => setSelectedDateStart(newValue)}
            views={["year", "month"]}
          />
          <div>End date:</div>
          <DatePicker
            value={selectedDateEnd}
            onChange={(newValue) => setSelectedDateEnd(newValue)}
            views={["year", "month"]}
          />
          <div>Description:</div>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
          />
          <div className="buttons">
            {" "}
            <Button type="submit" text="Confirm" />
            <Button type="button" text="Cancel" onClick={handleCancel} />
          </div>
        </div>
      </form>
    );
  }
  return (
    <div className="job">
      <Accordion className="accordion">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          className="job-header"
        >
          <h3>{formData.companyName}</h3> <h4>{formData.title}</h4>
        </AccordionSummary>
        <AccordionDetails>
          <div className="card-container">
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
            <Button type="button" text="Edit" onClick={toggleEdit} />
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
Job.propTypes = {
  setButtonVisible: PropTypes.func,
};
export default Job;
