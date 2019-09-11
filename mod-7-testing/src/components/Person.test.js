import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Person from "./Person";

afterEach(cleanup);

test("Render the Person", () => {
  const { getByText, getByLabelText, queryByText } = render(<Person />);

  expect(getByLabelText("Firstname:")).toBeInTheDocument();
  expect(getByText("Lastname:")).toBeInTheDocument();
  expect(queryByText("not there:")).not.toBeInTheDocument();
});

test("Can update the name", () => {
  const { getByText, getByLabelText, queryByText } = render(<Person />);

  expect(getByText("FirstName = MAURICE")).toBeInTheDocument();

  fireEvent.change(getByLabelText("Firstname:"), { target: { value: "joe" } });

  expect(getByText("FirstName = JOE")).toBeInTheDocument();
});

test("Can save the data", () => {
  const onSave = jest.fn();

  const { getByText } = render(<Person onSave={onSave} />);

  fireEvent.click(getByText("Save"));

  expect(onSave).toHaveBeenCalled();
});
