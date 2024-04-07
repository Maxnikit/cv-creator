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
    // TODO logic to save changes
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <div className="general">
        <h2>General</h2>
        <div className="inputNameFields">
          <Input
            type="text"
            name="firstName"
            value={formData.firstName}
            placeholder="First Name"
            onChange={handleInputChange}
          />{" "}
          <Input
            type="text"
            name="lastName"
            value={formData.lastName}
            placeholder="Last Name"
            onChange={handleInputChange}
          />
        </div>
        <Input
          type="text"
          name="age"
          value={formData.age}
          placeholder="Age"
          onChange={handleInputChange}
        />
        <Input
          type="email"
          name="email"
          value={formData.email}
          placeholder="Email"
          onChange={handleInputChange}
        />
        <Input
          type="tel"
          name="phone"
          value={formData.phone}
          placeholder="Phone"
          onChange={handleInputChange}
        />
        <Button onClick={saveChanges} text="Confirm" />
      </div>
    );
  }
  return (
    <div className="general">
      <h2>General</h2>
      <p>
        <strong>Name:</strong> {fullName}
      </p>
      <p>
        <strong>Age:</strong> {formData.age}
      </p>
      <p>
        <strong>Email:</strong> {formData.email}
      </p>
      <p>
        <strong>Phone:</strong> {formData.phone}
      </p>
      <Button onClick={toggleEdit} text="Edit" />
    </div>
  );
}

export default General;
