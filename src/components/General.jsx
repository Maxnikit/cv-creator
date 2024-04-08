import { useState } from "react";
import Button from "./Button";
import Input from "./Input";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function General() {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    email: "",
    phone: "",
  });
  const fullName = formData.firstName + " " + formData.lastName;
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

  return (
    <div className="general">
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <h2>General</h2>
        </AccordionSummary>
        <AccordionDetails>
          {isEditing && (
            <>
              <div className="inputNameFields">
                <Input
                  type="text"
                  name="firstName"
                  label="First name:"
                  value={formData.firstName}
                  placeholder="John"
                  onChange={handleInputChange}
                  required={true}
                />
                <Input
                  type="text"
                  name="lastName"
                  label="Last name:"
                  value={formData.lastName}
                  placeholder="Silver"
                  onChange={handleInputChange}
                  required={false}
                />
              </div>
              <Input
                type="number"
                name="age"
                label="Age:"
                value={formData.age}
                placeholder="33"
                onChange={handleInputChange}
                required={true}
              />
              <Input
                type="email"
                name="email"
                label="Email:"
                value={formData.email}
                placeholder="johnsilv@email.com"
                onChange={handleInputChange}
                required={true}
              />
              <Input
                type="tel"
                name="phone"
                label="Phone:"
                value={formData.phone}
                placeholder="+1 123 456 7890"
                onChange={handleInputChange}
                required={true}
              />

              <Button onClick={saveChanges} text="Confirm" />
            </>
          )}
          {!isEditing && (
            <>
              <p className="outputContainer">
                <strong>Name:</strong> {fullName}
              </p>
              <p className="outputContainer">
                <strong>Age:</strong> {formData.age}
              </p>
              <p className="outputContainer">
                <strong>Email:</strong> {formData.email}
              </p>
              <p className="outputContainer">
                <strong>Phone:</strong> {formData.phone}
              </p>
              <Button onClick={toggleEdit} text="Edit" />
            </>
          )}
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default General;
