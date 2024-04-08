import React from "react";

function Input({ type, name, value, placeholder, onChange }) {
  const labelTitle = name.charAt(0).toUpperCase() + name.slice(1) + ":";
  return (
    <div className="input-container">
      <label htmlFor={name}>{labelTitle}</label>
      <input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className="input-field" // Assuming you have some CSS styles for `.input-field`
      />
    </div>
  );
}

export default Input;
