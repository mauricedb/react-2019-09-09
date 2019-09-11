import React from "react";
import LabelWithInput from "./LabelWithInput";

function PersonPresentation({ firstName, lastName, onChange, onSave }) {
  return (
    <div>
      <div data-test-id="The value">FirstName = {firstName.toUpperCase()}</div>
      <LabelWithInput
        label="Firstname: "
        name="firstName"
        value={firstName}
        onChange={onChange}
      />
      <LabelWithInput
        label="Lastname: "
        name="lastName"
        value={lastName}
        onChange={onChange}
      />
      <button onClick={() => onSave({ firstName, lastName })}>Save</button>
    </div>
  );
}

export default PersonPresentation;
