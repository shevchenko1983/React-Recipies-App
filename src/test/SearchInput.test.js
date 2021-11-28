import React from "react";
import { render, fireEvent } from '@testing-library/react';
import SearchInput from "../components/SearchInput";
import {BrowserRouter} from "react-router-dom";

describe("testing SearchInput component", () => {
   const placeholderText = 'Search some recipie...';

   test("render SearchInput", () => {
       const { getByPlaceholderText } = render(<BrowserRouter><SearchInput/></BrowserRouter>);
       expect(getByPlaceholderText(placeholderText)).toBeInTheDocument();
   });

   test("allow user to add smth to the input", () => {
        const { getByPlaceholderText } = render(<BrowserRouter><SearchInput/></BrowserRouter>);

        fireEvent.change(getByPlaceholderText(placeholderText), {target: {value: 'Beef'}});

        expect(getByPlaceholderText(placeholderText).value).toBe('Beef');
   });
});
