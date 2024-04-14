import { TextInput } from "@mantine/core";
// import classes from "./TextInput.module.css";
function General({ formData, onChange }) {
  return (
    <div className="general section">
      <h2>General</h2>
      <div className="inputNameFields">
        <TextInput
          type="text"
          name="firstName"
          label="First name:"
          value={formData.firstName}
          placeholder="John"
          onChange={(e) => onChange("firstName", e.target.value)}
        />
        <TextInput
          type="text"
          name="lastName"
          label="Last name:"
          value={formData.lastName}
          placeholder="Silver"
          onChange={(e) => onChange("lastName", e.target.value)}
        />
      </div>
      <TextInput
        type="text"
        name="position"
        label="Position:"
        value={formData.position}
        placeholder="Frontend Developer"
        onChange={(e) => onChange("position", e.target.value)}
      />
      <TextInput
        type="email"
        name="email"
        label="Email:"
        value={formData.email}
        placeholder="johnsilv@email.com"
        onChange={(e) => onChange("email", e.target.value)}
      />
      <TextInput
        type="tel"
        name="phone"
        label="Phone:"
        value={formData.phone}
        placeholder="+1 123 456 7890"
        onChange={(e) => onChange("phone", e.target.value)}
      />
    </div>
  );
}

export default General;
