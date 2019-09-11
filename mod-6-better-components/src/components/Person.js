import React, { PureComponent } from "react";
import withErrorBoundary from "./errorBoundary";
import PropTypes from "prop-types";

// class X {
//   constructor() {
//     this.fn = this.fn.bind(this);
//   }
//   fn() {
//     console.log(this);
//   }
// }

// const x = new X();
// x.fn();
// const fn = x.fn;
// fn();

// const o = { x: 1, fn };
// o.fn();

class Person extends PureComponent {
  state = {
    firstName: "Maurice",
    lastName: "de Beijer"
  };

  // constructor() {
  //   super();
  //   this.onChangeLastName = this.onChangeLastName.bind(this);
  // }

  // onChangeFirstName = e => {
  //   this.setState({ firstName: e.target.value });
  // };

  // onChangeLastName(e) {
  //   this.setState({ lastName: e.target.value });
  // }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    // console.count("person render");
    const { firstName, lastName } = this.state;

    return (
      <PersonPresentation
        firstName={firstName}
        lastName={lastName}
        onChange={this.onChange}
      />
    );
  }
}

function PersonPresentation({ firstName, lastName, onChange }) {
  return (
    <div>
      <div>FirstName = {firstName.toUpperCase()}</div>
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
        props={{ style: { backgroundColor: "red" } }}
      />
    </div>
  );
}

function LabelWithInput({ label, name, value, onChange, props }) {
  return (
    <div>
      <label>{label}</label>
      <input name={name} value={value} {...props} onChange={onChange} />
    </div>
  );
}

LabelWithInput.propTypes = {
  label: PropTypes.string.isRequired
};

export default withErrorBoundary(Person);
