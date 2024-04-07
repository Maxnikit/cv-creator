import React from "react";

function Input({ type, name, value, placeholder, onChange }) {
  return (
    <input
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      className="input-field" // Assuming you have some CSS styles for `.input-field`
    />
  );
}

export default Input;
