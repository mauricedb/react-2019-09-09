// import * as React from "react";

// console.log(React);

class Calculator {
  // private readonly x: number;

  // constructor(x: number) {
  //   this.x = x;
  // }

  constructor(private readonly x: number) {}

  add(x: number, y: number) {
    return x + y;
  }

  subtract(x: number, y: number) {
    return x - y;
  }
}

const x = document.getElementById("x") as HTMLInputElement;
const y = document.getElementById("y") as HTMLInputElement;
const add = document.getElementById("add");
const subtract = document.getElementById("subtract");
const result = document.getElementById("result");

const calculator = new Calculator(1);

add.addEventListener("click", () => {
  result.textContent = calculator.add(+x.value, +y.value).toString();
});

subtract.addEventListener("click", () => {
  result.textContent = calculator.subtract(+x.value, +y.value).toString();
});

interface Person {
  age: number;
  name?: string;
}

const person: Person = {
  age: 25
};

person.name = "Jack";

function sleep(cat: { name: string });
function sleep(cat: { age: number });
function sleep(cat: any) {
  console.log(cat.name);
}

sleep({ name: "" });
sleep({ age: 25 });
// sleep({ date: new Date() });
