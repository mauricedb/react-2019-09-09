import React from "react";
import imgSrc from "./dog.jpg";
import { withRouter } from "react-router-dom";

function Dog(props) {
  console.log(props);

  return (
    <div>
      <img src={imgSrc} alt="A dog" height="200" />
    </div>
  );
}

export default withRouter(Dog);
