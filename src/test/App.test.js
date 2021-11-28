import { render } from '@testing-library/react';
import App from '../App';
import {BrowserRouter} from "react-router-dom";
import React from "react";

test('renders App', () => {
  const { container } = render(<BrowserRouter><App /></BrowserRouter>);
  expect(container).toBeInTheDocument();
});
