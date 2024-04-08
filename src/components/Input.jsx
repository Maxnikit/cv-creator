import React from "react";

function Input({ type, name, value, placeholder, onChange, label, required }) {
  return (
    <div className="input-container">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className="input-field" // Assuming you have some CSS styles for `.input-field`
        required={required}
      />
    </div>
  );
}

export default Input;
