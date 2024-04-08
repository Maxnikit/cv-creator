import { useState } from "react";
import Button from "./Button";
import Input from "./Input";

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

  if (isEditing) {
    return (
      // TODO: input validation
      <div className="general">
        <h2>General</h2>
        <div className="inputNameFields">
          <Input
            type="text"
            name="firstName"
            label="First name:"
            value={formData.firstName}
            placeholder="John"
            onChange={handleInputChange}
          />{" "}
          <Input
            type="text"
            name="lastName"
            label="Last name:"
            value={formData.lastName}
            placeholder="Silver"
            onChange={handleInputChange}
          />
        </div>
        <Input
          type="number"
          name="age"
          label="Age:"
          value={formData.age}
          placeholder="33"
          onChange={handleInputChange}
        />
        <Input
          type="email"
          name="email"
          label="Email:"
          value={formData.email}
          placeholder="johnsilv@email.com"
          onChange={handleInputChange}
        />
        <Input
          type="tel"
          name="phone"
          label="Phone:"
          value={formData.phone}
          placeholder="+1 123 456 7890"
          onChange={handleInputChange}
        />

        <Button onClick={saveChanges} text="Confirm" />
      </div>
    );
  }
  return (
    <div className="general">
      <h2>General</h2>
      {/* <label htmlFor="fullName">Name</label>
      <output name="fullName"> {fullName}</output> */}

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
    </div>
  );
}

export default General;
