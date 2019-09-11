// import * as React from "react";
// console.log(React);
class Calculator {
    // private readonly x: number;
    // constructor(x: number) {
    //   this.x = x;
    // }
    constructor(x) {
        this.x = x;
    }
    add(x, y) {
        return x + y;
    }
    subtract(x, y) {
        return x - y;
    }
}
const x = document.getElementById("x");
const y = document.getElementById("y");
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
const person = {
    age: 25
};
person.name = "Jack";
function sleep(cat) {
    console.log(cat.name);
}
sleep({ name: "" });
sleep({ age: 25 });
// sleep({ date: new Date() });
