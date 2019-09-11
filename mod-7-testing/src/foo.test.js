const expectExport = require("expect");

test("demo test case", () => {
  console.log("My test");
});

it("another demo test case", () => {
  console.log("My test");
});

test("1 + 1 = 2", () => {
  const sum = 1 + 1;
  expect(sum).toBe(2);
});

test("Objects", () => {
  const o = { x: 1, y: 2 };
  expect(o).toMatchObject({ x: 1 });
});
