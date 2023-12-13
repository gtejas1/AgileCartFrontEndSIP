import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter as Router } from "react-router-dom";

import Home from "./core/Home";

test("Test to check website title", () => {
  render(
    <Router>
      <Home />
    </Router>
  );
  const linkElement = screen.getByText(
    /Welcome to the AgileCart T-shirt store/i
  );
  expect(linkElement).toBeInTheDocument();
});

test("renders centixo T shirt store", () => {
  render(
    <Router>
      <Home />
    </Router>
  );
  const linkElement = screen.getByText(/All of T-Shirts/i);
  expect(linkElement).toBeInTheDocument();
});
