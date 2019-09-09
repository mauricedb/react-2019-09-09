import React from "react";
import imgSrc from "./dog.jpg";

function Dog() {
  return (
    <div>
      <img src={imgSrc} alt="A dog" height="200" />
    </div>
  );
}

export default Dog;
