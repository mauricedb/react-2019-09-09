import React from "react";
import PropTypes from "prop-types";

function LabelWithInput({ label, name, value, onChange, props }) {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        value={value}
        {...props}
        onChange={onChange}
      />
    </div>
  );
}

LabelWithInput.propTypes = {
  label: PropTypes.string.isRequired
};

export default LabelWithInput;
