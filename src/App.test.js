import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter as Router } from "react-router-dom";

import Home from "./core/Home";

test("renders centixo T shirt store", () => {
  render(
    <Router>
      <Home />
    </Router>
  );
  const linkElement = screen.getByText(/All of T-Shirts zz/i);
  expect(linkElement).toBeInTheDocument();
});
