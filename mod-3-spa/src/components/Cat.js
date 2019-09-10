import React from "react";
import imgSrc from "./cat.jpg";

function Cat(props) {
  console.log(props);

  return (
    <div>
      <img src={imgSrc} alt="A cat" height="200" />
    </div>
  );
}

export default Cat;
