import { TextField } from "@mui/material";
function General({ formData, onChange }) {
  return (
    <div className="general section">
      <h2>General</h2>
      <div className="inputNameFields">
        <TextField
          type="text"
          name="firstName"
          label="First name:"
          value={formData.firstName}
          placeholder="John"
          onChange={(e) => onChange("firstName", e.target.value)}
          required={true}
        />
        <TextField
          type="text"
          name="lastName"
          label="Last name:"
          value={formData.lastName}
          placeholder="Silver"
          onChange={(e) => onChange("lastName", e.target.value)}
          required={false}
        />
      </div>
      <TextField
        type="number"
        name="age"
        label="Age:"
        value={formData.age}
        placeholder="33"
        onChange={(e) => onChange("age", e.target.value)}
        required={true}
      />
      <TextField
        type="email"
        name="email"
        label="Email:"
        value={formData.email}
        placeholder="johnsilv@email.com"
        onChange={(e) => onChange("email", e.target.value)}
        required={true}
      />
      <TextField
        type="tel"
        name="phone"
        label="Phone:"
        value={formData.phone}
        placeholder="+1 123 456 7890"
        onChange={(e) => onChange("phone", e.target.value)}
        required={true}
      />
    </div>
  );
}

export default General;
