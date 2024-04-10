import Input from "./Input";

function General({ formData, onChange }) {
  return (
    <div className="general">
      <h2>General</h2>
      <div className="inputNameFields">
        <Input
          type="text"
          name="firstName"
          label="First name:"
          value={formData.firstName}
          placeholder="John"
          onChange={onChange}
          required={true}
        />
        <Input
          type="text"
          name="lastName"
          label="Last name:"
          value={formData.lastName}
          placeholder="Silver"
          onChange={onChange}
          required={false}
        />
      </div>
      <Input
        type="number"
        name="age"
        label="Age:"
        value={formData.age}
        placeholder="33"
        onChange={onChange}
        required={true}
      />
      <Input
        type="email"
        name="email"
        label="Email:"
        value={formData.email}
        placeholder="johnsilv@email.com"
        onChange={onChange}
        required={true}
      />
      <Input
        type="tel"
        name="phone"
        label="Phone:"
        value={formData.phone}
        placeholder="+1 123 456 7890"
        onChange={onChange}
        required={true}
      />
    </div>
  );
}

export default General;
