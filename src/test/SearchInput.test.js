import React, {useContext} from "react";
import { render, fireEvent } from '@testing-library/react';
import SearchInput from "../components/SearchInput";
import {BrowserRouter} from "react-router-dom";
import {renderHook} from "@testing-library/react-hooks";
import {AppContext} from "../api/context";

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

    test("allow user to click on the button and send search value to the backend", () => {
        const { getByTestId, getByPlaceholderText } = render(<BrowserRouter><SearchInput/></BrowserRouter>);
        const { result } = renderHook(() => useContext(AppContext));
        //mock context.parseSingleMealData function
        const mockGetMealsBySearch = (result.current.getMealsBySearch = jest.fn());

        fireEvent.click(getByTestId('search-button'));
        const searchingValue = expect(getByPlaceholderText(placeholderText).value);
        expect(mockGetMealsBySearch.mockReturnValueOnce(searchingValue)).toBeTruthy();
    });
});
