import React, { PureComponent } from "react";
import withErrorBoundary from "./errorBoundary";
import PersonPresentation from "./PersonPresentation";

class Person extends PureComponent {
  state = {
    firstName: "Maurice",
    lastName: "de Beijer"
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { onSave } = this.props;
    const { firstName, lastName } = this.state;

    return (
      <PersonPresentation
        firstName={firstName}
        lastName={lastName}
        onChange={this.onChange}
        onSave={onSave}
      />
    );
  }
}

export default withErrorBoundary(Person);
