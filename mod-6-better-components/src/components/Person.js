import React, { Component } from "react";

class PersonContainer extends Component {
  state = {
    firstName: "Maurice",
    lastName: "de Beijer"
  };

  onChangeFirstName(e) {
    this.setState({ firstName: e.target.value });
  }

  onChangeLastName(e) {
    this.setState({ lastName: e.target.value });
  }

  render() {
    const { firstName, lastName } = this.state;

    return (
      <div>
        <div>
          <label>Firstname: </label>
          <input
            name="firstName"
            value={firstName}
            onChange={this.onChangeFirstName}
          />
        </div>
        <div>
          <label>Lastname: </label>
          <input
            name="lastName"
            value={lastName}
            onChange={this.onChangeLastName}
          />
        </div>
      </div>
    );
  }
}

export default PersonContainer;
