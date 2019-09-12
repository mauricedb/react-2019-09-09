import React from "react";

type GreeterProps = {
  theName: string;
};

class Greeter extends React.Component<GreeterProps> {
  render() {
    return <div>Hello {this.props.theName}</div>;
  }
}

export default Greeter;
